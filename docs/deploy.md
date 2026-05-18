# Deploy — semad-web (CEMAD)

Runbook operativo. Complementa el runbook general en
`vibe_coding_studio_v2/01-textos-mejorados/cicd-hostinger-v2.md`.

---

## Arquitectura

| Rama | Entorno | Trigger |
|---|---|---|
| `main` | Production → `cemadclinic.com` | push o PR merge |
| `staging` | Staging → subdominio `[TODO]` | push |

Workflow único: `.github/workflows/deploy.yml` — detecta la rama y usa los
paths/variables del entorno correspondiente.

---

## Pasos manuales (no automatizados)

### 1. Crear rama `staging` y push inicial

```bash
git checkout -b staging
git push -u origin staging
```

Esto dispara el primer deploy a staging (fallará hasta que los Secrets estén
configurados — ver paso 2).

---

### 2. Configurar Secrets en GitHub

Ejecutar cada comando desde el directorio del repo (requiere `gh` autenticado
como `carlosp-11`):

```bash
# Clave SSH privada dedicada para CI
gh secret set SSH_PRIVATE_KEY < ~/.ssh/hostinger_deploy

# Host Hostinger
gh secret set SSH_HOST --body "187.124.60.15"

# Usuario SSH
gh secret set SSH_USER --body "u670959166"

# Puerto SSH
gh secret set SSH_PORT --body "65002"
```

> La clave `~/.ssh/hostinger_deploy` ya está registrada en hPanel.
> Es la clave compartida del studio. Si el proyecto crece, generar una
> clave dedicada por proyecto y registrar la pública en hPanel.

---

### 3. Configurar Variables (no Secrets) en GitHub

Las Variables son visibles en los logs — solo para valores públicos.

```bash
# --- PRODUCCIÓN ---
# Path en Hostinger donde se despliega la build
# [TODO: confirmar con cliente una vez contrate el dominio cemadclinic.com]
gh variable set DEPLOY_PATH_PROD \
  --env production \
  --body "/home/u670959166/domains/cemadclinic.com/public_html"

# URL pública de producción (usada en health check)
gh variable set PUBLIC_SITE_URL \
  --env production \
  --body "https://cemadclinic.com"

# Dominio para Plausible (sin https://)
gh variable set PUBLIC_PLAUSIBLE_DOMAIN \
  --env production \
  --body "cemadclinic.com"

# --- STAGING ---
# [TODO: crear subdominio en hPanel — staging.cemadclinic.com o similar]
# [TODO: confirmar path del subdominio staging]
gh variable set DEPLOY_PATH_STAGING \
  --env staging \
  --body "/home/u670959166/domains/cemadclinic.com/staging.cemadclinic.com/public_html"

gh variable set PUBLIC_SITE_URL \
  --env staging \
  --body "https://staging.cemadclinic.com"

gh variable set PUBLIC_PLAUSIBLE_DOMAIN \
  --env staging \
  --body "staging.cemadclinic.com"
```

> Los valores con `[TODO]` son estimaciones de la estructura típica de
> Hostinger compartido. Verificar en hPanel → File Manager la ruta real
> una vez el dominio esté provisionado.

---

### 4. Crear entornos en GitHub (opcional pero recomendado)

Permite añadir protección: aprobaciones antes de deploy a producción.

```bash
# Crear entorno production con reviewer manual
# GitHub UI: Settings → Environments → New environment → "production"
# Marcar "Required reviewers" y añadir carlosp-11
```

---

### 5. Habilitar permisos para Dependabot

GitHub UI → Settings → Code security:

- Dependabot alerts: ON
- Dependabot security updates: ON
- Dependabot version updates: ON

GitHub UI → Settings → Actions → General:

- Workflow permissions: Read and write
- Allow GitHub Actions to create and approve pull requests: ON

---

### 6. Verificar el primer deploy

```bash
# 1. Health check con hash
curl -s https://staging.cemadclinic.com/health.json | jq .

# 2. HTTP 200 en home
curl -I https://staging.cemadclinic.com/

# 3. Ruta profunda (submarca)
curl -I https://staging.cemadclinic.com/medicina-estetica

# 4. Security headers presentes
curl -I https://staging.cemadclinic.com/ | grep -E "Strict-Transport|X-Frame|X-Content|Referrer"

# 5. Cache inmutable en assets Astro
curl -I https://staging.cemadclinic.com/_astro/<algún-archivo>.css | grep Cache-Control
```

---

### 7. Rollback

**Opción rápida (git revert):**

```bash
# Identificar el commit problemático
git log --oneline -10

# Revertir
git revert <sha>
git push origin main
# → Nuevo deploy en ~3 min con el código anterior
```

**Opción con workflow_dispatch manual:**
Ir a GitHub → Actions → Deploy to Hostinger → Run workflow → elegir rama.

---

### 8. Rotación de la clave SSH

Cuando corresponda rotar la clave del studio (cada 6–12 meses):

```bash
# Generar nueva clave
ssh-keygen -t ed25519 -f ~/.ssh/hostinger_deploy_v2 -N ""

# 1. Añadir nueva pública en hPanel → SSH Keys ANTES de borrar la vieja
# 2. Actualizar Secret en GitHub:
gh secret set SSH_PRIVATE_KEY < ~/.ssh/hostinger_deploy_v2

# 3. Verificar que el próximo deploy funciona
# 4. Eliminar la clave antigua de hPanel
```

---

## DNS records (para cuando el cliente contrate el dominio)

El cliente deberá configurar los siguientes registros en su registrador de
dominio (o en Hostinger si lo transfiere allí):

| Tipo | Nombre | Valor | TTL |
|---|---|---|---|
| A | `@` (cemadclinic.com) | `187.124.60.15` | 3600 |
| A | `www` | `187.124.60.15` | 3600 |
| A | `staging` | `187.124.60.15` | 3600 |
| CNAME | `www` | `cemadclinic.com` | 3600 (alternativa al A de www) |

> Si el cliente activa Cloudflare delante: usar "DNS only" (nube gris)
> durante el setup inicial. El deploy SSH no atraviesa Cloudflare proxy.
> Una vez validado el deploy, se puede activar el proxy para HTTP.

---

## Pendientes bloqueados por cliente

- [ ] Confirmación del dominio definitivo (`cemadclinic.com` o alternativa)
- [ ] Subdominio staging: decidir nombre (`staging.cemadclinic.com` o `dev.cemadclinic.com`)
- [ ] Path real en Hostinger — confirmar tras provisioning en hPanel
- [ ] HTTPS: Let's Encrypt se activa automáticamente en hPanel una vez el DNS apunta al servidor

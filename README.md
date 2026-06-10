# CEMAD — Web (repo `semad-web`)

Web premium de **CEMAD® · Aesthetic Anti-Aging Clinic** (Dra. Abigail Cevallos Madrid), clínica de medicina estética y antiedad en Valencia.

> El repo se llama `semad-web` por el scaffolding inicial; la marca pública es **CEMAD** y el dominio oficial `cemadclinic.com`. Se mantiene el slug técnico (renombrar sería destructivo).

## Entornos

| Entorno | URL | Notas |
|---|---|---|
| **Staging** (default) | https://orange-octopus-603760.hostingersite.com | Subdominio temporal de Hostinger. Validación con la cliente. Destino de deploy por defecto. |
| **Producción** | https://cemadclinic.com *(solo tras OK de lanzamiento)* | Dominio oficial. **No se despliega por defecto.** |

> Política del studio: deploy siempre a staging en dominio temporal; nunca al dominio oficial salvo orden de lanzamiento.
>
> Sector regulado (medicina estética): textos legales y claims sanitarios requieren revisión antes de producción.

## Stack

Astro 6 (estático) · Tailwind 4 · Preact (islas, compat false) · gestor **pnpm** (el CI usa `pnpm install`) · deploy a Hostinger por GitHub Actions. Tipografías: Playfair Display + Montserrat (sustitutos de Erstoria/Gotham hasta licencia web) + Corinthia.

## Puesta en marcha

```bash
pnpm install
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción a dist/
pnpm preview    # servir el build localmente
```

> Lighthouse/performance **siempre sobre el build** (`pnpm build && pnpm preview`), nunca el dev server.

## Estructura del repo

- `context/` — contexto/gobierno: [`CONTEXT-project.md`](./context/CONTEXT-project.md) (memoria, léelo antes de tocar nada), `design-system.md`, planes (content/seo/images), `implementation-checklist.md`, `risks.md`, `deploy.md`.
- `client-input/` — material de la cliente.
- `src/` — código Astro (islas Preact, tokens en `src/shared/styles/theme.css`).

## Deploy

CI/CD a Hostinger vía GitHub Actions (`.github/workflows/deploy.yml`). Construye y sincroniza `dist/` al hosting.

- **Pasar a producción** (solo bajo orden explícita): apuntar el deploy/dominio a `cemadclinic.com` y revisar indexación + textos legales sanitarios.
- **Rollback:** `git revert <sha> && git push` (re-dispara el deploy con el estado anterior).

---

Desarrollado por [Xpandex](https://xpandex.es).

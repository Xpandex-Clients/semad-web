/** @jsxImportSource preact */
import { useEffect, useRef, useState } from "preact/hooks";

type NavItem = { label: string; href: string };
type Submarca = {
  label: string;
  shortLabel: string;
  href: string;
  color: string;
  shortClaim: string;
};

interface Props {
  primaryNav: NavItem[];
  submarcas: Submarca[];
  legalNav: NavItem[];
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    instagram: string;
  };
}

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function MobileMenu({
  primaryNav,
  submarcas,
  legalNav,
  contact,
}: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousActive = useRef<HTMLElement | null>(null);

  // Lock body scroll + focus trap + Esc + restore focus
  useEffect(() => {
    if (!open) return;

    previousActive.current = document.activeElement as HTMLElement | null;
    document.documentElement.style.overflow = "hidden";

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusables = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));

    // Focus inicial al primer item
    const first = focusables()[0];
    first?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.documentElement.style.overflow = "";
      previousActive.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        class="lg:hidden inline-flex items-center justify-center size-11 rounded-[var(--radius-xs)] text-[var(--color-ink)] hover:bg-[var(--color-paper-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-dark)]"
      >
        {open ? <IconClose /> : <IconMenu />}
      </button>

      {open && (
        <div
          class="fixed inset-0 z-50 lg:hidden"
          aria-hidden={!open}
        >
          {/* Backdrop */}
          <div
            class="absolute inset-0 bg-[var(--color-ink)]/40 backdrop-blur-[2px] motion-safe:animate-fadein"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div
            ref={dialogRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
            class="absolute inset-y-0 right-0 w-[min(420px,90vw)] bg-[var(--color-paper)] shadow-[var(--shadow-modal)] flex flex-col motion-safe:animate-slidein"
          >
            <div class="flex items-center justify-between px-4 py-3 border-b border-[var(--color-paper-soft)]">
              <span class="font-[family-name:var(--font-display)] text-lg">Menú</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                class="size-11 inline-flex items-center justify-center rounded-[var(--radius-xs)] hover:bg-[var(--color-paper-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-dark)]"
              >
                <IconClose />
              </button>
            </div>

            <nav aria-label="Navegación móvil" class="flex-1 overflow-y-auto px-2 py-3">
              <ul class="list-none p-0 m-0">
                {primaryNav.map((item) => (
                  <li>
                    <a
                      href={item.href}
                      class="flex items-center min-h-[48px] px-3 rounded-[var(--radius-xs)] text-[var(--text-base)] font-medium hover:bg-[var(--color-paper-soft)]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <p class="mt-5 px-3 text-xs uppercase tracking-[0.12em] text-[var(--color-mute)]">
                Especialidades
              </p>
              <ul class="list-none p-0 m-0 mt-1">
                {submarcas.map((sub) => (
                  <li>
                    <a
                      href={sub.href}
                      class="flex items-center gap-3 min-h-[48px] px-3 rounded-[var(--radius-xs)] hover:bg-[var(--color-paper-soft)]"
                      onClick={() => setOpen(false)}
                    >
                      <span
                        class="size-2.5 rounded-full shrink-0"
                        style={`background:${sub.color}`}
                        aria-hidden="true"
                      />
                      <span class="flex flex-col">
                        <span class="text-sm font-medium">{sub.shortLabel}</span>
                        <span class="text-xs text-[var(--color-mute)]">{sub.shortClaim}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div class="border-t border-[var(--color-paper-soft)] p-4 space-y-3">
              <a
                href={`tel:${contact.phone}`}
                class="flex items-center justify-center min-h-[48px] rounded-[var(--radius-sm)] bg-[var(--color-gold)] text-[var(--color-paper)] font-medium"
                onClick={() => setOpen(false)}
              >
                Llamar {contact.phoneDisplay}
              </a>
              <div class="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center min-h-[44px] rounded-[var(--radius-sm)] border border-[var(--color-mute)] text-sm"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp
                </a>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center min-h-[44px] rounded-[var(--radius-sm)] border border-[var(--color-mute)] text-sm"
                  onClick={() => setOpen(false)}
                >
                  Instagram
                </a>
              </div>
              <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-mute)] pt-1 list-none p-0 m-0">
                {legalNav.map((item) => (
                  <li>
                    <a
                      href={item.href}
                      class="hover:text-[var(--color-ink)]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
      />
    </svg>
  );
}
function IconClose() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
      />
    </svg>
  );
}

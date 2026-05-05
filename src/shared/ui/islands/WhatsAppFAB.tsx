/** @jsxImportSource preact */
import { useEffect, useState } from "preact/hooks";

interface Props {
  phone: string;
  /** Texto pre-rellenado en WhatsApp. */
  prefilledMessage?: string;
  /** Posición del FAB (default: right). */
  side?: "right" | "left";
  /** Px de scroll antes de mostrar (evita pisar el hero). */
  showAfterScroll?: number;
}

const STORAGE_KEY = "cemad-fab-dismissed";

export default function WhatsAppFAB({
  phone,
  prefilledMessage = "Hola, me gustaría reservar una consulta en CEMAD.",
  side = "right",
  showAfterScroll = 320,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setDismissed(true);
      return;
    }

    function onScroll() {
      setVisible(window.scrollY > showAfterScroll);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterScroll]);

  if (dismissed) return null;

  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(prefilledMessage)}`;

  function dismiss(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  }

  const sideClass = side === "right" ? "right-4 sm:right-6" : "left-4 sm:left-6";

  return (
    <div
      class={[
        "fixed bottom-4 sm:bottom-6 z-40 flex items-center gap-2",
        sideClass,
        "transition-[opacity,transform] duration-300 ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
      aria-hidden={!visible}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp a CEMAD"
        class="group inline-flex items-center gap-2 min-h-[56px] px-4 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-modal)] hover:scale-[1.02] active:scale-[0.98] transition-transform focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--color-gold-dark)]"
      >
        <IconWhatsApp />
        <span class="hidden sm:inline text-sm font-medium pr-1">WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Ocultar botón de WhatsApp"
        class="hidden sm:inline-flex items-center justify-center size-7 rounded-full bg-white/90 text-[var(--color-mute)] shadow-[var(--shadow-card)] hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-dark)]"
        title="Ocultar durante esta sesión"
      >
        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
          <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
      <path d="M19.05 4.91A10 10 0 0 0 4.05 18.07L3 22l4.05-1.06A10 10 0 1 0 19.05 4.91Zm-7.05 16a8 8 0 0 1-4.07-1.11l-.29-.17-2.4.63.64-2.34-.19-.3A8 8 0 1 1 12 20.91Zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.55 6.55 0 0 1-3.27-2.86c-.25-.43.25-.4.71-1.33a.45.45 0 0 0-.02-.42c-.06-.12-.54-1.3-.74-1.78s-.4-.4-.54-.41h-.46a.88.88 0 0 0-.64.3 2.69 2.69 0 0 0-.84 2c0 1.18.86 2.32.98 2.48s1.7 2.6 4.13 3.65a4.66 4.66 0 0 0 2.83.6 2.49 2.49 0 0 0 1.64-1.16 2 2 0 0 0 .14-1.16c-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

/** @jsxImportSource preact */
import { useId, useState } from "preact/hooks";

export type FaqItem = { q: string; a: string };

interface Props {
  items: FaqItem[];
  /** Si true, sólo un item abierto a la vez (default true). */
  single?: boolean;
}

export default function FaqAccordion({ items, single = true }: Props) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const baseId = useId();

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(single ? [] : prev);
      if (prev.has(i)) {
        if (single) return new Set();
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  }

  return (
    <ul class="list-none p-0 m-0 divide-y divide-[var(--color-paper-soft)]">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <li>
            <h3 class="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                class="w-full flex items-center justify-between gap-4 text-left py-5 min-h-[56px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-dark)] rounded-[var(--radius-xs)]"
              >
                <span class="font-[family-name:var(--font-display)] text-lg leading-snug text-[var(--color-ink)]">
                  {item.q}
                </span>
                <span
                  class={[
                    "shrink-0 grid place-items-center size-7 rounded-full border border-[var(--color-mute)]/40 text-[var(--color-gold-dark)]",
                    "transition-transform duration-200",
                    isOpen ? "rotate-45" : "rotate-0",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 12 12" width="12" height="12">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              class="pb-5 pr-10 text-[var(--color-mute)] leading-relaxed"
            >
              {item.a}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

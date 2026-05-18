/** @jsxImportSource preact */
import { useEffect, useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  /** Etiqueta semántica (default div). */
  as?: "div" | "section" | "li" | "article";
  /** Margen top antes de revelar (default 0px). */
  rootMargin?: string;
  /** Delay extra en ms para escalonar varias instancias. */
  delay?: number;
  class?: string;
}

export default function Reveal({
  children,
  as: Tag = "div",
  rootMargin = "0px 0px -10% 0px",
  delay = 0,
  class: className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      el.dataset.reveal = "visible";
      return;
    }

    // JS-enhanced reveal: el HTML SSR muestra el contenido sin opacity:0.
    // Solo escondemos cuando JS ya está disponible y puede revelar al scroll.
    el.dataset.reveal = "pending";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (delay > 0) {
              window.setTimeout(() => {
                target.dataset.reveal = "visible";
              }, delay);
            } else {
              target.dataset.reveal = "visible";
            }
            io.unobserve(target);
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, delay]);

  return (
    <Tag ref={ref as never} class={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}

import type { ReactNode } from "react";

const MARK = "™";

/** Renders a locked slogan with the trademark mark set as a superscript. */
export function TrademarkText({ text }: { text: string }): ReactNode {
  const parts = text.split(MARK);
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <sup className="text-[0.45em] leading-none">{MARK}</sup>
      ) : null}
    </span>
  ));
}

/**
 * cssVars.ts
 *
 * Converts ChatWidget props into a CSS custom property map that is applied
 * as inline `style` on the root element. Every child component inherits
 * these variables through the cascade — no prop drilling needed.
 */

type ResolvedTheme = "light" | "dark";

interface CssVarOptions {
  primaryColor: string;
  theme: ResolvedTheme;
}

/**
 * Returns a CSSProperties-compatible object with --ai-* variables derived
 * from the widget props. React accepts unknown CSS vars in `style` as-is.
 */
export function buildCssVars({
  primaryColor,
}: CssVarOptions): Record<string, string> {
  const fg = getContrastForeground(primaryColor);

  return {
    "--ai-primary": primaryColor,
    "--ai-primary-fg": fg,
    "--ai-user-bubble": primaryColor,
  } as Record<string, string>;
}

/**
 * Returns either #ffffff or #111827 based on the luminance of the given
 * hex color, ensuring WCAG AA contrast on user message bubbles and buttons.
 *
 * Formula: relative luminance per WCAG 2.1 §1.4.3
 */
function getContrastForeground(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#ffffff";

  const [r, g, b] = rgb.map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });

  // Relative luminance
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Contrast ratio against white (1.0) vs near-black (0.05)
  const contrastWhite = (1.0 + 0.05) / (L + 0.05);
  const contrastDark  = (L + 0.05) / (0.05 + 0.05);

  return contrastWhite >= contrastDark ? "#ffffff" : "#111827";
}

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace(/^#/, "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;

  if (full.length !== 6) return null;

  const int = parseInt(full, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}
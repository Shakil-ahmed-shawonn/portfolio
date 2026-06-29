/**
 * @file lib/utils.ts
 * @description Utility helpers shared across components.
 */

/**
 * Merges Tailwind class names, filtering falsy values.
 * Lightweight alternative to clsx/tailwind-merge for this project size.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

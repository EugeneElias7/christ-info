import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ─── CLASSNAME UTILITY ───────────────────────────────────────────────────────

/**
 * Merges Tailwind CSS class names safely.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 *
 * Usage:
 *   cn('px-4 py-2', isActive && 'bg-maroon', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────

/**
 * Smoothly scrolls to a section by its element ID.
 * Accounts for the fixed navbar height (64px).
 *
 * Usage:
 *   scrollToSection('navigation-funnel')
 */
export function scrollToSection(id: string, offset: number = 64): void {
  const element = document.getElementById(id);
  if (!element) return;

  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: elementTop - offset,
    behavior: 'smooth',
  });
}

// ─── FOCUS TRAP HELPER ───────────────────────────────────────────────────────

/**
 * Returns all focusable elements within a container.
 * Used by the mobile menu to trap focus when open.
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll<HTMLElement>(selectors));
}

// ─── STRING UTILITIES ────────────────────────────────────────────────────────

/**
 * Truncates a string to a maximum length, appending an ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + '…';
}

/**
 * Converts a string to kebab-case for use as HTML IDs.
 * "Department of CS" → "department-of-cs"
 */
export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

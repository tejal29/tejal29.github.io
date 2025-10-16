export function createPageUrl(pageName: string): string {
  // For HashRouter, we just need the page name without additional hash
  return `/${pageName}`;
}

export function cn(...inputs: any[]) {
  // Simple class name utility - you can replace with clsx/tailwind-merge later
  return inputs.filter(Boolean).join(' ');
}

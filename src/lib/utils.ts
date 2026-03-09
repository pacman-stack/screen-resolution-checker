export function formatResolution(width: number, height: number): string {
  return `${width} × ${height}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

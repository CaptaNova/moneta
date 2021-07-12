export function createDownloadFileName(): string {
  const date = new Date().toISOString().substring(0, 10).replace(/-/g, "");
  return `Moneta-Vermögensbilanz-${date}.json`;
}

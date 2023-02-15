export default function formatDate(dateToFormat: Date | undefined) {
  if (!dateToFormat) return;
  const date = new Date(dateToFormat);
  return date.toLocaleDateString('pt-br');
}

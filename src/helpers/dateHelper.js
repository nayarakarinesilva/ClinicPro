export function formatFullDate(date = new Date()) {
  const dateFormat = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  const firstLetter = dateFormat.charAt(0).toLocaleUpperCase();
  return firstLetter + dateFormat.slice(1);
}

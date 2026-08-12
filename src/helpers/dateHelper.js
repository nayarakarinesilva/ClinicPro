export function formatFullDate(date = new Date()) {
  const dateFormat = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

  const dateParts = dateFormat.split(' ');
  const weekday = dateParts[0];
  const month = dateParts[3];

  const formattedWeekday =
    weekday.charAt(0).toUpperCase() + dateParts[0].slice(1);

  const formattedMonth = month.charAt(0).toUpperCase() + dateParts[3].slice(1);

  dateParts[0] = formattedWeekday;
  dateParts[3] = formattedMonth;

  return dateParts.join(' ');
}

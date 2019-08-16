export function getYearFromContent(date) {
  let year = Date.parse(date);
  return (year = new Date(date).getFullYear());
}
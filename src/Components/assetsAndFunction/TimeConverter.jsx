export const TimeConverter = (timedigit, timezone) => {
  const date = new Date((timedigit + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');

  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayName = daysOfWeek[date.getUTCDay()];

  return {
    time: `${formattedHours}:${minutes}:${seconds} ${period}`,
    date: `${year}-${month}-${day}`,
    dayName: dayName,
  };
};

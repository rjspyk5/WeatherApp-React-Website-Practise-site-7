export const currentTimeCalculator = timezoneOffset => {
  const currentUTCDate = new Date();
  const localOffset = currentUTCDate.getTimezoneOffset() * 60; // Convert minutes to seconds
  const offsetInSeconds = timezoneOffset + localOffset;

  const currentDateTime = new Date(
    currentUTCDate.getTime() + offsetInSeconds * 1000
  );

  const optionsDate = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  };

  const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',

    hour12: true,
    timeZone: 'UTC',
  };

  const date = currentDateTime.toLocaleDateString('en-US', optionsDate);
  const time = currentDateTime.toLocaleTimeString('en-US', optionsTime);
  const dayName = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    timeZone: 'UTC',
  });

  return {
    date: date,
    dayName: dayName,
    time: time,
  };
};

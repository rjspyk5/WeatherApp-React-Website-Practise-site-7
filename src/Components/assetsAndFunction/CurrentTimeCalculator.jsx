export const currentTimeCalculator = (timezoneOffset, lat, lon) => {
  const timezoneInHour = timezoneOffset / 3600;
  const currentUTCDate = new Date();
  const datee = new Date();

  datee.setHours(
    datee.getHours() + datee.getTimezoneOffset() / 60 + timezoneInHour
  );
  datee.setMinutes(
    datee.getMinutes() + datee.getTimezoneOffset() / 60 + timezoneInHour * 60
  );
  console.log(datee.toTimeString());

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

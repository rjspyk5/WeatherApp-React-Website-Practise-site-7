export const twelvehoursTimeFormater = timearray => {
  const Onlytime = timearray && timearray.map(el => el.dt_txt.slice(10));
  const formatedTime =
    Onlytime &&
    Onlytime.map(el => {
      let format = el.slice(0, 3) > 12 ? 'AM' : 'PM';
      let time = el.slice(0, 3);
      if (time > 12) {
        time = el.slice(0, 3) - 12;
      }
      if (time == 0) {
        format = 'PM';
        time = 12;
      }
      const formatedData = `${time}:00 ${format}`;
      return formatedData;
    });
  return formatedTime;
};

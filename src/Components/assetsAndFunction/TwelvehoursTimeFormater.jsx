export const twelvehoursTimeFormater = timearray => {
  timearray.map(el => el.dt_txt.slice(10));
};

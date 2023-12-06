export const dataCovertor = (currentWeatherMainData, Celcius) => {
  let data;
  const Converter = input => {
    const holder = input - 273.15;
    return Math.round(holder);
  };

  let KelvinData = [];

  if (currentWeatherMainData != undefined) {
    const holder = Object.entries(currentWeatherMainData).map(value => {
      KelvinData = [...KelvinData, { [value[0]]: Math.round(value[1]) + 'K' }];

      return { [value[0]]: value[1] };
    });
    data = KelvinData;

    if (Celcius) {
      const holder2 = holder.map(valu => {
        const value = Converter(Object.values(valu)[0]);
        const key = Object.keys(valu)[0];

        return { [key]: value + '°C' };
      });
      data = holder2;
    }
  }

  return data;
};

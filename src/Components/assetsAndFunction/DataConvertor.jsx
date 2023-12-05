export const dataCovertor = (currentWeatherMainData, Celcius) => {
  let data;
  const Converter = input => {
    return ((input - 32) * 5) / 9;
  };

  if (currentWeatherMainData != undefined) {
    const holder = Object.entries(currentWeatherMainData).map(value => {
      return { [value[0]]: value[1] };
    });
    data = holder;
    if (Celcius) {
      const holder2 = holder.map(valu => {
        const value = Converter(Object.values(valu)[0]);
        const key = Object.keys(valu)[0];

        return { [key]: value };
      });
      data = holder2;
    }
  }

  return data;
};

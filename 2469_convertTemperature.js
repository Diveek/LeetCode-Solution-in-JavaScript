const convertTemperature = function (celsius) {
  let Kelvin = celsius + 273.15;
  let Fahrenheit = celsius * 1.8 + 32.0;

  const result = [Kelvin, Fahrenheit];
  console.log(result);
};

convertTemperature(36.5);

// Note that:
// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

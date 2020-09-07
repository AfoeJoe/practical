export default {
  getTemperature: () => {
    return fetch('/temperature')
      .then((res) => res.json)
      .then((data) => data);
  },
  getHumidity: () => {
    return fetch('/humidity')
      .then((res) => res.json)
      .then((data) => data);
  },
  touch: () => {
    return fetch('/temperature')
      .then((res) => res.json)
      .then((data) => data);
  },
};

import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://dataservice.accuweather.com";

//this will catch all responses with reject.
axios.interceptors.response.use(null, (error) => {
  toast.configure();
  const expectedError = error.response && error.response.status >= 403;
  if (expectedError) toast.error("An unexpected error occurrred.");
  return Promise.reject(error);
});

const apikey = "KQweRkDR2YCHe1IDtsLQQbvhNdIt4mih";
//pRtGG5DvSKEjFjmvBj7GAIBa0Ze3EcMw
//KQweRkDR2YCHe1IDtsLQQbvhNdIt4mih
//5IrGIcM0N6wJOcSJ9pQGENFnMEZi2ytW
//9q5ck7fLGkuaeRDQGL9ANZGPAowGBnk7

export function locationAutocomplete(q, s) {
  return axios.get(
    `/locations/v1/cities/autocomplete?apikey=${apikey}&q=${q}&language=en`,
    {
      cancelToken: s.token,
    }
  );
}

export function getCurrentWeather(key) {
  return axios.get(
    `/currentconditions/v1/${key}?apikey=${apikey}&language=en&details=false`
  );
}

export function get5DaysForecast(key) {
  return axios.get(
    `/forecasts/v1/daily/5day/${key}?apikey=${apikey}&language=en&details=false&metric=true`
  );
}

const weatherService = {
  locationAutocomplete,
  getCurrentWeather,
  get5DaysForecast,
};

export default weatherService;

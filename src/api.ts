import {Country} from "./types";

export default {
  search: (name: Country["name"]) =>
    fetch(`https://restcountries.eu/rest/v2/name/${name}`).then((res) => res.json()),
  list: () => fetch(`https://restcountries.eu/rest/v2/all`).then((res) => res.json()),
  fetch: (name: Country["name"]) =>
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((countries) => countries[0]),
};

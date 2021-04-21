import client from "./client";
import {Country} from "./types";

export default {
  search: (name?: Country["name"]): Promise<Country[]> =>
    fetch(`https://restcountries.eu/rest/v2${name ? `/name/${name}` : `/all`}`)
      .then((res) => res.json())
      .then((countries: Country[]) => {
        countries.forEach((country) => {
          client.setQueryData(country.name, country);
        });

        return countries;
      }),
  fetch: (name: Country["name"]): Promise<Country> =>
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((countries) => countries[0]),
};

import React from "react";
import {useQuery} from "react-query";
import {Grid, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import api from "../api";
import {Country} from "../types";
import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";

const SearchScreen: React.FC = () => {
  const {data, isLoading, isError} = useQuery<Country[]>("all", api.list);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || isError) {
    return <Text>Something failed</Text>;
  }

  return (
    <Grid gridGap={12} templateColumns="repeat(auto-fill, minmax(320px, 1fr))">
      {data.map((country) => (
        <Link key={country.name} to={`/${country.name}`}>
          <CountryCard country={country} />
        </Link>
      ))}
    </Grid>
  );
};

export default SearchScreen;

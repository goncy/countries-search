import React from "react";
import {useQuery} from "react-query";
import {Grid, Stack, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {SearchIcon} from "@chakra-ui/icons";

import api from "../api";
import {Country} from "../types";
import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";
import DebouncedInput from "../components/DebouncedInput";

const SearchScreen: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  const {data, isLoading} = useQuery<Country[]>(query, () =>
    query ? api.search(query) : api.list(),
  );

  return (
    <Stack spacing={6}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputLeftElement>
        <DebouncedInput
          paddingLeft={10}
          placeholder="Country name"
          type="text"
          onChange={(value) => setQuery(value)}
        />
      </InputGroup>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid gridGap={12} templateColumns="repeat(auto-fill, minmax(320px, 1fr))">
          {data?.map((country) => (
            <Link key={country.name} to={`/${country.name}`}>
              <CountryCard country={country} />
            </Link>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default SearchScreen;

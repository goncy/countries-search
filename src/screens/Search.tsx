import React from "react";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";
import {Grid, Stack, InputGroup, InputLeftElement, Text, Button} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

import api from "../api";
import {Country} from "../types";
import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";
import DebouncedInput from "../components/DebouncedInput";

const SearchScreen: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  const {data, isLoading, isError} = useQuery<Country[]>(query, () => api.search(query));
  const [limit, setLimit] = React.useState<number>(10);

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
      ) : isError ? (
        <Text>Something failed</Text>
      ) : !data ? (
        <Text>No data found</Text>
      ) : (
        <Stack spacing={6}>
          <Grid gridGap={12} templateColumns="repeat(auto-fill, minmax(320px, 1fr))">
            {data.slice(0, limit).map((country) => (
              <Link key={country.name} to={`/${country.name}`}>
                <CountryCard country={country} />
              </Link>
            ))}
          </Grid>
          {limit < data.length && (
            <Button alignSelf="center" onClick={() => setLimit((limit) => limit + 10)}>
              Load more
            </Button>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default SearchScreen;

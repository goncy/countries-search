import React from "react";
import {Button, Stack, Text, Image, Grid} from "@chakra-ui/react";
import {ArrowLeftIcon} from "@chakra-ui/icons";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";

import api from "../api";
import {Country} from "../types";
import Spinner from "../components/Spinner";

interface Props {
  match: {
    params: {
      name: string;
    };
  };
}

const DetailsScreen: React.FC<Props> = ({
  match: {
    params: {name},
  },
}) => {
  const {data, isLoading, isError} = useQuery<Country>(name, () => api.fetch(name));

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || isError) {
    return <Text>Something failed</Text>;
  }

  return (
    <Stack spacing={6}>
      <Link to="/">
        <Button alignSelf="flex-start" leftIcon={<ArrowLeftIcon />} width="auto">
          Back
        </Button>
      </Link>
      <Stack direction={{base: "column", sm: "row"}} spacing={12}>
        <Image maxWidth="3xl" src={data.flag} />
        <Stack spacing={6}>
          <Text fontSize="2xl" fontWeight="500">
            {data.name}
          </Text>
          <Grid gridGap={3} templateColumns="repeat(auto-fill, minmax(320px, 1fr))">
            <Text>
              <b>Native name:</b> {data.nativeName}
            </Text>
            <Text>
              <b>Population:</b> {data.population}
            </Text>
            <Text>
              <b>Region:</b> {data.region}
            </Text>
            <Text>
              <b>Sub region:</b> {data.subregion}
            </Text>
            <Text>
              <b>Capital:</b> {data.capital}
            </Text>
            <Text>
              <b>Top level domain:</b> {data.topLevelDomain.join(", ")}
            </Text>
            <Text>
              <b>Currencies:</b> {data.currencies.map((currency) => currency.name).join(",")}
            </Text>
            <Text>
              <b>Languages:</b> {data.languages.map((language) => language.name).join(", ")}
            </Text>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;

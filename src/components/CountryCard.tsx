import React from "react";
import {Stack, Image, Text, useColorModeValue} from "@chakra-ui/react";

import {Country} from "../types";

interface Props {
  country: Country;
}

const CountryCard: React.FC<Props> = ({country}) => {
  const background = useColorModeValue("white", "gray.700");

  return (
    <Stack key={country.name} backgroundColor={background} boxShadow="lg">
      <Image height={64} objectFit="cover" src={country.flag} width="100%" />
      <Stack padding={4}>
        <Text fontSize="lg" fontWeight="500">
          {country.name}
        </Text>
        <Stack fontSize="xs" spacing={1}>
          <Text>
            <b>Population</b>: {country.population}
          </Text>
          <Text>
            <b>Region</b>: {country.region}
          </Text>
          <Text>
            <b>Capital</b>: {country.capital}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CountryCard;

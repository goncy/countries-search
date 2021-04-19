import React from "react";
import {Button, Container, Stack, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";

const Layout: React.FC = ({children}) => {
  const {colorMode, toggleColorMode} = useColorMode();
  const background = useColorModeValue("white", "gray.700");

  return (
    <Stack spacing={0}>
      <Stack backgroundColor={background} boxShadow="lg">
        <Container
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          maxWidth="container.xl"
          paddingY={4}
        >
          <Link to="/">
            <Text fontSize={{base: "xl", sm: "2xl"}} fontWeight="500">
              Where in the world?
            </Text>
          </Link>
          <Button
            leftIcon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            size="sm"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? "Light" : "Dark"} mode
          </Button>
        </Container>
      </Stack>
      <Container alignSelf="center" maxWidth="container.xl" paddingY={6}>
        {children}
      </Container>
    </Stack>
  );
};

export default Layout;

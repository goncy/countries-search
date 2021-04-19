import React from "react";
import {Box, CircularProgress} from "@chakra-ui/react";

const Spinner: React.FC = () => {
  return (
    <Box textAlign="center">
      <CircularProgress isIndeterminate alignSelf="center" color="primary.500" />
    </Box>
  );
};

export default Spinner;

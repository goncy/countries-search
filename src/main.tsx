import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

import App from "./app";
import theme from "./theme";
import client from "./client";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={client}>
          <ReactQueryDevtools />
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

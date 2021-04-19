import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Layout from "./layout";
import DetailsScreen from "./screens/Details";
import SearchScreen from "./screens/Search";

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact component={SearchScreen} path="/" />
        <Route component={DetailsScreen} path="/:name" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;

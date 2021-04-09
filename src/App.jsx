import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import LeftPane from "./components/LeftPane";

import store from "./redux/store";

import "../src/styles/App.scss";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <Router>
            <LeftPane />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
              <Route path="/login" component={Login} />
            </Switch>
          </Router>
        </Provider>
      </ChakraProvider>
    </>
  );
};

export default App;

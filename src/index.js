import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MantineProvider } from "@mantine/core";
import AppRouter from "./router/AppRouter";
import reducers from "./reducers";

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
      <AppRouter />
    </MantineProvider>
  </Provider>,
  document.getElementById("root")
);

import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import reducers from "./reducers";
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Context/>
  </Provider>,
  document.getElementById("root")
);

export default function Context() {
    const [colorScheme, setColorScheme] = useState('light');
    const toggleColorScheme = (value) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
    return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles>
          <AppRouter />
        </MantineProvider>
      </ColorSchemeProvider>
    
    );
  }


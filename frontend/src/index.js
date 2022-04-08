import React, {useState} from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

ReactDOM.render(
    <Context />,
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


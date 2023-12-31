import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { darkTheme, lightTheme } from "../themes";
import UIProvider from "../context/ui/UIProvider";
import EntriesProvider from "../context/entries/EntriesProvider";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}

export default MyApp;

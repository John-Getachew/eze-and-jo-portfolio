import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import Layout from "../components/layout";
import useDrawerContextValues, {
  DrawerContext,
} from "../contexts/drawer-context";
function MyApp({ Component, pageProps }) {
  const drawerContextValue = useDrawerContextValues();
  return (
    <ThemeProvider theme={theme}>
      <DrawerContext.Provider value={drawerContextValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DrawerContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;

import { useEffect } from "react";
import "styles/globals.scss";
import "react-multi-carousel/lib/styles.css";
import GlobalLayout from "../components/layouts/global-layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("APP INIT");
  }, []);

  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;

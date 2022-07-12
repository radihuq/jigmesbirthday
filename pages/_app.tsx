import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/theme.bundle.css";
import "../assets/css/libs.bundle.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;

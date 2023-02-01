import type { AppProps } from "next/app";
import "../styles/global.scss";

function Dashboard({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Dashboard;

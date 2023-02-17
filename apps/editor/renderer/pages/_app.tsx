import type { AppProps } from "next/app";
import "../styles/global.scss";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function Dashboard({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default Dashboard;

import { TrackingHeadScript } from "@phntms/next-gtm";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TrackingHeadScript id="G-S5XCVBLJ1X" isGTM="true"/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

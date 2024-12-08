import { TrackingHeadScript } from "@phntms/next-gtm";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics (GA4)
    if (typeof window !== "undefined") {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.dataLayer = window.dataLayer || [];
      window.gtag("js", new Date());

      // Replace with your GA4 Measurement ID
      window.gtag("config", "G-S5XCVBLJ1X"); // Use your GA4 measurement ID
    }
  }, []);
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S5XCVBLJ1X"
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

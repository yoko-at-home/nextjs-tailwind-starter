import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { GoogleAnalytics } from "src/components/GoogleAnalytics";
import {usePageView} from "src/hooks/usePageView";

const MyApp = (props: AppProps) => {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <props.Component {...props.pageProps} />
    </>
  );
};

export default MyApp;

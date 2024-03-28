import "@/styles/globals.css";
import "@/styles/loader.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

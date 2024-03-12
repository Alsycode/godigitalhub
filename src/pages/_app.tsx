import React, { Suspense } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.css";

// custom icons
import "public/icons/glyphter/css/xpovio.css";

// main scss
import "@/styles/main.scss";
import { DataProvider } from "../components/context/dataContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LTXG19T867`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LTXG19T867', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
    <Suspense fallback={<div>Loading...</div>}>
      <DataProvider>
      <Component {...pageProps} />
      </DataProvider>
    </Suspense>
 </>

  );
}

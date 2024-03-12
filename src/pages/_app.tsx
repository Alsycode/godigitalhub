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
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
  />

  <Script strategy="lazyOnload">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
      page_path: window.location.pathname,
      
![image](https://cdn.sanity.io/images/dgsq0x0m/production/61f24596fb210134e5df6a1dfa285de0f24791cc-1549x601.png?w=450)});
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

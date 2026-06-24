"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ThemeWrapper({ children }: any) {
  useEffect(() => {
    // optional: initialize plugins here
  }, []);

  return (
    <>
      {children}

      <Script src="/js/jquery-1.11.3.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-ui.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/modernizr.custom.js" strategy="beforeInteractive" />


        <Script src="/assets/rendro-easy-pie-chart/dist/jquery.easypiechart.min.js" strategy="afterInteractive" />
        <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.easypiechart.min.js" strategy="afterInteractive" />


        <Script src="/assets/loader/js/classie.js" strategy="afterInteractive" />
        <Script src="/assets/loader/js/pathLoader.js" strategy="afterInteractive" />
        <Script src="/assets/loader/js/main.js" strategy="afterInteractive" />

        <Script src="/assets/switcher/js/switcher.js" strategy="afterInteractive" />


        <Script src="/assets/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />


        <Script src="/assets/isotope/jquery.isotope.min.js" strategy="afterInteractive" />

        <Script src="/js/jquery.smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.placeholder.min.js" strategy="afterInteractive" />
        <Script src="/js/smoothscroll.min.js" strategy="afterInteractive" />
        <Script src="/js/theme.js" strategy="afterInteractive" />
    </>
  );
}
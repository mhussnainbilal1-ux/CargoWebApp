import Script from "next/script";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Trans Cargo",
  description: "Cargo logistics website",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="css/master.css" rel="stylesheet" />


        <link rel="stylesheet" id="switcher-css" type="text/css" href="assets/switcher/css/switcher.css" media="all" />
        <link rel="alternate stylesheet" type="text/css" href="assets/switcher/css/color1.css" title="color1" media="all" data-default-color="true" />
        <link rel="alternate stylesheet" type="text/css" href="assets/switcher/css/color2.css" title="color2" media="all" />
        <link rel="alternate stylesheet" type="text/css" href="assets/switcher/css/color3.css" title="color3" media="all" />
        <link rel="alternate stylesheet" type="text/css" href="assets/switcher/css/color4.css" title="color4" media="all" />
        <link rel="alternate stylesheet" type="text/css" href="assets/switcher/css/color5.css" title="color5" media="all" />
        <link rel="alternate stylesheet" type="text/css" href="assets/switcher/css/color6.css" title="color6" media="all" />
      </head>

      <body data-scrolling-animations="true">
        <Header />
        
        {children}
        <Toaster position="top-right" />
        <Footer />

        <Script src="/js/jquery-1.11.3.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-ui.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/modernizr.custom.js" strategy="beforeInteractive" />


        <Script src="/assets/rendro-easy-pie-chart/dist/jquery.easypiechart.min.js" strategy="afterInteractive" />
        <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.easypiechart.min.js" strategy="afterInteractive" />


        <Script src="/assets/loader/js/classie.js" strategy="afterInteractive" />
        <Script src="/assets/loader/js/pathLoader.js" strategy="afterInteractive" />
        {/* <Script src="/assets/loader/js/main.js" strategy="afterInteractive" /> */}

        <Script src="/assets/switcher/js/switcher.js" strategy="afterInteractive" />


        <Script src="/assets/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />


        <Script src="/assets/isotope/jquery.isotope.min.js" strategy="afterInteractive" />

        <Script src="/js/jquery.smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.placeholder.min.js" strategy="afterInteractive" />
        <Script src="/js/smoothscroll.min.js" strategy="afterInteractive" />
        <Script src="/js/theme.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
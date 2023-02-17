import "@/styles/globals.scss";
/*put global components here!*/

import Navbar from "@/components/site_layout/Navbar";
import Footer from "@/components/site_layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className=" text-black">
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

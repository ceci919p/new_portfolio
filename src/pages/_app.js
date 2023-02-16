import "@/styles/globals.scss";
/*put global components here!*/

import Nav from "./../components/Nav";
import Footer from "./../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className=" text-black">
      <Nav />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

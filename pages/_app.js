import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-codGray-400">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

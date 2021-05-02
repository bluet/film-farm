import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-codGray-500'>
    <div className="max-w-[980px] mx-auto">
      <Navbar />
      <Component {...pageProps} />
    </div>

    </div>
  );
}

export default MyApp;

import Head from 'next/head';
import Script from 'next/script';
import 'realgrid/dist/realgrid-style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src='/realgrid-lic.js'/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

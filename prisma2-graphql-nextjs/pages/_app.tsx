import Head from 'next/head';

import '../public/realgrid.2.0.4/realgrid-style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="/realgrid.2.0.4/realgrid-lic.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

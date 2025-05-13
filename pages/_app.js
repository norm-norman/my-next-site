import '../styles/globals.css';
import Layout from '../src/components/layout/layout';

export default function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps);
  return (
    <>
      <Layout
        hideFooter={pageProps?.hideFooter}
        hideHeader={pageProps?.hideHeader}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

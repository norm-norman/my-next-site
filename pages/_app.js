import '../styles/globals.css';
import Layout from '../src/components/layout/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

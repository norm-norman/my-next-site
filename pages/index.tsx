import Head from 'next/head';
import mongoClientPromise from '../lib/mongodb';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import EntryComponent from '../src/entry-component';
import { currentlyPlayingSong } from '../lib/spotify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// font imports
import neueRegradeFont from '../public/font-loader';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type InitialPropTypes = {
  isConnected: boolean;
  song: any;
};

const theme = createTheme({
  typography: {
    fontFamily: 'NeueRegrade',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'NeueRegrade';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${neueRegradeFont}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export const getServerSideProps: GetServerSideProps<
  InitialPropTypes
> = async () => {
  try {
    await mongoClientPromise;
    const response = await currentlyPlayingSong();
    const song = await response.json();
    return {
      props: { isConnected: true, song: song },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false, song: null },
    };
  }
};

export default function Home({
  isConnected,
  song,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Norm's Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={neueRegradeFont.className}>
        <EntryComponent song={song} />
      </main>
    </div>
  );
}

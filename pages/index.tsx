import Head from 'next/head';
import mongoClientPromise from '../lib/mongodb';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import EntryComponent from '../src/entry-component';
import { currentlyPlayingSong } from '../lib/spotify';

// font imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type InitialPropTypes = {
  isConnected: boolean;
  song: any;
};

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
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Norm Norman | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <EntryComponent />
      </main>
    </div>
  );
}

import Head from 'next/head';
import clientPromise from '../lib/mongodb';

export default function Concerts({ concerts }) {
  return (
    <div>
      <h1>Concerts We've Been To</h1>
      <div>
        {concerts.map((concert) => (
          <>
            <h2>{concert.artist}</h2>
            <h3>{concert.venue}</h3>
            <p>
              {concert.venue_city}, {concert.venue_state_abbreviated}
            </p>
          </>
        ))}
      </div>
      <a href="/">Home</a>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('anniversary_2024');

    const concerts = await db
      .collection('concerts')
      .find({})
      .sort({})
      .limit(20)
      .toArray();

    return {
      props: { concerts: JSON.parse(JSON.stringify(concerts)) },
    };
  } catch (e) {
    console.error(e);
  }
}

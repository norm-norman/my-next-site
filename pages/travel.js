import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import clientPromise from '../lib/mongodb';
import * as THREE from 'three';
import * as topojson from 'topojson-client';
import TravelGlobe from '../src/travel-globe';
import TravelGlobeWrapper from '../src/travel-globe-wrapper';

// const TravelGlobeWrapper = dynamic(
//   () => {
//     return import('../src/travel-globe-wrapper');
//   },
//   { ssr: false }
// );

export default function Travel({ locations }) {
  const globeRef = useRef();
  const arcsData = [
    ...locations.map((location) => {
      const travelArcCoordinates = location.geometry.coordinates;
      return {
        startLat: travelArcCoordinates[0][1],
        startLng: travelArcCoordinates[0][0],
        startCity: 'Boston',
        endLat: travelArcCoordinates[1][1],
        endLng: travelArcCoordinates[1][0],
        endCity: 'New York',
        color: 'grey',
      };
    }),
  ];

  return (
    <div>
      <style jsx>{`
        body {
          margin: 0px;
        }
      `}</style>
      <TravelGlobe ref={globeRef} arcsData={arcsData} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('anniversary_2024');

    const locations = await db
      .collection('travel_destinations')
      .find({})
      .sort({})
      .limit(20)
      .toArray();

    return {
      props: { locations: JSON.parse(JSON.stringify(locations)) },
    };
  } catch (e) {
    console.error(e);
  }
}

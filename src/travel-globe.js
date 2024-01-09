import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import * as topojson from 'topojson-client';

const Globe = dynamic(
  () => {
    return import('react-globe.gl');
  },
  { ssr: false }
);

const polygonsMaterial = new THREE.MeshLambertMaterial({
  color: 'darkslategrey',
  side: THREE.DoubleSide,
});

const TravelGlobe = React.forwardRef((props, ref) => {
  console.log(ref);
  const [landPolygons, setLandPolygons] = useState([]);
  useEffect(() => {
    // load data
    fetch('//unpkg.com/world-atlas/land-110m.json')
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(
          topojson.feature(landTopo, landTopo.objects.land).features
        );
      });
  }, []);

  useEffect(() => {
    ref.current.focus();
  });
  return (
    <Globe
      forwardedRef={ref}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundColor="#020921"
      arcsData={props.arcsData}
      arcColor={'color'}
      arcDashLength={0.1}
      arcDashGap={0.05}
      arcStroke={0.4}
      showGlobe={false}
      showAtmosphere={false}
      polygonsData={landPolygons}
      polygonCapMaterial={polygonsMaterial}
      polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
    />
  );
});

export default TravelGlobe;

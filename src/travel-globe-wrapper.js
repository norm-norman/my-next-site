import React, { forwardRef } from 'react';
import TravelGlobe from './travel-globe';

const TravelGlobeWrapper = (props, ref) => {
  console.log(ref);
  return <TravelGlobe ref={ref} arcsData={props.arcsData} />;
};

export default TravelGlobeWrapper;

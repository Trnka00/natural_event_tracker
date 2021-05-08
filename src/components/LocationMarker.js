import React from 'react';
import '../index.css';

const LocationMarker = ({ className, key, lat, lng, onClick }) => {
  return (
    <div
      value="1"
      onClick={onClick}
      className={className}
      key={key}
      lat={lat}
      lng={lng}
    ></div>
  );
};

export default LocationMarker;

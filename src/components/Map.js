import React from 'react';
import GoogleMapReact from 'google-map-react';

import '../index.css';

const API_KEY = process.env.API_SECRET;

const Map = ({ center, zoom, markers }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 50,
    lng: 16,
  },
  zoom: 4,
};

export default Map;

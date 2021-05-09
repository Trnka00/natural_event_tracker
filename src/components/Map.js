import React from 'react';
import GoogleMapReact from 'google-map-react';

import '../index.css';

const Map = ({ center, zoom, markers }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCOTsWzfsp-8LoAHN-86Z59ewAuGS5re-Y' }}
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

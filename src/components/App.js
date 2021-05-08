import React, { useState, useEffect } from 'react';

import Map from './Map';
import Sidebar from './Sidebar';
import LocationMarker from './LocationMarker';
import InfoBox from './InfoBox';
import '../index.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [markers, setMarkers] = useState(null);
  const [eventInfo, setEventInfo] = useState(null);

  const fetchData = () => {
    fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data.events);
        setMarkers(
          data.events.map(event => {
            if (Array.isArray(event.geometries[0].coordinates[0])) {
              return (
                <LocationMarker
                  onClick={e => {
                    setEventInfo({ id: event.id, title: event.title });
                  }}
                  className={`location-marker-${event.categories[0].id}`}
                  key={event.id}
                  lat={
                    event.geometries[0].coordinates[0][
                      event.geometries[0].coordinates[0].length - 1
                    ][0]
                  }
                  lng={
                    event.geometries[0].coordinates[0][
                      event.geometries[0].coordinates[0].length - 1
                    ][1]
                  }
                />
              );
            }
            return (
              <LocationMarker
                onClick={e => {
                  setEventInfo({ id: event.id, title: event.title });
                }}
                className={`location-marker-${event.categories[0].id}`}
                key={event.id}
                lat={event.geometries[0].coordinates[1]}
                lng={event.geometries[0].coordinates[0]}
              />
            );
          })
        );
      });
  };

  useEffect(fetchData, []);

  const renderMarkers = e => {
    const selection = e.target.value;
    setEventInfo(null);
    console.log(e.target.value);

    if (e.target.value === '1') {
      setMarkers(
        events.map(event => {
          if (Array.isArray(event.geometries[0].coordinates[0])) {
            return (
              <LocationMarker
                onClick={e => {
                  setEventInfo({ id: event.id, title: event.title });
                }}
                className={`location-marker-${event.categories[0].id}`}
                key={event.id}
                lat={
                  event.geometries[0].coordinates[0][
                    event.geometries[0].coordinates[0].length - 1
                  ][0]
                }
                lng={
                  event.geometries[0].coordinates[0][
                    event.geometries[0].coordinates[0].length - 1
                  ][1]
                }
              />
            );
          }
          return (
            <LocationMarker
              onClick={e => {
                setEventInfo({ id: event.id, title: event.title });
              }}
              className={`location-marker-${event.categories[0].id}`}
              key={event.id}
              lat={event.geometries[0].coordinates[1]}
              lng={event.geometries[0].coordinates[0]}
            />
          );
        })
      );
    } else {
      const selectedEvents = events.filter(
        event => event.categories[0].id === Number(selection)
      );

      setMarkers(
        selectedEvents.map(event => {
          if (Array.isArray(event.geometries[0].coordinates[0])) {
            return (
              <LocationMarker
                onClick={e => {
                  setEventInfo({ id: event.id, title: event.title });
                }}
                className={`location-marker-${event.categories[0].id}`}
                key={event.id}
                lat={
                  event.geometries[0].coordinates[0][
                    event.geometries[0].coordinates[0].length - 1
                  ][0]
                }
                lng={
                  event.geometries[0].coordinates[0][
                    event.geometries[0].coordinates[0].length - 1
                  ][1]
                }
              />
            );
          }
          return (
            <LocationMarker
              onClick={e => {
                setEventInfo({ id: event.id, title: event.title });
              }}
              className={`location-marker-${event.categories[0].id}`}
              key={event.id}
              lat={event.geometries[0].coordinates[1]}
              lng={event.geometries[0].coordinates[0]}
            />
          );
        })
      );
    }
  };

  const handleMapClick = () => {
    setEventInfo(null);
  };

  return (
    <div className="app">
      <Sidebar renderMarkers={renderMarkers} />
      <Map onClick={handleMapClick} markers={markers} />
      {eventInfo && <InfoBox info={eventInfo} />}
    </div>
  );
};

export default App;

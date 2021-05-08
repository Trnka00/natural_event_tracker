import React from 'react';
import '../index.css';
import nasa from '../img/nasa.svg';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div>
        <h1>Natural events</h1>
        <p>
          This app allows you to see current natural events on Earth. You can
          select events you want to see and click markers on the map to get
          details.
        </p>
        <form>
          <label>Select event:</label>
          <select
            className="Selection"
            onChange={props.renderMarkers}
            onLoad={props.renderMarkers}
          >
            <option value="1">All</option>
            <option value="8">Wildfires 🔴</option>
            <option value="12">Volcanoes ⚫</option>
            <option value="15">Ice and icebergs 🔵</option>
          </select>
        </form>
      </div>
      <div className="credits">
        <p>
          This app uses The Earth Observatory Natural Event Tracker (EONET) API
          provided by NASA and Google Maps API.
        </p>
        <img className="nasa-logo" src={nasa} alt="aaa" />
      </div>
    </div>
  );
};

export default Sidebar;
// ​🔴​🟠​🟡​🟢​🔵​🟣​⚫️​⚪️​🟤​

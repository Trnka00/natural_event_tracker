import React from 'react';

import '../index.css';

const InfoBox = ({ info }) => {
  return (
    <div className="info-box">
      <h2>{info.id}</h2>
      <p>{info.title}</p>
      <a
        className="more-info"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.google.com/search?q=${info.title}`}
      >
        more info
      </a>
    </div>
  );
};

export default InfoBox;

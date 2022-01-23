import React, { useState } from 'react';
import LocationBtn from './LocationBtn';
import './LocationTab.css';
const LocationTab = () => {
  const [state,setState] = useState(true);
    return (
      <div className="location-tab">
        <h1 className='location-text'>locations</h1>

        <LocationBtn text="your location"/>
        <LocationBtn />
      </div>
    );
};
export default LocationTab;
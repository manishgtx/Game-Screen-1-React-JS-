import { useState } from 'react';
import './LocationBtn.css';
const LocationBtn = ({text}) => {
    const [disable,setDisable] = useState('');
    let highlight='';
    if(text === 'your location')
    {
        highlight = 'primary'
    }
    const disabled = () => {
        if(disable === '')
        {
            setDisable('disabled');
        }
        else {
            setDisable('');
        }
    }
    return (
      <>
        <button
          type="button"
          className={`location-btn ${disable} ${highlight}`}
          onClick={disabled}
        >
          {text}
        </button>
      </>
    );
}

LocationBtn.defaultProps = {
    text: 'location'
}

export default LocationBtn;
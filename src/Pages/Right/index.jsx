import React, { useState } from 'react';
import './style.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Right = () => {
  const [selectedOption, setSelectedOption] = useState('One Time Purchase');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const [selectedOption1, setSelectedOption1] = useState(null);

  const handleOptionClick = (i) => {
    setSelectedOption1(i);
  }

  return (
    <>
    <h1  className="right_" style={{textAlign:"center"}}>“Drizzle” & “Sizzle” <span className='under_'>Extra Virgin Olive Oil</span></h1>
     <div className="quantity-section">
      <h2 className='head_'>Quantity</h2>
      <div className="options">
      {['1', '2', '3', '4'].map((number, i) => (
        <div 
          key={i} 
          className={`option ${selectedOption1 === i ? 'selected' : ''}`} 
          onClick={() => handleOptionClick(i)}
        >
          <div>
            <h1 className='number'>{number}</h1>
          </div>
          <div>
            <h2 className='number'>Sets</h2>
          </div>
          <div>
            <p>+free shipping +10% off</p>
          </div>
        </div>
      ))}
    </div>
      <div className="radio-buttons">
        <label>
          <input className="radio_" type="radio" value="One Time Purchase" checked={selectedOption === 'One Time Purchase'} onChange={handleOptionChange} />
          One Time Purchase
        </label>
        <div>------------------------------------------------------------------------------------------</div>
        <label>
          <input type="radio" className="radio_" value="Subscribe & Save" checked={selectedOption === 'Subscribe & Save'} onChange={handleOptionChange} />
          Subscribe & Save
        </label>
        <div>------------------------------------------------------------------------------------------</div>
      </div>
     
      <div className="price">$33.30</div>
      <button>Subscribe         -$199</button>
    </div>
    </>
  );
}

export default Right;

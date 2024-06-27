import React from 'react';
import './Slider.css'; // Import the CSS file
import card1 from './card1.avif'; // Example image import
import card2 from './1.png';
const Slider = () => {
  return (
    <div className='slider' >
      <div className='head'>
        <div className='card-slider'>
         
            <div  className='box'>
              <img src={card1} alt='card1'/>
              <div className='details'>
                <div style={{ fontSize: "20px" }}>Writer Humble</div>
                <div style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "2px" }}>4.8</div>
                <div style={{ fontSize: "13px", marginTop: "2px" }}>2956 members</div>
                <span>Learn more</span>
              </div>
            </div>
            <div  className='box'>
              <img src={card2} alt='card1'/>
              <div className='details'>
                <div style={{ fontSize: "20px" }}>Writer Humble</div>
                <div style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "2px" }}>4.8</div>
                <div style={{ fontSize: "13px", marginTop: "2px" }}>2956 members</div>
                <span>Learn more</span>
              </div>
            </div>
            <div  className='box'>
              <img src={card1} alt='card1'/>
              <div className='details'>
                <div style={{ fontSize: "20px" }}>Writer Humble</div>
                <div style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "2px" }}>4.8</div>
                <div style={{ fontSize: "13px", marginTop: "2px" }}>2956 members</div>
                <span>Learn more</span>
              </div>
            </div>
            <div  className='box'>
              <img src={card2} alt='card1'/>
              <div className='details'>
                <div style={{ fontSize: "20px" }}>Writer Humble</div>
                <div style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "2px" }}>4.8</div>
                <div style={{ fontSize: "13px", marginTop: "2px" }}>2956 members</div>
                <span>Learn more</span>
              </div>
            </div>
            <div  className='box'>
              <img src={card2} alt='card1'/>
              <div className='details'>
                <div style={{ fontSize: "20px" }}>Writer Humble</div>
                <div style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "2px" }}>4.8</div>
                <div style={{ fontSize: "13px", marginTop: "2px" }}>2956 members</div>
                <span>Learn more</span>
              </div>
            </div>
            <div  className='box'>
              <img src={card1} alt='card1'/>
              <div className='details'>
                <div style={{ fontSize: "20px" }}>Writer Humble</div>
                <div style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "2px" }}>4.8</div>
                <div style={{ fontSize: "13px", marginTop: "2px" }}>2956 members</div>
                <span>Learn more</span>
              </div>
            </div>
            <div  className='box'>
              <img src={card2} alt='card1'/>
              <div className='details'>
                <div style={{ fontSize: "20px" }}>Writer Humble</div>
                <div style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "2px" }}>4.8</div>
                <div style={{ fontSize: "13px", marginTop: "2px" }}>2956 members</div>
                <span>Learn more</span>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Slider;

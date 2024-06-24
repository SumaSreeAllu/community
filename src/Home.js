import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='curve'>
        <div className='top'>
          <span>About</span>
          <span>Contact</span>
          <span>FAQ</span>
          <button className='login'>Login</button>
          <button className='signup'>Signup</button>
        </div>
        <div className='main'>
          <span>Search for Community</span>
          <div className='bar'>
            <IoIosSearch />
            <input type='text' placeholder='Search' name='search' className='searchbar'/>
          </div>
          <h1>Discover & Connect</h1>
          <p>with Top Communities!!!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Button from '@mui/material/Button'; 
import './Info.css';

const Info = () => {
  return (
    <div>
      <div className='container'>
        <button className='create'>Create a Community <AiOutlinePlusCircle style={{ marginRight: "10px", marginLeft:"10px", fontSize:"1.2rem"}}/></button>
        <button className='join'>Join a Community <AiOutlinePlusCircle style={{ marginRight: "10px", marginLeft:"10px", fontSize:"1.2rem"}}/></button>
        <button className='explore'>Explore New Communities <FaArrowUpRightFromSquare style={{ marginRight: "9px", marginLeft:"10px", fontSize:"0.9rem"}}/></button>
      </div>
      <div className='About'>
        <h1>About Us</h1>
        <span>Welcome to our platform, established in 2024, where we empower individuals to create and join communities aligned with their interests and passions.
        Our mission is to foster connections and drive competitiveness among members, enhancing personal growth and collaboration. Whether you're seeking to 
        expand your network, share knowledge, or engage in friendly competition, our platform provides the tools and environment to thrive. Join us in building 
        vibrant communities that inspire, challenge, and support each other towards greater achievements.</span>
      </div>
      <div className='content1'>
        <div className='con1'>
          <h1>Build Your Community</h1>
          <span>Building a community involves creating a space where individuals with common interests, goals, or values can connect, interact, and support each other. Develop content that resonates with your audience.</span>
        </div>
        <div className='button1'>
          <Button endIcon={<AiOutlinePlusCircle style={{color:'black'}}/>}style={{color:'black'}} >Create a Community</Button>
        </div>      
      </div>
      <div className='content2'>       
          <div className='button2'>
          <Button endIcon={<AiOutlinePlusCircle style={{color:'black'}}/>}style={{color:'black'}} >Create a Community</Button>
        </div> 
        <div className='con2'>
        <h1>Join Your Community</h1>
        <span>Joining a new community not only helps you connect with like-minded individuals and participate in shared interests or activities but 
          also provides opportunities for networking, gaining new perspectives, and contributing to collective goals and initiatives. </span>
        </div>
      </div>
    </div>
  );
};

export default Info;

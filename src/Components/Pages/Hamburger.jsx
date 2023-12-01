import React from 'react';
import { Link } from 'react-router-dom';
// import {image} from '../Images/newLogo.png';

function Hamburger() {
  
  return (
    <div>
      <div className='menu-head'>
        <div>
          <div className='image-afro'>
            <h2>AFRO MERIDIAN FOOTBALL CLUB</h2>
          </div>
          <br />
          <div className='line-under-ham '></div>
        </div>
        <div className='menu--head'>
          <Link to={'/'} className='hamburger__line'>
            <div className='menu-list'>
              <h3>Home</h3>
            </div>
          </Link>
          <br />
          <br />
          <Link to={'/students'} className='hamburger__line'>
            <div className='menu-list'>
              <h3>Our Students</h3>
            </div>
          </Link>
          <br />
          <br />
          <Link to={'/about'} className='hamburger__line'>
            <div className='menu-list'>
              <h3>About Us</h3>
            </div>
          </Link>
          <br />
          <br />
          <Link to={'/gallery'} className='hamburger__line'>
            <div className='menu-list'>
              <h3>Gallery</h3>
            </div>
          </Link>
          <br />
          <br />
          <Link to={'/register'} className='hamburger__line'>
            <div className='menu-list'>
              <h3>Register</h3>
            </div>
          </Link>
          <br />
          <br />
          <Link to={'/contact'} className='hamburger__line'>
            <div className='menu-list'>
              <h3>Contact Us</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hamburger
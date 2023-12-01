import React from 'react'
import Navigation from './Navigation';
import image from '../Images/newLogo.png';
import ScrollToTopArrow from './ScrollTopArrow';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Students() {
  return (
    <div className='about__'>
      <Navigation />
      <div className='students'>
        <div className='con-tent'>
          <div className='meet'>
            <h3>MEET</h3>
            <br />
            <br />
            <p>Our Students</p>
          </div>
          <div className='logo--image'>
            <img src={image} alt='' />
          </div>
          <div className='approach'>
            <h3>Our Approach</h3>
            <br />
            <p>
              In order one to become a professional football player you will
              need talent, commitment, hard work and the best training
              available. That’s why at AFA football academy have developed a
              special football program to give students chance to learn from a
              reputable football academy in Nigeria. You will improve and be
              able to get your game to the next level through the most advanced
              training and high exposure in youth football tournaments in
              Nigeria.
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='player-images'>
            <div className='playerImage-grid'>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              {/* <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div> */}
              {/* <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div>
              <div className='player_one'></div> */}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='footer-green'>
          <div className='content_'>
            <h3>LET'S GET STARTED</h3>
            <p>Ready To Join Our Academy...</p>
          </div>
          <br />
          <br />
          <div className='reg--button'>
            <Link to={'/register'}>
              <button className='reg-btn'>REGISTER HERE</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTopArrow />
    </div>
  );
}

export default Students
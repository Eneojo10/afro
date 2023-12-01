import React from 'react';
import image from '../Images/newLogo.png';
import { NavLink } from 'react-router-dom';
import {BsTelephone} from 'react-icons/bs'
import {GoMail} from 'react-icons/go';
import {FaFacebookF} from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im';
import {BiLogoInstagram} from 'react-icons/bi'
import HamburgerMenu from './Hamburgermenu';

function Navigation() {
  return (
    <div className='nav-head'>
      <div className='navigation'>
        <div className='nav-flex'>
          <div className='telephone'>
            <div className='tel'>
              <BsTelephone />
            </div>
            <div>
              <h5>+2348075443300</h5>
            </div>
            <div className='mail'>
              <div>
                <GoMail />
              </div>
              <div>
                <h5>afafootballacademy00@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className='facebook'>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <ImTwitter />
            </div>
            <div>
              <BiLogoInstagram />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className='navi-gation'>
        <div className='ham'>
          <HamburgerMenu />
        </div>
        <div className='nav-list'>
          <div className='logo'>
            <img src={image} alt='' />
          </div>
          <div className='navi--gation'>
            <NavLink
              exact
              to={'/'}
              className='link_line'
              activeClassName='active_link'
            >
              <div>
                <h2>Home</h2>
              </div>
            </NavLink>
            <NavLink
              to={'/students'}
              className='link_line'
              activeClassName='active_link'
            >
              <div>
                <h2>Our Students</h2>
              </div>
            </NavLink>
            <NavLink
              to={'/about'}
              className='link_line'
              activeClassName='active_link'
            >
              <div>
                <h2>About Us</h2>
              </div>
            </NavLink>
            <NavLink
              to={'/gallery'}
              className='link_line'
              activeClassName='active_link'
            >
              <div>
                <h2>Gallery</h2>
              </div>
            </NavLink>
            <NavLink
              to={'/register'}
              className='link_line'
              activeClassName='active_link'
            >
              <div>
                <h2>Register</h2>
              </div>
            </NavLink>
            <NavLink
              to={'/contact'}
              className='link_line'
              activeClassName='active_link'
            >
              <div>
                <h2>Contact Us</h2>
              </div>
            </NavLink>
            {/* <div>
              <h2>Contact Us</h2>
            </div> */}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Navigation
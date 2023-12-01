import React from 'react';
import Navigation from './Navigation';
import image from '../Images/flower.webp';
import image2 from '../images/spino.jpeg'
import ScrollToTopArrow from './ScrollTopArrow';
// import image3 from '../Images/fourplayers.jpeg';
import Footer from './Footer';

function About() {
  return (
    <div className='about__'>
      <Navigation />
      <div className='about---image'>
        <div className='afa'>
          <h3>AFRO MERIDIAN FOOTBALL ACADEMY</h3>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flower--'>
        <div className='flower-color'>
          <div className='flower-image'>
            <img src={image} alt='image' />
          </div>
        </div>
        <div className='flower-text'>
          <h3>How We Got Started</h3>
          <br />
          <br />
          <p>
            Afro Meridian football academy was initially started to promote
            young talent and create reliable exposure opportunities in the
            professional football fraternity for young stars. With passion, we
            have managed to successfully create a platform from which we have
            natured our players towards improving their skills to professional
            level advancement. Our Academy players also participate In both
            African Cup of nations Turkey and African Nations unity cup. We also
            pride ourselves In signing off a number of our players In top
            European and Asian league clubs for example………we have therefore
            built ourselves a long trusted connection with top sports agencies
            all over the world.
          </p>
        </div>
        <div className='flower-color'>
          <div className='flower--image'>
            <img src={image2} alt='image2' />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className='about-footer-color'>
        <div className='abt-text'>
          <div className='abtt'>
            <h3>Our Mission</h3>
          </div>
          <div className='mission'>
            <h4>
              We seek to be the number one academy at nurturing young talent by
              providing a suitable and conducive training environment for
              tomorrow’s sports stars.
            </h4>
          </div>
        </div>

        <div className='fourplayers'>
          <div className='fourplayer_images'></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='sign--up'>
          <div className='signUp'>
            <h3>Stay in Touch</h3>
            <p>
              Signup for our Mailing List for news and updates about AFA
              football academy
            </p>
          </div>
          <div className='fourplayer_input'>
            <div className='abtinput'>
              <input type="text" placeholder='Name' />
            </div>
            <br />
            <div className='abt-input'>
              <input type='text' placeholder='Email' />
            </div>
            <br />
            
            <div>
              <button className='about--btn'>Subscribe now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopArrow />
    </div>
  );
}

export default About
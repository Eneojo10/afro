import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navigation />
      <div>
        <div className='contact'>
          <div className='contact-text'>
            <h3>Let us know what you think</h3>
          </div>
        </div><br/><br/><br/><br/>
        <div className='reach'>
          <h3>Reach Us</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact
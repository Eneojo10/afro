import React from 'react';
import Navigation from './Navigation';

function Gallery() {
  return (
    <div>
      <Navigation />
      <div className='galleryImage'>
        <div className='overlay'>
          <div className='galery-content'>
            <h2>Welcome to our Gallery</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

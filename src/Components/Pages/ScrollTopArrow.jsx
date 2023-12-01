import React, { useState, useEffect } from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md'

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div className='scroll-to-top' onClick={scrollToTop}>
        <i className='fas fa-arrow-up'>
          <MdKeyboardArrowUp/>
        </i>
      </div>
    )
  );
};

export default ScrollToTopArrow;

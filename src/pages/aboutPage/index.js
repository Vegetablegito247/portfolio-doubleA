import React from 'react';
import AboutHead from './AboutHead';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';
import AboutMain from './AboutMain';

function AboutPage() {
  // scroll to top of page after each navigation
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuint',
    });
  }, []);

  return (
    <>
      <AboutHead />
      <AboutMain />
    </>
  )
}

export default AboutPage
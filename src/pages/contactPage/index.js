import React from 'react';
import ContactHead from './ContactHead';
import ContactMain from './ContactMain';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';

function ContactPage() {
  // scroll to top of page after each navigation
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuint',
    });
  }, []);
  
  return (
    <>
      <ContactHead />
      <ContactMain />
    </>
  )
}

export default ContactPage
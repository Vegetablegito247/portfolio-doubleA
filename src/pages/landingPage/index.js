import React from 'react';
import Header from './Header';
import LandMain from './LandMain';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';

function LandingPage() {
    // scroll to top of page after each navigation
    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint',
        });
    }, []);
    return (
        <>
            <Header />
            <LandMain />
        </>
    )
}

export default LandingPage
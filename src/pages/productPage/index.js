import React from 'react';
import ProHead from './ProHead';
import ProMain from './ProMain';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';

function ProjectPage() {
    // scroll to top of page after each navigation
    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint',
        });
    }, []);

    return (
        <>
            <ProHead />
            <ProMain />
        </>
    )
}

export default ProjectPage
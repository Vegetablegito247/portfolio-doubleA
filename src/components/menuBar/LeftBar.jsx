import React, { useEffect, useState } from 'react'

function LeftBar({ openMenu }) {
  const pCont = "My name is Al-min Ajadi, I see you've visited my forte, well this is the beginning of your adventure. What do you have for me ?, let me take you into the realm of impossibilities, HAHA.";
  const [disText, setDisText] = useState('');

  useEffect(() => {
    if (openMenu) {
      let index = 0;

      const interval = setInterval(() => {
        setDisText(pCont.substring(0, index));
        index++;

        if (index > pCont.length) {
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [openMenu]);

  return (
    <div className={openMenu ? 'left-bar active' : 'left-bar'}>
      <div className="left-abt-txt">
        <p id='output-text'>
          {disText} <span></span>
        </p>
      </div>
    </div>
  )
}

export default LeftBar
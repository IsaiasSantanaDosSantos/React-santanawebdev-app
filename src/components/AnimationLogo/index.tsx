import React, { useEffect } from 'react';

import  './styled.css';

const AnimationLogo: React.FC = () => {
  const subtitleText = "Web Developer";
  const subtitleArray = subtitleText.split('');

  useEffect(()=> {
    subtitleArray.forEach((character) => {
      const logoSubtitle = document.querySelector('.logoSubtitle');
      if (logoSubtitle) {
        setTimeout(() =>{
  
          logoSubtitle.innerHTML += `<span className="zoomText">${character}</span>`;
        }, 100)
      }
    });

  }, [])
  

  return (
    <div className='animationLogoContainer' >
      <div className="">
      <h1 className="logoTitle"> <span></span>Santana</h1>
      <p className="logoSubtitle">

      </p>
      </div>
    </div>
  );
};

export default AnimationLogo;
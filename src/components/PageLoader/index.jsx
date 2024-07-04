import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import {styled} from 'styled-components';

export default function PageLoader() {

// Styled start

const PageLoader= styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  ${'' /* background-image: linear-gradient(50deg, #6CA0E3 -5.55%, #ACA3DE 2.67%, #B3A9D7 10.36%, #85E4B2 14.94%, #70D6DD 19.8%, #97ACF1 23.97%, #D9B9E1 28.73%, #E7DDD5 33.09%, #E5CBD9 40.68%, #E4B7DF 48.72%, #B8B6E9 56.17%, #8DB6F2 65.45%, #B2A9F0 73.83%, #E3B2E8 79.67%, #E9DDDA 85.96%, #81F5F7 93.28%, #7BA3F4 98.61%); */}
  ${'' /* background-image: linear-gradient(140deg, #ff8844, #ff7746, #fd644a, #fa514f, #f53b56, #e9295e, #db1665, #cc006b, #b10070, #940072, #740072, #52076f); */}
  background: url(${require("../../assets/images/noise-and-texture-bg.png")}) center/cover no-repeat, linear-gradient(140deg, #ff8844, #ff7746, #fd644a, #fa514f, #f53b56, #e9295e, #db1665, #cc006b, #b10070, #940072, #740072, #52076f) ;
    background-blend-mode: multiply; 
  background-size: cover ,350%;
    background-position: 0 0 , 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  pointer-events: none;
  
  `; 


  const Progress= styled.div`  
  width: 0;
  height: 5px; // Adjust height as needed
  background-color: #fff;
`;

const ProgressText = styled.span`
font-size: 3rem; // Adjust font size as needed
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
`;

// Styled end

const loaderRef = useRef(null);

useEffect(() => {
  const loader = loaderRef.current;
  const numberElement = loader.querySelector('.number');

  // Create a GSAP timeline for the animation
  const loaderTl = gsap.timeline({ paused: true });
  loaderTl
    .to(loader, { duration: 1, opacity: 1, backgroundPosition: " 0 0 , 50% 0 "}) // Fade in loader
    // .to(numberElement, { duration: 2, ease: 'power3.out', from: 0, to: 100, textContent: Math.round(loaderTl.progress() * 100) }) // Animate number and update content
    .to(loader, { duration: 1, opacity: 0, delay: 1, backgroundPosition: " 0 0 , 100% 0 " }); // Fade out loader after delay

  // Start the animation on mount
  loaderTl.play();

  // Cleanup function (optional) to prevent memory leaks
  return () => loaderTl.kill();
}, []);

  return (
    <>
     <PageLoader ref={loaderRef} className="page-loader">
      <Progress className="progress"></Progress>
      {/* <ProgressText className="number"></ProgressText> */}
    </PageLoader>
    </>
  )
}

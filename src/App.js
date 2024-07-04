import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./assets/css/globalStyle";
import { GlobalColorsStyle } from "./assets/css/colorsLib";
import PageLoader from "./components/PageLoader";
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

function App() {
useEffect(() => {
  const lenis = new Lenis()

// function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }
  
  // requestAnimationFrame(raf)
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)

  lenis.on('scroll', ScrollTrigger.update)
  // Smooth Scroll End

},[])
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
    <GlobalStyle />
      <GlobalColorsStyle />
      <PageLoader />
      <main>
       <Outlet />
      </main>
    </>
  );
}

export default App;

import React,{useEffect} from 'react'

export default function SectionTopSpace() {
    useEffect(() => { 
    let headerH = document.querySelector("header").offsetHeight;

document.querySelector("main .hero-section").style.height = "auto";
document.querySelector("main .hero-section").style.paddingTop = headerH + "px";
}, [])
}

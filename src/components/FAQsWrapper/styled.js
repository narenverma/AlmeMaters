import styled from "styled-components";

export const FAQsSection = styled.section`
position: relative;
z-index: 4;

& :is(.bg-blur-sphere-top-elem, .bg-blur-sphere-bottom-elem){
    position: absolute; 
    width: 100%;  
    z-index: -1;
    pointer-events: none;
}
& .bg-blur-sphere-top-elem{
    top: -25%;
    right: -60%; 
}
& .bg-blur-sphere-bottom-elem{
    bottom: -25%;
    left: -60%;
}

& .bg-top-left-elem{
    position: absolute;
    top: 22%;
    left: -5%;
    transform: rotate(73deg);
}

& .bg-bottom-right-elem{
    position: absolute;
    bottom: 22%;
    right: -2%;
    transform: rotate(41deg);
}

`;
export const FAQsWrapper = styled.section``;
export const FAQsWrap = styled.section`

& .accordion-button:not(.collapsed), & .accordion-button{
background-color: #0000!important;
box-shadow: none  !important;
}
.accordion-button:after{
    background: url(${require("../../assets/images/plus-icon-white.svg").default}) no-repeat center/auto;
    transform: rotate(180deg)!important;
}
.accordion-button:not(.collapsed)::after{
    background: url(${require("../../assets/images/minus-icon-black.svg").default}) no-repeat center/auto;
}
.accordion-button{
    padding: 2rem 2rem 0.5rem 2rem !important;
    transition: .3s ease-out;  
    font-family: 'Dharma-GE-Bold';
    font-size: inherit;
}
.accordion-button.collapsed{padding: 2rem  !important;}
& .accordion-item{
    border-radius: 0.5rem;
    border: 1.5px solid #FFF0;
    background-color: var(--theme-black-secondary); 
    transition: .3s ease-out;  

&:not(:has(.accordion-button.collapsed)){
    border-radius: 1.375rem;
    border: 1.5px solid #FFF;
    background-image: linear-gradient(50deg, #6CA0E3 -5.55%, #ACA3DE 2.67%, #B3A9D7 10.36%, #85E4B2 14.94%, #70D6DD 19.8%, #97ACF1 23.97%, #D9B9E1 28.73%, #E7DDD5 33.09%, #E5CBD9 40.68%, #E4B7DF 48.72%, #B8B6E9 56.17%, #8DB6F2 65.45%, #B2A9F0 73.83%, #E3B2E8 79.67%, #E9DDDA 85.96%, #81F5F7 93.28%, #7BA3F4 98.61%);

    & *{
    color: var(--theme-black-primary) !important;
}
}

& *{
    color: var(--theme-white) !important;
}

&:not(:last-child){
    margin-bottom: 1rem;
}
}

& .accordion-body{
    padding: 0 2rem 2rem 2rem !important;

 & p{
    font-size:1rem;
    line-height: 150%;
    font-family: "Switzer-V-Regular";
    letter-spacing: normal;
    margin-bottom:0;
 }
}

@media screen and (max-width: 768px){
    .accordion-button{
    padding: 1.5rem 1.5rem 0.5rem 1.5rem !important;
    }
    .accordion-button.collapsed{padding: 1.5rem  !important;}
    & .accordion-body{
    padding: 0 1.5rem 1.5rem 1.5rem !important;
    }
    .accordion-button::after{
        width: .8rem;
        height: .8rem;
    }
}

`;
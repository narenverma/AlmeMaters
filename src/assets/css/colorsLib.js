import {  createGlobalStyle} from "styled-components"

export const GlobalColorsStyle = createGlobalStyle`


:root {

--theme-black: #000000;
--theme-white: #ffffff;
--theme-black-primary: #121212;
--theme-black-secondary: #202020;
--theme-white-primary: #FFFEF9;
--theme-blue:#0B69C7;
 
--theme-purple: #B866FF ;
--theme-dark-blue: #3600A4 ;

--theme-success: #078345;
--theme-warning: #FF9900;
--theme-error: #D53B3B; 

 

}



.theme-text-success{
color:var(--theme-success);
}
.theme-text-error{
color:var(--theme-error);
}
.theme-text-gray{
color:var(--theme-gray);
}
.theme-text-primary{
color:var(--theme-primary-600);
}

.theme-text-white{color:var(--theme-white);}
.theme-text-white-primary{color:var(--theme-white-primary);}
.theme-text-black-primary{color:var(--theme-black-primary);}


.theme-bg-black-primary,.curve-bg-black-primary:after{ background-color:var(--theme-black-primary);}
.theme-bg-black-secondary,.curve-bg-black-secondary:after{ background-color:var(--theme-black-secondary);}
.theme-bg-white-primary,.curve-bg-white-primary:after{ background-color:var(--theme-white-primary);}
.theme-bg-primary, .curve-bg-primary:after{ background-color:var(--theme-primary);}
.theme-bg-white, .curve-bg-white:after{ background-color:var(--theme-white);}

.theme-bg-yellow-cream, .curve-bg-yellow-cream:after{background-color:var(--theme-yellow-cream);}
 
 

 

`;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700&family=Poppins:wght@200;400;700&display=swap');

/* font-family: 'Nunito Sans', sans-serif;
font-family: 'Poppins', sans-serif; */
    *{
        margin:0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Nunito Sans', sans-serif
    }
    h1,h2,h3{
        font-family: 'Poppins', sans-serif;
    }
    img{
        max-width:100%;
    }

`;

export default GlobalStyle;

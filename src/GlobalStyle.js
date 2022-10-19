import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    width: 90vw;
    height: 75vh;
    border: 1px solid gray;
    margin: 65px auto;
  
  }

  * {
    box-sizing: border-box;
  
  }
  
  a {
    text-decoration: none;
    color :black;
  }
`;

export default GlobalStyle;

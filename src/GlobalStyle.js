import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    width: 90vw;
    height: 75vh;
    border: 2px solid ${theme.mainColor};
    border-radius: 10px;
    margin: 65px auto;
    box-shadow: 5px 5px 5px ${theme.mainColor};
    font-family: 'Noto Sans KR', sans-serif;
  
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

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #app{
    min-height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #ff9839;
    -webkit-font-smoothing: antialiased;

  }

`;

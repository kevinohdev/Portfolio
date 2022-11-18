import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fbfbfb;
    --grey: #efefef;
  }
  html {
    color: var(--white);
  }

  body {
    margin: 0 auto;
    background: rgba(25, 109, 209, 1.0);
    background: -webkit-radial-gradient(top left, rgba(25, 109, 209, 1.0), rgba(148, 68, 250, 1.0));
    background: -moz-radial-gradient(top left, rgba(25, 109, 209, 1.0), rgba(148, 68, 250, 1.0));
    background: radial-gradient(to bottom right, rgba(25, 109, 209, 1.0), rgba(148, 68, 250, 1.0));
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--grey) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--grey) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
`;

export default GlobalStyles;

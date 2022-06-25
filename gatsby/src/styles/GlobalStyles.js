import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/background.jpg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --darkgreen: #1f2220;
    --lightblue: #a2c6e9;
    --treegreen: #749476;
    --olivegreen: #49624a;
    --seafoam: #9FE2BF;
    --offwhite: #Fdfff5;
    --lightgreen: #C1E1C1
  }
  html {
    background: url(${bg}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border: none
  }

  button {
    background: var(--olivegreen);
    color: var(--offwhite);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      background-color: var(--lightgreen);
      color: var(--black)
    }
  }
  .content-title{
    color: var(--offwhite);
    text-align: center;
    margin: 0;
    @media(max-width: 1000px){
      font-size: 2rem;
    }
  }
  .content-outer-container {
    background-color: var(--black);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    margin: 20px 0 0 0;
    padding: 20px;
    max-height: 80%;
  }
  .content-inner-container {
    background-color: var(--olivegreen);
    margin: 0 auto;
    border-radius: 20px;
    max-height: 100%;
    width: 100%;
  }
  .scrollable-content{
    padding: 20px 10px 20px 10px;
    height: 65vh;
    overflow-y: scroll;
    background-color: var(--offwhite);
    color: black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    @media(max-width: 1000px){
      height: 50vh;
      font-size: 1.5rem;
    }
  }
  .content-p {
    margin: 0;
    text-align: center;
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
    scrollbar-color: var(--olivegreen) var(--offwhite);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--olivegreen) ;
    border-radius: 6px;
    border: 3px solid var(--offwhite);
  }

  /* Scrollbar Styles */
  div::-webkit-scrollbar {
    width: 12px;
  }
  div {
    scrollbar-width: thin;
    scrollbar-color: var(--olivegreen) var(--offwhite);
  }
  div::-webkit-scrollbar-track {
    background: var(--offwhite);
    border-radius: 20px;
  }
  div::-webkit-scrollbar-thumb {
    background-color: var(--olivegreen) ;
    border-radius: 6px;
    border: 3px solid var(--offwhite);
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

body {
    background: linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%);
    display: grid;
    place-items: center;
    font-family: 'Roboto', sans-serif;
    height:100vh;
  }
`;

export default GlobalStyle;

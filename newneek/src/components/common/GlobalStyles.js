import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
 * {
  box-sizing: inherit;
}

 html{
  height: 100%;
}

 #root{
  min-height: 100%;
}


  a{ 
    color: inherit;
    text-decoration: none;
  }

 body {
    background-color: #EBEBEB;
    line-height : 1.5rem;
    margin: 0;
    padding: 0 20%;
    font-family:'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    min-height: 100%;
  }
`;

export default GlobalStyle;
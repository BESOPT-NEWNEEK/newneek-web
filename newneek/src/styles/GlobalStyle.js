import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: rgb(235,235,235);
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
    }
`;

export default GlobalStyle;
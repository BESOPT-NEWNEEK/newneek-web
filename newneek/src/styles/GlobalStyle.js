import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        cursor: pointer;
        outline: none;
        width: 400px;
        height: 102px;
        left: 760px;
        background: #383535;
        font-weight: 700px;
        font-size: 32px;
        font-style: normal;
        color: white;
        text-align: center;
    }
`;

export default GlobalStyle;
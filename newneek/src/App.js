import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
//import DetailPage from './pages/detail';
import React from 'react';
import MainPage from './pages/main';

const RootDiv = styled.div`
height: 100vh;
`;
function App() {
    return(
        <React.Fragment>
            <GlobalStyle />
            <RootDiv>
            <BrowserRouter>
        <MainPage />
        </BrowserRouter>
        </RootDiv>
        </React.Fragment>
         

    )
}

export default App;
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import DetailPage from './pages/detail';
import React from 'react';

const RootDiv = styled.div`
height: 100vh;
`;
function App() {
    return(
        <React.Fragment>
            <GlobalStyle />
            <RootDiv>
            <BrowserRouter>
        <DetailPage />
        </BrowserRouter>
        </RootDiv>
        </React.Fragment>
         

    )
}

export default App;
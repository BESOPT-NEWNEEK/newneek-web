import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import DetailPage from './pages/detail';

import GlobalStyle from './components/common/GlobalStyles';

function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/detail' component={DetailPage} />
                    <Route component={() => <div>Page not found</div>} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
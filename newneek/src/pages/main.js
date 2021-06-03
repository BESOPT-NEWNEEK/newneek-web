import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {getCardData} from '../lib/api';
import Card from '../components/detail/Card';
//import Category from '../components/common/Category';
//import Header from '../components/common/Header';

const MainWrap = styled.div`
display: flex;
justify-content: center;
section{
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-items: center;
    @media (max-width: 1300px){ 
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 760px){
        grid-template-columns: repeat(1, 1fr);
    }
}
`;

function MainPage() {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getCardData();
            setArticleData(data);
        })();
    }, []);

    return (
        <MainWrap>
            <section>
                {articleData &&
                    articleData.map(article => <Card
                        key={article.id}
                        title={article.title}
                        date={article.date}
                        category={article.category}
                        summary={article.summary} />)}
            </section>
        </MainWrap>
    );
}

export default MainPage;
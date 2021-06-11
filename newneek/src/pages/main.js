import React, { useEffect, useState } from 'react';
import Card from '../components/detail/Card';
import styled from 'styled-components';
import { getCardData } from '../lib/api';
import Header from '../components/common/header';
import Category from '../components/common/Category';
import Title from '../components/detail/Title';


const MainWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

section{
    width: 100%;
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
const MainFooter = styled.div`
display: flex;
align-items: center;
justify-content: center;
    height: 300px;

`;

const ButtonMain = styled.div` 
button{
    background: #383535;
    width: 400px;
    height: 102px;
    font-size: 32px;
    text-align: center;
    font-weight: 700;
    color: white;
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
            <Header />
            <Category />
            <Title />
            <section>
                {articleData &&
                    articleData.map(article => <Card
                        key={article.id}
                        title={article.title}
                        date={article.date}
                        category={article.category}
                        summary={article.summary} />)}
            </section>
            <MainFooter>
                <ButtonMain>
                    <button>뉴스레터 무료로 구독하기</button>
                </ButtonMain>
            </MainFooter>
        </MainWrap>
    );
}

export default MainPage;
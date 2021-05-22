import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
    position: absolute;
    width: 1920px;
    height: 1485px;
    background: #E5E5E5;
    align-item: center;
`;

const ArticleTemplate = styled.div`
    width: 1201px;
    height: 1320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Intro = styled.div`
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
`;

const Subtitle = styled.div`
    margin-top: 150px;
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
`;

const Content = styled.div`
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
`;

const ArticleFooter = styled.div`
    margin-top: 1405px;
    display: flex;
    height: 394px;
    width: 100%;
    border-top: solid 1px;
    background: #E5E5E5;
`;

const ButtonArticle = styled.div`
    width: 400px;
    height: 102px;
    left: 760px;
    top: 2242px;          
    background: #383535;
    margin-top: 802px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;
const Article = () => {
    return (
        <ArticleContainer>
            <ArticleTemplate>
                <Intro>‘지구의 허파’로 불려온 브라질의 거대한 아마존이 더 이상 제 역할을 할 수 없다는 얘기가 흘러나오고 있어요. 상황이 심각하다 보니 전 세계가 나서 “아마존을 지키자!”며 브라질 정부를 압박하는 중이라고.🌳</Intro>
                <Subtitle>뭐? 얼마나 심각한 거야?</Subtitle>
                <Content>원래 지구의 산소 20% 이상을 만들던 ‘산소 공장’이었는데, 이젠 이산화탄소를 쭉쭉 내뿜고 있어요 💨. 이산화탄소는 기후위기의 가장 중요한 원인 중 하나라, 많이 나올수록 안 좋아요. 아마존 열대우림의 약 60%를 차지하는 브라질 아마존은 2010년부터 2019년까지 166억 톤의 이산화탄소를 내뿜었는데요. 같은 기간 빨아들인 탄소량은 139억 톤밖에 안 돼요. 숲에 불이 나는 일도 잦아지고, 사람들이 나무를 막 베어버리는 바람에 산림이 황폐해지면서 벌어진 일이에요. 가뭄도 심해지고 있고요.</Content>
                <Subtitle>어떡하면 좋아, 왜 이렇게까지 됐어?</Subtitle>
                <Content>브라질 자이르 보우소나루 대통령이 개발을 더 중요하게 생각하기 때문이에요: “환경보호단체는 암 덩어리야!” 국제사회가 한푼 두푼 모아 만든 아마존 기금도 안 쓰겠다고 닫아버리고, 규제도 팍팍 없앴어요. 그러다 보니 무단으로 나무를 베거나 금을 캔다고 파헤치는 일도 많아져서, 숲은 엉망이 됐어요. 연구에 따르면 보우소나루 대통령이 권력을 잡은 지난 2년간, 화재와 벌채로 망가진 숲의 면적이 4배 가까이 증가했을 정도라고. </Content>
                <Subtitle>누가 좀 말려야 할 텐데...</Subtitle>
                <Content>
안 그래도 세계 곳곳에서 팔 걷어붙이고 말리는 중이에요. 
<br />
<br />
너희 꺼 안 사 ❌:  지난 5월 5일에는 영국을 포함한 유럽의 대형 슈퍼마켓과 식료품을 만드는 업체들이 공개 편지를 보냈어요: “열대우림 마음대로 개발하는 법안을 계속 추진하면, 너네 물건 안 산다!” 사실 이렇게 경고하는 게 원데이 투데이는 아니에요. 작년 9월에도 독일·덴마크·프랑스 등 유럽 8개 나라가 똑같은 경고를 한 적 있어요.
<br />
<br />
너희 안 끼워줘 ❌:  브라질은 환경 이슈 때문에 4년째 OECD에 가입하지 못하고 있어요. 국제인권단체를 중심으로 “아마존을 보호한다는 의지를 보여야만 가입시켜줄 수 있다!”고 주장해요.
<br />
<br />
보우소나루 대통령은 지난달 기후정상회의에서 “2030년까지 아마존 무단 벌채 끝내고 2050년엔 탄소 중립을 해낼게. 대신 우리나라에 돈 좀 줘!”라고 요구했는데요. 회의 끝나자마자 국내 환경 예산을 팍 줄인 게 알려지면서 
‘쟤네 진짜 보호하겠다는 거야?’ 하는 의심이 생기고 있어요. </Content>
            </ArticleTemplate>
            <ArticleFooter>
                <ButtonArticle>
                    <button>다른 기사 보러가기</button>
                </ButtonArticle>
            </ArticleFooter>
        </ArticleContainer>
    );
}

export default Article;
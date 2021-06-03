import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';


const CardWrap = styled.div`
border: 0.07rem solid #000000;
display: flex;
flex-direction: column;
max-width:300px;
`;
const CardHeader = styled.div`
background-color:#FB7800;
border-bottom: 0.07rem solid #000000;
height: 7rem;
padding:3% 0% 1% 3%;

.icon{
    font-size: 1.5rem;
    padding: 3%;
}
.category,
.title{
    display: block;
    margin-left: 3%;
}
.category{
    font-size: 0.9rem;
}
.title{
    font-weight: 600;
    font-size: 1.1em;
    display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
`;
const CardMain = styled.div`
display: flex;
flex-direction: column;
height: 270px;
.summary{
    padding: 5%;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

`;

function Card({ title, date, summary, category, history }) {


    return ( //Card 쿨릭시 해당 내용 Aricle 기사로 이동
        <CardWrap onClick={() => title === "아마존 열대우림, 파괴되는 중" && history.push('/article')} >
            <CardHeader>
                <div className='icon' >🌳</div>
                <span className='category'>{category}</span>
                <span className='title'>{title}</span>
            </CardHeader>
            <CardMain>
                <p className='summary'>{summary}< br /><span className='date' >{date}</span></p>
            </CardMain>
        </CardWrap>


    );
};

export default withRouter(Card);
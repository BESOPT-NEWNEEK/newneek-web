import React from 'react';
import styled from 'styled-components';

const TitleTemplateBlock = styled.div`
  margin-top: 335px;
 // display: flex;
 width: 1920px;
  height: 320px;
  background: #FB7800;
  border: solid 1px;
`;

const Category = styled.div`
    margin-top: 54px;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    font-style: normal; 
    `;
const Title = styled.div`
    margin-top: 26px;
    text-align: center;
    font-size: 48px;
    font-weight: 900;
    font-style: normal;
    `;
const Date = styled.div`
    margin-top: 27px;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    font-style: normal;

`;

const ActivityTemplate = () => {
  return (
  <TitleTemplateBlock>  
      <Category>환경 에너지</Category>
      <Title>아마존 열대우림, 파괴되는 중</Title>
      <Date>2021/05/12</Date>
  </TitleTemplateBlock>
  );
}

export default ActivityTemplate;

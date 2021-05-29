import React, { useState } from 'react';
import styled from 'styled-components';

const Category = () => {
    const [category, setCategory] = useState("국내정치");
    const onClickCategory = (e) => {
        const targrt = e.currentTarget.getAttribute('value');
        setCategory(targrt);
    }

    return (
        <CategoryWrapper>
            <CategoryInner>
                <CategoryBtn value="국내정치" onClick={onClickCategory} category={category}>국내정치</CategoryBtn>
                <CategoryBtn value="국제·외교" onClick={onClickCategory} category={category}>국제·외교</CategoryBtn>
                <CategoryBtn value="경제" onClick={onClickCategory} category={category}>경제</CategoryBtn>
                <CategoryBtn value="노동·일" onClick={onClickCategory} category={category}>노동·일</CategoryBtn>
                <CategoryBtn value="인권" onClick={onClickCategory} category={category}>인권</CategoryBtn>
                <CategoryBtn value="테크" onClick={onClickCategory} category={category}>테크</CategoryBtn>
                <CategoryBtn value="환경·에너지" onClick={onClickCategory} category={category}>환경·에너지</CategoryBtn>
            </CategoryInner>
        </CategoryWrapper>
    );
};
export default Category;

const CategoryWrapper = styled.nav`
  height: 120px;
  background-color:white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  overflow: scroll;
`

const CategoryInner = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  @media screen and (max-width:1200px){
    width: 990px;
  }
  @media screen and (max-width:990px){
    width: 768px;
  }
  @media screen and (max-width:768px){
    width: 500px;
  }
`
const CategoryBtn = styled.span`
  width: 180px;
  height: 100%;
  font-size: 32px;
  font-weight: 500;
  background-color:none;
  display: flex ;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top: ${(props) => props.category === props.value && "5px solid orange"};
  `
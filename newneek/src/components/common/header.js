import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const Header = () => {
  return (
    <Responsive>
      <HeaderWapper>
        <span>시발</span>
        <HeaderTitle>NEWNEEK</HeaderTitle>
        <span>야발</span>
      </HeaderWapper>
    </Responsive>
  );
};

export default Header;

const HeaderWapper = styled.header`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;
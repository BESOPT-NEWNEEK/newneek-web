import React from 'react';
import styled from 'styled-components';
const Responsive = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );

};

export default Responsive;

const Container = styled.div`
  width:100%;
  max-width: 1200px;
  height: 215px;
  margin: 0 auto;
  @media screen and (max-width: 1200px){
    max-width: 990px;
  };
  @media screen and (max-width:990px){
    max-width: 768px;
  }
  @media screen and (max-width:768px){
    max-width: 500px;
  }
  @media screen and (max-width:500px){
    padding: 0 16px;
  }
`;
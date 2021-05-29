
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';
import Logo from '../../assets/Logo.svg'
import UserIcon from '../../assets/UserIcon.svg'
import SerachIcon from '../../assets/SerachIcon.svg'

const Header = () => {
    return (
        <Responsive>
            <HeaderWapper>
                <img src={UserIcon} />
                <Link to='/'>
                    <img src={Logo} />
                </Link>
                <img src={SerachIcon} />
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

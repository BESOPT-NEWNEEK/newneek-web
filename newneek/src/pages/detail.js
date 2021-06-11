import React from 'react';
import { TitleTemplate, Article } from '../components';
import Header from '../components/common/header';
import Category from '../components/common/Category';

const DetailPage = () => {
    return (
        <>
            <Header />
            <Category />
            <TitleTemplate />
            <Article />
        </>
    );
}

export default DetailPage;


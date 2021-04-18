import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderBody from '../HeaderBody/HeaderBody';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HeaderBody></HeaderBody>
        </div>
    );
};

export default Header;
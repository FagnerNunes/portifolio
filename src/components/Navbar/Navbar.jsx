import React, { useState } from 'react';
import img_logo from '../../assets/icons/logo.svg';
import {
    HeaderContainer,
    NavContainer,
    Logo,
    HamburgerIcon,
    Nav,
    NavList,
    LiNav,
} from './styled';

import { navigation } from './navigation';

function Header({ indicePage }) {
    const [openNav, setOpenNav] = useState(false);

    const handleClickMenuHamburguer = () => setOpenNav(!openNav);

    return (
        <HeaderContainer>

            <NavContainer>
                <Logo src={img_logo} alt="logo-fagner" />
                <HamburgerIcon
                    onClick={handleClickMenuHamburguer}
                    open={openNav}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F2F2F2"
                    className="w-6 h-6"
                >
                    {openNav === false ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    )}
                </HamburgerIcon>

                <Nav open={openNav}>

                    <NavList pageatual={indicePage}>
                        {
                            navigation.map((el, index) => (
                                <LiNav key={index} as="li" bg_after={el.colorAfter}>
                                    {el.titleNav}
                                </LiNav>
                            ))
                        }
                    </NavList>
                </Nav>
            </NavContainer>

        </HeaderContainer>
    );
}

export default Header;

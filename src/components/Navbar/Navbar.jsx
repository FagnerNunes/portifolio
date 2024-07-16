import React, { useState } from 'react';
import img_logo from '../../assets/icons/logo.svg';
import '../../assets/styles/animations.scss';
import {
    HeaderContainer,
    NavContainer,
    Logo,
    HamburgerIcon,
    Nav,
    NavList,
    LiNav,
} from './Styled';

function Header() {
    const [openNav, setOpenNav] = useState(false);

    const navigation = [
        { titleNav: 'Home', colorAfter: '#F1F1F1' },
        { titleNav: 'Sobre mim', colorAfter: '#C25D00' },
        { titleNav: 'Habilidades', colorAfter: '#7000C9' },
        { titleNav: 'Projetos', colorAfter: '#1B4881' },
        { titleNav: 'Freelancers', colorAfter: '#0A5A2C' },
        { titleNav: 'Contato', colorAfter: '#C6A01A' }
    ];

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
            </NavContainer>

            <Nav open={openNav}>
                <NavList>
                    {
                        navigation.map((el, index) => (
                            <LiNav key={index} as="li" bg_after={el.colorAfter}>
                                {el.titleNav}
                            </LiNav>
                        ))
                    }
                </NavList>
            </Nav>

        </HeaderContainer>
    );
}

export default Header;

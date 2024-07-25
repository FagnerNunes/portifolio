import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #222;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;

    @media (min-width: 1024px) {
        background: none;
    }
`;

export const NavContainer = styled.div`
    align-items: center;
    border-bottom: 1px groove rgba(255, 255, 255, 0.4);
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding-inline: 20px;
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 1024px) {
        border: none;
        flex-direction: row;
        padding: 4rem;
        margin: 0 auto;
        max-width: 1400px;
    }
`;

export const Logo = styled.img`
    object-fit: cover;
    height: 50px;
    width: 150px;
`;

export const HamburgerIcon = styled.svg`
    width: 40px;
    transition: transform 0.3s ease;
    transform: ${props => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const Nav = styled.nav`
    background-color: rgba(17, 17, 17, 0.98);
    border-radius: 0 0 25px 25px;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    padding-top: 7rem;
    position: absolute;
    left: 0;
    top: ${props => (props.open ? '0' : '-700%')};
    transition: 0.7s;
    width: 100vw;
    z-index: -1;

    @media (min-width: 1024px) {
        background : none;
        padding: 0;
        position: static;
        width: auto;
    }
`;

export const NavList = styled.ul`
    color: #f1f1f1;
    display: flex;
    flex-direction: column;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    list-style-type: none;
    width: 100%;

    
    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 3rem;

        li:nth-child(${props => props.pageatual + 1})::after {
            width: 100%;
        }
    }
    `;

export const LiNav = styled.li`
    padding: 1rem;
    position: relative;
    width: 100%;
    
    &:active {
        background-color: rgba(255, 255, 255, .1);
    }
    
    &::after {
        background-color: ${(props) => props.bg_after || '#F1F1F1'};
        content: '';
        position: absolute;
        bottom: 12px;
        left: 1rem;
        width: 35px;
        height: 1.5px;
    }

    @media (min-width: 1024px) {
        cursor: pointer;
        padding: 0;
        width: auto;

        &::after {
            content: '';
            bottom: -.3rem;
            height: 2px;
            left: 0;
            transition: .35s;
            width: 0%;
        }   
        
        &:hover&::after {
            width: 100%;
        }

    }
`

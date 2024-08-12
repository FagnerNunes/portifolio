import styled from "styled-components";

export const ContainerTecnologias = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.3s;
    height: 100%;
    width: 100%;

    svg {
        color: #fff;
        font-size: 3rem;
    }
`;

export const CardsProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #172a53;
    box-shadow: 0 0 10px 0.3px rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    width: 100%;
    flex-shrink: 0;
    transition: 0.3s;

    figure {
        position: relative;
        max-width: 100%;

        &:hover ${ContainerTecnologias} {
            box-shadow: 0 0 10px 2px rgba(37, 98, 191, 0.25);
            border-radius: 0.4rem;
            opacity: 1;
        }

        img {
            border-radius: 0.5rem;
            min-height: 180px;
            width: 100%;
            object-fit: cover;
        }
    }

    @media (min-width: 850px) and (max-width: 1023px) {
        flex-direction: row;
        gap: 2rem;

        figure img {
            height: 280px;
            width: 380px;
        }
    }

    @media (min-width: 1024px) {
        position: relative;
        width: 350px;

        img {
            height: auto;
        }

        &:hover::before {
            height: 100%;
        }

        &::before {
            content: "";
            position: absolute;
            background-image: linear-gradient(
                to bottom,
                rgba(254, 255, 214, 0.06),
                rgba(255, 255, 255, 0.02),
                rgba(255, 255, 255, 0)
            );
            height: 0;
            transition: height .4s ease-in-out;
            left: 0;
            width: 100%;
            z-index: 0;
            bottom: 0;
            border-radius: 0.7rem;
        }
    }
`;

export const Conteudo = styled.div`
    color: #fff;
    font-family: "Fira Code", monospace;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    position: relative;

    p {
        font-weight: lighter;
    }

    a {
        align-items: center;
        display: flex;
        gap: 0.4rem;
        color: #eee;
        opacity: 0.8;
        max-width: 250px;

        &:hover {
            color: #fff;
            opacity: 1;
        }
    }

    @media (min-width: 1024px) {

        h2 {
            font-size: 1.2rem;
        }
        
        p, a {
            font-size: .9rem;
        }

    }
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media (min-width: 1024px) {
        flex-direction: row;
        overflow-x: auto;
        gap: 1.4rem;

        &:active {
            cursor: grabbing;
        }
    }

`;

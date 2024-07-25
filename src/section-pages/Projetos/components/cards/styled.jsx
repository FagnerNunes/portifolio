import styled from 'styled-components'

export const ContainerTecnologias = styled.div`
    background-color: rgba(0, 0, 0, .9);
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all .3s;
    height: 100%;
    width: 100%;

    svg {
        color: #fff;
        font-size: 3rem;
    }
`

export const Conteudo = styled.div`
    color: #fff;
    font-family: 'Fira Code', monospace;
    display: flex;
    flex-direction: column;
    gap: .7rem;
    position: relative;

    p {
        font-weight: lighter;
    }

    a {
        align-items: center;
        display: flex;
        gap: .4rem;
        color: #EEE;
        opacity: .8;
        max-width: 250px;

        &:hover {
            color: #fff;
            opacity: 1;
        }
    }
`

export const CardsProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #172a53;
    box-shadow: 0 0 10px .3px rgba(0, 0, 0, .1);
    border-radius: .7rem;

    figure {
        position: relative;
        max-width: 400px;
        
        &:hover ${ContainerTecnologias} {
            box-shadow: 0 0 10px 2px rgba(37, 98, 191, .25);
            opacity: 1;
        }

        img {
            border-radius: .5rem;
            min-height: 180px;
            width: 100%;
            object-fit: cover;
        }
    }

    @media (min-width: 1024px){
        width: 380px;
    }
`

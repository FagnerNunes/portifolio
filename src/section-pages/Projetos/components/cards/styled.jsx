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
    gap: .5rem;
    position: relative;

    p {
        font-weight: lighter;
    }
`

export const CardsProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block: 1rem;

    figure {
        position: relative;
        max-width: 400px;
        
        &:hover ${ContainerTecnologias} {
            box-shadow: 0 0 10px 2px rgba(37, 98, 191, .25);
            opacity: 1;
        }

        img {
            max-width: 100%;
        }
    }
`

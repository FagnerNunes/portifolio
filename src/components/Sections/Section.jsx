import styled from 'styled-components'

export const SectionPrincipal = styled.div`
    background-image: url(${props => props.bgImage});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${props => props.height ?? 'auto'};
    padding-block: 80px;
    position: relative;
    width: 100vw;
    z-index: 1;
`;

export const Overlay = styled.div`
    filter: brightness(1);
    background-color: ${props => props.bg ?? 'rgba(0, 0, 0, 0.4)'};
    /* background-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%); */
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
`;

export const Title = styled.h3`
    color: #fff;
    font-family: 'Fira Code', monospace;
    font-size: 1.5rem;
`

export const Text = styled.p`
    color: #fff;
`
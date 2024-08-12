import styled from 'styled-components'

const gradient = `linear-gradient(
    180deg,
    hsl(240deg 90% 16%) 0%,
    hsl(234deg 100% 14%) 11%,
    hsl(232deg 100% 14%) 22%,
    hsl(229deg 100% 13%) 33%,
    hsl(227deg 100% 12%) 44%,
    hsl(226deg 100% 11%) 56%,
    hsl(224deg 100% 10%) 67%,
    hsl(221deg 100% 9%) 78%,
    hsl(219deg 96% 8%) 89%,
    hsl(219deg 84% 7%) 100%)
`

export const SectionPrincipal = styled.div`
    background-image: ${props => props.bg_image ? `url(${props.bg_image})` : gradient};
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-block: 80px;
    position: relative;
    height: auto;
    width: 100%;
    z-index: 1;

    @media (min-width: 1024px) {
        display: grid;
        max-height: 100vh;
        place-items: center;
        width: 100vw;
    }
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

    @media (min-width: 1024px){
        background-color: ${props => props.bg ?? 'rgba(0, 0, 0, 0.6)'};
    }
`;

export const Title = styled.h3`
    color: #fff;
    font-family: 'Fira Code', monospace;
    font-size: 1.5rem;
`

export const Text = styled.p`
    color: #fff;
`
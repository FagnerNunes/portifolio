import styled from 'styled-components'

export const ContentProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 2rem;

    @media (min-width: 1024px){

        h3 {
            margin-top: 4rem;
            width: 100%;
            position: relative;
        }

        h3::after {
            content: "Clique e arraste para mover o carrossel.";
            font-size: .8rem;
            font-weight: 300;
            position: absolute;
            height: auto;
            left: 0;
            width: auto;
            opacity: .7;
            bottom: -1.2rem;
        }

        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1330px;
        width: 100%;
    }
`
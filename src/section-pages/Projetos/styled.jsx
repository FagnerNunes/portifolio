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
        }

        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1330px;
    }
`
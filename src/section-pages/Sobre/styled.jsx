import styled from 'styled-components'

export const ContentSobre = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 2rem;

    .sobre-mim {
        color: #fff;
        font-family: 'Fira Code', monospace;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        padding-bottom: 3rem;
    }

    @media (min-width: 1024px){
        margin-top: 4rem;
        max-width: 1330px;

        h3 {
            display: none;
        }

        p {
            max-width: 700px;
        }
    }

`
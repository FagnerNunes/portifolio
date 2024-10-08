import styled from 'styled-components'

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100%;

    @media (min-width: 1024px){
        height: 100%;
        flex-direction: row;
        overflow-y: hidden;

        & > div {
            flex: 0 0 100vw;
        }
    }
`
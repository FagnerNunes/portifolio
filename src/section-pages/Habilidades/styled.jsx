import styled from 'styled-components'

export const ContentHabilidades = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Fira Code', monospace;
    gap: 2rem;
    padding-inline: 2rem;

    @media (min-width: 1024px){
        max-width: 1330px;
    }
`

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const BoxIcon = styled.div`
    align-items: center;
    background-color: #7000C9;
    border-radius: 1.5rem;
    box-shadow: 0 0 10px .3px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    gap: .2rem;
    justify-content: center;
    padding: 1rem 1.5rem;
    transition: .3s;
    
    @media (max-width: 400px) {
        width: 100%;
    }

    svg {
        color: #fff;
        font-size: 5rem;
    }
    
    span {
        color: #fff;
        font-size: .8rem;
    }

    @media (min-width: 1024px){
        
        &:hover {
            box-shadow: 0 0 7px .3px rgba(250, 250, 250, .2);
            transform: scale(1.1) rotate(4deg);
        }
    }
`
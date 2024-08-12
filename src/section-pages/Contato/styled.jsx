import styled from 'styled-components'

export const ContentContato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    padding-inline: 2rem;

    @media (min-width: 1220px){
        flex-direction: row;
        max-width: 1330px;
    }
`
export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    max-width: 700px;
    width: 100%;

    input, textarea, button {
        font-family: 'Fira Code', monospace;
        font-size: .9rem;
        font-weight: 500;
        border: 1px solid transparent;
        border-radius: .4rem;
        box-shadow: 0 0 10px .3px rgba(255, 255, 255, 0.1);
        padding: 1rem;
        outline: none;
        width: 100%;

        &:focus, &:hover {
            border: 1px solid rgba(92, 92, 92, 0.9);
            box-shadow: 0 0 10px .3px rgba(255, 255, 255, 0.25);
        }
    }

    input, textarea {
        background-color: rgba(250, 250, 250, .85);

        &:hover, &:focus {
            background-color: rgba(250, 250, 250, .90);
        }
    }

    button {
        background-color: rgba(199, 153, 2, .85);
        color: #f1f1f1;
        padding: 1rem;

        &:hover, &:focus {
            background-color: rgba(199, 153, 2, 1);
            border-color: rgba(199, 153, 2, 1);
            cursor: pointer;
        }
    }

    @media (min-width: 1024px){
        width: 700px;
    }
`

export const ContentInfos = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2.5rem;
    margin: 0 auto;
    max-width: 700px;
    padding-block: 2rem 0;

    .circle-info {
        align-items: center;
        display: flex;
        gap: 1rem;
        text-decoration: none;

        &:hover {
            svg:first-child {
                display: none;
            }

            svg:nth-child(2) {
                display: block;
                font-size: 2rem;
            }
        }
    }

    svg {
        color: rgba(250, 194, 9, .8);
        font-size: 2rem;

        &:nth-child(2) {
            display: none;
        }
    }

    p {
        font-family: 'Fira Code', monospace;
        font-size: .8rem;
        color: #F9F9F9;
    }

    @media (min-width: 1201px){
        border: 3px solid #202020;
        border-radius: .4rem;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 3.5rem;
        margin: auto;
        margin-top: 3rem;
        margin-left: 1rem;

        &:hover {
            background-color: rgba(250, 194, 9, .01);
            transition: .3s;
        }
    }
`

export const BoxMessage = styled.div`
    border-radius: 7px;
    bottom: -50px;

    p {
        color: #999;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: .5rem 1rem;
    }
`


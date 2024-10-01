import styled from "styled-components";

export const ContentBtns = styled.div`
    display: none;
    align-items: center;
    gap: 1.4rem;
    justify-content: flex-end;
    position: absolute;
    bottom: 10px;
    width: 100%;

    button {
        background-color: #313131;
        border: 1px groove #222;
        cursor: pointer;
        padding: 0.5rem;
        transition: all.3s;

        &:disabled {
            background-color: rgba(49, 49, 49, 0.7);
            opacity: 0.8;
            cursor: default;

            & svg {
                opacity: 0.6;
            }
        }

        svg {
            color: ${(props) => props.colorPrimary ?? "#c25d00"};
            font-size: 1rem;
        }

        &:hover:not(:disabled) {
            background-color: ${(props) => props.colorPrimary ?? "#c25d00"};

            svg {
                color: #313131;
            }
        }
    }

    @media (min-width: 1024px) {
        display: flex;
    }

    @media (max-height: 800px) {
        align-self: flex-start;
        margin-top: 2.8rem;
        top: 0;
    }
`;

export const ContentCarrossel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (min-width: 1024px) {
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        height: 400px;
        position: relative;

        & > .container-trajetoria {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s;
        }

        &
            > .container-trajetoria:nth-child(
                ${(props) => props.trajetoria_atual + 1 ?? 1}
            ) {
            left: 0;
            visibility: visible;
            opacity: 1;
        }
    }
`;

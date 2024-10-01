import styled from "styled-components";

export const ConteudoDoAno = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: "Fira Code", monospace;
    gap: 4rem;
    width: 100%;

    @media (min-width: 1024px) {
        gap: 2rem;
        align-items: flex-start;
    }
`;

export const Circle = styled.div`
    background-color: #fff;
    border: 4px solid #0094ff;
    border-radius: 100%;
    box-shadow: 0 0 10px 0.3px rgba(0, 0, 0, 0.3);
    font-size: 2rem;
    font-weight: bold;
    padding: 2.4rem 1.6rem;
    position: relative;

    &::before {
        content: "";
        background-color: #c25d00;
        height: 300px;
        left: 49%;
        position: absolute;
        top: 0;
        width: 6px;
        z-index: -1;
    }

    @media (min-width: 1024px) {
        &::before {
            left: -100px;
            top: 49%;
            height: 6px;
            width: 80vw;
        }
    }
`;

export const Card = styled.div`
    background-color: #313131;
    border-radius: 20px;
    box-shadow: 0 0 10px 0.3px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    gap: 3rem;
    justify-content: center;
    padding: 2rem 1rem;
    width: 100%;

    p {
        color: #fff;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .data {
            align-items: center;
            display: flex;
            gap: 0.2rem;
        }

        p.descricao {
            font-size: 1rem;
            padding-left: 2rem;
        }
    }

    @media (min-width: 1024px) {
        background: none;
        box-shadow: none;
        flex-direction: row;
        justify-content: flex-start;
    }
`;

import { styled } from "styled-components";

export const Header = styled("header")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    span {
        font-size: 32px;
        font-family: "Space Grotesk";
        font-weight: 700;
        letter-spacing: -0.444px;
        &:hover {
            color: #4ee1a0;
            cursor: pointer;
        }
    }
    ul {
        display: flex;

        gap: 10px;
    }
    svg {
        font-size: 35px;
    }

    button {
        background: #fff;
        border: none;
        padding: 10px;
        font-family: "Space Grotesk";
        font-size: 20px;
        border-radius: 10px;
    }

    @media (width <= 430px) {
        flex-direction: column;
        gap: 20px;
        ul {
            justify-content: center;
            align-items: center;
            padding: 0;
        }
    }
`;
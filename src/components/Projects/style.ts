import styled from "styled-components";


export const ProjectList = styled("section")`
    display: flex;
    flex-direction: column;
    padding: 30px;
    min-height: 100vh;
    h2 {
        font-family: Space Grotesk;
        font-size: 70px;
        margin-bottom: 20px;
    }
    .projects {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        gap: 30px;
    }
    .project {
        border-bottom: 1px solid #fff;
    }
    .project-image {
        position: relative;
        margin-bottom: 20px;
    }
    .project-image .project-links {
        display: none;
        text-align: center;
    }
    .project-image:hover > .project-links {
        display: flex;
        flex-direction: column;
        gap: 25px;
        position: absolute;
        transform: translate(50%, -250%);
    }
    .project-image:hover {
        opacity: 0.7;
        background: #000;
    }
    .project-links a {
        font-family: Space Grotesk;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 162.5% */
        letter-spacing: 2.286px;
        border-bottom: 2px solid #4ee1a0;
        text-transform: uppercase;
        &:hover {
            color: #4ee1a0;
            cursor: pointer;
        }
    }
    span {
        font-family: Space Grotesk;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
    }
    .languages {
        display: flex;
        gap: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (max-width: 1024px) {
        .projects {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
    }
    @media (max-width: 768px) {
        margin: 30px;
        align-items: center;
        h2 {
            font-size: 60px;
        }
        .projects {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 20px;
        }
        .projects li {
            font-size: 30px;
        }
        /* .project-image:hover > .project-links {
            top: 90px;
            left: 80px;
        } */
    }
`;

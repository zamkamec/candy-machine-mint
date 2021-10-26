import styled from "styled-components";
import BgPattern from "../../images/BgPattern4.png"

export const FAQSection = styled.div`
    align-items: center;
    position: relative;
    background: #fff;
    background-image: url(${BgPattern});
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1400px;
    }
`;
export const FAQPart = styled.div`
    position:relative;
    width: 100%;

`;

export const FAQContainer = styled.div`
    position: absolute;
    top: 10%;
`;

export const FAQWrap = styled.div`
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h2 {
        padding: 1.5rem;
        font-size: 1rem;
    }
    span {
        margin-right: 1.5rem;
        margin-left: 1.5rem;
    }
`;

export const Dropdown = styled.div`
    background: #ff8601;
    color: #000;
    max-width: 1150px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-left: 25px;

    p {
        padding: 1rem;
        padding-left: 1.5rem;
        font-size: 1rem;
        line-height: 150%;
    }
`;

export const FAQH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    text-align: center;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
import styled from "styled-components";
import BgPattern from "../../images/BgPattern3.png"

export const RoadmapContainer = styled.div`
    height: 3700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    background-image: url(${BgPattern});

    @media screen and (max-width: 768px) {
        height: 4000px;
    }

    @media screen and (max-width: 480px) {
        height: 5400px;
    }
`
export const RoadmapH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const RoadmapWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding:0 50px;

    @media screen and (max-width: 1000px) {
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`

export const RoadmapCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 950px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const RoadmapCard2 = styled.div`
    background: gray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* max-height: 340px; */
    min-width: 350px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`
export const RoadmapTitleCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* max-height: 340px; */
    min-width: 250px;
    margin: 20px;
    margin-bottom: 0px;

    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const RoadmapTitleCard2 = styled.div`
    background: gray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* max-height: 340px; */
    min-width: 250px;
    margin: 20px;
    margin-bottom: 0px;

    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
`

export const RoadmapH2 = styled.h2`
    font-size: 1rem;
    margin: 10px;
    text-align: left;
`

export const RoadmapP = styled.p`
    font-size: 0.7rem;
    text-align: left;
    text-decoration: none;
    line-height: 20px
`

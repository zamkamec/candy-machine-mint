import React from 'react';
import PPC from '../../images/PPC.png';
import PPG from '../../images/PPG.png';
import PPK from '../../images/PPK.png';
import PPT from '../../images/PPT.png';
import PPS from '../../images/PPS.png';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, ServicesCard } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Team</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={PPC}/>
                    <ServicesH2>Sol O' Calcium</ServicesH2>
                    <ServicesP>Artist/Developer</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={PPS}/>
                    <ServicesH2>Sol O' Doscope</ServicesH2>
                    <ServicesP>Project Lead</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={PPT}/>
                    <ServicesH2>Sol O' Tension</ServicesH2>
                    <ServicesP>Project Lead</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={PPG}/>
                    <ServicesH2>Sol O' Gloom</ServicesH2>
                    <ServicesP>Community Manager</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={PPK}/>
                    <ServicesH2>Sol O' K</ServicesH2>
                    <ServicesP>Technical Advisor</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services

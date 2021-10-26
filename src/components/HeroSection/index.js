import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import BgImageStatic from '../../images/SiteBgStatic.png'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                <ImgBg src={BgImageStatic} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Sol O' Lanters</HeroH1>
                <HeroP>
                Spooktober's very own Solana based randomly generated NFT project! 
                </HeroP>
                <HeroBtnWrapper>
                <Button href="https://discord.com/invite/mSyJt5FV3a" target="_blank" aria-label="Discord" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Join Us
                </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

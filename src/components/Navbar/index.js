import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {FaDiscord, FaTwitter} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink, 
    SocialIcons, 
    SocialIconLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color : '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> Sol O'Lanterns </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="FAQ"smooth={true} duration={500} spy={true} exact='true' offset={-80}>FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                            <NavLinks>
                            <SocialIconLink onClick={()=> window.open("//twitter.com/SolOLanterns", "_blank")}>
                                <FaTwitter />
                            </SocialIconLink>
                            </NavLinks>
                            <NavLinks>
                            <SocialIconLink onClick={()=> window.open("//discord.com/invite/mSyJt5FV3a", "_blank")}>
                                <FaDiscord />
                            </SocialIconLink>
                            </NavLinks>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;

import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Roadmap from '../components/Roadmap';
import { homeObjOne, homeObjTwo , homeObjThree } from '../components/InfoSection/Data';
import FAQ from '../components/FAQ';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Roadmap />
        <FAQ />
        <Services />           
        <Footer />
        </>
    )
}

export default Home

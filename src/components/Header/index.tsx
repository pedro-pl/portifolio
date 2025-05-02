import { useEffect, useState } from "react";
import { MobileHeader } from "./components/Mobile";
import { Container } from "./styles";
import { DesktopHeader } from "./components/Desktop";

export function Header(){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
    
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };
    
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return(
        <Container $scrolled={isScrolled}>
            {
                screenWidth < 800 
                    ?
                <MobileHeader />
                    :
                <DesktopHeader />
            }
        </Container>
    )
}
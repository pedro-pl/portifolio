import { useEffect, useState } from "react";
import { MobileHeader } from "./components/Mobile";
import { Container } from "./styles";
import { DesktopHeader } from "./components/Desktop";

export function Header(){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <Container>
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
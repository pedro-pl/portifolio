import { useEffect, useState } from "react";
import { Container } from "./styles";
import { FiMenu } from "react-icons/fi";
import { MobileMenu } from "./MobileMenu";

export function MobileHeader(){
    const [isOpen, setIsOpen] = useState(false);

    function toggleMobileMenu(){
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('lock-scroll');
        } else {
          document.body.classList.remove('lock-scroll');
        }
      
        return () => {
          document.body.classList.remove('lock-scroll');
        };
    }, [isOpen]);

    return(
        <Container>
            <h3>Pedro Lucas</h3>
            <FiMenu size={22} onClick={() => toggleMobileMenu()}/>
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMobileMenu}/>
        </Container>
    )
}
import { FiMenu } from "react-icons/fi"
import { Container } from "./styles"
import { Menu } from "./Menu"
import { useEffect, useState } from "react"

export function Header(){
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
            <Menu isOpen={isOpen} toggleMenu={toggleMobileMenu}/>
        </Container>
    )
}
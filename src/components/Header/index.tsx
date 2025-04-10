import { FiMenu } from "react-icons/fi"
import { Container } from "./styles"

export function Header(){
    return(
        <Container>
            <h3>Pedro Lucas</h3>
            <FiMenu size={22} />
        </Container>
    )
}
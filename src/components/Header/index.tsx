import * as J from './styles'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <J.Container>
                <div>
                    <p>Inicio</p>
                </div>
                <div>
                    <p>Quem Sou</p>
                </div>

                <div>
                    <p>Habilidades</p>
                </div>

                <div>
                    <p>Projetos</p>
                </div>

            <J.ContainerButton>

                    <button>Contato</button>
                    
            </J.ContainerButton>
        </J.Container>
    )
}
import * as J from './styles'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <J.Container>
    <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Inicio</p>
                </div>
            </Link>
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Sobre</p>
                </div>
            </Link>

            <Link to={'/skills'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Tecnologias</p>
                </div>
            </Link>

            <Link to={'/projects'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Projetos</p>
                </div>
            </Link>

            <J.ContainerButton>

                <Link to={'/contato'} style={{ textDecoration: 'none' }}>
                    <button>Contato</button>
                </Link>
            </J.ContainerButton>
        </J.Container>
    )
}
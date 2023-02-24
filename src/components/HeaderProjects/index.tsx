import * as J from './styles'
import { Link } from "react-router-dom";

export default function HeaderProjects() {
    return (
        <J.Container>
    <Link to={'/projects-web'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Web</p>
                </div>
            </Link>
            <Link to={'/projects-mobile'} style={{ textDecoration: 'none' }}>
                <div>
                    <p>Mobile</p>
                </div>
            </Link>
        </J.Container>
    )
}
import * as S from "./styles"
import { Link } from "react-router-dom";

export default function Button() {

    return (
        <S.Container>

            <S.ContainerButton>
                <Link to={'https://github.com/jeymes'} style={{ textDecoration: 'none' }}>
                    <S.ButtonContato>
                            GitHub
                    </S.ButtonContato>
                    </Link>

            </S.ContainerButton>

        </S.Container>
    )
}
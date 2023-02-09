import * as S from "./styles"
import { Link } from "react-router-dom";

export default function Button() {
    return (
        <S.Container>

            <S.ContainerButton>

                    <S.ButtonContato>
                        <a
                        style={{textDecoration: 'none', color: 'white'}} 
                        href="https://github.com/jeymes">
                            GitHub
                            </a>
                    </S.ButtonContato>

            </S.ContainerButton>

        </S.Container>
    )
}
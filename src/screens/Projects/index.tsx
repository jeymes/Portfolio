import HeaderProjects from '../../components/HeaderProjects';
import * as S from './styles';
import Lottie from "lottie-react";
import Dev from '../../assets/developer.json';

export function Projects() {
    return (
        <S.Container>
            <S.SubContainer>

                <HeaderProjects/>

                <S.ContainerListEmpyt>
                    <S.SubContainerListEmpyt>

                        <S.ContainerLottie>
                           <h1>Escolha uma das opções acima!</h1>
                            <Lottie animationData={Dev}
                                loop={true}/>
                        </S.ContainerLottie>
                    </S.SubContainerListEmpyt>

                </S.ContainerListEmpyt>

            </S.SubContainer>
        </S.Container>
    );
}

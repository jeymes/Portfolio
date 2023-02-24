import HeaderProjects from '../../components/HeaderProjects';
import * as S from './styles';
import Lottie from "lottie-react";
import Dev from '../../assets/developer.json';

export function Projects() {
    return (
        <S.Container>
            <S.SubContainer>

                <HeaderProjects/>

                        <S.ContainerLottie>
                            <Lottie animationData={Dev}
                                loop={true}/>
                        </S.ContainerLottie>

            </S.SubContainer>
        </S.Container>
    );
}

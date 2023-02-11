import * as S from './styles'
import Lottie from "lottie-react";
import Dev from '../../assets/about.json';

export default function Contact() {
    return (
        <S.Container>

            <S.SubContainer>

                <S.ContainerContato>
                    <span>
                        <a href="https://api.whatsapp.com/send?phone=5511970754259&text=Ol%C3%A1%2C%20Tudo%20bem%20Jemerson%3F">Whatsapp</a>
                    </span>

                    <span>
                        <a href="https://www.linkedin.com/in/jemerson-sousa-0a595019a/">Linkedin</a>
                    </span>

                    <span>
                        <a href="mailto:jsvpn2017@gmail.com">Gmail</a>
                    </span>

                    <span>
                        <a href="https://github.com/jeymes">Github</a>
                    </span>

                </S.ContainerContato>

                <S.ContainerLottie>
                    <S.Lottie>
                    <Lottie
                  animationData={Dev}
                  loop={true}
                  />
                    </S.Lottie>
                
                </S.ContainerLottie>

            </S.SubContainer>

        </S.Container>
    )
}
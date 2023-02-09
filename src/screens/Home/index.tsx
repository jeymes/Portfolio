import Button from '../../components/Button';
import * as S from './styles';
import Lottie from "lottie-react";
import Dev from '../../assets/dev.json';

export function Home() {
  return (
    <S.Container>
 <S.SubContainer>
<S.Descripion>
        <h1>Developer Front-End Web & Mobile</h1>
        <Button/>
</S.Descripion>

<S.ContainerImg>
   <Lottie
   animationData={Dev}
   loop={true}
   />
</S.ContainerImg>
</S.SubContainer>

    </S.Container>
  );
}
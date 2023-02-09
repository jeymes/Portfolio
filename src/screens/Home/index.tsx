import Button from '../../components/Button';
import * as S from './styles';

import Lottie from "lottie-react";

import Dev from '../../assets/dev.json';

const style = {
  height: 800,
  width: 900,
};

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
  //  style={style}
   />
</S.ContainerImg>

</S.SubContainer>
    </S.Container>
  );
}
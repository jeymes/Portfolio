import * as S  from './styles';
import Lottie from "lottie-react";

type Props = {
    img: any;
    title: string;
}

export function Card({img, title}: Props) {
  return (
    <S.Container>

        <img
         src={img}
        />

        <S.Title>
            {title}
        </S.Title>

    </S.Container>
  );
}
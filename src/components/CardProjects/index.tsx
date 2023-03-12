import { LinkProps } from 'react-router-dom';
import * as S from './styles';

type Props = LinkProps &{
  _id: string
  title: string,
  capa: string,
}


export function CardProjects({title, capa, _id, ...rest}: Props) {
  return (
    <S.Container
    {...rest}
    key={_id}
    style={{ textDecoration: 'none'}}
    >
      <S.ContainerImg>
      <img src={capa} alt="capa" />
      </S.ContainerImg>
      <h1>{title}</h1>
    </S.Container>
  );
}
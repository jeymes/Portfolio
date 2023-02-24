import * as S from './styles';
import { Link } from "react-router-dom";

type Props ={

    title: string;

    video: string;

    link: string;
    titlebutton: string;
}

export function CardProjects({title, video, link, titlebutton}: Props) {
  return (
    <S.Container>
      <h1>{title}</h1>
        <video src={video} controls muted/>


    <Link to={link} style={{ textDecoration: 'none' }}>
        <S.Button>
            {titlebutton}
        </S.Button>
        </Link>



    </S.Container>
  );
}
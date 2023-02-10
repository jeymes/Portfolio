import { CardProjects } from '../../components/CardProjects';
import * as S from './styles';
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <S.Container>
        <S.SubContainer>
            <CardProjects
            title='Aplicativo To save'
            video="/video/tosave.mp4"
            link=' '
            titlebutton='Github'
            />
            
            <CardProjects
            title='Aplicativo Gym'
            video="/video/gym.mp4"
            link='https://github.com/jeymes/Ignite-Gym'
            titlebutton='Github'
            />
            <CardProjects
            title='Aplicativo Teams'
            video="/video/teams.mp4"
            link='https://github.com/jeymes/IgniteTeams'
            titlebutton='Github'
            />
            
            <CardProjects
            title='Aplicativo New Fashion'
            video="/video/newfashion.mp4"
            link='https://github.com/jeymes/New-Fashion'
            titlebutton='Github'
            />

        </S.SubContainer>
    </S.Container>
  );
}
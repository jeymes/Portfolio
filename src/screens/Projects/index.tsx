import { CardProjects } from '../../components/CardProjects';
import * as S from './styles';
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <S.Container>
        <S.SubContainer>

            <CardProjects
            title='Desafio Portfólio Angula'
            video="/video/desafio-portfolio-angula.mp4"
            link='https://github.com/jeymes/desafio-portfolio-angular'
            titlebutton='Github'
            />

            <CardProjects
            title='Aplicativo To save'
            video="/video/tosave.mp4"
            link='https://github.com/jeymes'
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
            <CardProjects
            title='Site Store Cell'
            video="/video/storecell.mp4"
            link='https://github.com/jeymes/Store-Cell'
            titlebutton='Github'
            />
            <CardProjects
            title='Calculadora'
            video="/video/calculadora.mp4"
            link='https://github.com/jeymes/Calculadora'
            titlebutton='Github'
            />

        </S.SubContainer>
    </S.Container>
  );
}
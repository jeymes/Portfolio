import { CardProjects } from '../../components/CardProjects';
import * as S from './styles';

export function ProjectsWeb() {
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
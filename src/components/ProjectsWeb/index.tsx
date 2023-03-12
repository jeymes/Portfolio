import { CardProjects } from '../../components/CardProjects';
import Api from '../../data/api';
import * as S from './styles';

export function ProjectsWeb() {
  return (
    <S.Container>
        <S.SubContainer>

        {Api.web.map((Api) => (
          <CardProjects
          to={`/projectweb/${Api._id}`}
            _id={Api._id}
            capa={Api.capa}
            title={Api.title}
          />
        ))}

        
        </S.SubContainer>
    </S.Container>
  );
}
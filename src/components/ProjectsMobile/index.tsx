import { Link } from 'react-router-dom';
import { CardProjects } from '../../components/CardProjects';
import Api from '../../data/api';
import * as S from './styles';
import { useState } from 'react';

export function ProjectsMobile() {

  return (
    <S.Container>
      <S.SubContainer>

    {Api.mobile.map((Api) => (
      <CardProjects
        to={`/projectmobile/${Api._id}`}
        _id={Api._id}
        capa={Api.capa}
        title={Api.title}
      />
    ))}

      </S.SubContainer>

    </S.Container>
  );
}

import { useParams } from 'react-router-dom';
import * as S from './styles';
import Api from '../../data/api';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

type  ApiProps = {
    _id: string,
    title: string,
    video_url: string,
    capa: string,
    description: string,
    github_url: string,
    tecnologias?: {
       1: string,
       name_1: string,
       2: string,
       name_2: string,
       3: string,
       name_3: string,
     }
}

export function ProjectMobile() {
    const { _id } = useParams();
    
        const newData = Api.mobile.filter((item) => item._id === _id);

    return (
        <S.Container>
            {newData.map((item) => {
                    return (
            <S.SubContainer key={item._id}>
                
                            <S.ContainerVideo>
                                <video src={item.video_url} controls />
                            </S.ContainerVideo>

                            <S.ContainerForm>
                                <h1>
                                    {item.title}
                                </h1>

                                <p>
                                    {item.description}
                                </p>

                                <h3>
                                    Principais Tecnologias
                                </h3>

                                <S.Tecnologias>

                                    <div>
                                    <img src={item.tecnologias?.[1]} alt="" />
                                    <p>{item.tecnologias?.name_1}</p>
                                    </div>

                                    <div>
                                    <img src={item.tecnologias?.[2]} alt="" />
                                    <p>{item.tecnologias?.name_2}</p>
                                    </div>

                                    <div>
                                    <img src={item.tecnologias?.[3]} alt="" />
                                    <p>{item.tecnologias?.name_3}</p>
                                    </div>

                                </S.Tecnologias>

                                <S.ContainerButton>
                                <Link
                                to={item.github_url}
                                >
                                {
                                item.github_url !== 
                                'https://github.com/jeymes' 
                                ? <S.ButtonLink>Github</S.ButtonLink> 
                                : ''
                                }
                                </Link>
                                </S.ContainerButton>
                            </S.ContainerForm>


            </S.SubContainer>
            );
        })}
        </S.Container>
    );
}

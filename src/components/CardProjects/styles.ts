import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 20%;
heigth: 20%;
padding: 20px;
border-radius: 10px;
border: 2px solid ${({ theme }) => theme.COLORS.BUTTON};
box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.BUTTON};
margin-top: 50px;
cursor: pointer;
@media (max-width:500px) {
    width: 90%;
    }

:hover{
box-shadow: 0 0 15px ${({ theme }) => theme.COLORS.SHADOW_BOX};
}

h1{
    text-align: center;
    font-size: 20px;
    font-weigth: 500;
    color: ${({ theme }) => theme.COLORS.TITLE};
    
    @media (max-width:500px) {
    font-size: 25px;

    }
}
`;
export const ContainerImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;

img{
    width: 100%;
    border-radius: 20px;
}
`;
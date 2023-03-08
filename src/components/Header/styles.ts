import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 11vh;
display: flex;
justify-content: space-around;
align-items: center;
border-bottom: 1px solid ${({ theme }) => theme.COLORS.BUTTON};
box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.BUTTON};
background-image: ${({ theme }) => theme.COLORS.BACKGROUND}

p{
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-size: 20px;
    font-weight: 600;

    :hover{
        opacity: 50%;
    }

    @media (max-width: 700px){
        font-size: 15px;
        font-weight: 400px;
    }
    @media (max-width: 450px){
        font-size: 13px;
        font-weight: 0;
    }
}
`;
export const ContainerButton = styled.div`
    
    button{
    padding: 10px 32px;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-size: 20px;
    font-weight: 700;
    background-image: ${({ theme }) => theme.COLORS.BUTTON_GRADIENT};

    :hover{
        opacity: 80%;
        background-image: ${({ theme }) => theme.COLORS.BUTTON_HOVER};

    }
    @media (max-width: 700px){
        padding: 8px 28px;
        font-size: 15px;
    }
    @media (max-width: 450px){
        padding: 5px 20px;
        font-size: 13px;
    }
    }
`;
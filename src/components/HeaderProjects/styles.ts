import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 11vh;
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid ${({ theme }) => theme.COLORS.BUTTON};
box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.BUTTON};
border-radius: 10px;
background-image: ${({ theme }) => theme.COLORS.BACKGROUND};

:hover{
box-shadow: 0 0 15px ${({ theme }) => theme.COLORS.SHADOW_BOX};
}

p{
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-size: 20px;
    font-weight: 700;

    :hover{
        opacity: 50%;
    }

    @media (max-width: 700px){
        font-size: 17px;
    }

}
`;
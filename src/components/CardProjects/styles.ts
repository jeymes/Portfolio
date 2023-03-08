import styled from 'styled-components';

export const Container = styled.div`
justify-content: center;
align-items: center;
width: 40%;
padding: 20px;
border-radius: 10px;
border: 2px solid ${({ theme }) => theme.COLORS.BUTTON};
box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.BUTTON};
margin-top: 50px;

@media (max-width:500px) {
    width: 90%;
    }

:hover{
box-shadow: 0 0 15px ${({ theme }) => theme.COLORS.SHADOW_BOX};
}

h1{
    text-align: center;
    font-size: 30px;
    fdont-weigth: 500;
    color: ${({ theme }) => theme.COLORS.TITLE};

    @media (max-width:500px) {
    font-size: 25px;

    }
}

video{
    width: 100%;
    border-radius: 10px;
}
`;
export const Button = styled.button`
    padding: 15px 100px;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-size: 20px;
    font-weight: 700;
    margin-block: 30px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.BUTTON};

    :hover{
        opacity: 80%;
        background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER};
    }
    @media (max-width:875px) {
        padding: 10px 85px;
        font-size: 25px;
    }
    @media (max-width:840px) {
        padding: 10px 80px;
    }
    @media (max-width:715px) {
        padding: 10px 80px;
    }
    @media (max-width:555px) {
        padding: 10px 50px;
    }
    @media (max-width:430px) {
        padding: 6px 40px;
        margin-block: 30px;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 100%;
`;

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
@media (max-width:400px) {
        flex-direction: column;
    }
`;

export const ButtonContato = styled.button`
    padding: 15px 100px;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-size: 25px;
    font-weight: 700;
    margin-inline:10px;
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
        margin-inline:5px;
    }
    @media (max-width:715px) {
        padding: 10px 80px;
    }
    @media (max-width:555px) {
        margin-inline:3px;
        padding: 10px 50px;
    }
    @media (max-width:430px) {
        padding: 6px 40px;
        margin-block: 10px;
    }
`;
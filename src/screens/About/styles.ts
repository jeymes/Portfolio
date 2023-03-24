import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
margin-top: 80px;
margin-bottom: 50px;
`;
export const SubContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
/* border: 1px solid red;'' */

@media (max-width:500px) {
    justify-content: flex-start;
    height: 100%;
    flex-direction: column;
    }
`;
export const Descripion = styled.div`
display: flex;
width: 100%;
flex-direction: column;
margin-left: 100px;
justify-content: flex-start;
align-items: flex-start;
/* border: 1px solid red; */

@media (max-width:500px) {
    margin-left: 0px;
    }

h2{
    font-size: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.TITLE};

    @media (max-width:840px) {
        font-size: 20px;
        margin-bottom: 50px;
    }
    @media (max-width:420px) {
        font-size: 15px;
    }
}
h1{
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.TITLE};

    @media (max-width:840px) {
        font-size: 30px;
    }
    @media (max-width:420px) {
        font-size: 20px;
    }
}
`;
export const ContainerImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;
/* border: 1px solid red; */

img{
    width: 300px;
    /* background-color: white; */
    border-radius: 50px;
    border: 2px solid ${({ theme }) => theme.COLORS.BUTTON};
    box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.BUTTON};

    @media (max-width:1000px) {
        width: 300px;
    }
    @media (max-width:940px) {
        width: 250px;
    }
    @media (max-width:840px) {
        width: 210px;
        margin-bottom: 30px;
    }
    @media (max-width:430px) {
        width: 200px;
    }
}
`;
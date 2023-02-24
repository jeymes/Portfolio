import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
color: white;
margin-top: 30px;
margin-bottom: 30px;
`;
export const SubContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 90%;
/* border: 1px solid red; */

@media (max-width:500px) {
    justify-content: flex-start;
    height: 100%;
    flex-direction: column;
    }
`;

export const ContainerListEmpyt = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 100%;
color: white;
`;
export const SubContainerListEmpyt = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
/* border: 1px solid red; */

@media (max-width:500px) {
    justify-content: flex-start;
    height: 100%;
    flex-direction: column;
    }
`;

export const ContainerLottie = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid red; */

h1{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 80px;
    margin-top: 30px;

    @media (max-width:840px) {
        font-size: 25px;
    }
    @media (max-width:420px) {
        font-size: 20px;
    }
}
`;
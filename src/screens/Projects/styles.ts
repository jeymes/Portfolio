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

export const ContainerLottie = styled.div`
display: flex;
margin-top: 80px;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
`;
import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
color: white;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
`;
export const SubContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 90%;
/* border: 1px solid red; */

@media (max-width:500px) {
    /* margin-top: 20px; */
    justify-content: flex-start;
    height: 100%;
    flex-direction: column;
    }
`;
export const Descripion = styled.div`
display: flex;
width: 90%;
margin-left: 100px;
justify-content: center;
align-items: flex-start;
flex-direction: column;
/* border: 1px solid red; */

@media (max-width:500px) {
    margin-left: 0px;
    }

h1{
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 80px;

    @media (max-width:840px) {
        font-size: 30px;
        margin-bottom: 50px;
    }
    @media (max-width:420px) {
        font-size: 30px;
    }
}
`;
export const ContainerImg = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
`;
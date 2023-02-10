import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
margin-top: 70px;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );

@media (max-width:600px) {
    margin-top: 30px;
    margin-bottom: 50px;
 }
`;
export const Title = styled.div`
display: flex;
width: 100%;
height: 40px;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
h1{
    color: white;
    width: 100%;
    border-radius: 20px;
    font-size: 40px;
    font-weight: 900;
    align-items: left;
    text-align: center;

    @media (max-width:600px) {
        font-size: 35px;
        }
}
`;

export const SubContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 90%;
width: 90%;
`;

export const Skills = styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;

    @media (max-width:600px) {
        width: 100%;
        margin-block: 15px;
        }
`;
import styled from 'styled-components';

export const Container = styled.div`
justify-content: center;
align-items: center;
width: 40%;
padding: 20px;
border-radius: 10px;
border: 2px solid #3D73F1;
box-shadow: 0 0 5px #3D73F1;
margin-top: 50px;

@media (max-width:500px) {
    width: 90%;
    }

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}

h1{
    text-align: center;
    font-size: 30px;
    fdont-weigth: 500;

    @media (max-width:500px) {
    font-size: 25px;

    }
}

video{
    width: 100%;
    border-radius: 10px;
}
`;
export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 30px;
margin-bttom: 30px;
`;

export const SubContainerButton = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
/* border: 1px solid red; */

@media (max-width:400px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    padding: 15px 100px;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-inline:10px;
    cursor: pointer;
    background-color: #3D73F1;

    :hover{
        opacity: 80%;
        background-color: #2E579F;
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
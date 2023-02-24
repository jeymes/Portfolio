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
export const Button = styled.button`
    padding: 15px 100px;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-block: 30px;
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
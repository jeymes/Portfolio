import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 200px;
height: 250px;
border-radius: 10px;
border: 2px solid #3D73F1;
box-shadow: 0 0 5px #3D73F1;
margin-top: 40px;

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}

@media (max-width:600px) {
width: 150px;
height: 200px;
    }

img{
        width: 90px;
        @media (max-width:800px) {
            width: 70px;
        }
    }

`;
export const Title = styled.h1`
color: white;
font-size: 20px;
font-weigth: 700;
text-align: center;
`;

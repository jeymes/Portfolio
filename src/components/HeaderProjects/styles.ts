import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 11vh;
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid #3D73F1;
box-shadow: 0 0 5px #3D73F1;
border-radius: 10px;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}

p{
    color: white;
    font-size: 20px;
    font-weight: 600;

    :hover{
        opacity: 50%;
    }

    @media (max-width: 700px){
        font-size: 15px;
        font-weight: 400px;
    }
    @media (max-width: 450px){
        font-size: 13px;
        font-weight: 0;
    }
}
`;
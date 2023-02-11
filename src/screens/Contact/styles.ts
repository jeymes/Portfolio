import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 100%;
color: white;
margin-top: 80px;
margin-bottom: 30px;
`;
export const Title = styled.div`
display: flex;
width: 100%;
height: 40px;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    color: white;
    width: 100%;
    border-radius: 20px;
    font-size: 40px;
    font-weight: 900;
    align-items: left;
    text-align: center;
    @media (max-width: 690px) {
        font-size: 35px;
    }
}
`;
export const SubContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
cursor: pointer;
border: 1px solid rgba(20,157,208,1) ;
box-shadow: 0 0 5px rgba(20,157,208,1);

:hover{
box-shadow: 0 0 15px rgba(20,157,208,1) ;
}

@media (max-width: 690px) {
    flex-direction: column;
    }


`;
export const ContainerContato = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height: 100%;
margin-inline: 20px;


    @media (max-width: 690px) {
        margin-block: 15px;
    }

span{
    text-align: center;
    padding: 15px;
    width: 90%;
    margin-block:10px;
    background-image: linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );
    border-radius: 20px;
    @media (max-width: 1075px) {
        padding: 10px;
    }
    @media (max-width: 830px) {
        padding: 5px;
    }
    
    
    
    :hover{
        opacity: 80%;
        background-image: radial-gradient( circle 300px at 8% 89.3%,  rgba(20,157,208,1) 0%, rgba(140,63,226,1) 90% );
    }
    a{
        color: white;
        text-align: center;
        padding: 0px 100px;
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        /* border: 1px solid red; */
        
    }
}
`;
export const ContainerLottie = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
`;
export const Lottie = styled.div`
display: flex;
width: 70%;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
`;
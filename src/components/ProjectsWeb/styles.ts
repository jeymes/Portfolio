import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 100%;
margin-top: 30px;
margin-bottom: 30px;
`;
export const SubContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
width: 90%;
/* border: 1px solid red; */

@media (max-width:500px) {
    justify-content: flex-start;
    height: 100%;
    flex-direction: column;
    }
`;
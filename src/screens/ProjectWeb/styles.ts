import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  /* border: 1px solid red; */

`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;

  @media (max-width:500px) {
    height: 100%;
    flex-direction: column;
    }
`;
export const ContainerVideo = styled.div`
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.COLORS.BUTTON};
  box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.BUTTON};
  
  :hover{
box-shadow: 0 0 15px ${({ theme }) => theme.COLORS.SHADOW_BOX};
}
  @media (max-width:500px) {
    width: 90%;
    }

  video{
    width: 100%;
    border-radius: 10px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  padding-left: 100px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  width: 90%;
  /* border: 1px solid red; */

  @media (max-width:500px) {
  padding: 0px;
  padding-left: 0px;
  width: 100%;
    }

h1{
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 30px;
  font-weight: 700;
}

p{
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 15px;
  font-weight: 400;
}

h3{
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 20px;
  font-weight: 700;
}

`;
export const Tecnologias = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

div{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  img{
    width: 50px;
}
}

`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:555px) {
    width: 100%;
    }
`;
export const ButtonLink = styled.button`
    padding: 10px 100px;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-size: 25px;
    font-weight: 700;
    margin-inline:10px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.BUTTON};

    :hover{
        opacity: 80%;
        background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER};
    }
    @media (max-width:875px) {
        padding: 10px 100px;
        font-size: 25px;
    }
    @media (max-width:840px) {
        padding: 10px 100px;
        margin-inline:5px;
    }
    @media (max-width:715px) {
        padding: 10px 100px;
    }
    @media (max-width:555px) {
        margin-inline:3px;
        padding: 10px 100px;
    }
    @media (max-width:430px) {
        padding: 6px 100px;
        margin-block: 10px;
    }
`;
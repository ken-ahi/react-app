import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <STitle> -StyledComponents- </STitle>
      <SButton>FIGHT!</SButton>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 2px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 3px;
  &:active {
    background-color: #46cdc4;
    color: #fff;
    cursor: pointer;
  }
`;

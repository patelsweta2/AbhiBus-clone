import styled from "styled-components";
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  height: 5rem;

  @media only screen and (max-width: 1280px) {
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-item: center;
  width: 100%;

  @media only screen and (max-width: 1280px) {
    justify-content: center;
    align-item: center;
    gap: 1rem;
  }
`;

const StyledA1 = styled.a`
  cursor: pointer;
  padding: 10px 20px;
`;

const StyledA = styled.p`
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  column-gap: 0.25rem;
  padding: 10px 20px;
  color: #dc635b;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #e9e6e6;
  }
`;
const StyledDiv1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 99;
`;

const StyledDiv2 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  z-index: 1000;
`;

const StyledH2 = styled.h2`
  margin-top: 0.3rem;
  font-weight: 500;
  text-align: center;
  color: #dc635b;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export {
  StyledA,
  StyledHeader,
  StyledA1,
  StyledButton,
  StyledH2,
  StyledDiv1,
  StyledDiv2,
  StyledDiv,
};

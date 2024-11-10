import styled from "styled-components";

export const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.3rem;
`;

export const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-top: 0.5rem;
  color: #cdcdcd;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  margin-top: 0.4rem;
  background-color: #f4f4f4;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.1rem;
  outline: #eb5353;
  &::placeholder {
    color: #b5b5b5;
  }
`;

export const StyledButton1 = styled.button`
  margin-top: 1rem;
  background-color: #dc635b;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
`;
export const StyledButton2 = styled.button`
  margin-top: 0.5rem;
  background: none;
  border: none;
  color: #dc635b;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: underline;
`;
export const StyledRegisterLink = styled.p`
  margin-top: 0.5rem;
  //   color: #dc635b;
  text-align: center;
  font-size: 0.9rem;
`;

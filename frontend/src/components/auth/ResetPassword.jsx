import styled from "styled-components";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.3rem;
`;

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-top: 0.5rem;
  color: #cdcdcd;
  font-size: 1rem;
`;

const StyledInput = styled.input`
  margin-top: 0.3rem;
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

const StyledButton1 = styled.button`
  margin-top: 1rem;
  background-color: #dc635b;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

const StyledRegisterLink = styled.p`
  margin-top: 0.5rem;
  //   color: #dc635b;
  text-align: center;
  font-size: 0.9rem;
`;

const ResetPassword = () => {
  return (
    <StyledDiv1>
      {/* <h1>Reset Password</h1> */}
      <StyledForm action="">
        <StyledDiv2>
          <StyledLabel htmlFor="">Enter your New Password</StyledLabel>
          <StyledInput type="password" name="password" />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="">Re Enter your Password</StyledLabel>
          <StyledInput type="text" name="password" />
        </StyledDiv2>
        <StyledButton1>Reset Password</StyledButton1>
      </StyledForm>
      <StyledRegisterLink>
        Don't have an account?{" "}
        <a href="/register" style={{ color: "#dc635b" }}>
          Register Now
        </a>
      </StyledRegisterLink>
    </StyledDiv1>
  );
};

export default ResetPassword;

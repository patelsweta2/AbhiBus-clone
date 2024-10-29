import {
  StyledButton1,
  StyledButton2,
  StyledDiv1,
  StyledDiv2,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRegisterLink,
} from "./styles/Login-styles";

const Login = ({ setActiveAuthComponent }) => {
  return (
    <StyledDiv1>
      <StyledForm action="">
        <StyledDiv2>
          <StyledLabel htmlFor="">Email Email to Login</StyledLabel>
          <StyledInput
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="">Enter Password</StyledLabel>
          <StyledInput
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </StyledDiv2>
        <StyledButton1>Login</StyledButton1>
      </StyledForm>
      <StyledButton2 onClick={() => setActiveAuthComponent("forgotPassword")}>
        Forgot Password
      </StyledButton2>
      <StyledRegisterLink>
        Don't have an account?
        <p
          onClick={() => setActiveAuthComponent("register")}
          style={{ color: "#dc635b", cursor: "pointer" }}
        >
          Register Now
        </p>
      </StyledRegisterLink>
    </StyledDiv1>
  );
};

export default Login;

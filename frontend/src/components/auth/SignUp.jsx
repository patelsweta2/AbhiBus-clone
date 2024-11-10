import { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createUserSignUpAction } from "../../store/user/userSlice";

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

const StyledSelect = styled.select`
  margin-top: 0.3rem;
  background-color: #f4f4f4;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.1rem;
  //   outline: #eb5353;
  option:hover {
    background-color: #dc635b;
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
  //   margin-top: rem;
  //   color: #dc635b;
  text-align: center;
  font-size: 0.9rem;
`;

const StyledOption = styled.option`
  &:hover {
    background-color: #dc635b;
  }
`;

const SignUp = ({ setActiveAuthComponent }) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    Array.from(formRef.current.elements).forEach((ele) => {
      if (ele.id) data[ele.id] = ele.value;
    });
    dispatch(createUserSignUpAction({ data }));
  };
  return (
    <StyledDiv1>
      {/* <h1>SignUp to AbhiBus</h1> */}
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <StyledDiv2>
          <StyledLabel htmlFor="firstName">FirstName:</StyledLabel>
          <StyledInput
            id="firstName"
            type="text"
            placeholder="Enter your first name"
          />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="lastName">LastName:</StyledLabel>
          <StyledInput
            id="lastName"
            type="text"
            placeholder="Enter your last name"
          />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput id="email" type="email" placeholder="Enter your email" />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="phone">PhoneNumber</StyledLabel>
          <StyledInput
            type="number"
            id="phone"
            placeholder="Enter your phone-number"
          />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="gender">Gender</StyledLabel>
          <StyledSelect id="gender">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="others">others</option>
          </StyledSelect>
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="age">Age:</StyledLabel>
          <StyledInput type="number" id="age" placeholder="Enter your age" />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            required
            placeholder="Enter Password"
          />
        </StyledDiv2>
        <StyledButton1>Sign up</StyledButton1>
      </StyledForm>
      <StyledRegisterLink>
        Already have an account?{" "}
        <a
          onClick={() => setActiveAuthComponent("login")}
          style={{ color: "#dc635b", cursor: "pointer" }}
        >
          Login Now
        </a>
      </StyledRegisterLink>
    </StyledDiv1>
  );
};

export default SignUp;

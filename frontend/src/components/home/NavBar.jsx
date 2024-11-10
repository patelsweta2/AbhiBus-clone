import { useState, useRef, useImperativeHandle, useMemo } from "react";
import Login from "../auth/Login";
import ResetPassword from "../auth/ResetPassword";
import SignUp from "../auth/SignUp";
import { abhibusSvg, personSvg } from "../../data";
import {
  StyledA,
  StyledHeader,
  StyledA1,
  StyledButton,
  StyledH2,
  StyledDiv2,
  StyledDiv,
} from "./styles/NavBar-styles.jsx";

import CustomModal from "./../../utlis/Modal";

const NavBar = () => {
  const modalRef = useRef({});
  return (
    <StyledHeader>
      <StyledDiv>
        <StyledA1>{abhibusSvg}</StyledA1>
        <StyledA
          onClick={() => {
            modalRef.current.showModal();
          }}
        >
          <span>{personSvg}</span>
          <span>Login/SignUp</span>
        </StyledA>
      </StyledDiv>
      <AuthComponent modalRef={modalRef} />
    </StyledHeader>
  );
};

const AuthComponent = ({ modalRef }) => {
  const [isModelOpen, setIsModelOpen1] = useState(false);
  const [activeAuthComponent, setActiveAuthComponent] = useState("login");
  const setIsModelOpen = useMemo(() => {
    setIsModelOpen1.setActiveAuthComponent = setActiveAuthComponent;
    return setIsModelOpen1;
  }, []);
  const obj = useMemo(
    () => ({
      login: <Login {...{ setActiveAuthComponent }} />,
      register: <SignUp {...{ setActiveAuthComponent }} />,
      forgotPassword: <ResetPassword {...{ setActiveAuthComponent }} />,
    }),
    []
  );

  useImperativeHandle(
    modalRef,
    () => ({
      showModal: () => setIsModelOpen(true),
      closeModal: () => setIsModelOpen(false),
    }),
    []
  );
  return (
    <>
      {isModelOpen && (
        <CustomModal setShow={setIsModelOpen}>
          <StyledDiv2>
            <StyledH2>Register to Abhibus</StyledH2>
            <StyledButton
              onClick={() => {
                setIsModelOpen(false);
                setActiveAuthComponent("login");
              }}
            >
              &times;
            </StyledButton>
            {obj[activeAuthComponent]}
          </StyledDiv2>
        </CustomModal>
      )}
    </>
  );
};

export default NavBar;

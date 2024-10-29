import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CustomModal = ({ setShow, children }) => {
  return createPortal(
    <Modal setShow={setShow}>{children}</Modal>,
    document.getElementById("models")
  );
};

const Modal = ({ children, setShow }) => {
  // useEffect(() => {
  //   const handleClick = () => {
  //     setShow(false);
  //   };
  //   const modalEle = modalRef.current;
  //   if (modalEle) {
  //     modalEle.addEventListener("click", handleClick);
  //   }
  //   return () => {
  //     if (modalEle) modalEle.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <StyledModal
      onClick={() => {
        setShow(false);
        setShow.setActiveAuthComponent("login");
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </StyledModal>
  );
};

export default CustomModal;

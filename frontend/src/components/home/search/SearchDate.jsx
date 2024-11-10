import styled from "styled-components";
import { CalenderIcon } from "../../Icon";

const StyledDiv5 = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column-wrap;
  place-content: center flex-start;
  align-items: center;
  position: relative;
  font-size: 1rem;
`;

const StyledDiv6 = styled.div`
  flex-flow: column wrap;
  place-content: flex-start;
  align-items: normal;
  display: flex;
  width: 100%;
`;

const StyledDiv7 = styled.div`
  display: flex;
  flex-flow: wrap;
  place-content: center;
  align-items: center;
  height: 3.5rem;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  line-height: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  caret-color: #dc635b;
`;

const StyledDiv8 = styled.div`
  flex: 0 0 auto;
  width: auto;
  font-size: 1rem;
  line-height: 1rem;
  caret-color: #dc635b;
`;

const StyledDiv9 = styled.div`
  flex: 1 0;
  line-height: 1rem;
`;

const StyledInput = styled.input`
  padding: 0px;
  width: 100%;
  border: unset;
  background: unset;
  outline: unset;
  color: #212121;
  margin-left: 0.25rem;
  overflow-clip-margin: 0px !important;
  overflow: clip !important;
  padding-block: 1px;
  padding-inline: 2px;
`;

const StyledDiv10 = styled.div`
  flex: 0 0 auto;
  width: auto;
  line-height: 1rem;
  caret-color: #dc635b;
`;

const StyledButton = styled.button`
  color: #212121;
  font-weight: 500;
  font-size: 0.875rem;
  background-color: #f2f2f2;
  padding: 0.75rem 1rem;
  border-radius: 0.459375em;
  transition: 0.125s;
  vertical-align: middle;
  cursor: pointer;
  display: inline-block;
  border: none;
  text-decoration: none;
  text-align: center;
  width: auto;
  height: auto;
  -webkit-tap-highlight-color: transparent;
`;

const SearchDate = () => {
  return (
    <StyledDiv5>
      <StyledDiv6>
        <StyledDiv7>
          <StyledDiv8>
            <CalenderIcon />
          </StyledDiv8>
          <StyledDiv9>
            <StyledInput
              readonly
              type="text"
              placeholder="Onward journey date"
              value="28/10/2024"
            />
          </StyledDiv9>
          <StyledDiv10>
            <StyledButton>Today</StyledButton>
            <StyledButton style={{ marginLeft: "0.2rem" }}>
              Tomorrow
            </StyledButton>
          </StyledDiv10>
        </StyledDiv7>
      </StyledDiv6>
    </StyledDiv5>
  );
};

export default SearchDate;

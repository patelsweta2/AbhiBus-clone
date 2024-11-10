import { BusIcon } from "../../Icon";
import styled from "styled-components";

const StyledDiv1 = styled.div`
  display: flex;
  flex-flow: wrap;
  place-content: flex-start;
  align-items: normal;
  position: relative;
  width: 100%;
`;

const StyledDiv2 = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  place-content: flex-start;
  align-items: normal;
`;

const StyledDiv3 = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column-wrap;
  place-content: flex-start;
  align-items: normal;
`;
const StyledDiv4 = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  place-content: center;
  align-items: center;
  height: 3.5rem;
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #f2f2f2;
  font-size: 1rem;
  line-height: 1rem;
  border-radius: 0.5rem;
  caret-color: #dc635b;
`;

const StyledDiv5 = styled.div`
  flex: 0 0 auto;
  width: auto;
  font-size: 1rem;
  line-height: 1rem;
  caret-color: #dc635b;
`;

const StyledDiv6 = styled.div`
  flex: 1 0;
  font-size: 1rem;
  line-height: 1rem;
  caret-color: #dc635b;
`;

const StyledInput = styled.input`
  border: unset;
  outline: unset;
  width: 100%;
  background: unset;
  font-size: 1rem;
  color: #212121;
  margin-left: 0.25rem;
  overflow-clip-margin: 0px !important;
  overflow: clip !important;
  padding-block: 1px;
  padding-inline: 2px;
`;

const SearchCity = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledDiv3>
          <StyledDiv4>
            <StyledDiv5>
              <BusIcon />
            </StyledDiv5>
            <StyledDiv6>
              <StyledInput
                type="text"
                tabIndex="0"
                placeholder="From Station"
              />
            </StyledDiv6>
          </StyledDiv4>
        </StyledDiv3>
      </StyledDiv2>
    </StyledDiv1>
  );
};

export default SearchCity;

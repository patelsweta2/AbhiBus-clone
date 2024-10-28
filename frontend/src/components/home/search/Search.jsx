import styled from "styled-components";
import { BusIcon, ArrowIcon, MapIcon } from "../../Icon";
import SearchCity from "./SearchCity";
import SearchDate from "./SearchDate";

const StyledDiv1 = styled.div`
  display: flex;
  flex-flow: wrap;
  place-content: flex-start space-between;
  align-items: center;
  column-gap: 1em;
  padding: 1.2rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.04),
    0 2px 5px rgba(0, 0, 0, 0.06);
  background: #fff;
  font-size: 1em;
  border-radius: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  row-gap: 0.75rem;
  font-weight: 400;

  @media (min-width: 1280px) {
    width: 1240px;
  }
`;

const StyledDiv2 = styled.div`
  display: block;
  flex: 1 0 20%;
  width: auto;
  font-size: 1rem;
`;

const StyledDiv3 = styled.div`
  display: block;
  flex: 0 0 auto;
  width: auto;
  font-size: 1rem;
`;

const StyledDiv4 = styled.div`
  flex: 0 0 auto;
  font-size: 1rem;
`;

const StyledDiv11 = styled.button`
  flex: 1 0 150px !important;
  width: auto;
  font-size: 1rem;
`;
const StyledButton1 = styled.button`
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  column-gap: 0.25rem;
  width: 100%;
  padding: 0.5rem 1rem;
  height: 3rem;
  animation-delay: 0.1s;
  animation-name: flash;
  animation-duration: 0.2s;
  background-color: #dc635b;
  font-size: 1.25rem;
  border-radius: 0.42875em;
  color: #fff;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  text-decoration: none;
  text-align: center;
  user-select: none;
`;

const Search = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>
        <SearchCity />
      </StyledDiv2>
      <StyledDiv3>
        <ArrowIcon />
      </StyledDiv3>
      <StyledDiv2>
        <SearchCity />
      </StyledDiv2>
      <StyledDiv4>
        <SearchDate />
      </StyledDiv4>
      <StyledDiv11>
        <StyledButton1>Search</StyledButton1>
      </StyledDiv11>
    </StyledDiv1>
  );
};

export default Search;

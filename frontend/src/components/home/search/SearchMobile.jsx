import styled from "styled-components";
import { MobileArrowIcon, MobileSourceIcon } from "../../Icon";
import SearchMobileCity from "./SearchMobileCity";
import SearchMobileDate from "./SearchMobileDate";

const StyledDiv1 = styled.div`
  border-radius: 1px !important;
  margin-bottom: 3rem;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s;
  margin: 0.5rem 0 1 rem;
  background-color: #fff;
  box-sizing: inherit;
  font-size: 1rem;
  line-height: 1.5;
`;

const StyledDiv2 = styled.div`
  padding: 0 0 30px;
  border-radius: 0 0 2px 2px;
  line-height: 1.5;
`;

const StyledSpan1 = styled.span`
  display: block;
  line-height: 32px;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 300;
`;
const StyledSpan2 = styled.span`
  font-size: 0px;
  color: rgb(220, 99, 91);
  position: absolute;
  background-color: rgb(255, 255, 255);
  right: 1.2rem;
  top: 3rem;
  z-index: 2;
  border-radius: 50%;
  -webkit-appearance: button;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  user-select: none;
  line-height: 1.5;
`;
const StyledFigure1 = styled.figure`
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  font-size: 0px;
`;

const StyledDiv3 = styled.div`
  margin-left: 3.6125rem;
  margin-right: 70px;
  height: 1px;
  overflow: hidden;
  background-color: #e0e0e0;
`;
const StyledDiv4 = styled.div``;
const StyledH4 = styled.h4``;
const StyledDiv5 = styled.div``;

const SearchMobile = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledSpan1></StyledSpan1>
        <StyledSpan2>
          <StyledFigure1>
            <MobileArrowIcon />
          </StyledFigure1>
        </StyledSpan2>
        <SearchMobileCity />
        <StyledDiv3></StyledDiv3>
        <SearchMobileCity />
        <StyledDiv4>
          <StyledH4>Departure</StyledH4>
          <SearchMobileDate />
        </StyledDiv4>
        <StyledDiv5></StyledDiv5>
      </StyledDiv2>
    </StyledDiv1>
  );
};

export default SearchMobile;

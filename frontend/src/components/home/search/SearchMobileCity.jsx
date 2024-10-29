import styled from "styled-components";
import { MobileSourceIcon } from "../../Icon";

const StyledH31 = styled.h3`
  font-weight: 400;
  display: block;
  padding: 1.5rem 1.2rem 1.2rem;
  margin: 0;
  color: #616161 !important;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  font-size: 1.5rem !important;
  line-height: 110%;
`;

const StyledSpan3 = styled.span`
  vertical-align: middle;
  font-size: 400;
  // color: #616161 !important;
  cursor: pointer;
  user-select: none;
`;

const StyledFigure1 = styled.figure`
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  font-size: 0px;
`;

const SearchMobileCity = () => {
  return (
    <>
      <StyledH31>
        <StyledFigure1>
          <MobileSourceIcon />
        </StyledFigure1>
        <StyledSpan3>Patna</StyledSpan3>
      </StyledH31>
    </>
  );
};

export default SearchMobileCity;

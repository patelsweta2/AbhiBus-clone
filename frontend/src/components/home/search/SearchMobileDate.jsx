import styled from "styled-components";
import { DateIcon } from "../../Icon";

const StyledDiv1 = styled.div`
  font-weight: 400;
  width: 100% !important;
  margin: 0 auto;
  max-width: 1280px;
  font-size: 1rem;
`;
const StyledDiv2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0 !important;
  margin-left: auto;
  margin-right: auto;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;
const StyledDiv3 = styled.div`
  padding: 0 !important;
  width: 66.6666666667%;
  margin-left: auto;
  float: left;
  min-height: 1px;
`;
const StyledA1 = styled.a`
  display: block;
  float: left;
  color: #424242;
  width: 20%;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
`;
const StyledSpan1 = styled.span`
  background-color: #dc635b;
  color: #fafafa;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: block;
  margin-left: auto !important;
  margin-right: auto !important;
  font-size: 1.3rem;
  font-weight: 400;
`;
const StyledSpan2 = styled.span`
  font-size: 0.75rem;
  display: block;
  margin-left: auto !important;
  margin-right: auto !important;
  font-weight: 400;
`;
const StyledDiv4 = styled.div``;
const StyledDiv5 = styled.div``;
const StyledDiv6 = styled.div``;
const StyledDiv7 = styled.div``;
const StyledDiv8 = styled.div``;
const StyledDiv9 = styled.div``;

const StyledSpan3 = styled.span``;
const StyledSpan4 = styled.span``;

const StyledFigure = styled.figure``;
const SearchMobileDate = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledDiv3>
          <StyledA1 href="">
            <StyledSpan1>28</StyledSpan1>
            <StyledSpan2>MON</StyledSpan2>
          </StyledA1>
          <StyledA1 href="">
            <StyledSpan1>29</StyledSpan1>
            <StyledSpan2>TUE</StyledSpan2>
          </StyledA1>
          <StyledA1 href="">
            <StyledSpan1>30</StyledSpan1>
            <StyledSpan2>WED</StyledSpan2>
          </StyledA1>
          <StyledA1 href="">
            <StyledSpan1>31</StyledSpan1>
            <StyledSpan2>THU</StyledSpan2>
          </StyledA1>
          <StyledA1 href="">
            <StyledSpan1>01</StyledSpan1>
            <StyledSpan2>FRI</StyledSpan2>
          </StyledA1>
        </StyledDiv3>
        <StyledDiv4>
          <StyledDiv5></StyledDiv5>
        </StyledDiv4>
        <StyledDiv6></StyledDiv6>
        <StyledDiv7>
          <StyledDiv8>
            <StyledDiv9>
              <StyledSpan3></StyledSpan3>
              <StyledSpan4></StyledSpan4>
            </StyledDiv9>
            <StyledFigure>
              <DateIcon />
            </StyledFigure>
          </StyledDiv8>
        </StyledDiv7>
      </StyledDiv2>
    </StyledDiv1>
  );
};

export default SearchMobileDate;

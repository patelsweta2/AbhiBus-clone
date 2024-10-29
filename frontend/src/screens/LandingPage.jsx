import React from "react";
import NavBar from "../components/home/NavBar";
import styled from "styled-components";
import AbhiBus from "../public/AbhiBusHero.jpg";
import Search from "../components/home/search/Search";
// import SearchMobile from "../components/home/search/SearchMobile";
// import ErrorBoundary from "../components/ErrorBoundary";

const StyledDiv = styled.div`
  display: flex;
  flex-direction row;
  justify-content: center;
  align-items: normal;
  align-content: center;
  flex-wrap: wrap;
  position: relative;
  min-height: 428px;
  padding: 0.9rem;
`;

const StyledImage = styled.div`
  background-image: url(${AbhiBus});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #fff;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledDivChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;
  padding: 0rem 1.25rem;
  flex-wrap: wrap;
  place-content: center !important;
  margin-top: 2.5rem;
  margin-bottom: 6rem;
  font-weight: 400;
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-size: 2.1rem;
  margin-bottom: 1rem;
  margin-top: 0;
  text-align: center;
`;

const StyledH2 = styled.h1`
  font-size: 1.5rem !important;
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
  font-weight: 300 !important;
  text-align: center;
  color: #fff !important;
  line-height: 110%;
  margin: 2.8rem 0 1.68rem;
  box-sizing: inherit;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
`;

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <StyledDiv>
        <StyledImage></StyledImage>
        <StyledDivChild>
          <StyledH1>Book Bus Tickets</StyledH1>
          <Search />
          {/* <StyledH2>Book Bus Tickets</StyledH2>
          <SearchMobile /> */}
        </StyledDivChild>
      </StyledDiv>
    </div>
  );
};

export default LandingPage;

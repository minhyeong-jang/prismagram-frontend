import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyled from "../Styles/GlobalStyled";
import Theme from "../Styles/Theme";
import Router from "./Router";
import Footer from "./Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => (
  <ThemeProvider theme={Theme}>
    <Wrapper>
      <GlobalStyled />
      <Router isLoggedIn={false} />
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "../Styles/GlobalStyled";
import Theme from "../Styles/Theme";
import Router from "./Router";

export default () => (
	<ThemeProvider theme={Theme}>
	<>
		<GlobalStyled />
		<Router isLoggedIn={false} />
	</>
	</ThemeProvider>
);
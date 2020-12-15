import React, { Component } from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";
import HomeHeaderComp from "./HomeHeaderComp";
import ContentComp from "./ContentComp";
import FooterComp from "./FooterComp";

export default class ContentContainer extends Component {
  render() {
    return (
      //Provides styles to its children
      <StyleProvider style={getTheme(material)}>
        <Container>
          {/*modular content component*/}
          <ContentComp />
        </Container>
      </StyleProvider>
    );
  }
}

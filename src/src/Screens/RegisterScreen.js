import React, { Component } from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import RegisterScreenContainer from "../components/ScreenContainers/RegisterScreenContainer";
import HeaderComp from "./../components/ContentContainerComp/HeaderComp";
import { StatusBar } from "react-native";
class RegisterScreen extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <StatusBar backgroundColor="#eee" barStyle="dark-content" />
          <RegisterScreenContainer title={this.props.title} />
        </Container>
      </StyleProvider>
    );
  }
}

export default RegisterScreen;

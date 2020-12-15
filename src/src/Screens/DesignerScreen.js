import React from "react";
import { Container, StyleProvider } from "native-base";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import DesignerScreenContainer from "../components/ScreenContainers/DesignerScreenContainer";
import HeaderComp from "./../components/ContentContainerComp/HeaderComp";
import { StatusBar } from "react-native";
const DesignerScreen = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <DesignerScreenContainer activeTabNum={3} />
      </Container>
    </StyleProvider>
  );
};

export default DesignerScreen;

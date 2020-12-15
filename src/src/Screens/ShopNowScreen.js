import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import ShopNowScreenContainer from "../components/ScreenContainers/ShopNowScreenContainer";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import { StatusBar } from "react-native";

const ShopNowScreen = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <ShopNowScreenContainer />
        <FooterComp />
      </Container>
    </StyleProvider>
  );
};

export default ShopNowScreen;

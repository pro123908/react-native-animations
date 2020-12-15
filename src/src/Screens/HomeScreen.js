import React, { Component } from "react";
import { Container } from "native-base";
import ContentContainer from "../components/ContentContainerComp/ContentContainer";
import { StatusBar, BackHandler } from "react-native";
export default class HomeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <ContentContainer />
      </Container>
    );
  }
}

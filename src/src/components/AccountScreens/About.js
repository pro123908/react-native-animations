import React, { Component } from "react";
import { Container, Content, View, Text } from "native-base";
import ItemsHeaderComp from "./../ContentContainerComp/ItemsHeaderComp";
import { StatusBar } from "react-native";
class About extends Component {
  state = {};
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="About Farfetch" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              About Farfetch
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 14, color: "#222" }}>
              This is about page
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default About;

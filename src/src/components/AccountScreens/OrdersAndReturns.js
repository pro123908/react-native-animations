import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Icon,
  Switch
} from "native-base";
import ItemsHeaderComp from "./../ContentContainerComp/ItemsHeaderComp";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
class OrdersAndReturns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      email: false
    };
  }
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="Orders & Returns" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content contentContainerStyle={{ backgroundColor: "#eee", flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>No Orders and Returns</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  }
});

export default OrdersAndReturns;

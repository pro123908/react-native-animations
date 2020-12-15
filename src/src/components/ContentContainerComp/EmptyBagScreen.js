import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  Icon,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { Actions } from "react-native-router-flux";

class EmptyBagScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            flex: 1,
            backgroundColor: "#eee",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon name="cart" style={{ color: "#aaa" }} />
            <Text note>Your shopping bag is empty</Text>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#fff" }}>
          <FooterTab style={{ backgroundColor: "#fff" }}>
            <View
              style={{
                width: "100%",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Button
                block
                style={{ backgroundColor: "#22A7F0" }}
                onPress={() => {
                  Actions.mainScreen();
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  START SHOPPING
                </Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default EmptyBagScreen;

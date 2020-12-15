import React, { Component } from "react";
import { Container, Content, View, Text, Icon } from "native-base";

class EmptyScreen extends Component {
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
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View>
            <Icon name="emoji-sad" type="Entypo" />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text>No Product Found</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default EmptyScreen;

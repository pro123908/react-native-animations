import React, { Component } from "react";
import { Container, Content, View, Icon, Text, Button } from "native-base";
import AlertModalComp from "./../Cards/AlertModalComp";
class EmptyWishlistScreenContainer extends Component {
  state = {
    isModalVisible: false
  };
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View>
              <Icon
                name="star"
                type="Entypo"
                style={{ color: "#aaa", fontSize: 35 }}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Your wishlist is empty
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text note style={{ fontSize: 16 }}>
                Keep track of your favourite styles.
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <View>
                <Text note style={{ fontSize: 16 }}>
                  Tap{" "}
                </Text>
              </View>
              <View>
                <Icon
                  name="star"
                  type="Entypo"
                  style={{ color: "#000", fontSize: 20 }}
                />
              </View>
              <View>
                <Text note style={{ fontSize: 16 }}>
                  {" "}
                  to add to your wishlist.
                </Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default EmptyWishlistScreenContainer;

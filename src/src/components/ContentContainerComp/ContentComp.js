import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Content, View, Button, Text, Icon } from "native-base";
import HomeScreenCardContainer from "../Cards/HomeScreenCardContainer";
import { Actions } from "react-native-router-flux";
import SearchModal from "./../SearchModal/SearchModal";
import { CachedImage } from "react-native-cached-image";

class ContentComp extends Component {
  state = {
    isSignedUp: false,
    showSignInCard: true,
    isModalVisible: true
  };
  closeSignInCard = () => {
    this.setState({
      showSignInCard: false
    });
  };
  render() {
    if (global.id != undefined) {
      this.state.showSignInCard = false;
    }
    let signInCard = (
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingRight: 20
          }}
        >
          <TouchableOpacity onPress={this.closeSignInCard}>
            <Icon
              name="close"
              type="AntDesign"
              style={{ color: "#e5e5e5", fontSize: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.loginCardText}>
          <Text style={{ fontWeight: "bold" }}>Let's get personal</Text>
        </View>
        <View style={styles.loginCardText}>
          <Text>Sign in to shop 3000+ brands</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              paddingLeft: 25,
              paddingRight: 15,
              paddingTop: 10,
              paddingBottom: 10,
              flex: 1
            }}
          >
            <Button
              onPress={() => {
                Actions.registerScreen({ title: "createaccount" });
              }}
              style={[styles.loginCardBtn, { backgroundColor: "#eee" }]}
            >
              <Text>Create Account</Text>
            </Button>
          </View>
          <View
            style={{
              paddingLeft: 15,
              paddingRight: 25,
              paddingTop: 10,
              paddingBottom: 10,
              flex: 1
            }}
          >
            <Button
              onPress={() => {
                Actions.registerScreen({ title: "signin" });
              }}
              style={[styles.loginCardBtn, { backgroundColor: "#000" }]}
            >
              <Text style={{ color: "#fff" }}>Sign in</Text>
            </Button>
          </View>
        </View>
      </View>
    );
    return (
      <Content>
        {!this.state.isSignedUp && this.state.showSignInCard
          ? signInCard
          : null}
        <CachedImage
          source={require("../../Resources/Images/5.jpg")}
          style={{ width: "100%", height: 350 }}
        />

        <HomeScreenCardContainer sectionName="Men" />

        <HomeScreenCardContainer sectionName="Women" />

        <HomeScreenCardContainer sectionName="Kids" />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  loginCardText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  loginCardBtn: {
    backgroundColor: "#eee",
    borderRadius: 5,
    width: "100%",
    justifyContent: "center",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  }
});

export default ContentComp;

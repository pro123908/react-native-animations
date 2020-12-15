import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Icon,
  Button,
  Radio
} from "native-base";
import WishlistCardComp from "./../Cards/WishlistCardComp";
import { Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";
class AccountScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      men: true,
      women: false
    };

    if (global.id == undefined) {
      this.state.isLoggedIn = false;
    }
  }
  componentDidMount() {}

  checkAuthuntication() {
    global.id = undefined;
    global.token = undefined;
    this.setState({
      isLoggedIn: false
    });
  }
  render() {
    myAccountLogged = (
      <View>
        <ListItem itemDivider>
          <Text style={styles.heading}>My Account</Text>
        </ListItem>
        <ListItem
          onPress={() => {
            Actions.ordersAndReturnsScreen();
          }}
        >
          <Text style={styles.text}>Orders & returns</Text>
        </ListItem>
        <ListItem
          onPress={() => {
            Actions.detailsAndPasswordScreen();
          }}
        >
          <Text style={styles.text}>Details & password</Text>
        </ListItem>
        <ListItem
          style={{ borderBottomWidth: 0 }}
          onPress={() => {
            Actions.addressBookScreen();
          }}
        >
          <Text style={styles.text}>Address book</Text>
        </ListItem>
      </View>
    );
    myAccountNotLogged = (
      <ListItem
        onPress={() => {
          Actions.registerScreen();
        }}
        itemDivider
      >
        <View
          style={{ flexDirection: "row", padding: 15, backgroundColor: "#fff" }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View>
              <Icon name="user" type="FontAwesome5" style={{ fontSize: 35 }} />
            </View>
          </View>
          <View style={{ flex: 4, flexDirection: "column" }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                SIGN IN OR CREATE ACCOUNT
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }} note>
                Access your bag & Wishlist on any of your devices
              </Text>
            </View>
          </View>
        </View>
      </ListItem>
    );

    return (
      <Container>
        <Content>
          <List>
            {this.state.isLoggedIn ? myAccountLogged : myAccountNotLogged}
            <ListItem itemDivider>
              <Text style={styles.heading}>My Location</Text>
            </ListItem>
            <ListItem
              style={{ borderBottomWidth: 0 }}
              onPress={() => {
                Actions.locationScreen();
              }}
            >
              <Text style={styles.text}>UAE (AED)</Text>
            </ListItem>
            <ListItem itemDivider style={{ flexDirection: "column" }}>
              <Text note style={{ fontSize: 12 }}>
                Your chosen location defines your language and shopping currency
              </Text>
              <View style={{ alignSelf: "flex-start" }}>
                <Text style={styles.heading}>My Shop Preferences</Text>
              </View>
            </ListItem>
            <ListItem
              style={styles.radioItem}
              onPress={() => {
                this.setState({
                  men: true,
                  women: false
                });
              }}
            >
              <View style={styles.radioBtnContainer}>
                <Radio
                  selected={this.state.men}
                  color="#000"
                  selectedColor="#000"
                  onPress={() => {
                    this.setState({
                      men: true,
                      women: false
                    });
                  }}
                />
              </View>
              <View style={styles.radioTextContainer}>
                <Text style={styles.text}>Men</Text>
              </View>
            </ListItem>
            <ListItem
              style={[styles.radioItem, { borderBottomWidth: 0 }]}
              onPress={() => {
                this.setState({
                  men: false,
                  women: true
                });
              }}
            >
              <View style={styles.radioBtnContainer}>
                <Radio
                  selected={this.state.women}
                  color="#000"
                  selectedColor="#000"
                  onPress={() => {
                    this.setState({
                      men: false,
                      women: true
                    });
                  }}
                />
              </View>
              <View style={styles.radioTextContainer}>
                <Text style={styles.text}>Women</Text>
              </View>
            </ListItem>

            <ListItem itemDivider style={{ flexDirection: "column" }}>
              <Text note style={{ fontSize: 12 }}>
                This will tailor your app experience , showing you the type of
                products most suited to you
              </Text>
              <View style={{ alignSelf: "flex-start" }}>
                <Text style={styles.heading}>My Settings</Text>
              </View>
            </ListItem>
            <ListItem
              style={{ borderBottomWidth: 0 }}
              onPress={() => {
                Actions.notificationsScreen();
              }}
            >
              <Text style={styles.text}>Notifications & email</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={styles.heading}>Support</Text>
            </ListItem>
            <ListItem
              onPress={() => {
                Actions.aboutScreen();
              }}
            >
              <Text style={styles.text}>About Farfetch</Text>
            </ListItem>

            <ListItem
              style={{ borderBottomWidth: 0 }}
              onPress={() => {
                Actions.privacyPolicyScreen();
              }}
            >
              <Text style={styles.text}>Privacy Policy</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={styles.heading}>Contact Us</Text>
            </ListItem>
            <View style={{ width: "100%", padding: 10 }}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="phone"
                    type="FontAwesome"
                    style={{ color: "#000" }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="email"
                    type="MaterialIcons"
                    style={{ color: "#000" }}
                  />
                </View>
              </View>
            </View>
            <ListItem itemDivider style={{ flexDirection: "column" }}>
              <Text note style={{ fontSize: 12 }}>
                Available Monday to Friday 81m - 11pm EST and Saturday to Sunday
                9am - 9pm EST.
              </Text>
              {this.state.isLoggedIn ? (
                <Button
                  style={{
                    alignItems: "center",
                    backgroundColor: "#fff",
                    width: "100%",
                    padding: 10,
                    marginTop: 10,
                    elevation: 0,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.checkAuthuntication();
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>SIGN OUT</Text>
                </Button>
              ) : null}
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14
  },
  heading: {
    fontWeight: "700",
    fontSize: 14
  },
  radioItem: {
    flexDirection: "row"
  },
  radioBtnContainer: {
    flex: 1
  },
  radioTextContainer: {
    flex: 8
  }
});

export default AccountScreenContainer;

import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Text
} from "native-base";
import { BackHandler } from "react-native";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import { Actions } from "react-native-router-flux";
import HomeScreen from "./HomeScreen";
import ShopScreen from "./ShopScreen";
import DesignerScreen from "./DesignerScreen";
import AccountScreen from "./AccountScreen";
import WishlistScreen from "./WishlistScreen";
import HeaderComp from "../components/ContentContainerComp/HeaderComp";
import HomeHeaderComp from "../components/ContentContainerComp/HomeHeaderComp";
import ItemsHeaderComp from "../components/ContentContainerComp/ItemsHeaderComp";
import RefineHeaderComp from "../components/ContentContainerComp/RefineHeaderComp";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      shop: false,
      designer: false,
      wishlist: false,
      me: false
    };
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    if (this.props.tab == "home") {
      this.setState({
        home: true,
        shop: false,
        designer: false,
        wishlist: false,
        me: false
      });
    } else if (this.props.tab == "shop") {
      this.setState({
        home: false,
        shop: true,
        designer: false,
        wishlist: false,
        me: false
      });
    } else if (this.props.tab == "designer") {
      this.setState({
        home: false,
        shop: false,
        designer: true,
        wishlist: false,
        me: false
      });
    } else if (this.props.tab == "wishlist") {
      this.setState({
        home: false,
        shop: false,
        designer: false,
        wishlist: true,
        me: false
      });
    } else if (this.props.tab == "me") {
      this.setState({
        home: false,
        shop: false,
        designer: false,
        wishlist: false,
        me: true
      });
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    //alert("pressed");
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  };

  render() {
    //BackHandler.exitApp();
    header = null;
    if (this.state.home) {
      header = <HomeHeaderComp title="Farfetch" />;
    } else if (this.state.shop) {
      header = <HeaderComp title="Shop" hasTabs={true} />;
    } else if (this.state.designer) {
      header = <HeaderComp title="Designer" />;
    } else if (this.state.wishlist) {
      header = <HeaderComp title="Wishlist" />;
    } else if (this.state.me) {
      header = <HeaderComp title="Account" />;
    }
    screen = null;
    if (this.state.home) {
      screen = <HomeScreen />;
    } else if (this.state.shop) {
      screen = <ShopScreen />;
    } else if (this.state.designer) {
      screen = <DesignerScreen />;
    } else if (this.state.wishlist) {
      screen = <WishlistScreen />;
    } else if (this.state.me) {
      screen = <AccountScreen />;
    }
    return (
      <Container>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        {header}
        {screen}
        <Footer style={{ backgroundColor: "#fff" }}>
          <FooterTab
            style={{
              display: "flex",
              backgroundColor: "#fff"
            }}
          >
            <Button
              active={this.state.home}
              onPress={() =>
                this.setState({
                  home: true,
                  shop: false,
                  designer: false,
                  wishlist: false,
                  me: false
                })
              }
              style={{ backgroundColor: "#fff" }}
            >
              <Icon
                style={{
                  color: this.state.home ? "#000" : "#9f9f9f"
                }}
                name="home"
              />
              <Text
                style={{
                  color: this.state.home ? "#000" : "#9f9f9f",
                  fontSize: 10
                }}
                uppercase={false}
              >
                Home
              </Text>
            </Button>
            <Button
              active={this.state.shop}
              onPress={() =>
                this.setState({
                  home: false,
                  shop: true,
                  designer: false,
                  wishlist: false,
                  me: false
                })
              }
              style={{ backgroundColor: "#fff" }}
            >
              <Icon
                style={{
                  color: this.state.shop ? "#000" : "#9f9f9f"
                }}
                name="briefcase"
              />
              <Text
                style={{
                  color: this.state.shop ? "#000" : "#9f9f9f",
                  fontSize: 10
                }}
                uppercase={false}
              >
                Shop
              </Text>
            </Button>
            <Button
              active={this.state.designer}
              onPress={() =>
                this.setState({
                  home: false,
                  shop: false,
                  designer: true,
                  wishlist: false,
                  me: false
                })
              }
              style={{ backgroundColor: "#fff" }}
            >
              <Icon
                style={{
                  color: this.state.designer ? "#000" : "#9f9f9f"
                }}
                name="ribbon"
              />
              <Text
                style={{
                  color: this.state.designer ? "#000" : "#9f9f9f",
                  fontSize: 10
                }}
                uppercase={false}
              >
                Designer
              </Text>
            </Button>
            <Button
              active={this.state.wishlist}
              onPress={() =>
                this.setState({
                  home: false,
                  shop: false,
                  designer: false,
                  wishlist: true,
                  me: false
                })
              }
              style={{ backgroundColor: "#fff" }}
            >
              <Icon
                style={{
                  color: this.state.wishlist ? "#000" : "#9f9f9f"
                }}
                name="star"
              />
              <Text
                style={{
                  color: this.state.wishlist ? "#000" : "#9f9f9f",
                  fontSize: 10
                }}
                uppercase={false}
              >
                Wishlist
              </Text>
            </Button>
            <Button
              active={this.state.me}
              onPress={() =>
                this.setState({
                  home: false,
                  shop: false,
                  designer: false,
                  wishlist: false,
                  me: true
                })
              }
              style={{ backgroundColor: "#fff" }}
            >
              <Icon
                style={{
                  color: this.state.me ? "#000" : "#9f9f9f"
                }}
                name="person"
              />
              <Text
                style={{
                  color: this.state.me ? "#000" : "#9f9f9f",
                  fontSize: 10
                }}
                uppercase={false}
              >
                Me
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13
  }
});

export default MainScreen;

import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import WishlistScreenContainer from "../components/ScreenContainers/WishlistScreenContainer";
import EmptyWishlistScreenContainer from "../components/ScreenContainers/EmptyWishlistScreenContainer";
import HeaderComp from "./../components/ContentContainerComp/HeaderComp";
import { StatusBar } from "react-native";
class WishlistScreen extends React.Component {
  state = {
    wishlist: true
  };

  render() {
    wishlistContainer = <WishlistScreenContainer activeTabNum={4} />;
    EmptyWishlistContainer = <EmptyWishlistScreenContainer activeTabNum={4} />;
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <StatusBar backgroundColor="#eee" barStyle="dark-content" />
          {this.state.wishlist ? wishlistContainer : EmptyWishlistContainer}
        </Container>
      </StyleProvider>
    );
  }
}

export default WishlistScreen;

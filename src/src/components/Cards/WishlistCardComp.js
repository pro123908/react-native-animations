import { Card, CardItem, Container, Icon, Button } from "native-base";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { CachedImage } from "react-native-cached-image";

/*Component builds a card and
requires following props
---------------------------
* imgSource
* itemName
* designerName
* price
--------------------------
cardHeight
cardWidth
leftMargin
* */

class WishlistCardComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remove: false,
      key: 0,

      base: "http://estore.nfasoft.com/"
    };
  }

  RemoveFav() {
    fetch(
      this.state.base +
        "api/removefavourite.php?product_id=" +
        this.props.product_id +
        "&user_id=" +
        global.id +
        "&token=" +
        global.token
    )
      .then(response => response.json())
      .then(resJson => {
        alert(resJson.response.message);
        this.setState({
          key: 1
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    imageSource = require("./../../Resources/Images/3.jpg");

    return !this.state.remove ? (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          Actions.productDetail({ product_id: this.props.product_id })
        }
      >
        <View style={[styles.closeBtnContainer, { flex: 1 }]}>
          <View>
            <Button
              style={styles.favBtn}
              onPress={() => {
                this.RemoveFav();
                Actions.mainScreen({ tab: "wishlist" });
              }}
            >
              <Icon style={{ color: "#aaa" }} name="close" type="AntDesign" />
            </Button>
          </View>
        </View>
        <View
          style={[
            styles.imageContainer,
            { flex: 6, paddingTop: 5, paddingBottom: 5 }
          ]}
        >
          <CachedImage style={styles.image} source={this.props.imageSource} />
        </View>
        <View style={[styles.textContainer, { flex: 1 }]}>
          <Text style={{ color: "#BFAC88" }}>{this.props.storeType}</Text>
        </View>
        <View style={[styles.textContainer, , { flex: 1 }]}>
          <Text style={{ fontWeight: "bold", color: "#000" }}>
            {this.props.productName}
          </Text>
        </View>
        <View style={[styles.textContainer, { flex: 1 }]}>
          <Text>AED{this.props.price}</Text>
        </View>
      </TouchableOpacity>
    ) : null;
  }
}

export default WishlistCardComp;

// styling of the card
const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    borderWidth: 0.5,
    borderColor: "#eee"
  },
  image: {
    width: 150,
    height: 150
  },
  textContainer: {
    padding: 10
  },
  closeBtnContainer: {
    width: "100%",
    alignItems: "flex-end"
  },
  favBtn: {
    backgroundColor: "transparent",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  }
});

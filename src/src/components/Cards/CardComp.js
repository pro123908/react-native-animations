import { Card, CardItem, Container, Icon, Button } from "native-base";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Actions } from "react-native-router-flux";
import { CachedImage } from "react-native-cached-image";

/*Component builds a card and
requires following this.props
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

class CardComp extends React.Component {
  state = {
    fav: false
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          Actions.productDetail({ product_id: this.props.product_id })
        }
      >
        <View pointerEvents="none" style={styles.cardContainer}>
          <View cardBody style={styles.cardBody}>
            <View>
              <CachedImage
                source={this.props.imgSource}
                style={styles.cardBodyImg}
              />
            </View>
          </View>

          <View bordered style={styles.cardFooter}>
            <View>
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                {this.props.designerName}
              </Text>

              <Text style={styles.text}>{this.props.shortDescription}</Text>

              <Text style={styles.text}>AED{this.props.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CardComp;

// styling of the card
const styles = StyleSheet.create({
  /*mainCard: {
        height: 270,
        width: 200,
        /!*marginLeft: 20*!/
    },*/

  cardContainer: {
    width: 210,
    height: 370,
    marginLeft: 5,
    padding: 10
  },
  cardBody: {
    flex: 6,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  cardBodyImg: {
    width: 160,
    height: 160
  },

  cardFooter: {
    flex: 3
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    color: "#000"
  }
});

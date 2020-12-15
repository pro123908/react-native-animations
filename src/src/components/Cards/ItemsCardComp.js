import { Card, CardItem, Container, Icon, Button } from "native-base";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
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

class ItemCardComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false,
      data2: [],
      loading: false,
      count: 0,
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
          fav: false
        });
      })
      .catch(error => console.log(error));
  }
  AddFav() {
    this.getAllFav();
    if (this.UnCheckIfexist(this.props.product_id)) {
      this.state.fav = false;
    } else {
      this.state.fav = true;
      this.getFav();
    }
    this.getAllFav();
  }
  getFav() {
    fetch(
      this.state.base +
        "api/addfavourite.php?user_id=" +
        global.id +
        "&product_id=" +
        this.props.product_id +
        "&token=" +
        global.token
    )
      .then(response => response.json())
      .then(resJson => {
        this.state.fav = true;
        alert(resJson.response.message);
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getAllFav();
  }
  getAllFav() {
    //alert("mount");
    fetch(
      this.state.base +
        "api/favourites.php?token=" +
        global.token +
        "&user_id=" +
        global.id
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          once: false,
          data2: [],
          data2: responseJson.response.favourites
        });
      })
      .catch(error => console.log(error));
  }
  CheckIfexist(id) {
    // alert(this.state.data2);
    status = false;
    this.state.data2.forEach(element => {
      //alert(element);
      //alert(this.props.product_id);
      if (this.props.product_id == element) {
        //   alert("chek");
        this.state.fav = true;
        status = true;
      }
    });
    return status;
  }
  UnCheckIfexist(id) {
    // alert(this.state.data2);
    status = false;
    this.state.data2.forEach(element => {
      //alert(element);
      //alert(this.props.product_id);
      if (id == element) {
        //alert("uncheck");
        this.RemoveFav();
        this.state.fav = false;
        status = true;
      }
    });
    return status;
  }
  render() {
    imageSource = require("./../../Resources/Images/3.jpg");
    //alert("rendring");
    if (this.state.loading == false) {
      if (this.state.count <= 2) {
        this.CheckIfexist();
        this.state.count++;
      }
    }

    // alert(this.CheckIfexist());
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          Actions.productDetail({ product_id: this.props.product_id })
        }
      >
        <View style={[styles.closeBtnContainer, { paddingBottom: 8 }]}>
          <View>
            <Button
              style={styles.favBtn}
              onPress={() => {
                this.AddFav();
              }}
            >
              <Icon
                style={{ color: this.state.fav ? "#000" : "#aaa" }}
                name="star"
                type="Entypo"
              />
            </Button>
          </View>
        </View>
        <View
          style={[
            styles.imageContainer,
            { flex: 5, paddingTop: 5, paddingBottom: 5 }
          ]}
        >
          <CachedImage
            resizeMethod="resize"
            style={styles.image}
            source={this.props.imageSource}
          />
        </View>
        <View style={[styles.textContainer, { flex: 1 }]}>
          <Text style={{ color: "#BFAC88" }}>{this.props.storeType}</Text>
        </View>
        <View style={[styles.textContainer, { flex: 1 }]}>
          <Text style={{ fontWeight: "bold", color: "#000" }}>
            {this.props.productName}
          </Text>
        </View>
        <View style={[styles.textContainer, { flex: 2 }]}>
          <Text style={{ textAlign: "center" }}>{this.props.description}</Text>
        </View>
        <View style={[styles.textContainer, { flex: 1 }]}>
          <Text>AED{this.props.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ItemCardComp;

// styling of the card
const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRightColor: "#eee",
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    height: 440
  },
  image: {
    width: 150,
    height: 150
  },

  textContainer: {
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  closeBtnContainer: {
    width: "100%",
    alignItems: "flex-end",
    flex: 1
  },
  favBtn: {
    backgroundColor: "transparent",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  }
});

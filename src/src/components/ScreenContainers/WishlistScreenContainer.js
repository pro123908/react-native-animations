import React from "react";
import { Container, Content, View, Text } from "native-base";
import WishlistCardComp from "../Cards/WishlistCardComp";
import EmptyScreen from "./../ContentContainerComp/EmptyScreen";
import Modal from "react-native-modal";
import ItemsCardComp from "./../Cards/ItemsCardComp";
import { ActivityIndicator } from "react-native";
import EmptyWishlistScreenContainer from "./EmptyWishlistScreenContainer";
export default class WishlistScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      address: "",
      returnData: [],
      counting: "",
      loading: true,
      loading2: true,
      evenData: [],
      oddData: [],
      base: "http://estore.nfasoft.com/"
    };
  }
  componentDidMount() {
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
          data2: responseJson.response.favourites
        });
        this.getFav();
      })
      .catch(error => console.log(error));
  }
  getItemCount() {
    count = 0;
    this.state.data2.forEach(element => {
      count++;
    });
    return count;
  }
  getEvenOdd() {
    this.state.evenData = [];
    this.state.oddData = [];
    this.state.returnData.forEach((element, i) => {
      if (i % 2 == 0) {
        this.state.evenData.push(element);
      } else {
        this.state.oddData.push(element);
      }
    });
  }
  getFav() {
    if (this.state.loading == false) {
      this.state.data2.forEach(element => {
        //alert(element);
        fetch(this.state.base + "api/product.php?id=" + element)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);

            this.setState(state => {
              const returnData = [
                ...state.returnData,
                responseJson.response.product
              ];
              return { returnData };
            });
            //this.state.returnData.push(responseJson.response.product);
          })
          .catch(error => console.log(error));
      });
    }
  }
  componentDidUpdate() {}
  render() {
    if (this.state.loading == false) {
      this.getEvenOdd();
      this.state.counting = this.getItemCount();
    }
    const items2 = this.state.oddData.map(function(productCard) {
      //this.CheckIfexist(productCard.id);
      return (
        <WishlistCardComp
          imageSource={{
            uri: "http://estore.nfasoft.com/images/" + productCard.img_1
          }}
          product_id={productCard.id}
          storeType="New Season"
          productName={productCard.prod_name}
          price={productCard.actual_price}
        />
      );
    });
    const items = this.state.evenData.map(function(productCard) {
      //this.CheckIfexist(productCard.id);
      return (
        <WishlistCardComp
          imageSource={{
            uri: "http://estore.nfasoft.com/images/" + productCard.img_1
          }}
          product_id={productCard.id}
          storeType="New Season"
          productName={productCard.prod_name}
          price={productCard.actual_price}
        />
      );
    });
    return this.state.counting == 0 && this.state.loading == false ? (
      <EmptyWishlistScreenContainer />
    ) : (
      <Container>
        <Content>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: 15
            }}
          >
            <Text style={{ color: "#BFAC88", fontWeight: "bold" }}>
              {this.state.loading ? null : "Free Retunrs"}
            </Text>
          </View>
          <Modal
            style={{
              justifyContent: "center",
              alignItems: "center"
              //backgroundColor: "#fff"
            }}
            visible={this.state.loading}
          >
            <View>
              <ActivityIndicator size="large" color="#000" />
            </View>
          </Modal>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 1 }}>{items}</View>
            <View style={{ flexDirection: "column", flex: 1 }}>{items2}</View>
          </View>
        </Content>
      </Container>
    );
  }
}

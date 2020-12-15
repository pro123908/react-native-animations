import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  Button,
  Item,
  Icon,
  Input
} from "native-base";

import { ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import ItemsCardComp from "./../Cards/ItemsCardComp";
import EmptyScreen from "./../ContentContainerComp/EmptyScreen";
class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data1: [],
      oddItem: [],
      EvenItem: [],
      loading: false,
      msg: <View />,
      checked: true,
      count: -1,
      flag: false
    };
  }
  handleSearchInput = text => {
    this.setState({
      search: text
    });
  };
  flag() {
    this.state.checked = false;
    if (this.state.checked == false) {
    }
  }
  submitSearch = () => {
    this.setState({
      loading: true
    });
    this.checkProduct();
  };
  checkProduct() {
    //alert(this.state.checked);
    fetch(
      "http://estore.nfasoft.com/api/products.php?search=" + this.state.search
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          flag: true,
          data1: responseJson.response.data,
          oddItem: [],
          EvenItem: []
        });
      })
      .catch(error => console.log(error));
  }
  oddEven() {
    this.state.count = 0;
    this.state.data1.forEach((element, i) => {
      this.state.count++;
      if (i % 2 == 0) {
        this.state.EvenItem.push(element);
      } else {
        this.state.oddItem.push(element);
      }
    });
  }

  componentDidMount() {}
  render() {
    if (this.state.loading == false) {
      this.state.oddItem = [];
      this.state.EvenItem = [];
      this.oddEven();
      this.state.msg = <View />;
    }
    const items = this.state.EvenItem.map(function(productCard) {
      return (
        <ItemsCardComp
          key={productCard.id}
          product_id={productCard.id}
          imageSource={{
            uri: "http://estore.nfasoft.com/images/" + productCard.image
          }}
          storeType="New Season"
          productName={productCard.product_name}
          description={productCard.short_description}
          price={productCard.actual_price}
        />
      );
    });

    const items2 = this.state.oddItem.map(function(productCard) {
      return (
        <ItemsCardComp
          key={productCard.id}
          product_id={productCard.id}
          imageSource={{
            uri: "http://estore.nfasoft.com/images/" + productCard.image
          }}
          storeType="New Season"
          productName={productCard.product_name}
          description={productCard.short_description}
          price={productCard.actual_price}
        />
      );
    });
    return (
      <Container style={{ backgroundColor: "#eee" }}>
        <View
          style={{
            width: "100%",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10
          }}
        >
          <Item
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              paddingLeft: 10,

              borderBottomWidth: 0,
              flexDirection: "row"
            }}
          >
            {/* <Icon name="ios-search" /> */}
            <Input placeholder="Search" onChangeText={this.handleSearchInput} />
            <Button
              small
              transparent
              onPress={this.submitSearch}
              style={{ height: "100%" }}
            >
              <Icon name="ios-search" />
            </Button>
          </Item>
          <Item
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              paddingLeft: 10,
              borderBottomWidth: 0
            }}
          />
        </View>
        {this.state.count == 0 &&
        this.state.loading == false &&
        this.state.flag == true ? (
          <EmptyScreen />
        ) : (
          <Content contentContainerStyle={{ backgroundColor: "#eee" }}>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ flexDirection: "column", flex: 1 }}>{items}</View>
              <View style={{ flexDirection: "column", flex: 1 }}>{items2}</View>
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
          </Content>
        )}
      </Container>
    );
  }
}

export default SearchModal;

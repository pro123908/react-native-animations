import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  Icon,
  Footer,
  FooterTab,
  Button
} from "native-base";
import ShoppingCard from "./../components/Cards/ShoppingCard";
import { StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import Modal from "react-native-modal";
import EmptyBagScreen from "./../components/ContentContainerComp/EmptyBagScreen";
class BagScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      address: "",
      returnData: [],
      counting: "",
      loading: true,
      total: 0,
      count: 0,
      base: "http://estore.nfasoft.com/"
    };
  }
  componentDidMount() {
    if (global.id == null) {
      this.setState({
        loading: false
      });
    } else {
      fetch(
        this.state.base +
          "api/mybag.php?user_id=" +
          global.id +
          "&token=" +
          global.token
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false,
            data2: responseJson.response.bag
          });
          //alert(this.state.data2);
          this.getFav();
        })
        .catch(error => console.log(error));
    }
  }
  getFav() {
    this.state.data2.forEach(element => {
      fetch(this.state.base + "api/product.php?id=" + element)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.state.returnData.push(responseJson.response.product);
          this.state.total =
            this.state.total +
            parseInt(responseJson.response.product.actual_price);
          this.setState({
            loading: false,
            data1: responseJson.response.product
          });
        })
        .catch(error => console.log(error));
    });
  }
  getCount() {
    //this.state.count = 0;
    this.state.data2.forEach((element, i) => {
      this.state.count++;
    });
  }
  render() {
    this.getCount();
    return this.state.loading == false && this.state.count == 0 ? (
      <EmptyBagScreen />
    ) : (
      <Container>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content style={{ backgroundColor: "#eee" }}>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            {this.state.returnData.map((productCard, i) => {
              return (
                <ShoppingCard
                  product_id={productCard.id}
                  imageSource={{
                    uri: this.state.base + "images/" + productCard.prod_img1
                  }}
                  storeType="New Season"
                  productName={productCard.prod_name}
                  price={productCard.actual_price}
                />
              );
            })}
          </View>
          <View style={{ backgroundColor: "#fff", padding: 10, marginTop: 20 }}>
            <View>
              <Text style={styles.heading}>Free return service</Text>
              <Text style={styles.text}>
                Return your item for free with our return collection service
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.heading}>Need help?</Text>
              <Text style={styles.text}>
                If you would like to speak to one of our customer service
                representatives you can reach us here:
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 1,
                borderTopColor: "#eee",
                marginTop: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRightColor: "#eee",
                  borderRightWidth: 1,
                  padding: 10
                }}
              >
                <Icon name="phone" type="FontAwesome" />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10
                }}
              >
                <Icon name="email" type="MaterialIcons" />
              </View>
            </View>
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
        <Footer style={{ backgroundColor: "#fff", height: 120 }}>
          <FooterTab
            style={{
              backgroundColor: "#fff",
              height: 120,
              flexDirection: "column"
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flex: 1,
                padding: 10
              }}
            >
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.text}>Subtotal </Text>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>
                    AED{this.state.total}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.text}>Shipping </Text>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>
                    AED0
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>
                    Total USD{" "}
                  </Text>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>
                    AED{this.state.total}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.text}>(Imported duties included)</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                width: "100%",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Button block style={{ backgroundColor: "#22A7F0" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  CHECKOUT
                </Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13
  },
  heading: {
    fontSize: 13,
    fontWeight: "600"
  }
});

export default BagScreen;

import React, { Component } from "react";
import { View, Content } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import { StyleSheet, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
export default class ShoesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: [],
      loading: false,
      firstCard: [],
      secondCard: [],
      thirdCard: []
    };
  }

  getThreeCards() {
    this.state.firstCard = [];
    this.state.secondCard = [];
    this.state.thirdCard = [];
    this.props.shoe.forEach((element, i) => {
      if (i % 3 == 0) {
        this.state.firstCard.push(element);
      } else if (i % 3 == 1) {
        this.state.secondCard.push(element);
      } else if (i % 3 == 2) {
        this.state.thirdCard.push(element);
      }
    });
  }

  render() {
    if (this.state.loading == false) {
      //alert(this.state.data2);
      this.getThreeCards();
    }
    const activeTab = this.props.activeTab;
    const first = this.state.firstCard.map(function(productCard) {
      return (
        <MiniCardComp
          imgSource={productCard.image}
          catagoryName={productCard.name}
          //brandid={productCard.id}
          activeTab={activeTab}
          saleType={"Clothing"}
        />
      );
    });
    const second = this.state.secondCard.map(function(productCard) {
      return (
        <MiniCardComp
          imgSource={productCard.image}
          catagoryName={productCard.name}
          //  brandid={productCard.id}
          activeTab={activeTab}
          saleType={"Clothing"}
        />
      );
    });
    const third = this.state.thirdCard.map(function(productCard) {
      return (
        <MiniCardComp
          imgSource={productCard.image}
          catagoryName={productCard.name}
          // brandid={productCard.id}
          activeTab={activeTab}
          saleType={"Clothing"}
        />
      );
    });

    return (
      <Content>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={{ flex: 1, padding: 5 }}>{first}</View>
            <View style={{ flex: 1, padding: 5 }}>{second}</View>
            <View style={{ flex: 1, padding: 5 }}>{third}</View>
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
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  compContainer: {
    flex: 1,
    padding: 5
  }
});

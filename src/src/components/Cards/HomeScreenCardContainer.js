import React from "react";
import { ScrollView, ActivityIndicator, Text } from "react-native";
import { Container, View } from "native-base";
import CardComp from "./CardComp";
import CardContainerHeader from "./CardContainerHeader";
import ButtonComp from "../ContentContainerComp/ButtonComp";
import { Actions } from "react-native-router-flux";

/* Contains and handles all the cards
 * Requires following Props
 * -----------------------------------
 * sectionName
 * */

export default class HomeScreenCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      homeScreenProductDetails: [],
      baseAddress: "",
      type: "",
      msg: "",
      base: "http://estore.nfasoft.com/"
    };
  }
  componentDidMount() {
    const type = this.props.sectionName;
    if (type == "Men") {
      this.state.baseAddress = this.state.base + "api/products.php?gender=men";
    } else if (type == "Women") {
      this.state.baseAddress =
        this.state.base + "api/products.php?gender=women";
    } else if (type == "Kids") {
      this.state.baseAddress = this.state.base + "api/products.php?gender=kids";
    }

    fetch(this.state.baseAddress)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          homeScreenProductDetails: responseJson.response.data
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }
  render() {
    const imageSource = require("./../../Resources/Images/6.png");
    if (this.state.loading == true) {
      this.state.msg = (
        <View>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    } else {
      this.state.msg = <View />;
    }
    return (
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CardContainerHeader name={this.props.sectionName + " Section"} />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>{this.state.msg}</View>
          {this.state.homeScreenProductDetails.map(productCard => {
            return (
              <CardComp
                key={productCard.id}
                product_id={productCard.id}
                imgSource={{
                  uri: this.state.base + "images/" + productCard.image
                }}
                designerName={productCard.product_name}
                shortDescription={productCard.short_description}
                price={productCard.offer_price}
                cardHeight={270}
                cardWidth={200}
                leftMargin={20}
              />
            );
          })}
        </ScrollView>
        <ButtonComp
          title={"Shop Now"}
          onPressAction={() =>
            Actions.itemsScreen({ title: this.props.sectionName, activeTab: 1 })
          }
        />
      </View>
    );
  }
}

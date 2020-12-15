import React, { Component } from "react";
import {
  Container,
  View,
  Text,
  Content,
  List,
  ListItem,
  Item,
  Input,
  Label,
  Footer,
  FooterTab,
  Button
} from "native-base";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
import { StatusBar } from "react-native";
class PriceRange extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Price Range" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content>
          <View style={{ flexDirection: "row", padding: 20 }}>
            <View style={{ flex: 2 }}>
              <Item floatingLabel>
                <Label style={{ fontSize: 13 }}>$ Min</Label>
                <Input />
              </Item>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Text>To</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Item floatingLabel>
                <Label style={{ fontSize: 13 }}>$ Max</Label>
                <Input />
              </Item>
            </View>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#fff" }}>
          <FooterTab style={{ backgroundColor: "#fff" }}>
            <View
              style={{
                width: "100%",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Button
                block
                style={{ backgroundColor: "#22A7F0" }}
                // onPress={() => {
                //   Actions.itemsScreen({
                //     title: this.props.title,
                //     activeTab: this.props.activeTab,
                //     saleType: this.props.saleType,
                //     prePage: "refine",
                //     newItem: this.state.newItem,
                //     priceHigh: this.state.priceHigh,
                //     priceLow: this.state.priceLow,
                //     brandid: this.props.brandid
                //   });
                // }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  SHOW RESULTS
                </Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default PriceRange;

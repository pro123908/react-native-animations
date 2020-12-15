import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Radio,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import RefineHeaderComp from "./../components/ContentContainerComp/RefineHeaderComp";
import { Actions } from "react-native-router-flux";

class RefineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: true,
      priceHigh: false,
      priceLow: false,
      prePage: "refine"
    };
  }
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Refine" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>Sort by</Text>
            </ListItem>
            <ListItem
              style={styles.radioItem}
              onPress={() => {
                this.setState({
                  newItem: true,
                  priceHigh: false,
                  priceLow: false
                });
              }}
            >
              <View style={styles.radioBtnContainer}>
                <Radio
                  selected={this.state.newItem}
                  color="#000"
                  selectedColor="#000"
                  onPress={() => {
                    this.setState({
                      newItem: true,
                      priceHigh: false,
                      priceLow: false
                    });
                  }}
                />
              </View>
              <View style={styles.radioTextContainer}>
                <Text style={styles.text}>New Items</Text>
              </View>
            </ListItem>
            <ListItem
              style={styles.radioItem}
              onPress={() => {
                this.setState({
                  newItem: false,
                  priceHigh: true,
                  priceLow: false
                });
              }}
            >
              <View style={styles.radioBtnContainer}>
                <Radio
                  selected={this.state.priceHigh}
                  color="#000"
                  selectedColor="#000"
                  onPress={() => {
                    this.setState({
                      newItem: false,
                      priceHigh: true,
                      priceLow: false
                    });
                  }}
                />
              </View>
              <View style={styles.radioTextContainer}>
                <Text style={styles.text}>Price (high first)</Text>
              </View>
            </ListItem>
            <ListItem
              style={[styles.radioItem, { borderBottomColor: "transparent" }]}
              onPress={() => {
                this.setState({
                  newItem: false,
                  priceHigh: false,
                  priceLow: true
                });
              }}
            >
              <View style={styles.radioBtnContainer}>
                <Radio
                  selected={this.state.priceLow}
                  color="#000"
                  selectedColor="#000"
                  onPress={() => {
                    this.setState({
                      newItem: false,
                      priceHigh: false,
                      priceLow: true
                    });
                  }}
                />
              </View>
              <View style={styles.radioTextContainer}>
                <Text style={styles.text}>Price (low first)</Text>
              </View>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                Filter by
              </Text>
            </ListItem>
            <ListItem
              onPress={() => {
                Actions.designersScreen({
                  title: this.props.title,
                  activeTab: this.props.activeTab,
                  saleType: this.props.saleType,
                  prePage: "refine",
                  newItem: this.state.newItem,
                  priceHigh: this.state.priceHigh,
                  priceLow: this.state.priceLow
                });
              }}
            >
              <Text style={styles.text}>Designers</Text>
            </ListItem>
            <ListItem
              onPress={() => {
                Actions.sizesScreen({
                  title: this.props.title,
                  activeTab: this.props.activeTab,
                  saleType: this.props.saleType,
                  prePage: "refine",
                  newItem: this.state.newItem,
                  priceHigh: this.state.priceHigh,
                  priceLow: this.state.priceLow
                });
              }}
            >
              <Text style={styles.text}>Sizes</Text>
            </ListItem>
            <ListItem
              onPress={() => {
                Actions.colorsScreen({
                  title: this.props.title,
                  activeTab: this.props.activeTab,
                  saleType: this.props.saleType,
                  prePage: "refine",
                  newItem: this.state.newItem,
                  priceHigh: this.state.priceHigh,
                  priceLow: this.state.priceLow
                });
              }}
            >
              <Text style={styles.text}>Colours</Text>
            </ListItem>
            <ListItem
              onPress={() => {
                Actions.priceRangeScreen();
              }}
            >
              <Text style={styles.text}>Price Range</Text>
            </ListItem>
          </List>
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
                onPress={() => {
                  Actions.itemsScreen({
                    title: this.props.title,
                    activeTab: this.props.activeTab,
                    saleType: this.props.saleType,
                    prePage: "refine",
                    newItem: this.state.newItem,
                    priceHigh: this.state.priceHigh,
                    priceLow: this.state.priceLow,
                    brandid: this.props.brandid
                  });
                }}
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

const styles = StyleSheet.create({
  text: {
    fontSize: 13
  },
  radioItem: {
    flexDirection: "row"
  },
  radioBtnContainer: {
    flex: 1
  },
  radioTextContainer: {
    flex: 8
  }
});

export default RefineScreen;

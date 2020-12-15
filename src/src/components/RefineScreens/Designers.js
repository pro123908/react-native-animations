import React, { Component } from "react";
import {
  Container,
  View,
  Text,
  Content,
  List,
  ListItem,
  Button
} from "native-base";
import {
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { Actions } from "react-native-router-flux";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
import Modal from "react-native-modal";
class Designers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      itemId: "",
      base: "http://estore.nfasoft.com/"
    };
  }
  componentDidMount() {
    fetch(this.state.base + "api/utils.php?brands=1")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.brands
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Designers" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content>
          <FlatList
            data={this.state.data1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ListItem
                style={{ borderBottomWidth: 0 }}
                onPress={() => {
               //   alert(item.id);
                  Actions.itemsScreen({
                    title: this.props.title,
                    activeTab: this.props.activeTab,
                    saleType: this.props.saleType,
                    prePage: "refine",
                    newItem: this.props.newItem,
                    priceHigh: this.props.priceHigh,
                    priceLow: this.props.priceLow,
                    itemId: item.id,
                    selectedFilter: "designers"
                  });
                }}
              >
                <Text style={{ fontSize: 13 }}>{item.brand}</Text>
              </ListItem>
            )}
            keyExtractor={(name, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#cccccc" }} />
            )}
          />
          {/* <Button
            block
            style={{ backgroundColor: "#22A7F0" }}
            onPress={() => {
              alert(this.state.itemId);
              Actions.itemsScreen({
                title: this.props.title,
                activeTab: this.props.activeTab,
                saleType: this.props.saleType,
                prePage: "refine",
                newItem: this.props.newItem,
                priceHigh: this.props.priceHigh,
                priceLow: this.props.priceLow,
                itemId: this.state.itemId,
                selectedFilter: "designers"
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
          </Button> */}
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
      </Container>
    );
  }
}

export default Designers;

import React, { Component } from "react";
import { Container, View, Text, Content, ListItem } from "native-base";
import {
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from "react-native";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
import { Actions } from "react-native-router-flux";
import Modal from "react-native-modal";
export default class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: "",
      loading: true,
      base: "http://estore.nfasoft.com/"
    };
  }

  getColors() {}
  componentDidMount() {
    fetch(this.state.base + "api/utils.php?colors=1")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.colors
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Colours" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content>
          <FlatList
            data={this.state.data1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ListItem
                style={{ borderBottomWidth: 0 }}
                onPress={() => {
                 // alert(item.id);
                  Actions.itemsScreen({
                    title: this.props.title,
                    activeTab: this.props.activeTab,
                    saleType: this.props.saleType,
                    prePage: "refine",
                    newItem: this.props.newItem,
                    priceHigh: this.props.priceHigh,
                    priceLow: this.props.priceLow,
                    itemId: item.id,
                    selectedFilter: "colors"
                  });
                }}
              >
                <Text style={{ fontSize: 13 }}>{item.color}</Text>
              </ListItem>
            )}
            keyExtractor={(name, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#cccccc" }} />
            )}
          />

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

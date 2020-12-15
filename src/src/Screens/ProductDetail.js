import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar
} from "react-native";
import ImageSlider from "react-native-image-slider";
import Modal from "react-native-modal";
import ItemsHeaderComp from "./../components/ContentContainerComp/ItemsHeaderComp";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import StatusBarManger from "./../components/ContentContainerComp/StatusBarManager";
import { Actions } from "react-native-router-flux";
import ItemsCardComp from "./../components/Cards/ItemsCardComp";
import {
  Button,
  Content,
  Accordion,
  Container,
  Icon,
  Footer,
  FooterTab,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Header
} from "native-base";
class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      size: "SELECT SIZE",
      fav: false,
      data1: [],
      loading: true,
      data2: [],
      EvenItem: [],
      loading2: true,
      oddItem: [],
      base: "http://estore.nfasoft.com/",
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([""])
    };
  }

  componentDidMount() {
    this.getFav();
    this.getRecomended();
  }
  oddEven() {
    this.state.data2.forEach((element, i) => {
      if (i % 2 == 0) {
        this.state.EvenItem.push(element);
      } else {
        this.state.oddItem.push(element);
      }
    });
  }
  getRecomended() {
    fetch(
      this.state.base + "api/relatedproducts.php?id=" + this.props.product_id
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading2: false,

          data2: responseJson.response.products,
          dataSource: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows([""])
        });
      })
      .catch(error => console.log(error));
  }
  getFav() {
    fetch(this.state.base + "api/product.php?id=" + this.props.product_id)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.product,
          dataSource: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows([""])
        });
      })
      .catch(error => console.log(error));
  }
  AddFav() {
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
        // alert(resJson.response.message);
      })
      .catch(error => console.log(error));
  }
  AddtoBag() {
    fetch(
      this.state.base +
        "api/addbag.php?user_id=" +
        global.id +
        "&product_id=" +
        this.props.product_id +
        "&token=" +
        global.token
    )
      .then(response => response.json())
      .then(resJson => {
        alert(resJson.response.message);
      })
      .catch(error => console.log(error));
  }
  render() {
    //alert("render");
    if (this.state.loading2 == false) {
      this.state.oddItem = [];
      this.state.EvenItem = [];
      this.oddEven();
    }
    //alert(this.state.EvenItem);
    const items = this.state.EvenItem.map(function(productCard) {
      return (
        <ItemsCardComp
          key={1}
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
          key={2}
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
    const { onScroll = () => {} } = this.props;
    const dataArray = [
      { title: "Description", content: this.state.data1.description },
      { title: "Size & Fit", content: this.state.data1.size },
      { title: "Composition & Care", content: "Lorem ipsum dolor sit amet" },
      {
        title: "Shipping & Free Return",
        content: this.state.data1.shipping
      },
      {
        title: "Designer",
        content: this.state.data1.brand
      }
    ];
    let imagesSlider = [this.state.base + "images/" + this.state.data1.img_1];
    if (
      this.state.data1.img_1 != undefined &&
      this.state.data1.img_2 != undefined &&
      this.state.data1.img_3 != undefined &&
      this.state.data1.img_4 != undefined
    ) {
      imagesSlider = [
        this.state.base + "images/" + this.state.data1.img_1,
        this.state.base + "images/" + this.state.data1.img_2,
        this.state.base + "images/" + this.state.data1.img_3,
        this.state.base + "images/" + this.state.data1.img_4
      ];
    } else if (
      this.state.data1.img_1 != undefined &&
      this.state.data1.img_2 != undefined &&
      this.state.data1.img_3 != undefined &&
      this.state.data1.img_4 == undefined
    ) {
      imagesSlider = [
        this.state.base + "images/" + this.state.data1.img_1,
        this.state.base + "images/" + this.state.data1.img_2,
        this.state.base + "images/" + this.state.data1.img_3
      ];
    } else if (
      this.state.data1.img_1 != undefined &&
      this.state.data1.img_2 != undefined &&
      this.state.data1.img_3 == undefined &&
      this.state.data1.img_4 == undefined
    ) {
      imagesSlider = [
        this.state.base + "images/" + this.state.data1.img_1,
        this.state.base + "images/" + this.state.data1.img_2
      ];
    } else if (
      this.state.data1.img_1 != undefined &&
      this.state.data1.img_2 == undefined &&
      this.state.data1.img_3 == undefined &&
      this.state.data1.img_4 == undefined
    ) {
      imagesSlider = [this.state.base + "images/" + this.state.data1.img_1];
    }
    return (
      <Container>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <ListView
          removeClippedSubviews={true}
          ref="ListView"
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <View key={rowData} style={{ backgroundColor: "#eee" }}>
              <View style={{ backgroundColor: "#fff" }}>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20
                  }}
                >
                  <View>
                    <Button
                      transparent
                      style={{
                        borderWidth: 1,
                        borderColor: "#eee",
                        paddingLeft: 10,
                        paddingRight: 10
                      }}
                      onPress={() => {
                        this.setState({
                          isModalVisible: !this.state.isModalVisible,
                          dataSource: new ListView.DataSource({
                            rowHasChanged: (r1, r2) => r1 !== r2
                          }).cloneWithRows([""])
                        });
                        //alert("pressed");
                      }}
                    >
                      <Text
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          fontSize: 13
                        }}
                      >
                        {this.state.size == "SELECT SIZE"
                          ? this.state.size
                          : "SIZE " + this.state.size}
                      </Text>
                    </Button>
                  </View>
                </View>
                {/* <Button
                  style={{
                    backgroundColor: "#fff",
                    alignSelf: "center",
                    marginTop: 25,
                    marginBottom: 20,
                    //padding: 20,
                    elevation: 0,
                    borderWidth: 1,
                    borderColor: "#eee"
                  }}
                  onPress={() => {
                    this.setState({
                      isModalVisible: !this.state.isModalVisible
                    });
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: 13
                    }}
                  >
                    
                    SELECT SIZE
                  </Text>
                </Button> */}
              </View>

              <Accordion
                dataArray={dataArray}
                icon="add"
                expandedIcon="remove"
                iconStyle={{ color: "green" }}
                expandedIconStyle={{ color: "red" }}
                headerStyle={{ backgroundColor: "white" }}
                contentStyle={{
                  backgroundColor: "white",
                  fontSize: 13
                }}
              />

              <View style={{ backgroundColor: "#fff" }}>
                <Text style={{ marginLeft: 14, textAlign: "center" }}>
                  Contact US & Order By Phone
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                <Button
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    justifyContent: "center",
                    elevation: 0
                  }}
                >
                  <Icon
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      color: "black"
                    }}
                    name="md-call"
                  />
                </Button>
                <Button
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    justifyContent: "center",
                    elevation: 0
                  }}
                >
                  <Icon
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      color: "black"
                    }}
                    name="md-chatboxes"
                  />
                </Button>
              </View>
              <View
                style={{ padding: 10, backgroundColor: "#fff", marginTop: 10 }}
              >
                <Text>Recommended for you</Text>
              </View>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ flexDirection: "column", flex: 1 }}>
                  {items}
                </View>
                <View style={{ flexDirection: "column", flex: 1 }}>
                  {items2}
                </View>
              </View>

              <View style={{ paddingTop: this.state.isModalVisible ? 100 : 0 }}>
                <Modal
                  visible={this.state.isModalVisible}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    marginTop: "50%"
                  }}
                  onBackButtonPress={() => {
                    this.setState({
                      isModalVisible: !this.state.isModalVisible,
                      dataSource: new ListView.DataSource({
                        rowHasChanged: (r1, r2) => r1 !== r2
                      }).cloneWithRows([""])
                    });
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      padding: 20,
                      paddingTop: 30
                    }}
                  >
                    <View>
                      <Text>
                        Some sizes are only available at alternative Farfetch
                        partners, with a different price
                      </Text>
                    </View>
                    <View>
                      <List>
                        <ListItem>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({
                                size: this.state.data1.size,
                                isModalVisible: !this.state.isModalVisible,
                                dataSource: new ListView.DataSource({
                                  rowHasChanged: (r1, r2) => r1 !== r2
                                }).cloneWithRows([""])
                              });
                            }}
                            style={{ flex: 1 }}
                          >
                            <View style={{ width: "100%" }}>
                              <Text>{this.state.data1.size}</Text>
                            </View>
                          </TouchableOpacity>
                        </ListItem>
                      </List>
                    </View>
                  </View>
                </Modal>
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
            </View>
          )}
          renderScrollComponent={props => (
            <ParallaxScrollView
              onScroll={onScroll}
              headerBackgroundColor="transparent"
              stickyHeaderHeight={STICKY_HEADER_HEIGHT}
              parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
              backgroundSpeed={20}
              backgroundScrollSpeed={100}
              fadeOutForeground={false}
              renderBackground={() => (
                <View key="background">
                  <View style={{ height: "100%", backgroundColor: "#fff" }}>
                    <ImageSlider
                      autoPlayWithInterval={3000}
                      images={imagesSlider}
                      style={{ backgroundColor: "#fff" }}
                    />
                  </View>

                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      width: window.width,
                      //backgroundColor: "rgba(0,0,0,.4)",
                      height: PARALLAX_HEADER_HEIGHT
                      //backgroundColor: "red"
                    }}
                  />
                </View>
              )}
              renderForeground={() => (
                <View key="parallax-header" style={styles.parallaxHeader}>
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: "#fff",
                      width: "100%"
                    }}
                  >
                    <View>
                      <Text style={{ color: "#BFAC88" }}>
                        {this.state.loading ? null : "New Season"}
                      </Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "#000" }}>
                        {this.state.data1.prod_name}
                      </Text>

                      <Text>
                        {this.state.loading ? null : "AED"}
                        {this.state.data1.actual_price}
                      </Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text>{this.state.data1.description}</Text>
                    </View>
                  </View>
                </View>
              )}
              renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                  <View
                    style={{
                      padding: 10
                    }}
                  >
                    <View>
                      <Text style={{ color: "#BFAC88" }}>New Season</Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "#000" }}>
                        {this.state.data1.prod_name}
                      </Text>

                      <Text>AED{this.state.data1.actual_price}</Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text>{this.state.data1.description}</Text>
                    </View>
                  </View>
                </View>
              )}
              renderFixedHeader={() => (
                <View
                  key="fixed-header"
                  style={[
                    styles.fixedSection,
                    {
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }
                  ]}
                >
                  <Left style={{ flex: 1 }}>
                    <Button
                      transparent
                      onPress={() => {
                        Actions.pop();
                      }}
                    >
                      <Icon
                        name="arrowleft"
                        type="AntDesign"
                        style={{ color: "black" }}
                      />
                    </Button>
                  </Left>

                  <Right style={{ flex: 1 }}>
                    <Button
                      transparent
                      onPress={() => {
                        Actions.bagScreen();
                      }}
                    >
                      <Icon name="cart" style={{ color: "black" }} />
                    </Button>
                  </Right>
                </View>
              )}
            />
          )}
        />

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
                  this.AddtoBag();
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  ADD TO BAG
                </Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 450;
const STICKY_HEADER_HEIGHT = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#fff"
  },
  stickySectionText: {
    color: "white",
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: "absolute",
    top: 10,
    right: 10
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "column",
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: "white",
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: "hidden",
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center"
  },
  rowText: {
    fontSize: 20
  },
  closeBtnContainer: {
    width: "100%",
    alignItems: "flex-end"
  },
  favBtn: {
    backgroundColor: "transparent",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  }
});

export default Parallax;

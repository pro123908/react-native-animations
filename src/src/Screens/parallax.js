import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import ImageSlider from "react-native-image-slider";
import Modal from "react-native-modal";
import ItemsHeaderComp from "./../components/ContentContainerComp/ItemsHeaderComp";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import {
  Button,
  Content,
  Accordion,
  Container,
  Icon,
  Footer,
  FooterTab,
  List,
  ListItem
} from "native-base";
class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      size: "SELECT SIZE",
      fav: false,
      data1: [],
      base: "http://estore.nfasoft.com/",
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([""])
    };
  }

  componentDidMount() {
    this.getFav();
  }
  getFav() {
    fetch(this.state.base + "api/product.php?id=" + this.props.product_id)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.product
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
        alert(resJson.response.message);
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
    const { onScroll = () => {} } = this.props;
    const dataArray = [
      { title: "Description", content: "Description" },
      { title: "Size & Fit", content: "Size" },
      { title: "Composition & Care", content: "Lorem ipsum dolor sit amet" },
      {
        title: "Shipping & Free Return",
        content: "Shiiping"
      },
      {
        title: "Designer - Emporio Armani",
        content: "Lorem ipsum dolor sit amet"
      }
    ];
    return (
      <Container>
        <ListView
          ref="ListView"
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <View key={rowData}>
              <View style={{ padding: 10 }}>
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
                    this.state.data1.prod_name
                  </Text>

                  <Text>$this.state.data1.actual_price</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text>this.state.data1.description</Text>
                </View>
              </View>
              <View>
                <Button
                  style={{
                    backgroundColor: "white",
                    alignSelf: "center",
                    marginTop: 25,
                    marginBottom: 20,
                    padding: 20,
                    elevation: 0,
                    borderWidth: 1,
                    borderColor: "#eee"
                  }}
                  onPress={() => {
                    alert("hello");
                    this.setState({
                      isModalVisible: !this.state.isModalVisible
                    });
                    alert(this.state.isModalVisible);
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
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

              <Text style={{ marginLeft: 14, textAlign: "center" }}>
                Contact US & Order By Phone
              </Text>
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
                    justifyContent: "center"
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
                    justifyContent: "center"
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
              <View style={{ paddingTop: this.state.isModalVisible ? 100 : 0 }}>
                <Modal
                  isVisible={this.state.isModalVisible}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    marginTop: "50%"
                  }}
                  onBackButtonPress={() => {
                    this.setState({
                      isModalVisible: !this.state.isModalVisible
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
                                isModalVisible: !this.state.isModalVisible
                              });
                            }}
                            style={{ flex: 1 }}
                          >
                            <View style={{ width: "100%" }}>
                              <Text>this.state.data1.size</Text>
                            </View>
                          </TouchableOpacity>
                        </ListItem>
                      </List>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          )}
          renderScrollComponent={props => (
            <ParallaxScrollView
              onScroll={onScroll}
              headerBackgroundColor="#333"
              stickyHeaderHeight={STICKY_HEADER_HEIGHT}
              parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
              backgroundSpeed={10}
              renderBackground={() => (
                <View key="background">
                  <View style={{ height: "100%", backgroundColor: "#fff" }}>
                    <ImageSlider
                      autoPlayWithInterval={3000}
                      images={[
                        "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg",
                        "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg",
                        "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg",
                        "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg"
                      ]}
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
                    }}
                  />
                </View>
              )}
              renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                  <View style={{ padding: 10 }}>
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
                        "Product name"
                      </Text>

                      <Text>$1000</Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text>description here</Text>
                    </View>
                  </View>
                </View>
              )}
              renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <Text
                    style={styles.fixedSectionText}
                    onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}
                  >
                    Scroll to top
                  </Text>
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
                // onPress={() => {
                //   this.AddtoBag();
                // }}
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
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

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
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: "center",
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

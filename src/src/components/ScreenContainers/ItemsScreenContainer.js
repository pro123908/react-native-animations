import React from "react";
import { Container, Content, View, Icon, Text, Button } from "native-base";
import ItemsCardComp from "./../Cards/ItemsCardComp";
import { Actions } from "react-native-router-flux";
import { ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import EmptyScreen from "./../ContentContainerComp/EmptyScreen";
export default class ItemsScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      address: "",
      returnData: [],
      counting: "",
      loading: true,
      items: 0,
      oddItem: [],
      EvenItem: [],
      data2: [],
      base: "http://estore.nfasoft.com/"
    };
  }
  CheckIfexist(id) {
    //alert("helo");

    this.state.data2.forEach(element => {
      if (id == element) {
        this.state.fav = true;
        //alert(this.state.fav);
        status = true;
      }
    });
    return status;
  }
  getNumberCount() {
    count = 0;
    if (this.props.saleType && this.props.title) {
      this.state.data1.forEach(element => {
        if (
          element.category == this.props.saleType &&
          element.sub_category == this.props.title
        ) {
          count++;
        }
      });
    } else {
      this.state.data1.forEach(element => {
        count++;
      });
    }

    return count;
  }
  oddEven() {
    this.state.returnData.forEach((element, i) => {
      if (i % 2 == 0) {
        this.state.EvenItem.push(element);
      } else {
        this.state.oddItem.push(element);
      }
    });
  }
  getData() {
    if (this.props.saleType && this.props.title) {
      this.state.data1.forEach(element => {
        if (
          element.category == this.props.saleType &&
          element.sub_category == this.props.title
        ) {
          this.state.returnData.push(element);
        }
      });
    } else {
      this.state.data1.forEach(element => {
        this.state.returnData.push(element);
      });
    }
  }
  withoutRefine() {
    //alert("item" + this.props.brandid);

    if (this.props.saleType == undefined) {
      if (this.props.prePage == undefined) {
        this.state.address =
          this.state.base + "api/products.php?gender=" + this.props.sectionName;
      } else this.props.prePage == "refine";
      {
        if (this.props.selectedFilter == undefined) {
          if (this.props.newItem == true) {
            this.state.address =
              this.state.base +
              "api/products.php?sort=new&gender=" +
              this.props.sectionName;
          } else if (this.props.priceHigh == true) {
            this.state.address =
              this.state.base +
              "api/products.php?sort=highest&gender=" +
              this.props.sectionName;
          } else if (this.props.priceLow == true) {
            this.state.address =
              this.state.base +
              "api/products.php?sort=lowest&gender=" +
              this.props.sectionName;
          }
        } else if (this.props.selectedFilter == "designers") {
          //  alert(this.props.sectionName);
          this.state.address =
            this.state.base +
            "api/products.php?gender=" +
            this.props.sectionName +
            "&brand_id=" +
            this.props.itemId;
        } else if (this.props.selectedFilter == "sizes") {
          this.state.address =
            this.state.base +
            "api/products.php?gender=" +
            this.props.sectionName +
            "&size_id=" +
            this.props.itemId;
        } else if (this.props.selectedFilter == "colors") {
          this.state.address =
            this.state.base +
            "api/products.php?gender=" +
            this.props.sectionName +
            "&colors=" +
            this.props.itemId;
        }
      }
    } else {
      if (this.props.prePage == undefined) {
        if (this.props.activeTabNum == 1) {
          //alert(this.props.activeTabNum);
          if (this.props.brandid != undefined) {
            this.state.address =
              this.state.base +
              "api/products.php?gender=women&brand_id=" +
              this.props.brandid;
          } else {
            this.state.address =
              this.state.base + "api/products.php?gender=women";
          }
        } else if (this.props.activeTabNum == 2) {
          //alert("hello");
          if (this.props.brandid != undefined) {
            this.state.address =
              this.state.base +
              "api/products.php?gender=men&brand_id=" +
              this.props.brandid;
          } else {
            this.state.address =
              this.state.base + "api/products.php?gender=men";
          }
        } else if (this.props.activeTabNum == 3) {
          if (this.props.brandid != undefined) {
            this.state.address =
              this.state.base +
              "api/products.php?gender=kids&brand_id=" +
              this.props.brandid;
          } else {
            this.state.address =
              this.state.base + "api/products.php?gender=kids";
          }
        }
      } else if (this.props.prePage == "refine") {
        if (this.props.selectedFilter == undefined) {
          if (this.props.activeTabNum == 1) {
            if (this.props.newItem == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=new&gender=women&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=new&gender=women";
              }
            } else if (this.props.priceHigh == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=highest&gender=women&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=highest&gender=women";
              }
            } else if (this.props.priceLow == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=lowest&gender=women&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=lowest&gender=women";
              }
            }
          } else if (this.props.activeTabNum == 2) {
            if (this.props.newItem == true) {
              if (this.props.saleType == "desiignerTab") {
                his.state.address =
                  this.state.base +
                  "api/products.php?sort=new&gender=men&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=new&gender=men";
              }
            } else if (this.props.priceHigh == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=highest&gender=men&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=highest&gender=men";
              }
            } else if (this.props.priceLow == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=lowest&gender=men&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=lowest&gender=men";
              }
            }
          } else if (this.props.activeTabNum == 3) {
            if (this.props.newItem == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=new&gender=kids&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=new&gender=kids";
              }
            } else if (this.props.priceHigh == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=highest&gender=kids&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=highest&gender=kids";
              }
            } else if (this.props.priceLow == true) {
              if (this.props.saleType == "designerTab") {
                this.state.address =
                  this.state.base +
                  "api/products.php?sort=lowest&gender=kids&brand_id=" +
                  this.props.brandid;
              } else {
                this.state.address =
                  this.state.base + "api/products.php?sort=lowest&gender=kids";
              }
            }
          }
        } else if (this.props.selectedFilter == "designers") {
          if (this.props.activeTabNum == 1) {
            //alert("yaha tkss");

            this.state.address =
              this.state.base +
              "api/products.php?gender=women&brand=" +
              this.props.itemId;
          } else if (this.props.activeTabNum == 2) {
            //alert(this.props.newItem);
            this.state.address =
              this.state.base +
              "api/products.php?gender=men&brand=" +
              this.props.itemId;
          } else if (this.props.activeTabNum == 3) {
            //alert(this.props.newItem);
            this.state.address =
              this.state.base +
              "api/products.php?gender=kids&brand=" +
              this.props.itemId;
          }
        }
      } else if (this.props.selectedFilter == "sizes") {
        if (this.props.activeTabNum == 1) {
          //alert("yaha tkss");

          this.state.address =
            this.state.base +
            "api/products.php?gender=women&size=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 2) {
          //alert(this.props.newItem);
          this.state.address =
            this.state.base +
            "api/products.php?gender=men&size=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 3) {
          //alert(this.props.newItem);
          this.state.address =
            this.state.base +
            "api/products.php?gender=kids&size=" +
            this.props.itemId;
        }
      } else if (this.props.selectedFilter == "colors") {
        if (this.props.activeTabNum == 1) {
          //alert("yaha tkss");

          this.state.address =
            this.state.base +
            "api/products.php?gender=women&colors=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 2) {
          //alert(this.props.newItem);
          this.state.address =
            this.state.base +
            "api/products.php?gender=men&colors=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 3) {
          //alert(this.props.newItem);
          this.state.address =
            this.state.base +
            "api/products.php?gender=kids&colors=" +
            this.props.itemId;
        }
      }
    }
  }
  getAllFav() {
    fetch(
      this.state.base +
        "api/favourites.php?token=" +
        global.token +
        "&user_id=" +
        global.id
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data2: responseJson.response.favourites
        });
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getAllFav();
    this.withoutRefine();
    fetch(this.state.address)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.data
        });
      })
      .catch(error => console.log(error));
  }
  onClearArray = () => {
    this.setState({ oddItem: [], EvenItem: [] });
  };
  render() {
    if (this.state.loading == false) {
      this.state.oddItem = [];
      this.state.EvenItem = [];
      this.state.returnData = [];
      this.getData();
      this.oddEven();
      this.state.msg = <Text>Items {this.getNumberCount()}</Text>;
      this.state.items = this.getNumberCount();
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
      //this.CheckIfexist(productCard.id);
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
    return this.state.items == 0 && this.state.loading == false ? (
      <EmptyScreen />
    ) : (
      <Container>
        <Content style={{ backgroundColor: "#eee" }}>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
          >
            <View style={{ flex: 1 }}>{this.state.msg}</View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <View>
                <Button
                  style={{
                    flexDirection: "row",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: "#aaa",
                    paddingLeft: 10,
                    paddingRight: 10,
                    shadowOffset: { height: 0, width: 0 },
                    shadowOpacity: 0,
                    elevation: 0,
                    backgroundColor: "transparent"
                  }}
                  onPress={() => {
                    Actions.refineScreen({
                      title: this.props.title,
                      activeTab: this.props.activeTabNum,
                      saleType: this.props.saleType,
                      brandid: this.props.brandid
                    });
                  }}
                >
                  <View>
                    <Icon
                      name="filter-list"
                      type="MaterialIcons"
                      style={{ color: "#000" }}
                    />
                  </View>
                  <View>
                    <Text>Refine</Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: 15
            }}
          >
            <Text style={{ color: "#BFAC88", fontWeight: "bold" }}>
              {this.state.loading ? null : "Free Retunrs"}
            </Text>
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
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{ flexDirection: "column", flex: 1 }}>{items}</View>
            <View style={{ flexDirection: "column", flex: 1 }}>{items2}</View>
          </View>
        </Content>
      </Container>
    );
  }
}

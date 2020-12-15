import React from "react";
import { Container, Content, Tabs, Tab, View, Text } from "native-base";
import WomenTab from "../Tabs/WomenTab";
import MenTab from "../Tabs/MenTab";
import KidsTab from "../Tabs/KidsTab";
import Modal from "react-native-modal";
import { ActivityIndicator } from "react-native";
export default class ShopScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: [],
      data1: [],
      data3: [],
      data4: [],
      data5: [],
      loading: true,
      base: "http://estore.nfasoft.com/"
    };
  }
  componentDidMount() {
    fetch(this.state.base + "api/utils.php?catid=1")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.subcats
        });
      })
      .catch(error => console.log(error));
    fetch(this.state.base + "api/utils.php?catid=2")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data2: responseJson.response.subcats
        });
      })
      .catch(error => console.log(error));
    fetch(this.state.base + "api/utils.php?catid=4")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data4: responseJson.response.subcats
        });
      })
      .catch(error => console.log(error));
    fetch(this.state.base + "api/utils.php?catid=3")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data3: responseJson.response.subcats
        });
      })
      .catch(error => console.log(error));
    fetch(this.state.base + "api/utils.php?catid=5")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data5: responseJson.response.subcats
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Container>
        <Tabs
          tabContainerStyle={{
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            elevation: 0
          }}
          tabBarUnderlineStyle={{ backgroundColor: "#000" }}
        >
          <Tab heading={"WOMEN"}>
            <WomenTab
              cloths={this.state.data1}
              shoe={this.state.data2}
              accessries={this.state.data3}
              bag={this.state.data4}
              jewlry={this.state.data5}
              activeTab={1}
            />
          </Tab>

          <Tab heading={"MEN"}>
            <MenTab
              cloths={this.state.data1}
              shoe={this.state.data2}
              accessries={this.state.data3}
              bag={this.state.data4}
              jewlry={this.state.data5}
              activeTab={2}
            />
          </Tab>

          <Tab heading={"KIDS"}>
            <KidsTab
              cloths={this.state.data1}
              shoe={this.state.data2}
              accessries={this.state.data3}
              bag={this.state.data4}
              jewlry={this.state.data5}
              activeTab={3}
            />
          </Tab>
        </Tabs>
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
      </Container>
    );
  }
}

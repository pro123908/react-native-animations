import React from "react";
import { Container, Content, Tab, Tabs, View } from "native-base";
import DesingerMenTab from "../Tabs/DesignerMenTab";
import DesignerWomenTab from "../Tabs/DesignerWomenTab";
import DesignerKidsTab from "../Tabs/DesignerKidsTab";
import Modal from "react-native-modal";
import { ActivityIndicator } from "react-native";
export default class DesignerScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: [],
      loading: true,
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
          data2: responseJson.response.brands
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
            <DesignerWomenTab activeTab={3} design={this.state.data2} />
          </Tab>

          <Tab heading={"MEN"}>
            <DesingerMenTab activeTab={3} design={this.state.data2} />
          </Tab>

          <Tab heading={"KIDS"}>
            <DesignerKidsTab activeTab={3} design={this.state.data2} />
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

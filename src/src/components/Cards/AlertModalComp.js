import React, { Component } from "react";
import { Container, Content, View, Text, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

class AlertModalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: props.visible
    };
  }

  render() {
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        onBackButtonPress={() => {
          this.setState({ isModalVisible: false });
        }}
        style={{ backgroundColor: "transparent" }}
      >
        <View
          style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>{this.props.heading}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text>{this.props.message}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <View>
                <Button
                  style={{ elevation: 0, backgroundColor: "transparent" }}
                  onPress={() => {
                    this.setState({ isModalVisible: false });
                  }}
                >
                  <Text>OK</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default AlertModalComp;

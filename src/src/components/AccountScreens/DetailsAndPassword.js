import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  Form,
  Item,
  Label,
  Input,
  Footer,
  FooterTab,
  Button,
  DatePicker
} from "native-base";
import ItemsHeaderComp from "./../../components/ContentContainerComp/ItemsHeaderComp";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
class DetailsAndPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="Details & Password" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content
          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 0,
            paddingBottom: 10
          }}
        >
          <View>
            <Form>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Full Name</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Email Address</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <View style={styles.datePickerContainer} floatingLabel>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Date of Birth"
                  textStyle={{ color: "#666", fontSize: 13 }}
                  placeHolderTextStyle={{
                    color: "#d3d3d3",
                    fontSize: 13,
                    color: "#666",
                    marginLeft: -10,
                    marginBottom: -5
                  }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30
                }}
              >
                <View>
                  <Button
                    transparent
                    onPress={() => {
                      Actions.changePasswordScreen();
                    }}
                    style={styles.btn}
                  >
                    <Text style={{ fontWeight: "600", color: "#000" }}>
                      CHANGE MY PASSWORD
                    </Text>
                  </Button>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={[styles.inputLabel, { textAlign: "center" }]}>
                  We advise you to change your password every 3 months for added
                  security
                </Text>
              </View>
            </Form>
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
              <Button block style={{ backgroundColor: "#22A7F0" }}>
                <Text style={{ fontWeight: "600", color: "#fff" }}>
                  UPDATE MY DETAILS
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
  item: {
    marginLeft: 0
  },
  inputLabel: {
    fontSize: 13
  },
  input: {},
  btn: {
    borderWidth: 1,
    borderColor: "#eee"
  },
  datePickerContainer: {
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 30
  }
});

export default DetailsAndPassword;

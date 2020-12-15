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
  Switch
} from "native-base";
import ItemsHeaderComp from "./../../components/ContentContainerComp/ItemsHeaderComp";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
class AddressBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: false,
      billing: false
    };
  }
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="Address Book" />
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
            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center"
                }}
              >
                Add an address for a faster checkout experience
              </Text>
            </View>
            <Form>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>First Name</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Last Name</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Country/Region</Label>
                <Input style={styles.input} />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Address Line 1</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Address Line 2</Label>
                <Input style={styles.input} />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Address Line 3</Label>
                <Input style={styles.input} />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>City</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>State</Label>
                <Input style={styles.input} />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Phone</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Postal Code</Label>
                <Input
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <View style={{ marginTop: 20 }}>
                <Text
                  style={[
                    styles.inputLabel,
                    { textAlign: "left", color: "#666" }
                  ]}
                >
                  We will only contact you by phone if there is a problem with
                  your order
                </Text>
              </View>
              <View
                style={{ marginTop: 20, width: "100%", flexDirection: "row" }}
              >
                <View style={{ flex: 3 }}>
                  <Text
                    style={[
                      styles.inputLabel,
                      { textAlign: "left", color: "#666" }
                    ]}
                  >
                    Set as my preferred shipping address
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Switch
                    value={this.state.shipping}
                    onValueChange={() => {
                      this.setState({
                        shipping: !this.state.shipping
                      });
                    }}
                    thumbColor="#000"
                    trackColor={{ false: "#aaa", true: "#aaa" }}
                  />
                </View>
              </View>
              <View
                style={{ marginTop: 20, width: "100%", flexDirection: "row" }}
              >
                <View style={{ flex: 3 }}>
                  <Text
                    style={[
                      styles.inputLabel,
                      { textAlign: "left", color: "#666" }
                    ]}
                  >
                    Set as my preferred billing address
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Switch
                    value={this.state.billing}
                    onValueChange={() => {
                      this.setState({
                        billing: !this.state.billing
                      });
                    }}
                    thumbColor="#000"
                    trackColor={{ false: "#aaa", true: "#aaa" }}
                  />
                </View>
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
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  SAVE ADDRESS
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
  input: {}
});

export default AddressBook;

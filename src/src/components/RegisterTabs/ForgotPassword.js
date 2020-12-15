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
  Button
} from "native-base";
import ItemsHeaderComp from "./../ContentContainerComp/ItemsHeaderComp";
import { StyleSheet } from "react-native";
import { StatusBar, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: null,
      loading: false,
      base: "http://estore.nfasoft.com/"
    };
  }
  handleEmailInput = text => {
    this.setState({
      email: text,
      loading: false
    });
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const flag = reg.test(this.state.email);
    if (!flag) {
      //alert("invalid");
      this.setState({
        emailValid: false
      });
    } else {
      this.setState({
        emailValid: true,
        data: ""
      });
    }
  };

  forgotPassword = () => {
    if (this.state.emailValid == true) {
      this.setState({
        loading: true
      });
      this.submitBtn();
    }
  };

  submitBtn() {
    if (this.state.emailValid == true) {
      fetch(this.state.base + "api/forgotpass.php?email=" + this.state.email)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false,
            data: responseJson.response.message
          });
          alert(this.state.data);
        })

        .catch(error => alert(error)); //to catch the errors if any
    }
  }

  render() {
    const emailError = (
      <Text style={{ color: "red", fontSize: 9 }}>
        Enter a valid email address
      </Text>
    );
    return (
      <Container>
        <ItemsHeaderComp title="Change Password" />
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
                <Label style={styles.inputLabel}>
                  Enter your email address
                </Label>
                <Input
                  onChangeText={this.handleEmailInput}
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              {this.state.emailValid == false ? emailError : null}
            </Form>
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
              <Button
                block
                style={{ backgroundColor: "#22A7F0" }}
                onPress={() => {
                  this.forgotPassword();
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  SUBMIT
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

export default ForgotPassword;

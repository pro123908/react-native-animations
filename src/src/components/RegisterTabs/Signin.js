import React, { Component } from "react";
import {
  View,
  Tabs,
  Tab,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
  Footer,
  FooterTab,
  Content,
  Container,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";
import { StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { formatTestResults } from "@jest/test-result";
import Modal from "react-native-modal";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: null,
      password: "",
      passwordValid: null,
      userDetil: "",
      loading: false,
      base: "http://estore.nfasoft.com/"
    };
  }

  submitLogin = () => {
    if (this.state.emailValid == true && this.state.passwordValid == true) {
      this.setState({
        loading: true
      });
      this.checkMail();
    }
  };
  checkMail() {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const flag = reg.test(this.state.email);
    if (this.state.emailValid == true && this.state.passwordValid == true) {
      fetch(
        this.state.base +
          "api/login.php?email=" +
          this.state.email +
          "&password=" +
          this.state.password
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false,
            userDetil: responseJson.response.model
          });

          if (this.state.userDetil == "") {
            alert("username or password may be incorect");
            global.id = 0;
          } else {
            global.id = this.state.userDetil.userid;
            global.token = this.state.userDetil.token;
            Actions.pop();
            Actions.mainScreen();
          }
        })
        .catch(error => console.log(error)); //to catch the errors if any
    }
  }

  handleEmailInput = text => {
    this.setState({
      email: text
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
        emailValid: true
      });
    }
  };

  handlePswdInput = text => {
    this.setState({
      password: text
    });
    if (this.state.password === "") {
      this.setState({
        passwordValid: false
      });
    } else {
      this.setState({
        passwordValid: true
      });
    }
  };
  render() {
    let checkIcon = (
      <Icon
        name="check"
        type="Feather"
        style={{ fontSize: 13, color: "green" }}
      />
    );
    const emailError = (
      <Text style={{ color: "red", fontSize: 9 }}>
        Enter a valid email address
      </Text>
    );
    const passwordError = (
      <Text style={{ color: "red", fontSize: 9 }}>Enter a valid password</Text>
    );
    return (
      <Container style={{ borderWidth: 0.1, borderColor: "#000" }}>
        <Content contentContainerStyle={[styles.container, { flex: 1 }]}>
          <Form>
            <Button block style={styles.fbBtn}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Login with Facebook
              </Text>
              <Icon name="facebook" type="Entypo" style={{ color: "#fff" }} />
            </Button>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20
              }}
            >
              <Text note style={{ fontSize: 12 }}>
                or
              </Text>
            </View>
            <Item
              style={[
                styles.item,
                {
                  borderBottomColor:
                    this.state.emailValid == false ? "red" : null
                }
              ]}
              floatingLabel
            >
              <Label style={styles.inputLabel}>Email Address</Label>
              <Input
                onChangeText={this.handleEmailInput}
                autoCapitalize="none"
              />
            </Item>
            {this.state.emailValid == false ? emailError : null}
            <Item style={[styles.item]} floatingLabel>
              <Label style={styles.inputLabel}>Password</Label>
              <Input
                onChangeText={this.handlePswdInput}
                autoCapitalize="none"
                secureTextEntry={true}
                password={true}
              />
            </Item>
            {this.state.passwordValid == false ? passwordError : null}
          </Form>
          <View style={styles.loginBtnContainer}>
            <Button block style={styles.loginBtn} onPress={this.submitLogin}>
              <Text style={{ color: "#fff" }}>LOGIN</Text>
            </Button>
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
        <Footer>
          <FooterTab style={styles.btnContainer}>
            <View>
              <Button
                style={styles.forgotBtn}
                onPress={() => {
                  Actions.forgotPasswordScreen();
                }}
              >
                <Text>FORGOT PASSWORD?</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: "rgba(255,255,255, 0.9)"
  },
  item: {
    marginLeft: 0
  },
  loginBtnContainer: {
    marginTop: 50
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginBtn: {
    backgroundColor: "#00B0FE",
    elevation: 0
  },
  requiredTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  forgotBtn: {
    borderWidth: 1,
    borderColor: "#eee",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  },
  inputLabel: {
    fontSize: 13
  },
  fbBtn: {
    elevation: 0,
    backgroundColor: "#3b5998",
    borderRadius: 5
  }
});

export default SignIn;

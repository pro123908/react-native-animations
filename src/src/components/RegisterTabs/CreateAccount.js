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
import {
  StyleSheet,
  Picker,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";
import { Actions } from "react-native-router-flux";
import Modal from "react-native-modal";
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: null,
      password: "",
      passwordValid: null,
      shopetype: "men",
      msg: "",
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
  login() {
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
        global.id = this.state.userDetil.userid;
        global.token = this.state.userDetil.token;
        //alert(global.id);
        Actions.pop();
        Actions.mainScreen();
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  checkMail(nav) {
    if (this.state.emailValid == true && this.state.passwordValid == true) {
      fetch(
        this.state.base +
          "api/register.php?email=" +
          this.state.email +
          "&password=" +
          this.state.password +
          "&shoptype=" +
          this.state.shopetype
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false,
            userDetil: responseJson.response.model,
            msg: responseJson.response.message
          });

          if (this.state.userDetil != "") {
            this.login();
          } else {
            Alert.alert(
              "Error",
              this.state.msg,
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
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
    if (this.state.password === "" || this.state.password.length < 5) {
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
    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
    const emailError = (
      <Text style={{ color: "red", fontSize: 9 }}>
        Enter a valid email address
      </Text>
    );
    const passwordError = (
      <Text style={{ color: "red", fontSize: 9 }}>
        Enter a valid password(min length: 6)
      </Text>
    );
    return (
      <Container>
        <Content contentContainerStyle={[styles.container, { flex: 1 }]}>
          <KeyboardAvoidingView>
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
                  placeholder="                                                           *"
                />
              </Item>
              {this.state.emailValid == false ? emailError : null}
              <Item
                style={[
                  styles.item,
                  {
                    borderBottomColor:
                      this.state.passwordValid == false ? "red" : null
                  }
                ]}
                floatingLabel
              >
                <Label style={styles.inputLabel}>Password</Label>
                <Input
                  onChangeText={this.handlePswdInput}
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                           *"
                />
              </Item>
              {this.state.passwordValid == false ? passwordError : null}
              <Item style={[styles.item, { flexDirection: "row" }]}>
                <View style={{ flex: 1 }}>
                  <Label style={styles.inputLabel}>Shopping Type*</Label>
                </View>
                <View style={{ flex: 1 }}>
                  <Picker
                    selectedValue={this.state.shopetype}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ shopetype: itemValue })
                    }
                  >
                    <Picker.Item label="Men" value="man" />
                    <Picker.Item label="Women" value="women" />
                    <Picker.Item label="Kids" value="kids" />
                  </Picker>
                </View>
              </Item>
            </Form>
          </KeyboardAvoidingView>

          <View style={{ marginTop: 25 }}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                By registering you are agree with our terms & Conditions, and
                Privacy Policy.
              </Text>
            </View>
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
            <View style={styles.loginBtnContainer}>
              <Button block style={styles.loginBtn} onPress={this.submitLogin}>
                <Text style={{ color: "#fff" }}>CREATE ACCOUNT</Text>
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
    paddingTop: 10,
    backgroundColor: "rgba(255,255,255, 0.9)"
  },
  item: {
    marginLeft: 0
  },
  loginBtnContainer: {
    marginTop: 0,
    width: "100%"
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  loginBtn: {
    backgroundColor: "#00B0FE",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
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

export default CreateAccount;

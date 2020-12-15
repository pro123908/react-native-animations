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
import ItemsHeaderComp from "./../../components/ContentContainerComp/ItemsHeaderComp";
import { StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpass: "",
      newpass: "",
      newpassValid: null,
      confirmpass: "",
      confirmpassValid: null,
      loading: false,
      base: "http://estore.nfasoft.com/"
    };
  }

  handlePswdInput = text => {
    this.setState({
      newpass: text
    });
    if (this.state.newpass === "" || this.state.newpass.length < 5) {
      this.setState({
        newpassValid: false
      });
    } else {
      this.setState({
        newpassValid: true
      });
    }
  };
  handleConfirmPswdInput = text => {
    if (text === this.state.newpass) {
      this.setState({
        confirmpass: text,
        confirmpassValid: true
      });
    } else {
      this.setState({
        confirmpass: text,
        confirmpassValid: false
      });
    }
  };

  submitBtn = () => {
    if (
      this.state.newpassValid == true &&
      this.state.confirmpassValid == true
    ) {
      this.setState({
        loading: true
      });
      this.saveChanges();
    }
  };

  saveChanges() {
    if (
      this.state.newpassValid == true &&
      this.state.confirmpassValid == true
    ) {
      fetch(
        this.state.base +
          "api/resetpassword.php?token=" +
          global.token +
          "&user_id=" +
          global.id +
          "&oldpass=" +
          this.state.oldpass +
          "&newpass=" +
          this.state.newpass
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false,
            oldpass: "",
            newpass: "",
            confirmpass: ""
          });
          alert(responseJson.response.message);
        })
        .catch(error => console.log(error)); //to catch the errors if any
    }
  }
  render() {
    const newPassError = (
      <Text style={{ color: "red", fontSize: 9 }}>
        Enter a valid password(min length: 6)
      </Text>
    );
    const confirmPassError = (
      <Text style={{ color: "red", fontSize: 9 }}>
        Confirm password does not match
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
                <Label style={styles.inputLabel}>Current password</Label>
                <Input
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                                         *"
                  style={styles.input}
                  value={this.state.oldpass}
                  onChangeText={text => {
                    this.setState({
                      oldpass: text
                    });
                  }}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>New password</Label>
                <Input
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                                         *"
                  style={styles.input}
                  value={this.state.newpass}
                  onChangeText={this.handlePswdInput}
                />
              </Item>
              {this.state.newpassValid == false ? newPassError : null}
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Confirm new password</Label>
                <Input
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                                         *"
                  style={styles.input}
                  value={this.state.confirmpass}
                  onChangeText={this.handleConfirmPswdInput}
                />
              </Item>
              {this.state.confirmpassValid == false ? confirmPassError : null}
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputLabel}>
                  Your new password must be at least 6 characters long
                </Text>
              </View>
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
                onPress={this.submitBtn}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  SAVE MY NEW PASSWORD
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

export default ChangePassword;

import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Icon,
  Switch
} from "native-base";
import ItemsHeaderComp from "./../ContentContainerComp/ItemsHeaderComp";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
class NotificationsAndEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      email: false
    };
  }
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="My Settings" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content contentContainerStyle={{ backgroundColor: "#eee", flex: 1 }}>
          <List style={{ backgroundColor: "#fff" }}>
            <ListItem style={{ flexDirection: "row" }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 14 }}>Notifications</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Switch
                  value={this.state.notifications}
                  onValueChange={() => {
                    this.setState({
                      notifications: !this.state.notifications
                    });
                  }}
                  thumbColor="#000"
                  trackColor={{ false: "#aaa", true: "#aaa" }}
                />
              </View>
            </ListItem>
            <ListItem style={{ flexDirection: "row", borderBottomWidth: 0 }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 14 }}>Email newsletter</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Switch
                  value={this.state.email}
                  onValueChange={() => {
                    this.setState({
                      email: !this.state.email
                    });
                  }}
                  thumbColor="#000"
                  trackColor={{ false: "#aaa", true: "#aaa" }}
                />
              </View>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  }
});

export default NotificationsAndEmail;

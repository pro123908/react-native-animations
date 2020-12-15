import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Icon
} from "native-base";
import ItemsHeaderComp from "./../ContentContainerComp/ItemsHeaderComp";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
class SelectYourLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="Select Your Location" />
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Content>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: 20
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Region</Text>
          </View>
          <List>
            <ListItem>
              <View style={{ flex: 3 }}>
                <Text style={styles.text}>Europe</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <Icon name="keyboard-arrow-right" type="MaterialIcons" />
              </View>
            </ListItem>
            <ListItem>
              <View style={{ flex: 3 }}>
                <Text style={styles.text}>Africa, Middle East and India</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <Icon name="keyboard-arrow-right" type="MaterialIcons" />
              </View>
            </ListItem>
            <ListItem>
              <View style={{ flex: 3 }}>
                <Text style={styles.text}>Asia Pacific</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <Icon name="keyboard-arrow-right" type="MaterialIcons" />
              </View>
            </ListItem>

            <ListItem>
              <View style={{ flex: 3 }}>
                <Text style={styles.text}>Latin America and the Caribbean</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <Icon name="keyboard-arrow-right" type="MaterialIcons" />
              </View>
            </ListItem>
            <ListItem>
              <View style={{ flex: 3 }}>
                <Text style={styles.text}>The United States and Canida</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <Icon name="keyboard-arrow-right" type="MaterialIcons" />
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

export default SelectYourLocation;

import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Item,
  Input
} from "native-base";
import React from "react";
import StatusBarManger from "./StatusBarManager";
import { Actions } from "react-native-router-flux";
const HeaderComp = props => {
  return (
    <Header
      hasTabs={props.hasTabs}
      style={{
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: "#fff"
      }}
    >
      <StatusBarManger />

      <Body>
        <Title style={{ color: "#000" }}>{props.title}</Title>
      </Body>

      <Right>
        <Button
          transparent
          onPress={() => {
            Actions.searchModalScreen();
          }}
        >
          <Icon name="ios-search" style={{ color: "black", fontSize: 25 }} />
        </Button>
        <Button
          transparent
          onPress={() => {
            Actions.bagScreen();
          }}
        >
          <Icon name="cart" style={{ color: "black" }} />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderComp;

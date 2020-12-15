import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Item,
  Input,
  Left
} from "native-base";
import React from "react";
import StatusBarManger from "./StatusBarManager";
import { Actions } from "react-native-router-flux";

const ItemsHeaderComp = props => {
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
      <Left style={{ flex: 1 }}>
        <Button
          transparent
          onPress={() => {
            Actions.pop();
          }}
        >
          <Icon name="arrowleft" type="AntDesign" style={{ color: "black" }} />
        </Button>
      </Left>
      <Body style={{ flex: 3 }}>
        <Title style={{ fontSize: 20 }}>{props.title}</Title>
      </Body>

      <Right style={{ flex: 1 }}>
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

export default ItemsHeaderComp;

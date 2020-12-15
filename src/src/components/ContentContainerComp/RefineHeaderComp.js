import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Item,
  Input,
  Left,
  Text
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
      {/* <StatusBarManger /> */}
      <Left>
        <Button
          transparent
          onPress={() => {
            Actions.pop();
          }}
        >
          <Icon name="arrowleft" type="AntDesign" style={{ color: "black" }} />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>

      <Right>
        {/* <Button bordered small style={{ borderColor: "#000" }}>
          <Text style={{ color: "#000", fontSize: 10 }}>CLEAR ALL</Text>
        </Button> */}
      </Right>
    </Header>
  );
};

export default ItemsHeaderComp;

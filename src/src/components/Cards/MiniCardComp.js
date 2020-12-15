import { Card, View, Container, Text } from "native-base";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import React from "react";
import { CachedImage } from "react-native-cached-image";

/*Component builds a card and
requires following props
---------------------------
* imgSource
* catagoryName
--------------------------
cardHeight
cardWidth
Margin
* */
const MiniCardComp = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        Actions.itemsScreen({
          title: props.catagoryName,
          activeTab: props.activeTab,
          saleType: props.saleType,
          brandid: props.brandid
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <CachedImage
            source={{ uri: props.imgSource }}
            resizeMode="contain"
            style={{
              height: 100,
              //width: 100,
              flex: 1
            }}
          />
        </View>

        <View
          bordered
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13
              }}
            >
              {props.brandName}
              {props.catagoryName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5
  }
});

export default MiniCardComp;

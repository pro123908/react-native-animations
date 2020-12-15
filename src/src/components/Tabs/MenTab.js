import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, Content, Button, View } from "native-base";
import ClothingContainer from "./ClothingContainer";
import ShoesContainer from "./ShoesContainer";
import BagsContainer from "./BagsContainer";
import AccessoriesContainer from "./AccessoriesContainer";
import JewellaryContainer from "./JewellaryContainer";
import OneByThreeProductContainer from "./OneByThreeProductContainer";
import { CachedImage } from "react-native-cached-image";

const MenTab = props => {
  return (
    <Content>
      <CachedImage
        source={require("./../../Resources/Images/11.jpg")}
        style={{ width: "100%", height: 350 }}
      />
      <View
        style={{
          margin: 10
        }}
      />
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headingText}>Clothing</Text>
        </View>
      </View>

      <ClothingContainer cloths={props.cloths} activeTab={props.activeTab} />

      <Text style={styles.headingText}>Shoes</Text>

      <ShoesContainer shoe={props.shoe} activeTab={props.activeTab} />

      <Text style={styles.headingText}>Bags</Text>

      <BagsContainer bags={props.bag} activeTab={props.activeTab} />

      <Text style={styles.headingText}>Accessories</Text>
      <AccessoriesContainer
        activeTab={props.activeTab}
        accessries={props.accessries}
      />

      <Text style={styles.headingText}>Jewellery</Text>

      <JewellaryContainer activeTab={props.activeTab} jewlry={props.jewlry} />
    </Content>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontFamily: "Righteous-Regular",
    margin: 10
  },
  viewBtn: {
    elevation: 0,
    backgroundColor: "#fff",
    borderWidth: 0.3,
    borderColor: "#000"
  }
});

export default MenTab;

import React from "react";
import { View } from "react-native";
import { Text, Spinner } from "native-base";
import { StatusBar } from "react-native";
export default class SplashScreen extends React.Component {
  render() {
    const viewStyles = [
      {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
      }
    ];
    const textStyles = {
      color: "black",
      fontSize: 60,
      fontFamily: "Righteous-Regular"
    };

    return (
      <View style={viewStyles}>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Text style={textStyles}>Farfetch</Text>
        <Spinner color="black" />
      </View>
    );
  }
}

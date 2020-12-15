import React, { Component } from "react";
import { View } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import { StyleSheet } from "react-native";
export default class OneByThreeProductContainer extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"T-Shirts"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"T-Shirts"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"T-Shirts"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  compContainer: {
    flex: 1,
    padding: 5
  }
});

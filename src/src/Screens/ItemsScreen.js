import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import ItemsScreenContainer from "../components/ScreenContainers/ItemsScreenContainer";
import ItemsHeaderComp from "./../components/ContentContainerComp/ItemsHeaderComp";
import EmptyScreen from "./../components/ContentContainerComp/EmptyScreen";
import { StatusBar } from "react-native";
class ItemsScreen extends React.Component {
  state = {
    noProductFound: false
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <StatusBar backgroundColor="#eee" barStyle="dark-content" />
          <ItemsHeaderComp title={this.props.title} />
          {this.state.noProductFound ? (
            <EmptyScreen />
          ) : (
            <ItemsScreenContainer
              title={this.props.title}
              activeTabNum={this.props.activeTab}
              saleType={this.props.saleType}
              sectionName={this.props.title}
              prePage={this.props.prePage}
              newItem={this.props.newItem}
              priceHigh={this.props.priceHigh}
              priceLow={this.props.priceLow}
              itemId={this.props.itemId}
              selectedFilter={this.props.selectedFilter}
              brandid={this.props.brandid}
            />
          )}

          <FooterComp
            activeTabNum={this.props.activeTab}
            sectionName={this.props.sectionName}
          />
        </Container>
      </StyleProvider>
    );
  }
}

export default ItemsScreen;

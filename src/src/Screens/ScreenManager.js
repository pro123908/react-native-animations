import React from "react";
import { Scene, Router } from "react-native-router-flux";
import HomeScreen from "./HomeScreen";
import ShopNowScreen from "./ShopNowScreen";
import AccountScreen from "./AccountScreen";
import DesignerScreen from "./DesignerScreen";
import ShopScreen from "./ShopScreen";
import WishlistScreen from "./WishlistScreen";
import ProductDetail from "./ProductDetail";
import RegisterScreen from "./RegisterScreen";
import ItemsScreen from "./ItemsScreen";
import RefineScreen from "./RefineScreen";
import Designers from "./../components/RefineScreens/Designers";
import Sizes from "./../components/RefineScreens/Sizes";
import Colors from "./../components/RefineScreens/Colors";
import PriceRange from "./../components/RefineScreens/PriceRange";
import BagScreen from "./BagScreen";
import ChangePassword from "./../components/AccountScreens/ChangePassword";
import DetailsAndPassword from "./../components/AccountScreens/DetailsAndPassword";
import AddressBook from "./../components/AccountScreens/AddressBook";
import SelectYourLocation from "./../components/AccountScreens/SelectYourLocation";
import NotificationsAndEmail from "./../components/AccountScreens/NotificationsAndEmail";
import OrdersAndReturns from "./../components/AccountScreens/OrdersAndReturns";
import About from "./../components/AccountScreens/About";
import PrivacyPolicy from "./../components/AccountScreens/PrivacyPolicy";
import SearchModal from "./../components/SearchModal/SearchModal";
import ForgotPassword from "./../components/RegisterTabs/ForgotPassword";
import MainScreen from "./MainScreen";
const ScreenManager = () => {
  return (
    <Router>
      <Scene key={"root"}>
        <Scene
          key={"mainScreen"}
          component={MainScreen}
          hideNavBar={true}
          initial
        />
        <Scene key={"homeScreen"} component={HomeScreen} hideNavBar={true} />

        <Scene key={"shopNowScreen"} component={ShopNowScreen} />
        <Scene
          key={"accountScreen"}
          component={AccountScreen}
          hideNavBar={true}
        />
        <Scene
          key={"designerScreen"}
          component={DesignerScreen}
          hideNavBar={true}
        />
        <Scene key={"shopScreen"} component={ShopScreen} hideNavBar={true} />
        <Scene
          key={"wishlistScreen"}
          component={WishlistScreen}
          hideNavBar={true}
        />
        <Scene
          key={"productDetail"}
          component={ProductDetail}
          hideNavBar={true}
        />
        <Scene
          key={"registerScreen"}
          component={RegisterScreen}
          hideNavBar={true}
        />
        <Scene key={"itemsScreen"} component={ItemsScreen} hideNavBar={true} />
        <Scene
          key={"refineScreen"}
          component={RefineScreen}
          hideNavBar={true}
        />
        <Scene
          key={"designersScreen"}
          component={Designers}
          hideNavBar={true}
        />
        <Scene key={"sizesScreen"} component={Sizes} hideNavBar={true} />
        <Scene key={"colorsScreen"} component={Colors} hideNavBar={true} />
        <Scene
          key={"priceRangeScreen"}
          component={PriceRange}
          hideNavBar={true}
        />
        <Scene
          key={"bagScreen"}
          component={BagScreen}
          title="My shopping Bag"
        />
        <Scene
          key={"changePasswordScreen"}
          component={ChangePassword}
          hideNavBar={true}
        />
        <Scene
          key={"detailsAndPasswordScreen"}
          component={DetailsAndPassword}
          hideNavBar={true}
        />
        <Scene
          key={"addressBookScreen"}
          component={AddressBook}
          hideNavBar={true}
        />
        <Scene
          key={"locationScreen"}
          component={SelectYourLocation}
          hideNavBar={true}
        />
        <Scene
          key={"notificationsScreen"}
          component={NotificationsAndEmail}
          hideNavBar={true}
        />
        <Scene
          key={"ordersAndReturnsScreen"}
          component={OrdersAndReturns}
          hideNavBar={true}
        />
        <Scene key={"aboutScreen"} component={About} hideNavBar={true} />
        <Scene
          key={"privacyPolicyScreen"}
          component={PrivacyPolicy}
          hideNavBar={true}
        />
        <Scene
          key={"searchModalScreen"}
          component={SearchModal}
          hideNavBar={true}
        />
        <Scene
          key={"forgotPasswordScreen"}
          component={ForgotPassword}
          hideNavBar={true}
        />
      </Scene>
    </Router>
  );
};

export default ScreenManager;

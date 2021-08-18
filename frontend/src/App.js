import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HomeScreen from "./Screens/Customer/HomeScreen";
import ShopScreen from "./Screens/Shop/ShopScreen";
import ProductScreen from "./Screens/Shop/ProductScreen";
import { CustomerRegistrationScreen } from "./Screens/Customer/CustomerRegistrationScreen";
import CustomerCheckOutScreen from "./Screens/Customer/CustomerCheckOutScreen";
import Footer from "./Screens/Footer/Footer";
import FooterFAQs from "./Screens/Footer/FooterFAQs/FooterFAQs";
import AboutDasa from "./Screens/Footer/TheCompany/TheCompany";
import ChooseSizeScreen from "./Screens/Customer/ChooseSizeScreen";
import ChooseQuantityScreen from "./Screens/Customer/ChooseQuantityScreen";
import Header from "./components/Header";
import ImageWithTitle from "./components/ImageWithTitle";
import TailorSignIn from "./Screens/tailor/TailorSignInScreen";
import TailorRegister from "./Screens/tailor/TailorRegisterScreen";
import TailorScreen from "./Screens/tailor/TailorScreen";
import AdminScreen from "./Screens/admin/AdminScreen";
import CustomerContactUs from "./Screens/Customer/CustomerContactUs";
import OrderSuccessThankYou from "./Screens/Customer/OrderSuccessScreen";
import ScrollToTop from "./components/ScrollToTop";
import CustomerSignInScreen from "./Screens/Customer/CustomerSignInScreen";
import CustomerOrdersScreen from "./Screens/Customer/CustomerOrdersScreen";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <ScrollToTop>
          <Switch>
            <Route path="/shop">
              <Header></Header>

              <ShopScreen></ShopScreen>
              <Footer></Footer>
            </Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route
              path="/register"
              component={CustomerRegistrationScreen}
            ></Route>
            <Route path="/checkOut" component={CustomerCheckOutScreen}></Route>
            <Route path="/faqs">
              <Header></Header>

              <FooterFAQs></FooterFAQs>
              <Footer></Footer>
            </Route>
            <Route path="/aboutus">
              <Header></Header>

              <AboutDasa></AboutDasa>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Header></Header>
              <CustomerRegistrationScreen></CustomerRegistrationScreen>
              <Footer></Footer>
            </Route>
            <Route path="/signin">
              <Header></Header>

              <CustomerSignInScreen></CustomerSignInScreen>
              <Footer></Footer>
            </Route>
            <Route path="/trackOrder">
              <Header></Header>
              <CustomerOrdersScreen></CustomerOrdersScreen>
              <Footer></Footer>
            </Route>
            {/* <Route path="/:id/chooseSize" component={ChooseSizeScreen}></Route>*/}
            <Route path="/orderSuccess/">
              <Header></Header>
              <OrderSuccessThankYou></OrderSuccessThankYou>
              <Footer></Footer>
            </Route>

            {/* Tailor section👇👇 */}
            <Route path="/tailorSignIn">
              <ImageWithTitle theTitle="SIGN IN TO YOUR TAILOR ACCOUNT"></ImageWithTitle>
              <TailorSignIn></TailorSignIn>
              <Footer></Footer>
            </Route>
            <Route path="/tailorRegister">
              <ImageWithTitle theTitle="CREATE A TAILOR ACCOUNT"></ImageWithTitle>
              <TailorRegister></TailorRegister>
              <Footer></Footer>
            </Route>
            <Route path="/tailorAccount" component={TailorScreen}></Route>

            {/* Admin routes👇 */}
            <Route path="/admin" component={AdminScreen}></Route>
            <Route path="/">
              <Header></Header>
              <HomeScreen></HomeScreen>
              <Footer></Footer>
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tailorLogout } from "../../actions/tailorActions";
import { TheEntireSidebar } from "../../components/TheEntireSidebar";
import theTailorSideBarData from "../../data/TailorData";
import TailorAccountDetailsScreen from "./TailorAccountDetailsScreens/TailorAccountDetailsScreen";
import TailorCustomersScreen from "./TailorCustomersScreen";
import TailorOrdersScreen from "./TailorOrdersScreen";
import TailorSalesScreen from "./TailorSalesScreen";
const ourTabs = [
  <TailorSalesScreen></TailorSalesScreen>,
  <TailorOrdersScreen></TailorOrdersScreen>,
  <TailorCustomersScreen></TailorCustomersScreen>,
  <TailorAccountDetailsScreen></TailorAccountDetailsScreen>,
];
function TailorScreen({ history }) {
  const dispatch = useDispatch();
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  const signOutHandler = (e) => {
    e.preventDefault();
    dispatch(tailorLogout());
  };
  useEffect(() => {
    if (!tailorInfo) {
      history.push("/tailorSignin");
    }
  }, [tailorInfo, history]);
  return (
    <div>
      <TheEntireSidebar
        ourTabs={ourTabs}
        name={tailorInfo && tailorInfo.first_name}
        type="Tailor"
        theData={theTailorSideBarData}
        signOutHandler={signOutHandler}
      ></TheEntireSidebar>
    </div>
  );
}

export default TailorScreen;

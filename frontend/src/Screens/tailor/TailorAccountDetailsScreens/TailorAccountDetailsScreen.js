import React, { useState } from "react";
import AnotherTabs from "../../../components/AnotherTabs/AnotherTabs";
import TailorAccountInformationScreen, {
  TailorAccountInformationChangePassword,
  TailorAccountInformationEdit,
} from "./TailorAccountInformationScreen";
import TailorStoreInformationScreen, {
  StoreInformationEdit,
} from "./TailorStoreInformationScreen";

function TailorAccountDetailsScreen() {
  // for ACCOUNT INFO👇
  const [tailorAccountEdit, settailorAccountEdit] = useState(false);
  const [tailorChangePassword, settailorChangePassword] = useState(false);
  const changeTailorAccountEdit = () => {
    settailorAccountEdit(!tailorAccountEdit);
  };
  const changeTailorChangePassword = () => {
    settailorChangePassword(!tailorChangePassword);
  };

  //for STORE INFO👇
  const [storeInfoEdit, setstoreInfoEdit] = useState(false);
  const changeStoreInfoEdit = () => {
    setstoreInfoEdit(!storeInfoEdit);
  };
  return (
    <div className="tailor__account__details">
      <AnotherTabs>
        <div label="Account Information">
          {tailorAccountEdit === false && tailorChangePassword === false ? (
            <TailorAccountInformationScreen
              editPage={changeTailorAccountEdit}
              changePasswordPage={changeTailorChangePassword}
            ></TailorAccountInformationScreen>
          ) : (
            <>
              {tailorAccountEdit === true && tailorChangePassword === false ? (
                <TailorAccountInformationEdit
                  editPage={changeTailorAccountEdit}
                ></TailorAccountInformationEdit>
              ) : (
                <>
                  {tailorAccountEdit === false &&
                  tailorChangePassword === true ? (
                    <TailorAccountInformationChangePassword
                      changePasswordPage={changeTailorChangePassword}
                    ></TailorAccountInformationChangePassword>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div label="Store Information">
          {storeInfoEdit === false ? (
            <TailorStoreInformationScreen
              changeStoreInfoPage={changeStoreInfoEdit}
            ></TailorStoreInformationScreen>
          ) : (
            <StoreInformationEdit
              changeStoreInfoPage={changeStoreInfoEdit}
            ></StoreInformationEdit>
          )}
        </div>
        <div label="Payment Options">
          <h1>THis is the PAYMENT INFO</h1>
        </div>
      </AnotherTabs>
    </div>
  );
}

export default TailorAccountDetailsScreen;

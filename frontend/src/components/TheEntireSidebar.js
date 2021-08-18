import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "../Styles/admin/AdminScreen.css";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
export function TheEntireSidebar({
  ourTabs,
  type,
  name,
  theData,
  signOutHandler,
}) {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    showHideSidebar();
    window.addEventListener("resize", showHideSidebar);
    return () => {
      window.removeEventListener("resize", showHideSidebar);
    };
  }, []);
  const showHideSidebar = () => {
    if (window.innerWidth > 700) {
      setLeftIcon(false);
      setSidebar(true);
    } else if (window.innerWidth < 700) {
      setLeftIcon(true);
      setSidebar(false);
    }
  };

  const [leftIcon, setLeftIcon] = useState(false);

  const sideBarRef = useRef();
  const whenOutsideSidebar = (e) => {
    if (!sideBarRef.current.contains(e.target)) {
      clickOutsideSideBar();
    }
  };
  const clickOutsideSideBar = () => {
    setSidebar(false);
  };

  // for changing tabs
  const [value, setValue] = useState(0);
  const [showSignOut, setShowSignOut] = useState(false);
  const changeSignOut = (e) => {
    setShowSignOut(!showSignOut);
  };
  return (
    <div className="side__bar">
      <div className="top__side__bar">
        <div className="first__part">
          <div className="the__bar__title">DASA</div>
          <div
            className="the__icon"
            onClick={() => {
              setSidebar(true);
            }}
          >
            <FaBars></FaBars>
          </div>
        </div>
        <div className="second__part__sidebar">
          <div className="person__icon__circle">
            <div
              className="person__icon"
              style={{ color: "white", fontSize: "15px" }}
            >
              <PersonOutlineIcon></PersonOutlineIcon>
            </div>
          </div>

          <div className="admin__detail">
            <div className="admin__title">{type}</div>
            <div className="admin__name">
              {name}
              {showSignOut ? (
                <ExpandLessIcon
                  onClick={changeSignOut}
                  className="sign__out__icon"
                ></ExpandLessIcon>
              ) : (
                <KeyboardArrowDownIcon
                  onClick={changeSignOut}
                  className="sign__out__icon"
                ></KeyboardArrowDownIcon>
              )}
            </div>
          </div>
        </div>
        {showSignOut && (
          <div className="signOut__option" onClick={signOutHandler}>
            Sign Out
          </div>
        )}
      </div>
      {sidebar ? (
        <div>
          <TheSideBar></TheSideBar>
        </div>
      ) : (
        <></>
      )}
      <div className="the__content__section">{ourTabs[value]}</div>
    </div>
  );
  function TheSideBar() {
    return (
      <div className="the__side__bar" onClick={whenOutsideSidebar}>
        <div className="left__side__bar" ref={sideBarRef}>
          <div className="left__side__bar__title">
            <div className="the__bar__title">DASA</div>
            {leftIcon ? (
              <div className="the__icon">
                <FaArrowLeft
                  onClick={() => {
                    setSidebar(false);
                  }}
                ></FaArrowLeft>
              </div>
            ) : (
              <></>
            )}
          </div>
          {theData.map((obj, index) => {
            return (
              <SidebarComponent
                index={index}
                theIcon={obj.icon}
                theTitle={obj.title}
              ></SidebarComponent>
            );
          })}
        </div>
      </div>
    );
  }
  function SidebarComponent({ theIcon, theTitle, index }) {
    return (
      <div
        className={`sidebar__component ${index === value && "active_btn"}`}
        onClick={() => {
          setValue(index);
        }}
      >
        <div className="the__sidebar__icon">{theIcon}</div>
        <div className="the__sidebar__title">{theTitle}</div>
      </div>
    );
  }
}

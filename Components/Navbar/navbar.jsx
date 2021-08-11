import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./navbar.css";
import { LogoutUser } from "../../store/actions/auth";

const Navbar = (props) => {
  const [openNav, setOpenNav] = useState(false);
  const navClasses = [
    classes.openNavbar,
    openNav ? classes.openedNavbar : null,
  ];
  return (
    <>
      <div
        className={classes.nav}
        style={
          props.relative
            ? { position: "relative" }
            : { position: "absolute", top: "0" }
        }
      >
        <div className={classes.navSecond}>
          <img
            src="/images/burger.png"
            className={classes.menuBtn}
            onClick={() => setOpenNav(true)}
          />
          {props.isAuth ? (
            <>
              <button
                className={classes.navigation + " btn-flat"}
                onClick={props.LOGOUT_USER}
                style={props.colorWihte ? { color: "white" } : null}
              >
                چونە دەرەوە
              </button>
              {!props.place ? (
                <Link
                  className={classes.navigation + " btn-flat"}
                  to="/orders"
                  style={props.colorWihte ? { color: "white" } : null}
                >
                  داواكـاریـەکـانـت
                </Link>
              ) : (
                <Link
                  className={classes.navigation + " btn-flat"}
                  to="/dashboard"
                  style={props.colorWihte ? { color: "white" } : null}
                >
                  داشـبـۆڕد
                </Link>
              )}
            </>
          ) : (
            <>
              <Link className={classes.navigation} to="/login">
                چونە ژورەوە
              </Link>
              <Link className={classes.navigation} to="/signup">
                خۆ تۆمارکردن
              </Link>
            </>
          )}
        </div>
        <div className={classes.navFirst}>
          <Link to="/">
            {props.blackLogo ? (
              <img src="/images/logoBlack.png" className={classes.logo} />
            ) : (
              <img src="/images/logoWhite.png" className={classes.logo} />
            )}{" "}
          </Link>
        </div>
      </div>
      <div
        className={navClasses.join(" ")}
        style={props.relative ? { transform: "translateY(-13vh)" } : null}
      >
        <ul className={classes.navbarItems}>
          <li className={classes.navbarItem}>
            <NavLink activeClassName={classes.activeLink} exact to="/">
              پـەڕەی سـەرەکـی{" "}
            </NavLink>
          </li>
          <li className={classes.navbarItem}>
            <NavLink activeClassName={classes.activeLink} to="/category/food">
              خـواردنـەکـان
            </NavLink>
          </li>
          <li className={classes.navbarItem}>
            <NavLink activeClassName={classes.activeLink} to="/category/drink">
              {" "}
              خـواردنـەوەکـان{" "}
            </NavLink>
          </li>
          <li className={classes.navbarItem}>
            <NavLink
              activeClassName={classes.activeLink}
              to="/category/fast-food"
            >
              {" "}
              خـواردنـی خـێـرا{" "}
            </NavLink>
          </li>
          <li className={classes.navbarItem}>
            <NavLink activeClassName={classes.activeLink} to="/category/menu">
              لـیـسـتـی خـواردنـەکـان
            </NavLink>
          </li>
          <li className={classes.navbarItem}>
            <NavLink activeClassName={classes.activeLink} to="/booking-table">
              مـێـزگـرتـن
            </NavLink>
          </li>
          <li className={classes.navbarItem}>
            <NavLink activeClassName={classes.activeLink} to="/about">
              {" "}
              دەربـارەی ئـێـمـە{" "}
            </NavLink>
          </li>
          <li className={classes.navbarItem}>
            <NavLink
              activeClassName={classes.activeLink}
              to="/category/contact"
            >
              پـەیـوەنـدی کـردن{" "}
            </NavLink>
          </li>
        </ul>
        <img
          src="/images/burger.png"
          className={classes.menuBtnOpened}
          onClick={() => setOpenNav(false)}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth:
      state.usersReducer.user &&
      Object.keys(state.usersReducer.user).length > 0,
    place: state.usersReducer.user && state.usersReducer.user.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT_USER: () => dispatch(LogoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

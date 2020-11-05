import React, { Component } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  ButtonDropdown,
  NavLink
} from "reactstrap";
import imageUrl from "../../../config/urls/imageUrl";
import defaultAvatar from "../../../assets/avatar/defAvatar.gif";

class StockDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpatient: [{ name: "ken" }],
      activeTab: 0,
      topActiveTab: "1",
      allergyMod: false,
      dropdownOpen: false,
      patientData: {
        id: "",
        age: "23",
        patient: {
          id: "",
          firstname: "Kennedy Peters",
          avatar: null,
          gender: "Female"
        }
      }
    };
  }

  toggleDropDown = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen
    });
  };

  render() {
    const { patientData, dropdownOpen } = this.state;

    return (
      <div className="animated fadeIn">
        {/* breadcumb */}
        <div className="top-breadcumb navbar hidden">
          {/* Patient details */}
          <Nav
            className="d-md-down-none animated fadeIn"
            id="patientProfile"
            navbar
          >
            <NavItem className="ml-3 px-1">
              <NavLink to="/site/patient" className="nav-link">
                <div className="profile-top">
                  {patientData.patient.avatar !== null ? (
                    <img
                      src={imageUrl + patientData.patient.avatar}
                      className="img-avatar"
                      alt=""
                    />
                  ) : (
                    <img src={defaultAvatar} className="img-avatar" alt="" />
                  )}
                </div>
              </NavLink>
            </NavItem>
            <NavItem className="f-w-600 pr-2">
              {patientData !== "" ? patientData.patient.firstname : ""}
            </NavItem>
            <NavItem className="text-muted">
              {patientData.patient.gender !== ""
                ? patientData.patient.gender === "Male"
                  ? "Male"
                  : "Female"
                : ""}
              ,
            </NavItem>
            <NavItem className="text-muted">
              {patientData !== "" ? patientData.age : ""}yrs
            </NavItem>
            <NavItem className="m-l-7">
              <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={this.toggleDropDown}
              >
                <DropdownToggle color="link">
                  <span className="c-primary"> More...</span>
                </DropdownToggle>
                <DropdownMenu right className="top-dropdown">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Print BarCode</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </NavItem>
          </Nav>
        </div>
        {/* section layot */}
      </div>
    );
  }
}

export default StockDashboard;

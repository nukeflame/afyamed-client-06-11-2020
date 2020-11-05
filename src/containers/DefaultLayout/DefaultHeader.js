import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormFeedback,
} from "reactstrap";
import PropTypes from "prop-types";
import Noty from "noty";
import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import { connect } from "react-redux";
import { checkUserPwd } from "../../redux/actions/userActions";
import {
  signOutRoom,
  signInRoom,
  setBranchRoom,
  toggleRoom,
  setRoomStatus,
  setDisableAdm,
  removeDisableAdm,
} from "../../redux/actions/roomStatusActions";
import {
  fetchPatients,
  setCurrentPatient,
} from "../../redux/actions/patientActions";
import {
  fetchNotifications,
  clearNotifications,
  markNotifications,
  fetchUnreadNotifications,
} from "../../redux/actions/notificationActions";
import imageUrl from "../../config/urls/imageUrl";
import logo from "../../assets/img/brand/jocham-hospital-logo.png";
import sygnet from "../../assets/img/brand/jocham.jpg";
import defaultAvatar from "../../assets/avatar/defAvatar.gif";
// import SelectSearch from "react-select-search";
import sharpLoader from "../../assets/loader/sharp-sm.svg";
import Select from "react-select";
import $ from "jquery";
import NotificationList from "./Modals/NotificationList";
import { fetchbranches } from "../../redux/actions/branchActions";
import SearchPatient from "./Modals/SearchPatient";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterdPatients: [],
      dropdownOpen: false,
      disableSignIn: false,
      portalBtn: false,
      portalMod: false,
      employeeData: {
        userPwd: "",
      },
      selRoom: {
        roomId: "",
        signIn: null,
        signOut: null,
        statusId: 2,
      },
      switchBranchMd: false,
      branchData: {
        id: "",
        name: "",
      },
      sidebarToggle: false,
      optionBranches: [
        {
          value: 0,
          label: "Main Branch",
          hospName: "Main Branch",
        },
      ],
      countNotification: 0,
      patientsLists: [
        {
          name: "Kennedy Peters",
          value: "Kennedy Peters",
          fullname: "Kennedy Peters",
          avatar: null,
        },
      ],
    };
  }

  toggleDropDown = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  };

  // handle notification message
  handleNotfMsg = () => {
    // let patient = item.data.id;
    // return (
    //   <p className="noti-details">
    //     <span className="noti-title">{item.data.message}</span>
    //     <span>added new task</span>
    //     <span className="noti-title">{patient}</span>
    //   </p>
    // );
    return (
      <p className="noti-details">
        <span className="noti-title f-w-600 pr-1">John Doe</span>
        <span>
          has been admitted, no.
          <span className="noti-title px-1">#0002</span> to pay
          <span className="noti-title px-1">Cash 1,000 ksh</span>
          received from Reception
        </span>

        {/* <span>added new task</span>
        <span className="noti-title">{patient}</span> */}
      </p>
    );
  };

  // fn link to queue
  handleQueue = (e) => {
    e.preventDefault();
    this.props.history.push("/records/queue");
  };

  // fn sign in/out room toggle
  signRoomToggle = () => {
    const { isUnauth } = this.props;
    this.props.toggleRoom(isUnauth);
  };

  selectRoomStatus = (e) => {
    const { user, roomStatus, disableAdm } = this.props;
    const _this = this;
    const status = e.target.value;
    if (disableAdm) {
      this.setState((prevState) => ({
        selRoom: {
          ...prevState.selRoom,
          statusId: status,
        },
      }));
    } else {
      this.setState({ disableSignIn: true });
      const v = new Noty({
        text:
          "You are about to change your room status. Are you sure you want to continue?",
        layout: "topCenter",
        theme: "metroui",
        buttons: [
          Noty.button("Ok", "btn btn-primary btn-sm btn-square mr-2 ", () => {
            const data = {
              statusId: parseInt(status),
              userId: user.id,
              roomId: roomStatus.roomId,
            };
            _this.props.setRoomStatus(data).then(() => {
              new Noty({
                text: "Room status changed successfully!",
                layout: "topRight",
                type: "success",
                timeout: 3000,
                theme: "metroui",
              }).show();
            });
            _this.setState({ disableSignIn: false });
            v.close();
          }),
          Noty.button(
            "Cancel",
            "btn btn-outline-secondary btn-sm btn-square",
            function () {
              _this.setState({ disableSignIn: false });
              v.close();
            }
          ),
        ],
      }).show();
    }
  };

  // fn employee portal  toggle
  portalToggle = () => {
    const { portalMod } = this.state;
    this.setState({
      portalMod: !portalMod,
    });
  };

  // fn switch branch
  switchBranch = () => {
    const { switchBranchMd } = this.state;
    this.setState({
      switchBranchMd: !switchBranchMd,
    });
  };

  handleSwitchBranch = () => {
    const { branchData } = this.state;
    const { user } = this.props;
    const data = {
      branchRoom: true,
      branchId: branchData.id,
      roomId: user.deptId,
      userId: user.id,
    };
    this.props.setBranchRoom(data).then(() => {
      this.setState({
        switchBranchMd: false,
      });
      new Noty({
        text: `Branch switched to '${branchData.name}' successfuly`,
        layout: "topRight",
        type: "success",
        theme: "metroui",
        timeout: 3000,
      }).show();
    });
  };

  handleChangeBranch = (e) => {
    this.setState((prevState) => ({
      branchData: {
        ...prevState.branchData,
        id: e.value,
        name: e.hospName,
      },
    }));
  };

  // fn employee portal
  authPortal = (e) => {
    const pathName = this.props.location.pathname;
    const { cookies } = this.props;

    if (pathName === "/admin/dashboard") {
      this.props.history.push("/user/dashboard");
      cookies.set("level", 1, { path: "/" });
    } else {
      this.props.history.push("/user/dashboard");
      cookies.set("level", 2, { path: "/" });
    }

    // const { portalMod } = this.state;
    // const { user } = this.props;

    // const formData = new FormData();
    // formData.append("userId", user.id);
    // formData.append("password", portalMod.userPwd);

    // this.props.history.push("/admin/system-dashboard");
    // this.props.checkUserPwd(formData).then(() => {
    //   this.props.history.push("/admin/system-dashboard");

    //   this.portalToggle();
    // });

    // this.setState(prevState => ({
    //   portalMod: {
    //     ...prevState.employeeData,
    //     userPwd: ""
    //   }
    // }));
  };

  handleUserPwd = (e) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState((prevState) => ({
      dashData: {
        ...prevState.dashData,
        systemPass: value,
      },
    }));
  };

  handleKeyUp = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        portalBtn: true,
      });
      // enter key
      if (e.keyCode === 13) {
        this.proceedSytemDash();
      }
    } else {
      this.setState({
        portalBtn: false,
      });
    }
  };

  handleSelRoomId = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      selRoom: {
        ...prevState.selRoom,
        roomId: value,
      },
    }));
  };

  handleSignOutRoom = () => {
    const { selRoom } = this.state;
    const { roomStatus, user, disableAdm } = this.props;
    let txtMsg = "";
    //check if signed in
    if (disableAdm) {
      const data = {
        signIn: true,
        branchId: user.hospBranchId,
        userId: user.id,
        statusId: parseInt(selRoom.statusId),
        roomId:
          selRoom.roomId === "" ? roomStatus.roomId : parseInt(selRoom.roomId),
      };
      this.props.signInRoom(data).then((res) => {
        this.signRoomToggle();
        txtMsg = `Successfully signed in room '${res.data.room.depName}'`;
        new Noty({
          text: txtMsg,
          layout: "topRight",
          type: "success",
          timeout: 3000,
          theme: "metroui",
        }).show();
      });
    } else {
      const data = {
        signOut: true,
        userId: user.id,
        roomId: roomStatus.roomId,
      };
      this.props.signOutRoom(data).then(() => {
        txtMsg = `Successfully signed in room '${roomStatus.roomName}'`;
        new Noty({
          text: txtMsg,
          layout: "topRight",
          type: "success",
          timeout: 3000,
          theme: "metroui",
        }).show();
      });
    }
  };

  handleToggleBar = () => {
    if ($(document.body).hasClass("sidebar-lg-show")) {
      localStorage.setItem("sidebarToggle", true);
    } else {
      localStorage.setItem("sidebarToggle", false);
    }
  };

  handleClearNotifications = (e) => {
    e.preventDefault();
    this.props.clearNotifications();
  };

  viewNotifications = (e) => {
    e.preventDefault();
    // const { notifications } = this.props;
    this.props.markNotifications();
    this.setState({ countNotification: 0 });
  };

  componentDidMount() {
    //navbar navigation
    const sidebarToggle = JSON.parse(localStorage.getItem("sidebarToggle"));
    if (sidebarToggle) {
      $(document.body).removeClass("sidebar-lg-show");
    } else {
      $(document.body).addClass("sidebar-lg-show");
    }
    // fetch patients
    this.props.fetchPatients();
    //fetch notifications
    this.props.fetchNotifications();
    this.props.fetchUnreadNotifications().then(() => {
      const { unreadNotifications } = this.props;
      this.setState({ countNotification: unreadNotifications.length });
    });
    //sidebar btn
    $("[data-sidebar-toggler='true']").click(() => this.handleToggleBar());
    // fetch branches
    const client = JSON.parse(localStorage.getItem("client"));
    this.props.fetchbranches(client.clientId).then(() => {
      const { branches } = this.props;
      let options = this.state.optionBranches;
      for (let i = 0; i < branches.length; i++) {
        options.push(branches[i]);
      }
      this.setState({ optionBranches: options });
    });
  }

  componentWillUnmount() {
    // remove search selected
    $(".select-search-box__select").removeClass(
      "select-search-box__select--block"
    );
    $("#patientsList").val("");
  }

  render() {
    // eslint-disable-next-line
    const {
      onSms,
      onLogout,
      user,
      patients,
      children,
      searchModal,
      systemDashboardToggle,
      checkSytemPassError,
      checkingUserPwd,
      departments,
      branches,
      hospBranchId,
      loadSwitch,
      isUnauth,
      roomStatus,
      disableAdm,
      notifications,
      // eslint-disable-next-line
      ...attributes
    } = this.props;
    // eslint-disable-next-line
    const {
      disableSignIn,
      portalMod,
      employeeData,
      switchBranchMd,
      optionBranches,
      countNotification,
      // patientsLists,
    } = this.state;

    // const renderPatient = (option) => {
    //   return (
    //     <div className="panel-avatar">
    //       {option.avatar !== null ? (
    //         <div className="panel-profile">
    //           <img
    //             width="40"
    //             height="40"
    //             src={imageUrl + option.avatar}
    //             alt=""
    //           />
    //         </div>
    //       ) : (
    //         <div className="panel-profile">
    //           <img width="40" height="40" src={defaultAvatar} alt="" />
    //         </div>
    //       )}
    //       <div className="panel-avatar-item bold">{option.fullname}</div>
    //       <span className="panel-avatar-date">20-Aug-1975</span>
    //     </div>
    //   );
    // };

    const pathName = this.props.location.pathname;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 144, height: "82%", alt: "Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {/* Dashboard search */}
        <div style={{ position: "relative" }}>
          <Nav
            className="d-md-down-none animated fadeIn"
            id="dashSearch"
            navbar
          >
            <NavItem className="px-3">
              <SearchPatient
                autofocus={true}
                placeholder="Search Patient"
                {...this.props}
              />
            </NavItem>
            {/* <NavItem className="px-3">
              <SelectSearch
                name="patientsList"
                multiple={false}
                options={patientsLists}
                autofocus={true}
                placeholder="Search Patient"
                renderOption={renderPatient}
                onChange={(value, state, props) => {
                  this.handleSelectedSearch(value, state, props);
                }}
              />
            </NavItem> */}
            <NavItem className="m-l-20">
              <Button
                size="sm"
                color="primary"
                outline
                className="btn-square"
                onClick={(e) => searchModal(e)}
              >
                <i className="fa fa-search" />
              </Button>
            </NavItem>
            <NavItem className="m-l-15">
              <Button size="sm" color="primary" className="btn-square">
                <i className="fa fa-plus" />
              </Button>
            </NavItem>
            <NavItem>
              <Button
                size="sm"
                color="success"
                className="btn-round"
                onClick={this.handleQueue}
              >
                <span className="bold">
                  <i className="fa fa-tasks pr-1" /> Queue
                </span>
              </Button>
            </NavItem>
          </Nav>
        </div>

        {/* right sidebar */}
        <Nav className="ml-auto" navbar>
          {/* Notifications */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav onClick={this.viewNotifications}>
              <div className="top-badge">
                <i className="icon-bell" />
                {countNotification !== 0 ? (
                  <Badge pill color="danger">
                    {countNotification}
                  </Badge>
                ) : (
                  ""
                )}
              </div>
            </DropdownToggle>
            <DropdownMenu right className="notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                {notifications && notifications.length > 0 ? (
                  <a
                    href="/"
                    className="clear-noti"
                    onClick={this.handleClearNotifications}
                  >
                    Clear All
                  </a>
                ) : null}
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  {notifications && notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <NotificationList
                        key={notification.id}
                        notification={notification}
                      />
                    ))
                  ) : (
                    <p className="text-center text-muted my-2">
                      No new notifications
                    </p>
                  )}
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="/">View all Notifications</a>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* Messages */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <div className="top-badge">
                <i className="icon-speech" />
                <Badge pill color="danger">
                  5
                </Badge>
              </div>
            </DropdownToggle>
            <DropdownMenu right className="notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a href="/rel" className="clear-noti">
                  Clear All
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={"/"} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={"/"} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="notification-message">
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={"/"} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="notification-message">
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={"/"} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Kennedy Peters</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="notification-message">
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={"/"} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                {/* eslint-disable-next-line */}
                <a href="#">View all Notifications</a>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* Profile */}
          <UncontrolledDropdown nav direction="down" className="mr-2">
            <DropdownToggle nav>
              <span className="user-img">
                {user !== null ? (
                  <img
                    src={imageUrl + user.avatar}
                    className="img-avatar"
                    alt=""
                  />
                ) : (
                  <img src={defaultAvatar} className="img-avatar" alt="" />
                )}
                <span className="status online" />
              </span>
            </DropdownToggle>
            <DropdownMenu right style={{ width: "250px" }}>
              <DropdownItem
                disabled
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <i className="icon-user f-w-600" />
                {user && user.email}
              </DropdownItem>
              <DropdownItem onClick={(e) => systemDashboardToggle(e)}>
                <i className="fa fa-home" /> System Dashboard
              </DropdownItem>
              <DropdownItem onClick={this.authPortal}>
                <i className="fa fa-home" />
                {pathName === "/admin/dashboard"
                  ? "Employee Portal"
                  : "Main Portal "}
              </DropdownItem>
              <DropdownItem onClick={this.signRoomToggle}>
                <i className="fas fa-wrench" /> Sign In/Out Room
              </DropdownItem>
              <DropdownItem onClick={this.portalToggle}>
                <i className="icon-key" /> Change Password
              </DropdownItem>
              {branches && branches.length > 0 ? (
                <DropdownItem onClick={this.switchBranch}>
                  <i className="fas fa-key" /> Switch Branch
                </DropdownItem>
              ) : null}
              {/* <DropdownItem>
                <i className="fas fa-wrench" /> Settings
              </DropdownItem> */}
              {/* <DropdownItem>
                <i className="fas fa-user-lock" /> Lock
              </DropdownItem> */}
              <DropdownItem onClick={(e) => onLogout(e)}>
                <i className="icon-logout" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* Sign room modal */}
          <Modal
            isOpen={isUnauth}
            toggle={this.signRoomToggle}
            // backdrop={[roomStatus && roomStatus.miniSignOut ? false : true]}
            fade={false}
            size="sm"
            className={this.props.className}
            modalClassName="modal_stretch animated zoomIn"
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fa fa-building" /> Sign In To A Room
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x hidden"
                  type="button"
                  disabled={roomStatus && roomStatus.miniSignOut ? true : false}
                  onClick={this.signRoomToggle}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <FormGroup row>
                <Col sm="12 mb-3">
                  <Label htmlFor="roomId" className="bold mb-1">
                    Select Room:
                  </Label>
                  <Input
                    id="roomId"
                    className="form-control-xs"
                    name="roomId"
                    disabled={disableAdm ? false : true}
                    type="select"
                    onChange={(e) => this.handleSelRoomId(e)}
                    defaultValue={roomStatus.roomId}
                  >
                    <option value disabled>
                      --Select Room--
                    </option>
                    {departments && departments.length > 0
                      ? departments.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.depName}
                          </option>
                        ))
                      : "No records found."}
                  </Input>
                </Col>
                <Col sm="12">
                  <Label htmlFor="selectStatus" className="bold mb-1">
                    Status:
                  </Label>
                  <Input
                    id="selectStatus"
                    className="form-control-xs"
                    name="selectStatus"
                    type="select"
                    disabled={disableSignIn ? true : false}
                    onChange={this.selectRoomStatus}
                  >
                    <option value="2">Available</option>
                    <option value="1">Busy</option>
                    <option value="0"> Stepped Out</option>
                  </Input>
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Row>
                <Col sm="12">
                  <div>
                    <Button
                      color="info"
                      size="sm"
                      disabled={disableSignIn ? true : false}
                      onClick={this.handleSignOutRoom}
                    >
                      {disableAdm ? "Sign In" : "Sign Out"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </ModalFooter>
          </Modal>

          {/* Employee portal modal */}
          <Modal
            isOpen={portalMod}
            toggle={this.portalToggle}
            // backdrop={disableSignIn ? "static" : null}
            className={"modal-sm " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-key pr-1" />
                Enter Portal Password
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.portalToggle}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <FormGroup row>
                <Col sm="12">
                  <Label htmlFor="userPwd" className="bold mb-1">
                    Password:
                  </Label>
                  <Input
                    id="userPwd"
                    className="form-control-xs br-4"
                    name="userPwd"
                    type="password"
                    autoFocus={false}
                    autoComplete="off"
                    value={employeeData.userPwd}
                    onChange={this.handleUserPwd}
                    onKeyUp={this.handleKeyUp}
                    invalid={
                      checkSytemPassError && checkSytemPassError.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {checkSytemPassError}
                  </FormFeedback>
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Row>
                <Col sm="12">
                  <div>
                    <Button
                      color="info"
                      size="sm"
                      onClick={this.authPortal}
                      // disabled={portalBtn ? false : true}
                    >
                      {checkingUserPwd ? (
                        <span>
                          Authenticating
                          <img src={sharpLoader} alt="" className="pl-1" />
                        </span>
                      ) : (
                        <span>
                          Authenticate <i className="icon-key" />
                        </span>
                      )}
                    </Button>
                  </div>
                </Col>
              </Row>
            </ModalFooter>
          </Modal>
          {/* switch branch modal */}
          <Modal
            isOpen={switchBranchMd}
            toggle={this.switchBranch}
            className={"modal-sm " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fa fa-key pr-1" />
                Switch Branch
              </span>
            </ModalHeader>
            <ModalBody>
              <FormGroup row>
                <Col sm="12">
                  <Label htmlFor="selBranch" className="bold mb-1">
                    Select branch:
                  </Label>
                  <Select
                    id="selBranch"
                    options={optionBranches}
                    className="form-control-xs none"
                    onChange={this.handleChangeBranch}
                  />
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Row>
                <Col sm="12">
                  <div>
                    <Button
                      color="info"
                      size="sm"
                      onClick={this.handleSwitchBranch}
                      disabled={loadSwitch ? true : false}
                    >
                      {loadSwitch ? (
                        <span>
                          Processing
                          <img src={sharpLoader} alt="" className="pl-1" />
                        </span>
                      ) : (
                        <span>
                          Switch <i className="icon-key" />
                        </span>
                      )}
                    </Button>
                  </div>
                </Col>
              </Row>
            </ModalFooter>
          </Modal>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
  return {
    cookies: ownProps.cookies,
    user: state.user.user,
    loadSwitch: state.user.loadSwitch,
    branches: state.branches.branches,
    hospBranchId: state.branches.hospBranchId,
    patients: state.patients.data,
    departments: state.departments.data,
    checkSytemPassError: state.user.checkSytemPassError,
    checkingUserPwd: state.user.checkingUserPwd,
    isUnauth: state.roomStatus.isUnauth,
    roomStatus: state.roomStatus.roomStatus,
    disableAdm: state.roomStatus.disableAdm,
    notifications: state.notifications.notifications,
    unreadNotifications: state.notifications.unreadNotifications,
  };
};

const mapDispatchToProps = {
  checkUserPwd,
  signOutRoom,
  signInRoom,
  setBranchRoom,
  fetchPatients,
  toggleRoom,
  setCurrentPatient,
  setRoomStatus,
  setDisableAdm,
  removeDisableAdm,
  fetchNotifications,
  clearNotifications,
  markNotifications,
  fetchbranches,
  fetchUnreadNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);

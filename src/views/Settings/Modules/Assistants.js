import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Input,
  FormGroup,
  Label,
  Badge,
  ModalFooter,
  FormFeedback
} from "reactstrap";
import { connect } from "react-redux";
import ReactTable from "react-table";
import defAvatar from "../../../assets/avatar/defAvatar.gif";
import { findUsers, createUser } from "../../../redux/actions/usersAction";
import {
  handleUserLevel,
  handleUserActiveStatus,
  getUserNo
} from "../../../redux/actions/userActions";
import sharpLoader from "../../../assets/loader/sharp-sm.svg";

class Assistants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        username: "",
        uniqueId: "",
        email: "",
        idNo: "",
        password: "",
        password_confirmation: ""
      },
      clientId: null,
      accessData: {
        patientAccess: "",
        adminAccess: "",
        employeeAccess: ""
      },
      selectedRows: [],
      showSearchBar: false,
      addContMod: false,
      addUserMod: false,
      isActiveMod: false,
      accessLevelMod: false,
      activeNav: new Array(4).fill("1")
    };
  }

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem(["client"]));
    this.clientId = client.clientId;
    const data = {
      clientId: client.clientId,
      branchId: this.props.user.hospBranchId
    };
    this.props.findUsers(data);
    // get staff no
    this.props.getUserNo();
  }

  addUserModal = () => {
    const { addUserMod } = this.state;
    const { userUniqueNo } = this.props;
    this.setState(prevState => ({
      addUserMod: !addUserMod,
      userData: {
        ...prevState.userData,
        uniqueId: userUniqueNo
      }
    }));
  };

  isActiveModal = () => {
    const { isActiveMod } = this.state;
    this.setState({
      isActiveMod: !isActiveMod
    });
  };

  handleIsActive = e => {
    e.preventDefault();
    this.isActiveModal();
  };

  handleAccessLevel = e => {
    e.preventDefault();
    this.accessLevelModal();
  };

  accessLevelModal = () => {
    const { accessLevelMod } = this.state;
    this.setState({
      accessLevelMod: !accessLevelMod
    });
  };

  addContactModal = () => {
    const { addContMod } = this.state;
    this.setState({
      addContMod: !addContMod
    });
  };

  handleUsers = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }));
  };

  handleAccess = e => {
    const { selectedRows } = this.state;
    const { cookies, user } = this.props;
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

    const data = {
      accessLevel: true,
      id: selectedRows[0].id,
      value
    };

    if (value === "patientAccess") {
      this.props.handleUserLevel(data).then(() => {
        if (user.id === data.id) {
          cookies.set("level", 0, { path: "/" });
        }
      });
    } else if (value === "adminAccess") {
      this.props.handleUserLevel(data).then(() => {
        if (user.id === data.id) {
          cookies.set("level", 2, { path: "/" });
        }
      });
    } else if (value === "employeeAccess") {
      this.props.handleUserLevel(data).then(() => {
        if (user.id === data.id) {
          cookies.set("level", 1, { path: "/" });
        }
      });
    }
    this.accessLevelModal();
  };

  saveUser = () => {
    const user = this.state.userData;
    const data = {
      username: user.username,
      uniqueId: user.uniqueId,
      email: user.email,
      idNo: user.idNo,
      password: user.password,
      password_confirmation: user.password_confirmation,
      clientId: this.clientId,
      branchId: this.props.user.hospBranchId
    };
    this.props.createUser(data).then(() => {
      this.resetUserData();
      this.setState({ addUserMod: false });
    });
  };

  editUser = () => {};

  handleIsActiveStatus = e => {
    const { selectedRows } = this.state;
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

    const data = {
      isActive: true,
      id: selectedRows[0].id,
      value
    };

    if (value === "active") {
      this.props.handleUserActiveStatus(data);
    } else if (value === "pending") {
      this.props.handleUserActiveStatus(data);
    } else if (value === "blocked") {
      this.props.handleUserActiveStatus(data);
    }

    this.isActiveModal();
  };

  resetUserData = () => {
    this.userData = {
      username: "",
      uniqueId: "",
      email: "",
      idNo: "",
      password: "",
      password_confirmation: ""
    };
  };

  render() {
    const {
      userData,
      addContMod,
      addUserMod,
      activeNav,
      selectedRows,
      showSearchBar,
      isActiveMod,
      accessLevelMod
    } = this.state;

    const { users, savingUser, userErrors } = this.props;

    const columns = [
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Unique Id",
        accessor: "uniqId"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "ID NO.",
        accessor: "idNo"
      },
      {
        Header: "Is Active",
        accessor: "isActive",
        Cell: props => (
          <span>
            <Link to="/" className="pr-1" onClick={this.handleIsActive}>
              <i className="far fa-edit" />
            </Link>

            <span>
              {props.original.isActive === 1 ? (
                <Badge color="warning" pill>
                  Pending
                </Badge>
              ) : props.original.isActive === 2 ? (
                <Badge color="success" pill>
                  Yes
                </Badge>
              ) : (
                <Badge color="danger" pill>
                  Blocked
                </Badge>
              )}
            </span>
          </span>
        )
      },
      {
        Header: "Access Level",
        accessor: "accessLevel",
        Cell: props => (
          <span>
            <Link to="/" className="pr-1" onClick={this.handleAccessLevel}>
              <i className="far fa-edit" />
            </Link>
            <span>
              {props.original.accessLevel === 1 ? (
                <Badge color="secondary">Employee</Badge>
              ) : props.original.accessLevel === 2 ? (
                <Badge color="secondary">Admin</Badge>
              ) : (
                <Badge color="secondary">Patient</Badge>
              )}
            </span>
          </span>
        )
      }
    ];

    return (
      <Row>
        <Col sm="12">
          <Card className="box">
            <CardHeader className="box-header">
              <Row>
                <Col sm="10">
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        type="button"
                        onClick={this.addUserModal}
                      >
                        <i className="fa fa-plus c-primary" />
                        <span className="mini-title">Add User</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        type="button"
                        disabled={
                          selectedRows && selectedRows.length === 1
                            ? false
                            : true
                        }
                      >
                        <span>Edit</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.delGroupModal}
                        disabled={
                          selectedRows && selectedRows.length ? false : true
                        }
                      >
                        <span>Delete</span>
                      </button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardHeader>
            {/* search bar */}
            <div
              className={
                showSearchBar
                  ? "animated fadeDown box-search "
                  : "animated fadeOut hidden"
              }
            >
              <Row>
                <Col sm="12">
                  <div className="-body">
                    <FormGroup row>
                      <Col sm="2" className="m-r-15">
                        <Label className="-body-label">Search for:</Label>
                      </Col>
                      <Col sm="3" className="m-l-15 m-r-15">
                        <Input className="form-control-xs pl-2" />
                      </Col>
                      <Col sm="4">
                        <Button
                          size="sm"
                          className="btn-default btn-square mr-2"
                        >
                          Search
                        </Button>
                        <Button size="sm" className="btn-default btn-square">
                          Clear
                        </Button>
                      </Col>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <ReactTable
                className="-highlight -striped text-left"
                loading={false}
                loadingText={<div className="sk-spinner sk-spinner-pulse" />}
                data={users}
                columns={columns}
                defaultPageSize={17}
                pageSizeOptions={[17, 34, 45, 50]}
                getTrProps={(state, rowInfo) => {
                  if (rowInfo && rowInfo.row) {
                    return {
                      onClick: e => {
                        let selectedRows = [];

                        if (e.ctrlKey && this.previousRow) {
                          if (this.previousRow.index < rowInfo.index) {
                            for (
                              let i = this.previousRow.index;
                              i <= rowInfo.index;
                              i++
                            ) {
                              selectedRows.push(state.sortedData[i]._original);
                            }
                          } else {
                            for (
                              let i = rowInfo.index;
                              i <= this.previousRow.index;
                              i++
                            ) {
                              selectedRows.push(state.sortedData[i]._original);
                            }
                          }
                        } else {
                          rowInfo._index = rowInfo.index;
                          selectedRows.push(rowInfo.original);
                          this.previousRow = rowInfo;
                        }

                        this.setState({
                          selectedRows
                        });
                      },

                      onDoubleClick: e => {
                        this.editUser();
                      },

                      style: {
                        background:
                          this.state.selectedRows.some(
                            e => e.id === rowInfo.original.id
                          ) && "#42a5f533"
                      }
                    };
                  } else {
                    return {};
                  }
                }}
              />
            </div>
          </Card>

          {/* Add User Modal */}
          <Modal
            isOpen={addUserMod}
            toggle={this.addUserModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader className="m-0">
              <span className="modal-title f-s-14">
                <i className="icon-user-follow pr-1" />
                User Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.addUserModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="bg1">
              <FormGroup row>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="addUser" className="bold mb-0">
                      Username
                    </Label>
                    <Input
                      id="addUser"
                      className="form-control-xs"
                      value={userData.username}
                      name="username"
                      onChange={e => this.handleUsers(e)}
                      invalid={
                        userErrors.username && userErrors.username.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {userErrors.username}
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="uniqueId" className="bold mb-0">
                      Unique Id
                    </Label>
                    <Input
                      id="uniqueId"
                      className="form-control-xs"
                      value={userData.uniqueId}
                      name="uniqueId"
                      disabled
                      onChange={e => this.handleUsers(e)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="email" className="bold mb-0">
                      Email
                    </Label>
                    <Input
                      id="email"
                      className="form-control-xs"
                      value={userData.email}
                      name="email"
                      onChange={e => this.handleUsers(e)}
                      invalid={
                        userErrors.email && userErrors.email.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {userErrors.email}
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="idNo" className="bold mb-0">
                      ID NO.
                    </Label>
                    <Input
                      id="idNo"
                      className="form-control-xs"
                      value={userData.idNo}
                      name="idNo"
                      onChange={e => this.handleUsers(e)}
                      invalid={
                        userErrors.idNo && userErrors.idNo.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {userErrors.idNo}
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="password" className="bold mb-0">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      className="form-control-xs"
                      value={userData.password}
                      name="password"
                      onChange={e => this.handleUsers(e)}
                      invalid={
                        userErrors.password && userErrors.password.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {userErrors.password}
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label
                      htmlFor="password_confirmation"
                      className="bold mb-0"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      id="password_confirmation"
                      className="form-control-xs"
                      value={userData.password_confirmation}
                      name="password_confirmation"
                      onChange={e => this.handleUsers(e)}
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row className="pt-2 hidden">
                <Col sm="6">
                  <Button
                    color="link"
                    className="m-0 f-s-13 f-w-400"
                    onClick={this.addContactModal}
                  >
                    <i className="fa fa-address-card color-grey pr-1" />
                    User Contact Details
                  </Button>
                  <Button color="link" className="m-0 f-s-13 f-w-400">
                    <i className="fa fa-arrow-circle-right color-grey pr-1" />
                    Change the signature
                  </Button>
                  <Button color="link" className="m-0 f-s-13 f-w-400" disabled>
                    <i className="icon-user-unfollow text-muted pr-1" />
                    <span className="text-muted">Delete account</span>
                  </Button>
                </Col>
                <Col sm="6">
                  <Button color="link" className="m-0 f-s-13 f-w-400">
                    <i className="fa fa-arrow-circle-right color-grey pr-1" />
                    Change the password
                  </Button>
                  <Button color="link" className="m-0 f-s-13 f-w-400">
                    <i className="fa fa-arrow-circle-right color-grey pr-1" />
                    Change the account type
                  </Button>
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <div>
                <Button
                  color="secondary"
                  size="sm"
                  className="btn-square btn-top mr-2"
                  type="button"
                  onClick={this.addUserModal}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  className="btn-square btn-top"
                  type="button"
                  disabled={savingUser ? true : false}
                  onClick={this.saveUser}
                >
                  {savingUser ? (
                    <span>
                      Saving
                      <img src={sharpLoader} alt="" className="pl-1" />
                    </span>
                  ) : (
                    <span>Save</span>
                  )}
                </Button>
              </div>
            </ModalFooter>
          </Modal>
          {/* Add Contact Modal */}
          <Modal
            isOpen={addContMod}
            toggle={this.addContactModal}
            backdrop="static"
            className={"modal-xl " + this.props.className}
          >
            <ModalHeader className="m-0">
              <span className="text-muted f-s-14">
                <i className="icon-user-follow" /> Contact Editor - Kennedy
                Peters
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  onClick={this.addContactModal}
                >
                  <i className="fa fa-times text-muted" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <div className="modal-fluid ">
                <Row>
                  <Col sm="4" className="sidel-bg">
                    <FormGroup>
                      <Label htmlFor="firstname">First Name</Label>
                      <Input id="firstname" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="middlename">Middle Name</Label>
                      <Input id="middlename" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="mobile">Mobile</Label>
                      <Input id="mobile" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" className="form-control-xs" />
                    </FormGroup>
                    <div className="text-center">
                      <div className="p-avatar">
                        <img src={defAvatar} className="" alt="" />
                      </div>
                      <div>
                        <Button className="pb-0  f-s-13" color="link">
                          Browse Picture
                        </Button>
                      </div>
                      <div>
                        <Button className="pt-0 f-s-13" color="link">
                          Remove
                        </Button>
                      </div>
                      <Input
                        type="file"
                        id="file-input"
                        className="hidden"
                        accept="image/*"
                      />
                    </div>
                    <FormGroup check inline className="pt-1 pr-3">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="isActive"
                        name="inline-radios"
                        value="option1"
                      />
                      <Label
                        className="form-check-label"
                        check
                        htmlFor="isActive"
                      >
                        Is Active
                      </Label>
                    </FormGroup>
                    <FormGroup check inline className="pt-1 pr-3">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="isCompany"
                        name="inline-radios"
                        value="option1"
                      />
                      <Label
                        className="form-check-label"
                        check
                        htmlFor="isCompany"
                      >
                        Is Company
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col sm="8" className="sider-bg">
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          active={activeNav[0] === "1"}
                          onClick={() => {
                            this.toggle(0, "1");
                          }}
                        >
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          active={activeNav[0] === "2"}
                          onClick={() => {
                            this.toggle(0, "2");
                          }}
                        >
                          Business
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          active={activeNav[0] === "3"}
                          onClick={() => {
                            this.toggle(0, "3");
                          }}
                        >
                          Bank Accounts
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          active={activeNav[0] === "4"}
                          onClick={() => {
                            this.toggle(0, "4");
                          }}
                        >
                          Notes
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          active={activeNav[0] === "5"}
                          onClick={() => {
                            this.toggle(0, "5");
                          }}
                        >
                          Social
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={activeNav[0]}>
                      <TabPane tabId="1">
                        <Row>
                          <Col sm="6">
                            <FormGroup>
                              <Label htmlFor="street">Street:</Label>
                              <textarea
                                style={{ height: "87px" }}
                                className="form-control form-control-xs"
                                id="street"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="city">City:</Label>
                              <Input id="city" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="county">County/State:</Label>
                              <Input id="county" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="zipCode">Zip Code:</Label>
                              <Input id="zipCode" className="form-control-xs" />
                            </FormGroup>
                          </Col>
                          <Col sm="6">
                            <FormGroup>
                              <Label htmlFor="street">Phone</Label>
                              <Input
                                id="textarea-input"
                                className="form-control-xs"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="dob">Date Of Birth:</Label>
                              <Input id="dob" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="lang">Language</Label>
                              <Input id="lang" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="countyReg">Huduma No:</Label>
                              <Input
                                id="countyReg"
                                className="form-control-xs"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="12">
                            <FormGroup>
                              <Label htmlFor="web">Web Page:</Label>
                              <Input id="web" className="form-control-xs" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">2 HELO</TabPane>
                      <TabPane tabId="3">3 HELO</TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </div>
            </ModalBody>
          </Modal>
          {/* isActive Modal */}
          <Modal
            isOpen={isActiveMod}
            toggle={this.isActiveModal}
            backdrop="static"
            className={"modal-sm " + this.props.className}
          >
            <ModalHeader className="m-0">
              <span className="text-white f-s-14">
                <i className="fa fa-edit" /> Is Active Status
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  onClick={this.isActiveModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col md="12">
                  <div className="container">
                    <FormGroup className="ml-3">
                      <Input
                        type="radio"
                        className="form-control-xs pl-2"
                        onChange={e => this.handleIsActiveStatus(e)}
                        value="active"
                        name="isActiveStatus"
                      />
                      <Label>Active</Label>
                    </FormGroup>
                    <FormGroup className="ml-3">
                      <Input
                        type="radio"
                        className="form-control-xs pl-2"
                        onChange={e => this.handleIsActiveStatus(e)}
                        value="pending"
                        name="isActiveStatus"
                      />
                      <Label>Pending</Label>
                    </FormGroup>
                    <FormGroup className="ml-3">
                      <Input
                        type="radio"
                        className="form-control-xs pl-2"
                        onChange={e => this.handleIsActiveStatus(e)}
                        value="blocked"
                        name="isActiveStatus"
                      />
                      <Label>Blocked</Label>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
          {/* Access Level Modal */}
          <Modal
            isOpen={accessLevelMod}
            toggle={this.accessLevelModal}
            backdrop="static"
            className={"modal-sm " + this.props.className}
          >
            <ModalHeader className="m-0">
              <span className="text-white f-s-14">
                <i className="fa fa-edit" /> Access Level
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  onClick={this.accessLevelModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col md="12">
                  <div className="container">
                    <FormGroup className="ml-3">
                      <Input
                        type="radio"
                        className="form-control-xs pl-2"
                        onChange={e => this.handleAccess(e)}
                        value="patientAccess"
                        // checked={true}
                        name="accessLevel"
                      />
                      <Label>Patient Access Level</Label>
                    </FormGroup>
                    <FormGroup className="ml-3">
                      <Input
                        type="radio"
                        className="form-control-xs pl-2"
                        onChange={e => this.handleAccess(e)}
                        value="adminAccess"
                        name="accessLevel"
                      />
                      <Label>Admin Access Level</Label>
                    </FormGroup>
                    <FormGroup className="ml-3">
                      <Input
                        type="radio"
                        className="form-control-xs pl-2"
                        onChange={e => this.handleAccess(e)}
                        value="employeeAccess"
                        name="accessLevel"
                      />
                      <Label>Employee Access Level</Label>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cookies: ownProps.cookies,
    users: state.users.branchUsers,
    user: state.user.user,
    savingUser: state.users.savingUser,
    userUniqueNo: state.user.userUniqueNo,
    userErrors: state.users.userErrors
  };
};

const mapDispatchToProps = {
  findUsers,
  createUser,
  handleUserLevel,
  handleUserActiveStatus,
  getUserNo
};

export default connect(mapStateToProps, mapDispatchToProps)(Assistants);

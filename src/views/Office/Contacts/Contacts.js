import React, { Component } from "react";
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
  Label
} from "reactstrap";
import ReactTable from "react-table";
import classNames from "classnames";
import { AppSwitch } from "@coreui/react";
import defAvatar from "../../../assets/img/avatar/avatar.jpg";

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      modal: false,
      avatar: null,
      addContMod: false,
      date: new Date(),
      activeContacts: "1",
      activeNav: new Array(4).fill("1")
    };
  }

  toggle = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  uploadPhoto = e => {
    e.preventDefault();
    this.refAvatar.click();
  };

  handlePhoto = e => {
    let reader,
      file = e.target.files[0];

    if (file.length === 0) {
      return;
    }

    reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.setState({
        avatar: e.target.result
      });
    };
  };

  onChange = date => {
    console.log(date);
    this.setState({ date });
  };

  addContactModal = () => {
    const { addContMod } = this.state;

    this.setState({
      addContMod: !addContMod
    });
  };

  render() {
    const { activeContacts, activeNav, addContMod } = this.state;
    const data = [
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      }
    ];
    const columns = [
      {
        Header: "Display Name",
        accessor: "displayName"
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "Phone",
        accessor: "phone"
      },
      {
        Header: "Mobile Phone",
        accessor: "mobilePhone"
      },
      {
        Header: "Email",
        accessor: "email"
      }
    ];

    return (
      <div className="animated fadeIn m-l-15">
        <Row>
          <Col sm="12">
            <div className="navitem-header">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={
                      "pl-0 " +
                      classNames({
                        active: activeContacts === "1"
                      })
                    }
                  >
                    Contacts
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>

        <div className="body-pills m-l-15 m-r-15 ">
          <TabContent
            activeTab={activeContacts}
            className="animated fadeIn content-pills"
          >
            <TabPane tabId="1" className="animated fadeIn">
              <Row>
                <Col sm="12">
                  <Card className="box">
                    <CardHeader className="box-header">
                      <div>
                        <ul className="header-left">
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.addContactModal}
                            >
                              <i className="fa fa-plus c-primary pr-1" />
                              <span className="mini-title">Add Contact</span>
                            </button>
                          </li>
                          <li>
                            <button className="btn-box">
                              <span>Edit</span>
                            </button>
                          </li>
                          <li>
                            <button className="btn-box">
                              <span>Delete</span>
                            </button>
                          </li>
                          <li>
                            <button className="btn-box">
                              <i className="fa fa-search  pr-1" />
                              <span>Search</span>
                            </button>
                          </li>
                          <li>
                            <button className="btn-box">
                              <i className="fa fa-upload  pr-1" />
                              <span>Import</span>
                            </button>
                          </li>
                          <li>
                            <button className="btn-box">
                              <span>More...</span>
                            </button>
                          </li>
                          <li>
                            <button className="btn-box">
                              <i className="fa fa-user  pr-1" />
                              <span>Make Patient</span>
                            </button>
                          </li>
                        </ul>
                        <ul className="header-right">
                          <li>
                            <button className="btn-box">
                              <i className="fa fa-wrench" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </CardHeader>
                    <div>
                      <ReactTable
                        className="-highlight"
                        data={data}
                        columns={columns}
                        defaultPageSize={15}
                        pageSizeOptions={[15, 20, 25, 30, 40, 50, 100]}
                        getTdProps={(state, rowInfo, column, instance) => {
                          return {
                            onClick: e => {
                              console.log(rowInfo.row);
                            }
                          };
                        }}
                      />
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          {/* Add Contact Modal */}
          <Modal
            isOpen={addContMod}
            toggle={this.addContactModal}
            backdrop="static"
            className={"modal-lg " + this.props.className}
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
              <Card className="box header">
                <CardHeader className="box-header">
                  <div>
                    <ul className="header-left">
                      <li>
                        <button
                          className="btn-box"
                          onClick={this.addContactModal}
                        >
                          <i className="fa fa-save f-s-11 c-primary pr-1" />
                          <span className="mini-title">Save and Close</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </CardHeader>
              </Card>
              <div className="modal-fluid ">
                <Row>
                  <Col sm="4" className="sidel-bg">
                    <FormGroup>
                      <Label htmlFor="username">&nbsp;Username</Label>
                      <Input id="username" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="fullname">&nbsp;Fullname</Label>
                      <Input id="fullname" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="mobile">&nbsp;Mobile</Label>
                      <Input id="mobile" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email">&nbsp;Email</Label>
                      <Input id="email" className="form-control-xs" />
                    </FormGroup>
                    <FormGroup check inline className="pt-1 pr-3">
                      <AppSwitch
                        color={"success"}
                        outline={"alt"}
                        label
                        dataOn={"\u2713"}
                        dataOff={"\u2715"}
                        checked
                        size={"sm"}
                      />
                      <span className="pl-1">&nbsp;Is Active</span>
                    </FormGroup>
                    <div className="text-center">
                      <div className="p-avatar">
                        <img src={defAvatar} alt="" />
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
                              <Label htmlFor="street">&nbsp;Street:</Label>
                              <textarea
                                style={{ height: "87px" }}
                                className="form-control form-control-xs"
                                id="street"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="city">&nbsp;City:</Label>
                              <Input id="city" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="county">
                                &nbsp;County/State:
                              </Label>
                              <Input id="county" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="zipCode">&nbsp;Zip Code:</Label>
                              <Input id="zipCode" className="form-control-xs" />
                            </FormGroup>
                          </Col>
                          <Col sm="6">
                            <FormGroup>
                              <Label htmlFor="street">&nbsp;Phone</Label>
                              <Input
                                id="textarea-input"
                                className="form-control-xs"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="dob">&nbsp;Date Of Birth:</Label>
                              <Input id="dob" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="lang">&nbsp;Language</Label>
                              <Input id="lang" className="form-control-xs" />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="countyReg">
                                &nbsp;Huduma No:
                              </Label>
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
                              <Label htmlFor="web">&nbsp;Web Page:</Label>
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
        </div>
      </div>
    );
  }
}

export default Contacts;

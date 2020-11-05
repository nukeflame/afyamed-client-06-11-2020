import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  TabContent,
  TabPane,
  CardFooter,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import classNames from "classnames";
import $ from "jquery";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      topActiveTab: "1",
      emailAccMd: false
    };
  }

  toChats = () => {
    $(".sidebar").addClass("bgs");
    $(".breadcrumb").addClass("hidden");
    $(".app-footer").addClass("hidden");
    $("body").addClass("aside-menu-lg-show");
    $(".dnav").addClass("hidden");
    this.props.history.push("/communication/chatbox");
  };

  emailAcc = () => {
    const { emailAccMd } = this.state;
    this.setState({
      emailAccMd: !emailAccMd
    });
  };

  toggle = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { topActiveTab, emailAccMd, activeTab } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <div className="navitem-header">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={classNames({
                      active: topActiveTab === "1"
                    })}
                  >
                    Communication
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
        <div className="body-pills">
          <TabContent
            activeTab={topActiveTab}
            className="animated fadeIn content-pills"
          >
            <TabPane tabId="1" className="animated fadeIn">
              <Row>
                <Col sm="2">
                  <ListGroup id="list-tab" role="tablist" className="mini-side">
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggle(0)}
                        action
                        active={activeTab === 0}
                      >
                        <span>Dashboard</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(1)}
                        action
                        active={activeTab === 1}
                      >
                        <span>Campaigns</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(2)}
                        action
                        active={activeTab === 2}
                      >
                        <span>List</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(3)}
                        action
                        active={activeTab === 3}
                      >
                        <span>Logs</span>
                      </ListGroupItem>
                    </div>
                    <h5 className="h-title pl-3">Settings</h5>
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggle(4)}
                        action
                        active={activeTab === 4}
                      >
                        <span className="pl-3">Accounts</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(5)}
                        action
                        active={activeTab === 5}
                      >
                        <span className="pl-3">Templates</span>
                      </ListGroupItem>
                    </div>
                  </ListGroup>
                </Col>
                <Col sm="10">
                  <TabContent className="tab-box" activeTab={activeTab}>
                    <TabPane tabId={0} className="animated fadeIn">
                      <Row>
                        <Col sm="6">
                          <Card className="box" style={{ minHeight: "505px" }}>
                            <CardBody>
                              <h6 className="box-title">Stats</h6>
                            </CardBody>
                            <CardFooter className="box-footer">
                              <div className="float-right text-right">
                                <Button color="link">
                                  Scheduled Consultations
                                </Button>
                                <Button color="link">Add Checkin</Button>
                              </div>
                            </CardFooter>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card className="box" style={{ minHeight: "245px" }}>
                            <CardBody>
                              <h6 className="box-title">SMS</h6>
                              <div className="text-center">
                                <Button onClick={this.toChats} color="link">
                                  Send SMS
                                </Button>
                              </div>
                            </CardBody>
                          </Card>

                          <Card className="box" style={{ minHeight: "245px" }}>
                            <CardBody>
                              <h6 className="box-title">Email</h6>
                            </CardBody>
                            <CardFooter className="box-footer">
                              <div className="float-right text-right">
                                <Button onClick={this.emailAcc} color="link">
                                  Add Email
                                </Button>
                              </div>
                            </CardFooter>
                          </Card>
                          {/* Allergy Modal */}
                          <Modal
                            isOpen={emailAccMd}
                            toggle={this.emailAcc}
                            backdrop="static"
                            style={{ top: "15%" }}
                            className={this.props.className}
                          >
                            <ModalHeader className="m-0">
                              <span className="text-muted f-s-14">
                                <i className="fa fa-window-maximize" /> Allergy
                                - Kennedy Peters
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
                                          onClick={this.emailAcc}
                                        >
                                          <i className="fa fa-save f-s-11 c-primary pr-1" />
                                          <span className="mini-title">
                                            Save and Close
                                          </span>
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          className="btn-box"
                                          onClick={this.emailAcc}
                                        >
                                          <span>Close</span>
                                        </button>
                                      </li>
                                      <li>
                                        <button className="btn-box">
                                          <span>Delete</span>
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </CardHeader>
                              </Card>
                              <div className="modal-fluid">
                                <Row>
                                  <Col sm="6">
                                    <div className="form-group m-r-10">
                                      <label htmlFor="allergyDate">
                                        &nbsp;Date
                                      </label>
                                      <select
                                        id="allergyDate"
                                        className="form-control form-control-xs p-t-5"
                                      >
                                        <option>14-Feb-2019</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col sm="6">
                                    <div className="form-group  m-l-10">
                                      <label htmlFor="medic">&nbsp;Medic</label>
                                      <select
                                        id="medic"
                                        className="form-control form-control-xs p-t-5"
                                      >
                                        <option>--none--</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col sm="12">
                                    <div className="form-group mt-2">
                                      <label htmlFor="note" className="f-w-600">
                                        &nbsp;Note:
                                      </label>
                                      <textarea
                                        style={{
                                          height: "87px",
                                          padding: "0px 6px"
                                        }}
                                        className="form-control form-control-xs"
                                        id="note"
                                        placeholder="penicilin allergy"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </ModalBody>
                          </Modal>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Dashboard;

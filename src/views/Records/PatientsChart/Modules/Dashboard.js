import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Table,
} from "reactstrap";
import classNames from "classnames";
import { connect } from "react-redux";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allergyMod: false,
      topActiveTab: "1",
      customizeOpen: false,
      addWidgetMd: false,
      chooseLayoutMd: false,
    };
  }

  allergyModal = () => {
    const { allergyMod } = this.state;
    this.setState({
      allergyMod: !allergyMod,
    });
  };

  toggleTopNav = (tab) => {
    const { topActiveTab } = this.state;
    if (topActiveTab !== tab) {
      this.setState({
        topActiveTab: tab,
      });
    }
  };

  handleCustomize = () => {
    const { customizeOpen } = this.state;
    this.setState({
      customizeOpen: !customizeOpen,
    });
  };

  addWidgetModal = () => {
    const { addWidgetMd } = this.state;
    this.setState({
      addWidgetMd: !addWidgetMd,
    });
  };

  chooseLayoutModal = () => {
    const { chooseLayoutMd } = this.state;
    this.setState({
      chooseLayoutMd: !chooseLayoutMd,
    });
  };

  checkAllergies = () => {
    //   <>
    //   <tr>
    //     <td className="left">
    //       {cp.allergies[0].name}
    //     </td>
    //   </tr>
    //   <tr>
    //     <td className="left">
    //       {typeof cp.allergies[1].name !==
    //       undefined ? (
    //         cp.allergies[1].name
    //       ) : (
    //         <div className="emptyItem-row"></div>
    //       )}
    //     </td>
    //   </tr>
    //   <tr>
    //     <td className="left">
    //       {typeof cp.allergies[2].name !==
    //       undefined ? (
    //         cp.allergies[2].name
    //       ) : (
    //         <div className="emptyItem-row"></div>
    //       )}
    //     </td>
    //   </tr>
    //   <tr>
    //     <td className="left">
    //       {typeof cp.allergies[3].name !==
    //       undefined ? (
    //         cp.allergies[3].name
    //       ) : (
    //         <div className="emptyItem-row"></div>
    //       )}
    //     </td>
    //   </tr>
    // </>
  };

  render() {
    const {
      allergyMod,
      topActiveTab,
      customizeOpen,
      addWidgetMd,
      chooseLayoutMd,
    } = this.state;
    const { cp } = this.props;

    // const medications = visits[0];

    return (
      <div>
        <Row>
          <Col sm="12">
            <Nav tabs className="header-pils">
              <NavItem>
                <NavLink
                  className={classNames({
                    active: topActiveTab === "1",
                  })}
                  onClick={() => {
                    this.toggleTopNav("1");
                  }}
                >
                  Synopsis
                </NavLink>
              </NavItem>
              <NavItem />
              <NavItem>
                <NavLink
                  className={classNames({
                    active: topActiveTab === "2",
                  })}
                  onClick={() => {
                    this.toggleTopNav("2");
                  }}
                >
                  General Information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: topActiveTab === "2",
                  })}
                  onClick={() => {
                    this.toggleTopNav("2");
                  }}
                >
                  Additional Information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: topActiveTab === "2",
                  })}
                  onClick={() => {
                    this.toggleTopNav("2");
                  }}
                >
                  Medical Information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: topActiveTab === "2",
                  })}
                  onClick={() => {
                    this.toggleTopNav("2");
                  }}
                >
                  Notifications
                </NavLink>
              </NavItem>
              <NavItem>
                <ButtonDropdown
                  isOpen={customizeOpen}
                  toggle={this.handleCustomize}
                  className="nav-right"
                >
                  <DropdownToggle color="link">
                    <span className="c-primary"> Customize</span>
                  </DropdownToggle>
                  <DropdownMenu right className="top-dropdown">
                    <DropdownItem onClick={this.addWidgetModal}>
                      Add Widgets
                    </DropdownItem>
                    <DropdownItem>Manage Widgets</DropdownItem>
                    <DropdownItem>Reset Widgets to Default</DropdownItem>
                    <DropdownItem onClick={this.chooseLayoutModal}>
                      Choose Layout
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <div className="pt-3 body-pills">
          {/* {JSON.stringify(medications)} */}
          <TabContent
            activeTab={topActiveTab}
            className="animated fadeIn content-pills"
          >
            <TabPane tabId="1" className="animated fadeIn">
              <Row>
                <Col md="6">
                  <fieldset className="dashboard-fieldset">
                    <legend className="dashboard-fieldset">
                      <h6>Demographics</h6>
                    </legend>
                    <Row>
                      <Col md="6">
                        <div className="">
                          <table className="demog table no-border">
                            {cp && cp !== null ? (
                              <tbody>
                                <tr>
                                  <td className="demog-td">Age:</td>
                                  <td>
                                    {cp.age} {cp.months} {cp.weeks} y/o{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="demog-td">Mobile</td>
                                  <td>{cp.phone}</td>
                                </tr>
                                <tr>
                                  <td className="demog-td">Ethnicity</td>
                                  <td>{cp.nationality}</td>
                                </tr>
                              </tbody>
                            ) : null}
                          </table>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="">
                          <table className="demog table no-border">
                            {cp && cp !== null ? (
                              <tbody>
                                <tr>
                                  <td className="demog-td">Sex:</td>
                                  <td>{cp.gender} </td>
                                </tr>
                                <tr>
                                  <td className="demog-td">ID NO.</td>
                                  <td>{cp.idNo}</td>
                                </tr>
                              </tbody>
                            ) : null}
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </fieldset>
                </Col>
                <Col md="6">
                  <fieldset className="dashboard-fieldset">
                    <legend className="dashboard-fieldset">
                      <h6>Vitals</h6>
                    </legend>
                    <Row>
                      <Col md="4">
                        <div className="">
                          <table className="demog table no-border">
                            <tbody>
                              <tr>
                                <td className="demog-td">BP:</td>
                                <td>142/88 </td>
                              </tr>
                              <tr>
                                <td className="demog-td">Temp:</td>
                                <td>103 F</td>
                              </tr>
                              <tr>
                                <td className="demog-td">Weight:</td>
                                <td>103 gm</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="">
                          <table className="demog table no-border">
                            <tbody>
                              <tr>
                                <td className="demog-td">BMI:</td>
                                <td>142/88 </td>
                              </tr>
                              <tr>
                                <td className="demog-td">
                                  SP0<sup>2</sup>:
                                </td>
                                <td>103 gm</td>
                              </tr>
                              <tr>
                                <td className="demog-td">Height:</td>
                                <td>102 cm</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="">
                          <table className="demog table no-border">
                            <tbody>
                              <tr>
                                <td className="demog-td">Heart Rate:</td>
                                <td>82 </td>
                              </tr>
                              <tr>
                                <td className="demog-td">Resp Rate:</td>
                                <td>82 </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </fieldset>
                </Col>
                <Col md="6">
                  <fieldset className="dashboard-fieldset">
                    <legend className="dashboard-fieldset">
                      <h6>Medications</h6>
                    </legend>
                    <Row>
                      <Col md="12">
                        <Card className="dashboard-card">
                          <CardBody>
                            <div className="item-body">
                              <Table
                                bordered
                                striped
                                responsive
                                size="sm"
                                className="item-table"
                              >
                                <tbody>
                                  <tr>
                                    <td className="left">
                                      Lisinogril
                                      <span className="item-right">20 mg</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      Atorvastatin
                                      <span className="item-right">20 mg</span>
                                    </td>
                                    <td className="right"> CK</td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      Lisinogril
                                      <span className="item-right">20 mg</span>
                                    </td>
                                    <td className="right">QD</td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      Atorvastatin
                                      <span className="item-right">20 mg</span>
                                    </td>
                                    <td className="right"> CK</td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      Atorvastatin
                                      <span className="item-right">20 mg</span>
                                    </td>
                                    <td className="right"> CK</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </fieldset>
                </Col>
                <Col md="6">
                  <fieldset className="dashboard-fieldset">
                    <legend className="dashboard-fieldset">
                      <h6>Allergies</h6>
                    </legend>
                    <Row>
                      <Col md="12">
                        <Card className="dashboard-card">
                          <CardBody>
                            <div className="item-body">
                              <Table
                                bordered
                                striped
                                responsive
                                size="sm"
                                className="item-table"
                              >
                                <tbody>
                                  {cp.allergies && cp.allergies.length > 0 ? (
                                    cp.allergies.length < 4 ? (
                                      <>
                                        <tr>
                                          <td className="left">
                                            {cp.allergies[0].name}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="left">
                                            {typeof cp.allergies[1] !==
                                            "undefined" ? (
                                              cp.allergies[1].name
                                            ) : (
                                              <div className="emptyItem-row"></div>
                                            )}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="left">
                                            {typeof cp.allergies[2] !==
                                            "undefined" ? (
                                              cp.allergies[2].name
                                            ) : (
                                              <div className="emptyItem-row"></div>
                                            )}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="left">
                                            {typeof cp.allergies[3] !==
                                            "undefined" ? (
                                              cp.allergies[3].name
                                            ) : (
                                              <div className="emptyItem-row"></div>
                                            )}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="left">
                                            {typeof cp.allergies[4] !==
                                            "undefined" ? (
                                              cp.allergies[4].name
                                            ) : (
                                              <div className="emptyItem-row"></div>
                                            )}
                                          </td>
                                        </tr>
                                      </>
                                    ) : (
                                      cp.allergies.map((l) => (
                                        <tr key={l.id}>
                                          <td className="left">{l.name}</td>
                                        </tr>
                                      ))
                                    )
                                  ) : (
                                    <>
                                      <tr>
                                        <td className="left">None Given</td>
                                      </tr>
                                      <tr>
                                        <td className="left">
                                          <div className="emptyItem-row"></div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="left">
                                          <div className="emptyItem-row"></div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="left">
                                          <div className="emptyItem-row"></div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="left">
                                          <div className="emptyItem-row"></div>
                                        </td>
                                      </tr>
                                    </>
                                  )}
                                </tbody>
                              </Table>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </fieldset>
                </Col>
                <Col md="6">
                  <fieldset className="dashboard-fieldset">
                    <legend className="dashboard-fieldset">
                      <h6>Medical Diagnoses</h6>
                    </legend>
                    <Row>
                      <Col md="12">
                        <Card className="dashboard-card">
                          <CardBody>
                            <div className="item-body">
                              <Table
                                bordered
                                striped
                                responsive
                                size="sm"
                                className="item-table"
                              >
                                <tbody>
                                  <tr>
                                    <td className="left">Hypertension</td>
                                    <td className="right"></td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      Hypercholestrolemia
                                    </td>
                                    <td className="right"></td>
                                  </tr>
                                  <tr>
                                    <td className="left">Atorvastatin</td>
                                    <td className="right"></td>
                                  </tr>
                                  <tr>
                                    <td className="left">Acute Otis Media</td>
                                    <td className="right"></td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </fieldset>
                </Col>
                <Col md="6">
                  <fieldset className="dashboard-fieldset">
                    <legend className="dashboard-fieldset">
                      <h6>Lab Results</h6>
                    </legend>
                    <Row>
                      <Col md="12">
                        <Card className="dashboard-card">
                          <CardBody>
                            <div className="item-body">
                              <Table
                                bordered
                                striped
                                responsive
                                size="sm"
                                className="item-table"
                              >
                                <tbody>
                                  <tr>
                                    <td className="left">
                                      Platelet Count
                                      <span className="item-right pr-5">
                                        100
                                      </span>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="left">
                                      Prothrombin Time
                                      <span className="item-right pr-5">
                                        27.4
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      <div className="emptyItem-row"></div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      <div className="emptyItem-row"></div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      <div className="emptyItem-row"></div>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </fieldset>
                </Col>
                <Col md="12">
                  <fieldset className="dashboard-fieldset">
                    <legend className="dashboard-fieldset">
                      <h6>Notes</h6>
                    </legend>
                    <Row>
                      <Col md="12">
                        <Card className="dashboard-card">
                          <CardBody>
                            <div className="item-body">
                              <p>
                                Mr. Duckman is well known in this facility for
                                his joyfull demeaner. Incidental find of joy.
                              </p>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </fieldset>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" className="animated fadeIn">
              we
            </TabPane>
          </TabContent>

          {/* Allergy Modal */}
          <Modal
            isOpen={allergyMod}
            toggle={this.allergyModal}
            backdrop="static"
            style={{ top: "15%" }}
            className={this.props.className}
          >
            <ModalHeader className="m-0">
              <span className="modal-title f-s-14">
                <i className="fa fa-window-maximize pr-1" />
                Allergy - {cp.fullname}
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.allergyModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="p-5">
              <Card className="box header">
                <CardHeader className="box-header">
                  <div>
                    <ul className="header-left">
                      <li>
                        <button className="btn-box" onClick={this.allergyModal}>
                          <i className="fa fa-save f-s-11 c-primary pr-1" />
                          <span className="mini-title">Save &amp; Close</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn-box" onClick={this.allergyModal}>
                          <span>Cancel</span>
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
                      <label htmlFor="allergyDate">&nbsp;Date</label>
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
                          padding: "0px 6px",
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

          {/* Add widget Modal */}
          <Modal
            isOpen={addWidgetMd}
            toggle={this.addWidgetModal}
            size="sm"
            className={this.props.className}
            fade={false}
            modalClassName="modal_stretch animated fadeIn"
          >
            <ModalHeader className="m-0">
              <span className="modal-title f-s-14">Add Widgets</span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.addWidgetModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="p-5">
              <div className="modal-fluid">
                <FormGroup row>
                  <Col sm="12">
                    <div className="p-2">
                      <h6 className="f-s-13 bold">General</h6>
                      <FormGroup check className="pl-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="messagesInbox"
                            name="messagesInbox"
                          />
                          <label
                            className="custom-control-label bold"
                            htmlFor="messagesInbox"
                          >
                            Messages Inbox
                          </label>
                        </div>
                      </FormGroup>
                      <FormGroup check className="pl-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="myTasks"
                            name="myTasks"
                          />
                          <label
                            className="custom-control-label bold"
                            htmlFor="myTasks"
                          >
                            My Tasks
                          </label>
                        </div>
                      </FormGroup>
                      <FormGroup check className="pl-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="recentPatients"
                            name="recentPatients"
                          />
                          <label
                            className="custom-control-label bold"
                            htmlFor="recentPatients"
                          >
                            Recent Patients
                          </label>
                        </div>
                      </FormGroup>
                      <FormGroup check className="pl-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="alergies"
                            name="alergies"
                          />
                          <label
                            className="custom-control-label bold"
                            htmlFor="alergies"
                          >
                            Allergies
                          </label>
                        </div>
                      </FormGroup>
                    </div>
                  </Col>
                </FormGroup>
              </div>
            </ModalBody>
          </Modal>

          {/* Choose layout Modal */}
          <Modal
            isOpen={chooseLayoutMd}
            toggle={this.chooseLayoutModal}
            size="lg"
            className={this.props.className}
            fade={false}
            modalClassName="modal_stretch animated fadeIn"
          >
            <ModalHeader className="m-0">
              <span className="modal-title f-s-14">Choose Layout</span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.chooseLayoutModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="p-5">
              <div className="modal-fluid">
                <FormGroup row>
                  <Col sm="12">
                    <div
                      className="p-3"
                      // width: "578px"
                      style={{ marginRight: "15px" }}
                    >
                      <Row>
                        <Col sm="2" title="Layout 1">
                          <Row>
                            <Col sm="12">
                              {/* <div style={layoutBox}></div> */}
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="2" title="Layout 2">
                          <Row>
                            <Col sm="6">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "130px",
                                  width: "55px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                            <Col sm="6">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "130px",
                                  width: "55px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="2" title="Layout 3">
                          <Row>
                            <Col sm="4">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "130px",
                                  width: "36.6px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                            <Col sm="4">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "130px",
                                  width: "36.6px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                            <Col sm="4">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "130px",
                                  width: "36.6px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="2" title="Layout 4">
                          <Row>
                            <Col sm="12">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "60px",
                                  width: "110px",
                                  display: "block",
                                  cursor: "pointer",
                                  marginBottom: "10px",
                                }}
                              ></div>
                            </Col>
                            <Col sm="12">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "60px",
                                  width: "110px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="2 " title="Layout 5">
                          <Row>
                            <Col sm="6">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "130px",
                                  width: "55px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                            <Col sm="6">
                              <Row>
                                <Col sm="12">
                                  <div
                                    style={{
                                      background: "#73818f91",
                                      height: "60px",
                                      width: "110px",
                                      display: "block",
                                      cursor: "pointer",
                                      marginBottom: "10px",
                                    }}
                                  ></div>
                                </Col>
                                <Col sm="12">
                                  <div
                                    style={{
                                      background: "#73818f91",
                                      height: "60px",
                                      width: "110px",
                                      display: "block",
                                      cursor: "pointer",
                                    }}
                                  ></div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="2 " title="Layout 6">
                          <Row>
                            <Col sm="6">
                              <div
                                style={{
                                  background: "#73818f91",
                                  height: "123px",
                                  width: "61.5px",
                                  display: "block",
                                  cursor: "pointer",
                                }}
                              ></div>
                            </Col>
                            <Col sm="6">
                              <Row>
                                <Col sm="12">
                                  <div
                                    style={{
                                      background: "#73818f91",
                                      height: "55.5px",
                                      width: "61.5px",
                                      display: "block",
                                      cursor: "pointer",
                                      marginBottom: "12px",
                                    }}
                                  ></div>
                                </Col>
                                <Col sm="12">
                                  <div
                                    style={{
                                      background: "#73818f91",
                                      height: "55.5px",
                                      width: "61.5px",
                                      display: "block",
                                      cursor: "pointer",
                                    }}
                                  ></div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </FormGroup>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  visits: state.consultations.visits,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

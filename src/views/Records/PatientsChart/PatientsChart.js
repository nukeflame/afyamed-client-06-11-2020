import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Input,
  FormGroup,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import $ from "jquery";
import { connect } from "react-redux";
import imageUrl from "../../../config/urls/imageUrl";
import defaultAvatar from "../../../assets/avatar/defAvatar.gif";
import {
  Dashboard,
  AddImage,
  BillingData,
  PharmacyData,
  TreatmentPlan,
  DrugPrescriptions,
  Consultation,
  Timeline,
  PatientHistory
} from "./Modules";
import {
  fetchPatientCharts,
  findPatientCharts,
  setCustomizeChange,
  getCurrentPatient
} from "../../../redux/actions/patientActions";
import {
  setCurrentPatient,
  delCurrentPatient,
  findPatient
} from "../../../redux/actions/patientActions";
import { AddDocument } from "./Modules/Consults";

class PatientsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
      activeTab: 1,
      activeModTab: 0,
      allergyMod: false,
      topActiveTab: "1",
      custoChartMd: false,
      addConsultationMod: false,
      dropdownOpen: false,
      patientChartsPerms: [],
      patientId: []
    };
  }

  toggleBox = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  customizeModal = tab => {
    const { custoChartMd } = this.state;
    if (tab) {
      this.setState({
        custoChartMd: !custoChartMd
      });
    }
  };

  toggleMiniBox = tab => {
    const { activeModTab } = this.state;
    if (activeModTab !== tab) {
      this.setState({
        activeModTab: tab
      });
    }
  };

  handleCustomizeChange = (e, Id) => {
    const { patientChartsPerms } = this.state;
    const { user } = this.props;
    const { checked } = e.target;
    //prevent duplicates
    if (checked) {
      patientChartsPerms.push(Id);
    } else {
      patientChartsPerms.splice(patientChartsPerms.indexOf(Id), 1);
    }
    this.setState({ patientChartsPerms });
    const custData = {
      checked,
      patientChartsPerms,
      userId: user.id
    };
    this.props.setCustomizeChange(custData);
  };

  toggleDropDown = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen
    });
  };

  loaderWave = () => (
    <div
      className="animated fadeIn pt-1 text-center d-flex justify-content-center"
      style={{ margin: "40px auto" }}
    >
      <div className="sk-wave  m-0 ">
        <div className="sk-rect sk-rect1" />
        &nbsp;
        <div className="sk-rect sk-rect2" />
        &nbsp;
        <div className="sk-rect sk-rect3" />
        &nbsp;
        <div className="sk-rect sk-rect4" />
        &nbsp;
        <div className="sk-rect sk-rect5" />
      </div>
    </div>
  );

  componentDidMount() {
    const { user } = this.props;
    $("[aria-label='breadcrumb']").addClass("hidden");
    // fetch patients chart
    this.props.fetchPatientCharts();
    // find patientCharts
    this.props.findPatientCharts(user.id).then(() => {
      const { userChartPerms } = this.props;
      const { patientChartsPerms } = this.state;
      for (let i = 0; i < userChartPerms.length; i++) {
        const s = userChartPerms[i];
        patientChartsPerms.push(s.id);
      }
    });
    // fetch consultations
    const cp = JSON.parse(localStorage.getItem("cp"));
    if (cp !== null) {
      this.props.setCurrentPatient(cp);
      this.props.findPatient(cp.id);
      // this.props.findConsultations(cpStorage.id);
    } else {
      this.props.delCurrentPatient();
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.cpStorage !== null) {
  //     this.props.findConsultations(prevProps.cpStorage.id);
  //   }
  // }

  componentWillUnmount() {
    $("[aria-label='breadcrumb']").removeClass("hidden");
  }

  render() {
    const {
      activeTab,
      custoChartMd,
      dropdownOpen,
      patientChartsPerms
    } = this.state;

    const {
      searchModal,
      patientCharts,
      userChartPerms,
      cpStorage,
      currentPatient
    } = this.props;

    return (
      <div className="animated fadeIn">
        {cpStorage !== null ? (
          <React.Fragment>
            <div className="mt-4">
              <div className="top-breadcumb navbar">
                {/* Patient details */}
                <Nav
                  className="d-md-down-none animated fadeIn"
                  id="patientProfile"
                  navbar
                >
                  <NavItem className="ml-3 px-1">
                    <NavLink to="/site/patient" className="nav-link">
                      <div className="profile-top">
                        {cpStorage.avatar !== null ? (
                          <img
                            src={imageUrl + cpStorage.avatar}
                            className="img-avatar"
                            alt=""
                            width="32"
                            height="32"
                          />
                        ) : (
                          <img
                            src={defaultAvatar}
                            className="img-avatar"
                            alt=""
                            width="32"
                            height="32"
                          />
                        )}
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem className="bold pr-2">
                    <span className="f-s-14">{cpStorage.fullname}</span>
                  </NavItem>
                  <NavItem className="text-muted">{cpStorage.gender},</NavItem>
                  <NavItem className="text-muted">{cpStorage.age}yrs</NavItem>
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
            </div>
            {/* section layout */}
            <Row>
              <Col sm="2">
                <ListGroup id="list-tab" role="tablist" className="mini-side">
                  {userChartPerms && userChartPerms.length > 0
                    ? userChartPerms.map(c => (
                        <React.Fragment key={c.id}>
                          <ListGroupItem
                            onClick={() => this.toggleBox(c.id)}
                            action
                            active={activeTab === c.id}
                          >
                            {c.name}
                          </ListGroupItem>
                          {c.divider ? <span className="hr-line" /> : null}
                        </React.Fragment>
                      ))
                    : this.loaderWave()}

                  {userChartPerms && userChartPerms.length > 0 ? (
                    <ListGroupItem
                      onClick={() => this.customizeModal(17)}
                      action
                      active={activeTab === 17}
                    >
                      Customize Chart
                    </ListGroupItem>
                  ) : null}
                </ListGroup>
              </Col>
              <Col sm="10">
                <TabContent className="tab-box" activeTab={activeTab}>
                  <TabPane tabId={1} className="animated fadeIn">
                    <Dashboard {...this.props} cp={currentPatient} />
                  </TabPane>
                  <TabPane tabId={2} className="animated fadeIn">
                    <PatientHistory {...this.props} />
                  </TabPane>
                  <TabPane tabId={3} className="animated fadeIn">
                    <Timeline />
                  </TabPane>
                  <TabPane tabId={4} className="animated fadeIn">
                    4
                  </TabPane>
                  <TabPane tabId={5} className="animated fadeIn">
                    5
                    <Row>
                      <Col sm="12">
                        <Card className="box">
                          <CardHeader className="box-header">
                            <div>
                              <ul className="header-left">
                                <li>
                                  <button
                                    className="btn-box"
                                    onClick={this.toggleConsModal}
                                  >
                                    <i className="fa fa-plus c-primary pr-1" />
                                    <span className="mini-title">
                                      Add Consultation
                                    </span>
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
                              </ul>
                              <ul className="header-right">
                                <li>
                                  <Input
                                    placeholder="Type the medic"
                                    className="header-control"
                                  />
                                </li>
                                <li>
                                  <Input
                                    placeholder="Type the patient"
                                    className="header-control"
                                  />
                                </li>
                                <li>
                                  <select className="form-control header-control pt-1">
                                    <option>All Time</option>
                                    <option>1</option>
                                  </select>
                                </li>
                              </ul>
                            </div>
                          </CardHeader>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={6} className="animated fadeIn">
                    <Consultation {...this.props} cp={currentPatient} />
                  </TabPane>
                  <TabPane tabId={7} className="animated fadeIn">
                    <AddDocument {...this.props} />
                  </TabPane>
                  <TabPane tabId={8} className="animated fadeIn">
                    <Row>
                      <Col sm="12">
                        <Card className="box">
                          <CardHeader className="box-header">
                            <div>
                              <ul className="header-left">
                                <li>
                                  <button className="btn-box">
                                    <i className="fa fa-plus c-primary pr-1" />
                                    <span className="mini-title">
                                      Add Patient Document
                                    </span>
                                  </button>
                                </li>
                                <li>
                                  <button className="btn-box">
                                    <i className="fa fa-plus c-primary pr-1" />
                                    <span className="mini-title">
                                      Capture Pdf
                                    </span>
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
                              </ul>
                            </div>
                          </CardHeader>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={9} className="animated fadeIn">
                    <AddImage />
                  </TabPane>
                  <TabPane tabId={10} className="animated fadeIn">
                    <Row>
                      <Col sm="12">
                        <Card className="box">
                          <CardHeader className="box-header">
                            <div>
                              <ul className="header-left">
                                <li>
                                  <button className="btn-box">
                                    <i className="fa fa-plus c-primary pr-1" />
                                    <span className="mini-title">
                                      New Lab Request
                                    </span>
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
                              </ul>
                              <ul className="header-right">
                                <li>
                                  <Input
                                    placeholder="Type the medic"
                                    className="header-control"
                                  />
                                </li>
                                <li>
                                  <Input
                                    placeholder="Type the patient"
                                    className="header-control"
                                  />
                                </li>
                                <li>
                                  <select className="form-control header-control pt-1">
                                    <option>All Time</option>
                                    <option>1</option>
                                  </select>
                                </li>
                              </ul>
                            </div>
                          </CardHeader>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={11} className="animated fadeIn">
                    <Row>
                      <Col sm="12">
                        <Card className="box">
                          <CardHeader className="box-header">
                            <div>
                              <ul className="header-left">
                                <li>
                                  <button className="btn-box">
                                    <i className="fa fa-plus c-primary pr-1" />
                                    <span className="mini-title">
                                      New Lab Request
                                    </span>
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
                              </ul>
                              <ul className="header-right">
                                <li>
                                  <Input
                                    placeholder="Type the medic"
                                    className="header-control"
                                  />
                                </li>
                                <li>
                                  <Input
                                    placeholder="Type the patient"
                                    className="header-control"
                                  />
                                </li>
                                <li>
                                  <select className="form-control header-control pt-1">
                                    <option>All Time</option>
                                    <option>1</option>
                                  </select>
                                </li>
                              </ul>
                            </div>
                          </CardHeader>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={12} className="animated fadeIn">
                    <BillingData {...this.props} />
                  </TabPane>
                  <TabPane tabId={13} className="animated fadeIn">
                    <DrugPrescriptions />
                  </TabPane>
                  <TabPane tabId={14} className="animated fadeIn">
                    <TreatmentPlan />
                  </TabPane>
                  <TabPane tabId={15} className="animated fadeIn">
                    {/* <BillingData {...this.props} /> */}
                  </TabPane>
                  <TabPane tabId={16} className="animated fadeIn">
                    <PharmacyData />
                  </TabPane>
                </TabContent>
                {/* Customize Chart Modal */}
                <Modal
                  isOpen={custoChartMd}
                  toggle={this.customizeModal}
                  className={"top-10 " + this.props.className}
                >
                  <ModalHeader className="m-0">
                    <span className="modal-title f-s-14">
                      <i className="fa fa-edit pr-1" />
                      Customize
                    </span>
                    <span>
                      <Button
                        color="link"
                        className="modal-close-x"
                        type="button"
                        onClick={this.customizeModal}
                      >
                        <i className="fa fa-times text-white" />
                      </Button>
                    </span>
                  </ModalHeader>
                  <ModalBody className="bg2">
                    <h4 className="f-s-16">Menus</h4>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col sm="12">
                            {patientCharts && patientCharts.length > 0
                              ? patientCharts.map(c => (
                                  <FormGroup check key={c.id}>
                                    <div className="custom-control custom-checkbox pl-0">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={c.slug}
                                        name={c.slug}
                                        checked={
                                          patientChartsPerms.includes(c.id)
                                            ? true
                                            : false
                                        }
                                        onChange={e =>
                                          this.handleCustomizeChange(e, c.id)
                                        }
                                      />
                                      <label
                                        className="custom-control-label bold"
                                        htmlFor={c.slug}
                                      >
                                        {c.name}
                                      </label>
                                    </div>
                                  </FormGroup>
                                ))
                              : null}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </ModalBody>
                </Modal>
              </Col>
            </Row>
          </React.Fragment>
        ) : (
          <Row>
            <Col sm="12">
              <div className="empty-view">
                <div className="empty-center">
                  <div className="f-s-14">
                    This view is empty because there is no patient selected in
                    the chart
                  </div>
                  <Button color="link" onClick={e => searchModal(e)}>
                    Search Patient
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  currentPatient: state.patients.currentPatient,
  patientCharts: state.patients.patientCharts,
  userChartPerms: state.patients.userChartPerms,
  cpStorage: state.patients.cpStorage
});

const mapDispatchToProps = {
  findPatient,
  fetchPatientCharts,
  findPatientCharts,
  setCustomizeChange,
  getCurrentPatient,
  setCurrentPatient,
  delCurrentPatient
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsChart);

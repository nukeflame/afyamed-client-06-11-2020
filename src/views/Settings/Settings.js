import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Collapse,
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
  Label
} from "reactstrap";
import { connect } from "react-redux";
import { showGroups } from "../../redux/actions/groupActions";
import {
  Groups,
  Users,
  Permissions,
  Medics,
  Assistants,
  Branches,
  DiagnosesCodes
} from "./Modules";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      activePill: 0,
      activeModTab: 0,
      topActiveTab: "1",
      collapse: false,
      other: [false, false],
      system: [false, false],
      templates: [false, false],
      categories: [false, false],
      security: [false, false],
      staff: [true, false],
      addConstModal: false,
      activeNav: new Array(4).fill("1")
    };
  }

  notifyUser = e => {
    e.preventDefault();
  };

  toggleStaff = tab => {
    const { staff } = this.state;
    const prevState = staff;
    const state = prevState.map((x, index) => (tab === index ? !x : false));
    this.setState({
      staff: state
    });
  };

  toggleSecurity = tab => {
    const { security } = this.state;
    const prevState = security;
    const state = prevState.map((x, index) => (tab === index ? !x : false));
    this.setState({
      security: state
    });
  };

  toggleCategories = (tab, tabLink) => {
    const { categories } = this.state;
    const prevState = categories;
    const state = prevState.map((x, index) => (tab === index ? !x : false));
    this.setState({
      categories: state
    });
  };

  toggleTemplates = tab => {
    const { templates } = this.state;
    const prevState = templates;
    const state = prevState.map((x, index) => (tab === index ? !x : false));
    this.setState({
      templates: state
    });
  };

  toggleSystem = tab => {
    const { system } = this.state;
    const prevState = system;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      system: state
    });
  };

  toggleOther = tab => {
    const { other } = this.state;
    const prevState = other;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      other: state
    });
  };

  toggleBox = tab => {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
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

  toggleTopNav = tab => {
    const { topActiveTab } = this.state;
    if (topActiveTab !== tab) {
      this.setState({
        topActiveTab: tab
      });
    }
  };

  toggleConsModal = () => {
    const { addConstModal } = this.state;
    this.setState({
      addConstModal: !addConstModal
    });
  };

  componentDidMount() {
    const { user } = this.props;
    if (user !== null) {
      const hospId = user.hospId;
      this.props.showGroups(hospId);
    }
  }

  render() {
    const {
      staff,
      other,
      security,
      system,
      templates,
      activeTab,
      categories,
      activeModTab,
      addConstModal
    } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <div className="">
                <ListGroupItem
                  onClick={() => this.toggleBox(0)}
                  action
                  active={activeTab === 0}
                >
                  <span>General</span>
                </ListGroupItem>
              </div>
              <div id="collapseAccd" data-children="item">
                <div className="item">
                  <Button
                    className="item-c-btn btn-block"
                    color="link"
                    onClick={() => this.toggleStaff(0)}
                    aria-expanded={staff[0]}
                    aria-controls="staffAccd"
                  >
                    <span className="pr-1 set--title">
                      <i
                        className={
                          staff[0] ? "fa fa-caret-down" : "fa fa-caret-right"
                        }
                      />
                    </span>
                    <span className="set--title">Staff </span>
                  </Button>
                  <Collapse
                    isOpen={staff[0]}
                    data-parent="#collapseAccd"
                    id="staffAccd"
                  >
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggleBox(1)}
                        action
                        active={activeTab === 1}
                      >
                        <span className="pl-3">Medics</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(2)}
                        action
                        active={activeTab === 2}
                      >
                        <span className="pl-3">Assistants</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(3)}
                        action
                        active={activeTab === 3}
                      >
                        <span className="pl-3">Users</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(4)}
                        action
                        active={activeTab === 4}
                      >
                        <span className="pl-3">Groups</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(5)}
                        action
                        active={activeTab === 5}
                      >
                        <span className="pl-3">Work Hours</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(6)}
                        action
                        active={activeTab === 6}
                      >
                        <span className="pl-3">My Branches</span>
                      </ListGroupItem>
                    </div>
                  </Collapse>
                </div>
                <div className="item">
                  <Button
                    className="item-c-btn btn-block"
                    color="link"
                    onClick={() => this.toggleSecurity(0)}
                    aria-expanded={security[0]}
                    aria-controls="securityAccd"
                  >
                    <span className="pr-1 set--title">
                      <i
                        className={
                          security[0] ? "fa fa-caret-down" : "fa fa-caret-right"
                        }
                      />
                    </span>
                    <span className="set--title">Security </span>
                  </Button>
                  <Collapse
                    isOpen={security[0]}
                    data-parent="#collapseAccd"
                    id="securityAccd"
                  >
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggleBox(7)}
                        action
                        active={activeTab === 7}
                      >
                        <span className="pl-3">Permissions</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(8)}
                        action
                        active={activeTab === 8}
                      >
                        <span className="pl-3">More Permissions</span>
                      </ListGroupItem>
                    </div>
                  </Collapse>
                </div>
                <div className="item">
                  <Button
                    className="item-c-btn btn-block"
                    color="link"
                    onClick={() => this.toggleCategories(0)}
                    aria-expanded={categories[0]}
                    aria-controls="categoriesAccd"
                  >
                    <span className="pr-1 set--title">
                      <i
                        className={
                          categories[0]
                            ? "fa fa-caret-down"
                            : "fa fa-caret-right"
                        }
                      />
                    </span>
                    <span className="set--title">Categories </span>
                  </Button>
                  <Collapse
                    isOpen={categories[0]}
                    data-parent="#collapseAccd"
                    id="categoriesAccd"
                  >
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggleBox(9)}
                        action
                        active={activeTab === 9}
                      >
                        <span className="pl-3">Diagnoses Codes</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(10)}
                        action
                        active={activeTab === 10}
                      >
                        <span className="pl-3">Treatment Codes</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(11)}
                        action
                        active={activeTab === 11}
                      >
                        <span className="pl-3">Drug Categories</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(12)}
                        action
                        active={activeTab === 12}
                      >
                        <span className="pl-3">Tests Setup</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(13)}
                        action
                        active={activeTab === 13}
                      >
                        <span className="pl-3">External Medics</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(14)}
                        action
                        active={activeTab === 14}
                      >
                        <span className="pl-3">Patient Refferers</span>
                      </ListGroupItem>
                    </div>
                  </Collapse>
                </div>
                <div className="item">
                  <Button
                    className="item-c-btn btn-block"
                    color="link"
                    onClick={() => this.toggleTemplates(0)}
                    aria-expanded={templates[0]}
                    aria-controls="categoriesAccd"
                  >
                    <span className="pr-1 set--title">
                      <i
                        className={
                          templates[0]
                            ? "fa fa-caret-down"
                            : "fa fa-caret-right"
                        }
                      />
                    </span>
                    <span className="set--title">Templates </span>
                  </Button>
                  <Collapse
                    isOpen={templates[0]}
                    data-parent="#collapseAccd"
                    id="categoriesAccd"
                  >
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggleBox(15)}
                        action
                        active={activeTab === 15}
                      >
                        <span className="pl-3">Treatment Plan Templates</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(16)}
                        action
                        active={activeTab === 16}
                      >
                        <span className="pl-3">Form Templates</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(17)}
                        action
                        active={activeTab === 17}
                      >
                        <span className="pl-3">Report Templates</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(18)}
                        action
                        active={activeTab === 18}
                      >
                        <span className="pl-3">Tests Setup</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(19)}
                        action
                        active={activeTab === 19}
                      >
                        <span className="pl-3">Questionnaire Templates</span>
                      </ListGroupItem>
                    </div>
                  </Collapse>
                </div>
                <div className="item">
                  <Button
                    className="item-c-btn btn-block"
                    color="link"
                    onClick={() => this.toggleSystem(0)}
                    aria-expanded={system[0]}
                    aria-controls="securityAccd"
                  >
                    <span className="pr-1 set--title">
                      <i
                        className={
                          system[0] ? "fa fa-caret-down" : "fa fa-caret-right"
                        }
                      />
                    </span>
                    <span className="set--title">System </span>
                  </Button>
                  <Collapse
                    isOpen={system[0]}
                    data-parent="#collapseAccd"
                    id="securityAccd"
                  >
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggleBox(20)}
                        action
                        active={activeTab === 20}
                      >
                        <span className="pl-3">Channel Setup</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(21)}
                        action
                        active={activeTab === 21}
                      >
                        <span className="pl-3">Media Devices</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(22)}
                        action
                        active={activeTab === 22}
                      >
                        <span className="pl-3">Custom Text</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(23)}
                        action
                        active={activeTab === 23}
                      >
                        <span className="pl-3">Plugins</span>
                      </ListGroupItem>
                    </div>
                  </Collapse>
                </div>
                <div className="item">
                  <Button
                    className="item-c-btn btn-block"
                    color="link"
                    onClick={() => this.toggleOther(0)}
                    aria-expanded={other[0]}
                    aria-controls="securityAccd"
                  >
                    <span className="pr-1 set--title">
                      <i
                        className={
                          other[0] ? "fa fa-caret-down" : "fa fa-caret-right"
                        }
                      />
                    </span>
                    <span className="set--title">Other </span>
                  </Button>
                  <Collapse
                    isOpen={other[0]}
                    data-parent="#collapseAccd"
                    id="securityAccd"
                  >
                    <div className="pb-1">
                      <ListGroupItem
                        onClick={() => this.toggleBox(24)}
                        action
                        active={activeTab === 24}
                      >
                        <span className="pl-3">Currencies</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(25)}
                        action
                        active={activeTab === 25}
                      >
                        <span className="pl-3">Exchange Rates</span>
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggleBox(26)}
                        action
                        active={activeTab === 26}
                      >
                        <span className="pl-3">Banks</span>
                      </ListGroupItem>
                    </div>
                  </Collapse>
                </div>
              </div>
            </ListGroup>
          </Col>
          <Col sm="10">
            <TabContent className="tab-box" activeTab={activeTab}>
              <TabPane tabId={0} className="animated fadeIn">
                {/* General */}
                <Row>
                  <Col sm="12">
                    <Card className="m-b-3" style={{ height: "530px" }}>
                      <CardBody>
                        <div className="mb-2">
                          <h6 className="card-title f-w-600 mb-1">General</h6>
                          <Row>
                            <Col sm="3">
                              <FormGroup>
                                <Label htmlFor="medics" className="f-s-12 mb-0">
                                  Short Date Format
                                </Label>
                                <Input
                                  type="select"
                                  id="medics"
                                  bsSize="sm"
                                  className="form-control-xs"
                                >
                                  <option value="0">20-May-2019</option>
                                  <option value="1">Option #1</option>
                                  <option value="2">Option #2</option>
                                  <option value="3">Option #3</option>
                                  <option value="4">Option #4</option>
                                  <option value="5">Option #5</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col sm="3">
                              <FormGroup>
                                <Label htmlFor="medics" className="f-s-12 mb-0">
                                  Decimal Digits
                                </Label>
                                <Input
                                  type="select"
                                  id="medics"
                                  bsSize="sm"
                                  className="form-control-xs"
                                >
                                  <option value="0">20-May-2019</option>
                                  <option value="1">Option #1</option>
                                  <option value="2">Option #2</option>
                                  <option value="3">Option #3</option>
                                  <option value="4">Option #4</option>
                                  <option value="5">Option #5</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col sm="3">
                              <FormGroup>
                                <Label htmlFor="medics" className="f-s-12 mb-0">
                                  Concurrency Violation
                                </Label>
                                <Input
                                  type="select"
                                  id="medics"
                                  bsSize="sm"
                                  className="form-control-xs"
                                >
                                  <option value="0">Ask User</option>
                                  <option value="1">Option #1</option>
                                  <option value="2">Option #2</option>
                                  <option value="3">Option #3</option>
                                  <option value="4">Option #4</option>
                                  <option value="5">Option #5</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <div className="mb-2">
                          <Row>
                            <Col sm="3">
                              <FormGroup>
                                <Label htmlFor="medics" className="f-s-12 mb-0">
                                  Name Display Format
                                </Label>
                                <Input
                                  type="select"
                                  id="medics"
                                  bsSize="sm"
                                  className="form-control-xs"
                                >
                                  <option value="0">First. Last</option>
                                  <option value="1">Option #1</option>
                                  <option value="2">Option #2</option>
                                  <option value="3">Option #3</option>
                                  <option value="4">Option #4</option>
                                  <option value="5">Option #5</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col sm="3">
                              <FormGroup>
                                <Label htmlFor="medics" className="f-s-12 mb-0">
                                  Patient No. Format
                                </Label>
                                <Input
                                  type="select"
                                  id="medics"
                                  bsSize="sm"
                                  className="form-control-xs"
                                >
                                  <option value="0">Patient No.</option>
                                  <option value="1">Option #1</option>
                                  <option value="2">Option #2</option>
                                  <option value="3">Option #3</option>
                                  <option value="4">Option #4</option>
                                  <option value="5">Option #5</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col sm="3">
                              <FormGroup>
                                <Label htmlFor="medics" className="f-s-12 mb-0">
                                  Patient Barcode Format
                                </Label>
                                <Input
                                  type="select"
                                  id="medics"
                                  bsSize="sm"
                                  className="form-control-xs"
                                >
                                  <option value="0">Patient No.</option>
                                  <option value="1">Option #1</option>
                                  <option value="2">Option #2</option>
                                  <option value="3">Option #3</option>
                                  <option value="4">Option #4</option>
                                  <option value="5">Option #5</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <div className="mb-0">
                          <h6 className="card-title f-w-600 mb-1">
                            Autocomplete
                          </h6>
                          <Row>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoTitles"
                                    name="autoTitles"
                                    // checked={autoTitles ? true : false}
                                    // onChange={e => this.autoTitlesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoTitles"
                                  >
                                    Autocomplete consultation titles with
                                    previously entered ones
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoDiagnoses"
                                    name="autoDiagnoses"
                                    // onChange={e => this.autoDiagnosesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoDiagnoses"
                                  >
                                    Autocomplete diagnoses with previously
                                    entered ones
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoTreat"
                                    name="autoTreat"
                                    // checked={autoTreat ? true : false}
                                    // onChange={e => this.autoTreatCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoTreat"
                                  >
                                    Autocomplete treatments with previously
                                    entered ones
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoRecomend"
                                    name="autoRecomend"
                                    // checked={autoRecomend ? true : false}
                                    // onChange={e => this.autoRecomendCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoRecomend"
                                  >
                                    Autocomplete recomendations like treatments
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <div className="mt-0 mb-2">
                          <Row>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoTitles"
                                    name="autoTitles"
                                    // checked={autoTitles ? true : false}
                                    // onChange={e => this.autoTitlesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoTitles"
                                  >
                                    Enable Activity Logs
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoDiagnoses"
                                    name="autoDiagnoses"
                                    // checked={autoDiagnoses ? true : false}
                                    // onChange={e => this.autoDiagnosesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoDiagnoses"
                                  >
                                    Automaticaly compute drug refils
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoTreat"
                                    name="autoTreat"
                                    // onChange={e => this.autoTreatCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoTreat"
                                  >
                                    Automaticaly generate Consultation Reg No.
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoTitles"
                                    name="autoTitles"
                                    // checked={autoTitles ? true : false}
                                    // onChange={e => this.autoTitlesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoTitles"
                                  >
                                    Automaticaly set Prescription note from Drug
                                    item description
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <div className="mb-2">
                          <h6 className="card-title f-w-600 mb-1">Billable</h6>
                          <Row>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoDiagnoses"
                                    name="autoDiagnoses"
                                    // checked={autoDiagnoses ? true : false}
                                    // onChange={e => this.autoDiagnosesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoDiagnoses"
                                  >
                                    Allow only existing Items in Billable Items
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoDiagnoses"
                                    name="autoDiagnoses"
                                    // checked={autoDiagnoses ? true : false}
                                    // onChange={e => this.autoDiagnosesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoDiagnoses"
                                  >
                                    Disable the printing of not paid invoices
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <div className="mb-2">
                          <h6 className="card-title f-w-600 mb-1">Medical</h6>
                          <Row>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoDiagnoses"
                                    name="autoDiagnoses"
                                    // checked={autoDiagnoses ? true : false}
                                    // onChange={e => this.autoDiagnosesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoDiagnoses"
                                  >
                                    Allow only existing Items in Billable Items
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <FormGroup check inline>
                                <div className="custom-control custom-checkbox pr-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="autoDiagnoses"
                                    name="autoDiagnoses"
                                    // checked={autoDiagnoses ? true : false}
                                    // onChange={e => this.autoDiagnosesCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label bold"
                                    htmlFor="autoDiagnoses"
                                  >
                                    Disable the printing of not paid invoices
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={1} className="animated fadeIn">
                <Medics {...this.props} />
              </TabPane>
              <TabPane tabId={2} className="animated fadeIn">
                <Assistants {...this.props} />
              </TabPane>
              <TabPane tabId={3} className="animated fadeIn">
                <Users {...this.props} />
              </TabPane>
              <TabPane tabId={4} className="animated fadeIn">
                <Groups {...this.props} />
              </TabPane>
              <TabPane tabId={5} className="animated fadeIn">
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
                                <option>Today</option>
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
                <Branches {...this.props} />
              </TabPane>
              <TabPane tabId={7} className="animated fadeIn">
                <Permissions {...this.props} />
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
                                <span className="mini-title">Add Image</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Capture Image
                                </span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <span>Capture Multiple</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <span>Compare</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-print  pr-1" />
                                <span>Print</span>
                              </button>
                            </li>
                          </ul>
                          <ul className="header-right">
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Today Only</option>
                                <option>Show All</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={9} className="animated fadeIn">
                <DiagnosesCodes {...this.props} />
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
              <TabPane tabId={13} className="animated fadeIn">
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
              <TabPane tabId={14} className="animated fadeIn">
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
              <TabPane tabId={15} className="animated fadeIn">
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
              <TabPane tabId={16} className="animated fadeIn">
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
            </TabContent>
            {/* Modal */}
            <Modal
              isOpen={addConstModal}
              toggle={this.toggleConsModal}
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader className="m-0">
                <span className="text-muted f-s-14">
                  <i className="fa fa-edit" /> Consultation - Kennedy Peters
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
                            onClick={this.toggleConsModal}
                          >
                            <i className="fa fa-save f-s-11 c-primary pr-1" />
                            <span className="mini-title">Save and Close</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn-box"
                            onClick={this.toggleConsModal}
                          >
                            <span>Close</span>
                          </button>
                        </li>
                        <li>
                          <button className="btn-box">
                            <span>Layout</span>
                          </button>
                        </li>
                        <li>
                          <button className="btn-box">
                            <i className="fa fa-print  pr-1" />
                            <span>Print</span>
                          </button>
                        </li>
                        <li>
                          <button className="btn-box">
                            <span>More...</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </CardHeader>
                </Card>
                <div className="modal-fluid">
                  <Row>
                    <Col sm="4" className="sidel-bg">
                      <div>
                        <div className="form-group">
                          <label htmlFor="allergyDate">&nbsp;Date</label>
                          <select
                            id="allergyDate"
                            className="form-control form-control-xs p-t-5"
                          >
                            <option>14-Feb-2019</option>
                          </select>
                        </div>
                        <div className="form-group  ">
                          <label htmlFor="medic">&nbsp;Medic</label>
                          <select
                            id="medic"
                            className="form-control form-control-xs p-t-5"
                          >
                            <option>--none--</option>
                          </select>
                        </div>
                        <div className="form-group  ">
                          <label htmlFor="location">&nbsp;Location</label>
                          <Input
                            id="location"
                            className="form-control form-control-xs"
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <ListGroup
                          id="list-tab"
                          role="tablist"
                          className="mini-side"
                        >
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(0)}
                            action
                            active={activeModTab === 0}
                          >
                            <span>Content</span>
                          </ListGroupItem>
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(1)}
                            action
                            active={activeModTab === 1}
                          >
                            Review of Systems
                          </ListGroupItem>
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(2)}
                            action
                            active={activeModTab === 2}
                          >
                            Vitals
                          </ListGroupItem>
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(3)}
                            action
                            active={activeModTab === 3}
                          >
                            Physical Exam
                          </ListGroupItem>
                          <span className="hr-line" />
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(4)}
                            action
                            active={activeModTab === 4}
                          >
                            Lab Requests
                          </ListGroupItem>
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(5)}
                            action
                            active={activeModTab === 5}
                          >
                            Image Requests
                          </ListGroupItem>
                          <span className="hr-line" />
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(6)}
                            action
                            active={activeModTab === 6}
                          >
                            Documents
                          </ListGroupItem>
                          <span className="hr-line" />
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(7)}
                            action
                            active={activeModTab === 7}
                          >
                            Billing
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                      <div
                        className="p-2 f-s-11"
                        style={{ marginTop: "4.5rem" }}
                      >
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="medication"
                            name="medication"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="medication"
                          >
                            Bill Medcation
                          </Label>
                        </FormGroup>
                      </div>
                    </Col>
                    <Col sm="8" className="sider-bg">
                      <TabContent className="tab-box" activeTab={activeModTab}>
                        <TabPane tabId={0} className="animated fadeIn">
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="tile" className="pt-1">
                                Title
                              </Label>
                            </Col>
                            <Col sm="10">
                              <FormGroup>
                                <Input
                                  id="tile"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="tile" className="pt-1">
                                Tags
                              </Label>
                            </Col>
                            <Col sm="6">
                              <FormGroup>
                                <Input
                                  id="tile"
                                  className="form-control form-control-xs f-s-10"
                                  placeholder="Type the tag and press Enter"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="condition" className="pt-1">
                                Condition
                              </Label>
                            </Col>
                            <Col sm="10">
                              <FormGroup>
                                <select
                                  id="condition"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option>E</option>
                                </select>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="complaint" className="pt-1">
                                Complaint
                              </Label>
                            </Col>
                            <Col sm="8">
                              <FormGroup>
                                <Input
                                  id="complaint"
                                  className="form-control form-control-xs f-s-10"
                                  placeholder="Type the tag and press Enter"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="complaint" className="pt-1">
                                Clinical Findings
                              </Label>
                            </Col>
                            <Col sm="8">
                              <FormGroup>
                                <Input
                                  id="complaint"
                                  className="form-control form-control-xs f-s-10"
                                  placeholder="Type the clinical finding and press Enter"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="complaint" className="pt-1">
                                Paraclinical Findings
                              </Label>
                            </Col>
                            <Col sm="8">
                              <FormGroup>
                                <Input
                                  id="complaint"
                                  className="form-control form-control-xs f-s-10"
                                  placeholder="Type the paraclinical finding and press Enter"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="diagnosis" className="pt-1">
                                Diagnoses
                              </Label>
                            </Col>
                            <Col sm="8">
                              <FormGroup>
                                <Input
                                  id="diagnosis"
                                  className="form-control form-control-xs f-s-10"
                                  placeholder="Type the diagnosis and press Enter"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="treatments" className="pt-1">
                                Treatments
                              </Label>
                            </Col>
                            <Col sm="8">
                              <FormGroup>
                                <Input
                                  id="treatments"
                                  className="form-control form-control-xs f-s-10"
                                  placeholder="Type the treatment and press Enter"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="2">
                              <Label htmlFor="medication" className="pt-1">
                                Medcation
                              </Label>
                            </Col>
                            <Col sm="10">
                              <Row>
                                <Col sm="8">
                                  <FormGroup>
                                    <Input
                                      id="medication"
                                      className="form-control form-control-xs f-s-10"
                                      placeholder="Drug name from inventory"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col sm="4">
                                  <Row>
                                    <Col sm="4">
                                      <Label
                                        htmlFor="refils"
                                        className="pt-1 m-l-21"
                                      >
                                        Refils
                                      </Label>
                                    </Col>
                                    <Col sm="8">
                                      <FormGroup>
                                        <Input
                                          id="refils"
                                          value="1"
                                          style={{
                                            marginLeft: "-30px"
                                          }}
                                          className="form-control form-control-xs f-s-10"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <Row>
                                <Col sm="8">
                                  <Row>
                                    <Col sm="4">
                                      <FormGroup className="m-r-24">
                                        <Input
                                          id="medication"
                                          className="form-control form-control-xs f-s-10"
                                          placeholder="Dosage"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                      <FormGroup className="m-r-24">
                                        <Input
                                          id="medication"
                                          className="form-control form-control-xs f-s-10"
                                          placeholder="Application"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                      <FormGroup>
                                        <Input
                                          id="medication"
                                          className="form-control form-control-xs f-s-10"
                                          placeholder="Frequency"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="4">
                                  <Row>
                                    <Col sm="4">
                                      <FormGroup>
                                        <Input
                                          style={{
                                            width: "63px"
                                          }}
                                          id="medication"
                                          className="form-control form-control-xs f-s-10 m-l-20"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col sm="8">
                                      <FormGroup>
                                        <select
                                          id="days"
                                          className="form-control form-control-xs f-s-10"
                                        >
                                          <option>days</option>
                                          <option>weeks</option>
                                          <option>months</option>
                                          <option>years</option>
                                        </select>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>

                              <Row>
                                <Col sm="12">
                                  <FormGroup>
                                    <Input
                                      id="notes"
                                      className="form-control form-control-xs f-s-10"
                                      placeholder="Notes"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <Col sm="2">
                              <Label htmlFor="materials" className="pt-1">
                                Materials
                              </Label>
                            </Col>
                            <Col sm="10">
                              <FormGroup>
                                <Input
                                  id="materials"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col sm="2">
                              <Label htmlFor="surgeries" className="pt-1">
                                Surgeries
                              </Label>
                            </Col>
                            <Col sm="10">
                              <FormGroup>
                                <Input
                                  id="surgeries"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col sm="2">
                              <Label htmlFor="recomendations" className="pt-1">
                                Recomend
                              </Label>
                            </Col>
                            <Col sm="10">
                              <FormGroup>
                                <Input
                                  id="recomendations"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm="12">
                              <FormGroup>
                                <div>
                                  <Label htmlFor="details" className="p-t-5">
                                    Details
                                  </Label>
                                  <span className="float-right">
                                    <Button color="link" className="f-s-11">
                                      Insert Questionaire
                                    </Button>
                                  </span>
                                </div>

                                <textarea
                                  id="details"
                                  className="form-control form-control-xs"
                                  style={{ height: "71px", marginTop: "-5px" }}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId={1} className="animated fadeIn">
                          <div>
                            <h6 className="f-s-13 f-w-600">
                              Review of Systems
                            </h6>
                          </div>
                          <Row>
                            <Col sm="6">
                              <h6 className="f-s-13 f-w-600">General</h6>
                              <FormGroup>
                                <Label htmlFor="fatigue" className="mb-0">
                                  Fatigue
                                </Label>
                                <select
                                  id="fatigue"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="fevers" className="mb-0">
                                  Fevers
                                </Label>
                                <select
                                  id="fevers"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="headache" className="mb-0">
                                  Headache
                                </Label>
                                <select
                                  id="headache"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="wloss" className="mb-0">
                                  Weight Loss
                                </Label>
                                <select
                                  id="wloss"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="other1" className="mb-0">
                                  Other
                                </Label>
                                <Input
                                  id="other1"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <h6 className="f-s-13 f-w-600">Cardiovascular</h6>
                              <FormGroup>
                                <Label htmlFor="cpain" className="mb-0">
                                  Chest pain
                                </Label>
                                <select
                                  id="cpain"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="dbreath" className="mb-0">
                                  Difficult Breathing
                                </Label>
                                <select
                                  id="dbreath"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="palp" className="mb-0">
                                  Palpitations
                                </Label>
                                <select
                                  id="palp"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="swelling" className="mb-0">
                                  Swelling
                                </Label>
                                <select
                                  id="swelling"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="other2" className="mb-0">
                                  Other
                                </Label>
                                <Input
                                  id="other2"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId={2} className="animated fadeIn">
                          <div>
                            <h6 className="f-s-13 f-w-600">Vitals</h6>
                          </div>
                          <Row>
                            <Col sm="6">
                              <FormGroup>
                                <Label htmlFor="bps" className="mb-0">
                                  BP Systolic
                                </Label>
                                <select
                                  id="bps"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="bpd" className="mb-0">
                                  BP Distolic
                                </Label>
                                <select
                                  id="bpd"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="bps" className="mb-0">
                                  Pulse
                                </Label>
                                <select
                                  id="pulse"
                                  className="form-control form-control-xs f-s-10"
                                >
                                  <option />
                                  <option />
                                </select>
                              </FormGroup>
                            </Col>
                            <Col sm="6">
                              <FormGroup>
                                <Label htmlFor="temp" className="mb-0">
                                  Temperature
                                </Label>
                                <Input
                                  id="bps"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="weight" className="mb-0">
                                  Weight
                                </Label>
                                <Input
                                  id="weight"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="height" className="mb-0">
                                  Height
                                </Label>
                                <Input
                                  id="height"
                                  className="form-control form-control-xs f-s-10"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId={3} className="animated fadeIn">
                          <div>
                            <h6 className="f-s-13 f-w-600">Physical Exam</h6>
                          </div>
                          <div>
                            <FormGroup>
                              <Label htmlFor="gen" className="mb-0">
                                General
                              </Label>
                              <select
                                id="gen"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="head" className="mb-0">
                                Head
                              </Label>
                              <select
                                id="head"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="eyes" className="mb-0">
                                Eyes
                              </Label>
                              <select
                                id="eyes"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="ears" className="mb-0">
                                Ears
                              </Label>
                              <select
                                id="ears"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="nose" className="mb-0">
                                Nose
                              </Label>
                              <select
                                id="nose"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="mnt" className="mb-0">
                                Mouth and Throat
                              </Label>
                              <select
                                id="mnt"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="neck" className="mb-0">
                                Neck
                              </Label>
                              <select
                                id="neck"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="breasts" className="mb-0">
                                Breasts
                              </Label>
                              <select
                                id="breasts"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="gatsro" className="mb-0">
                                Gastrointestinal
                              </Label>
                              <select
                                id="gatsro"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="gent" className="mb-0">
                                Genitourinary
                              </Label>
                              <select
                                id="gent"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="neur" className="mb-0">
                                Neurologic
                              </Label>
                              <select
                                id="neur"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="psy" className="mb-0">
                                Psyhiatric
                              </Label>
                              <select
                                id="psy"
                                className="form-control form-control-xs f-s-10"
                              >
                                <option />
                                <option />
                              </select>
                            </FormGroup>
                          </div>
                        </TabPane>
                        <TabPane tabId={4} className="animated fadeIn">
                          helo
                        </TabPane>
                        <TabPane tabId={5} className="animated fadeIn">
                          helo am 1
                        </TabPane>
                        <TabPane tabId={6} className="animated fadeIn">
                          <Card className="box header">
                            <CardHeader className="box-header bg1">
                              <div>
                                <ul className="header-left">
                                  <li>
                                    <button className="btn-box">
                                      <i className="fa fa-plus c-primary pr-1" />
                                      <span className="mini-title">
                                        Add Image or File
                                      </span>
                                    </button>
                                  </li>
                                  <li>
                                    <button className="btn-box">
                                      <span>Capture Image</span>
                                    </button>
                                  </li>
                                  <li>
                                    <button className="btn-box">
                                      <span>Edit</span>
                                    </button>
                                  </li>
                                  <li>
                                    <button className="btn-box">
                                      <span>Detach</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </CardHeader>
                          </Card>
                        </TabPane>
                        <TabPane tabId={7} className="animated fadeIn">
                          <div>
                            <h6 className="f-s-11 f-w-400">Billable Items</h6>
                          </div>
                          <Row>
                            <Col sm="8">
                              <Row>
                                <Col sm="6">
                                  <FormGroup check inline className="pt-1">
                                    <Input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="billon"
                                      value="1"
                                    />
                                    <Label
                                      className="form-check-label f-s-10"
                                      check
                                      htmlFor="billon"
                                    >
                                      Bill On:
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check inline className="pt-1">
                                    <Input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="invdrug"
                                      value="1"
                                    />
                                    <Label
                                      className="form-check-label f-s-10"
                                      check
                                      htmlFor="invdrug"
                                    >
                                      Invoice Drugs on:
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check inline className="pt-1">
                                    <Input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="invlab"
                                      value="1"
                                    />
                                    <Label
                                      className="form-check-label f-s-10"
                                      check
                                      htmlFor="invlab"
                                    >
                                      Invoice Lab on:
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check inline className="pt-1">
                                    <Input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="invimg"
                                      value="1"
                                    />
                                    <Label
                                      className="form-check-label f-s-10"
                                      check
                                      htmlFor="invimg"
                                    >
                                      Invoice Imaging on:
                                    </Label>
                                  </FormGroup>
                                </Col>
                                <Col sm="6">
                                  <FormGroup>
                                    <select
                                      id="bilon"
                                      className="form-control form-control-xs f-s-10"
                                    >
                                      <option>14-Feb-2019</option>
                                    </select>
                                  </FormGroup>
                                  <FormGroup>
                                    <select
                                      id="bilon"
                                      className="form-control form-control-xs f-s-10"
                                    >
                                      <option>14-Feb-2019</option>
                                    </select>
                                  </FormGroup>
                                  <FormGroup>
                                    <select
                                      id="bilon"
                                      className="form-control form-control-xs f-s-10"
                                    >
                                      <option>14-Feb-2019</option>
                                    </select>
                                  </FormGroup>
                                  <FormGroup>
                                    <select
                                      id="bilon"
                                      className="form-control form-control-xs f-s-10"
                                    >
                                      <option>14-Feb-2019</option>
                                    </select>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </div>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  showGroups
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

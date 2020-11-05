import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Input,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Label,
  FormGroup
} from "reactstrap";
import ReactTable from "react-table";
import DatePicker from "react-datepicker";

class Imaging extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      imgMod: false,
      showCol: true,
      showSearchBar: false
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

  toggleImagingModal = () => {
    const { imgMod } = this.state;
    this.setState({
      imgMod: !imgMod
    });
  };

  handleColView = (e, props) => {
    e.preventDefault();
    const { showCol } = this.state;
    this.setState({
      showCol: !showCol
    });
    console.log(props.row._original);
  };

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  toggleSearch = () => {
    const { searchMod } = this.state;

    this.setState({
      searchMod: !searchMod
    });
  };

  handleImageDoc = () => {
    const { currentPatient } = this.props;

    if (currentPatient === null) {
      this.props.searchModal();
    } else {
      this.setState({
        imgMod: true
      });
    }
  };

  componentWillReceiveProps(prevProps) {
    if (prevProps && prevProps.currentPatient !== null) {
      this.setState({
        imgMod: true
      });
    }
  }

  render() {
    const { imgMod, activeTab, showCol, showSearchBar } = this.state;
    const { currentPatient } = this.props;

    const data = [
      {
        patient: "Kennedy Peters",
        description: "Kennedy Peters",
        medic: "MWANZI, kennedy(Dr.)",
        createdBy: "Administrator"
      },
      {
        patient: "Kennedy Peters",
        description: "Kennedy Peters",
        medic: "MWANZI, kennedy(Dr.)",
        createdBy: "Administrator"
      }
    ];

    const columns = [
      {
        Header: "Patient",
        accessor: "patient",
        Cell: props => (
          <span>
            <a
              href="/"
              className="bold"
              onClick={e => this.handleColView(e, props)}
            >
              {props.value}
            </a>
          </span>
        )
      },
      {
        Header: "Description",
        accessor: "description",
        className: showCol ? "" : "hidden"
      },
      {
        Header: "Medic",
        accessor: "medic",
        className: showCol ? "" : "hidden"
      },
      {
        Header: "Created By",
        accessor: "createdBy",
        className: showCol ? "" : "hidden"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <div className="mini-side-group">
                <h5 className="h-title pl-3">Requests</h5>
                <ListGroupItem
                  onClick={() => this.toggle(0)}
                  action
                  active={activeTab === 0}
                >
                  <span className="pl-3">Pending</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(1)}
                  action
                  active={activeTab === 1}
                >
                  <span className="pl-3">Completed</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(2)}
                  action
                  active={activeTab === 2}
                >
                  <span className="pl-3">All</span>
                </ListGroupItem>
              </div>
              <h6 className="h-title  pl-3">Test Results</h6>
              <div className="pb-1">
                <ListGroupItem
                  onClick={() => this.toggle(3)}
                  action
                  active={activeTab === 3}
                >
                  <span className="pl-3">Pending</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(4)}
                  action
                  active={activeTab === 4}
                >
                  <span className="pl-3">Completed</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(5)}
                  action
                  active={activeTab === 5}
                >
                  <span className="pl-3">All</span>
                </ListGroupItem>
              </div>
            </ListGroup>
          </Col>
          <Col sm="10">
            <TabContent className="tab-box" activeTab={activeTab}>
              <TabPane tabId={0} className="animated fadeIn">
                <Row>
                  <Col sm="12">
                    <Card className="box">
                      <CardHeader className="box-header">
                        <Row>
                          <Col sm="6">
                            <ul className="header-left">
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.handleImageDoc}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    New Imaging Document
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
                                <button
                                  className="btn-box"
                                  onClick={this.handleSearchBar}
                                >
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                            </ul>
                          </Col>
                          <Col sm="6">
                            <ul className="header-right">
                              <li>
                                <select className="form-control header-control pt-1">
                                  <option>Today</option>
                                  <option>Yesterday</option>
                                  <option>Last 7 Days</option>
                                  <option>Last Week</option>
                                  <option>This Month</option>
                                  <option>Last Month</option>
                                  <option>Last 30 Days</option>
                                  <option>Last 60 Days</option>
                                  <option>Last 90 Days</option>
                                  <option>Last 120 Days</option>
                                  <option>All Time</option>
                                </select>
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
                                  <Label className="-body-label">
                                    Search for:
                                  </Label>
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
                                  <Button
                                    size="sm"
                                    className="btn-default btn-square"
                                  >
                                    Clear
                                  </Button>
                                </Col>
                              </FormGroup>
                              <div></div>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      {/* Table */}
                      <div>
                        <ReactTable
                          data={data}
                          columns={columns}
                          className="-highlight text-left"
                        />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={1} className="animated fadeIn">
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
              <TabPane tabId={2} className="animated fadeIn">
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
              <TabPane tabId={3} className="animated fadeIn">
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
              <TabPane tabId={4} className="animated fadeIn">
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
              <TabPane tabId={5} className="animated fadeIn">
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

            {/* Lab request modal */}
            <Modal
              isOpen={imgMod}
              toggle={this.toggleImagingModal}
              backdrop="static"
              className={"modal-xl " + this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-image pr-1" />
                  Imaging Request -{" "}
                  {currentPatient !== null
                    ? currentPatient.firstname +
                      " " +
                      "(" +
                      currentPatient.age +
                      "yr)"
                    : null}
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleImagingModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="md-body">
                <Row>
                  <Col md="12">
                    <Card className="box header">
                      <CardHeader className="box-header">
                        <div>
                          <ul className="header-left">
                            <li>
                              <button className="btn-box">
                                <span>Enter Results</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <span>Enter Results From Template</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-print pr-1" />
                                <span>Print</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                    </Card>
                  </Col>
                </Row>
                <div className="side-bg">
                  <Row>
                    <Col sm="4" className="sidel-bg">
                      <FormGroup row className="mb-2">
                        <Col sm="2">
                          <Label className="text-center">Date</Label>
                        </Col>
                        <Col sm="10">
                          <DatePicker
                            className="form-control-xs w-191"
                            selected={new Date()}
                            dateFormat="dd/MM/Y"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row className="mb-2">
                        <Col sm="2">
                          <Label>Medic</Label>
                        </Col>
                        <Col sm="10">
                          <Input type="select" className="form-control-xs">
                            <option>--none--</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row className="mb-2">
                        <Col sm="2">
                          <Label>Notes</Label>
                        </Col>
                        <Col sm="10">
                          <Input
                            type="textarea"
                            id="message"
                            className="form-control-xs"
                            name="message"
                          />
                          <FormGroup check inline className="py-2">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="male"
                              name="sex"
                              value="Male"
                            />
                            <Label
                              className="form-check-label"
                              check
                              htmlFor="male"
                            >
                              Tests Completed
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row className="mb-2">
                        <Col sm="12">
                          <Label className="mb-0">Format</Label>
                          <div>
                            <FormGroup check inline>
                              <Input
                                className="form-check-input"
                                type="radio"
                                id="male"
                                name="sex"
                                value="Male"
                              />
                              <Label
                                className="form-check-label bold"
                                check
                                htmlFor="male"
                              >
                                Tests List
                              </Label>
                            </FormGroup>
                            <FormGroup check inline>
                              <Input
                                className="form-check-input"
                                type="radio"
                                id=""
                                name="sex"
                                value=""
                              />
                              <Label
                                className="form-check-label"
                                check
                                htmlFor="male"
                              >
                                Document
                              </Label>
                            </FormGroup>
                          </div>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col sm="8" className="sider-bg">
                      <div
                        style={{
                          height: "500px",
                          overflowY: "auto"
                        }}
                      ></div>
                    </Col>
                  </Row>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleImagingModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    color="primary"
                    className="btn-square"
                    type="submit"
                  >
                    <i className="fa fa-save pr-1"></i> Save &amp; Close
                  </Button>
                </div>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPatient: state.patients.currentPatient
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Imaging);

import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  Input,
  Label,
  FormGroup,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import Calendar from "react-calendar";
import ReactTable from "react-table";

class Inpatients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      modal: false,
      avatar: null,
      date: new Date(),
      admPatMd: false
    };
  }

  admitPatientMd = () => {
    this.setState({
      admPatMd: !this.state.admPatMd
    });
  };

  onChangeCalendar = date => {
    console.log(date);
    this.setState({ date });
  };

  render() {
    const { date, admPatMd } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="3">
            <div className="mini-side">
              <Calendar onChangeCalendar={this.onChange} value={date} />

              <div className="my-2 f-s-11">
                <h6 className="mb-0 f-s-13 f-w-600">View</h6>
                <FormGroup check className="radio">
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="wview"
                    name="radios"
                    value="option1"
                  />
                  <Label
                    check
                    className="form-check-label f-w-600"
                    htmlFor="wview"
                  >
                    Ward View
                  </Label>
                </FormGroup>
                <FormGroup check className="radio">
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="wviewc"
                    name="radios"
                    value="option2"
                  />
                  <Label check className="form-check-label" htmlFor="wviewc">
                    Ward View Compact
                  </Label>
                </FormGroup>
                <FormGroup check className="radio">
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="treatplans"
                    name="radios"
                    value="option2"
                  />
                  <Label
                    check
                    className="form-check-label"
                    htmlFor="treatplans"
                  >
                    Treatment Plans
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="wards"
                    name="wards"
                    value="option1"
                  />
                  <Label
                    check
                    className="form-check-label f-w-600"
                    htmlFor="wards"
                  >
                    Wards
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="general"
                    name="general"
                    value="option2"
                  />
                  <Label check className="form-check-label" htmlFor="general">
                    General
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="gnaec"
                    name="gnaec"
                    value="option3"
                  />
                  <Label check className="form-check-label" htmlFor="gnaec">
                    Gynaecology
                  </Label>
                </FormGroup>
              </div>
              <div className="f-s-11 mt-4">
                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="medic"
                    name="medic"
                    value="1"
                  />
                  <Label
                    className="form-check-label f-w-600"
                    check
                    htmlFor="medic"
                  >
                    Medic
                  </Label>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="medicn"
                    name="medicn"
                    value="0"
                  />
                  <Label
                    className="form-check-label f-s-11"
                    check
                    htmlFor="medicn"
                  >
                    Without Medic
                  </Label>
                </FormGroup>
              </div>
              <div className="mt-4">
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <Label
                    check
                    className="form-check-label f-s-11 f-w-600"
                    htmlFor="checkbox1"
                  >
                    Rooms
                  </Label>
                </FormGroup>
                <Row>
                  <Col sm="6">
                    <FormGroup check className="checkbox">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox1"
                        name="checkbox1"
                        value="option1"
                      />
                      <Label
                        check
                        className="form-check-label f-s-11"
                        htmlFor="checkbox1"
                      >
                        Male
                      </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox1"
                        name="checkbox1"
                        value="option1"
                      />
                      <Label
                        check
                        className="form-check-label f-s-11"
                        htmlFor="checkbox1"
                      >
                        Female
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="inline-checkbox2"
                        name="inline-checkbox2"
                        value="option2"
                      />
                      <Label
                        className="form-check-label f-s-11"
                        check
                        htmlFor="inline-checkbox2"
                      >
                        Mixed
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="inline-checkbox2"
                        name="inline-checkbox2"
                        value="option2"
                      />
                      <Label
                        className="form-check-label f-s-11"
                        check
                        htmlFor="inline-checkbox2"
                      >
                        Uknown
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <div className="mt-3">
                <h6 className="mb-0 f-s-13 f-w-600">Beds</h6>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <Label
                    check
                    className="form-check-label f-s-11"
                    htmlFor="checkbox1"
                  >
                    Show free
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <Label
                    check
                    className="form-check-label f-s-11"
                    htmlFor="checkbox1"
                  >
                    Show occupied
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <Label
                    check
                    className="form-check-label f-s-11"
                    htmlFor="checkbox1"
                  >
                    Show only for checked medics
                  </Label>
                </FormGroup>
              </div>
            </div>
          </Col>
          <Col sm="9">
            <div>
              <h5 className="f-s-16 f-w-600 mb-0">General</h5>
              <small className="text-muted">
                Used/Total <span className="px-1 f-w-600">0/6</span>
                <span className="pl-2">
                  Expected Discharges in next 24hrs
                  <span className="px-1 f-w-600">0</span>
                </span>
              </small>
            </div>
            <div className="module-fluid">
              <Card className="bg1">
                <CardBody className="pb-0">
                  <div>
                    <h6 className="card-title" style={{ marginTop: "-11px" }}>
                      <span className="f-w-600">Room 001</span>
                      <i className="fa fa-mars pl-2" />
                    </h6>
                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button
                              color="link"
                              className="bd-btn"
                              onClick={this.admitPatientMd}
                            >
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg1 mb-0">
                <CardBody className="pb-0">
                  <div>
                    <h6 className="card-title" style={{ marginTop: "-11px" }}>
                      <span className="f-w-600">Room 002</span>
                      <i className="fa fa-mars pl-2" />
                      <i className="fa fa-venus pl-2" />
                    </h6>
                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <h5 className="f-s-16 f-w-600 mb-0">Gynaecology</h5>
              <small className="text-muted">
                Used/Total <span className="px-1 f-w-600">0/6</span>
                <span className="pl-2">
                  Expected Discharges in next 24hrs
                  <span className="px-1 f-w-600">0</span>
                </span>
              </small>
            </div>
            <div className="module-fluid">
              <Card className="bg1 mb-0">
                <CardBody className="pb-0">
                  <div>
                    <h6 className="card-title" style={{ marginTop: "-11px" }}>
                      <span className="f-w-600">Room 001</span>
                      <i className="fa fa-mars pl-2" />
                    </h6>
                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg1 mb-0">
                <CardBody className="pb-0">
                  <div>
                    <h6 className="card-title" style={{ marginTop: "-11px" }}>
                      <span className="f-w-600">Room 002</span>
                      <i className="fa fa-mars pl-2" />
                      <i className="fa fa-venus pl-2" />
                    </h6>
                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="bd">
                          <div className="bd-header">Bed 1</div>
                          <div className="bd-body">
                            <Button color="link" className="bd-btn">
                              <i className="fa fa-plus-square pr-1" />
                              Admit Patient
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </div>
            {/* Inpatient Admission Modal */}
            <Modal
              isOpen={admPatMd}
              toggle={this.admitPatientMd}
              backdrop="static"
              style={{ top: "15%" }}
              className={this.props.className}
            >
              <ModalHeader className="m-0">
                <span className="text-muted f-s-14">
                  <i className="fa fa-user-md" /> Inpatient Admission
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    onClick={this.admitPatientMd}
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
                            onClick={this.admitPatientMd}
                          >
                            <i className="fa fa-save f-s-11 c-primary pr-1" />
                            <span className="mini-title">Save and Close</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn-box"
                            onClick={this.admitPatientMd}
                          >
                            <span>Close</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </CardHeader>
                </Card>
                <div className="modal-fluid">
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label htmlFor="patientAd" className="mb-0">
                          Patient
                        </Label>
                        <Input
                          id="patientAd"
                          className="form-control form-control-xs"
                          placeholder="Type the patient"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="medicAd" className="mb-0">
                          Medic
                        </Label>
                        <select
                          id="medicAd"
                          className="form-control form-control-xs"
                        >
                          <option>--none--</option>
                        </select>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="mt-3">
                    <Row>
                      <Col sm="3">
                        <Label className="p-t-7">Start Time</Label>
                      </Col>
                      <Col sm="9" style={{ marginLeft: "-53px" }}>
                        <Row>
                          <Col sm="6">
                            <FormGroup>
                              <select
                                id="strtDate"
                                className="form-control form-control-xs"
                              >
                                <option>16-Jun-2019</option>
                              </select>
                            </FormGroup>
                          </Col>
                          <Col sm="3">
                            <FormGroup>
                              <select
                                id="strtTime"
                                className="form-control form-control-xs"
                              >
                                <option>20:30</option>
                              </select>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="3">
                        <Label className="p-t-7" htmlFor="endDate">
                          End Time
                        </Label>
                      </Col>
                      <Col sm="9" style={{ marginLeft: "-53px" }}>
                        <Row>
                          <Col sm="6">
                            <FormGroup>
                              <select
                                id="endDate"
                                className="form-control form-control-xs"
                              >
                                <option>16-Jun-2019</option>
                              </select>
                            </FormGroup>
                          </Col>
                          <Col sm="3">
                            <FormGroup>
                              <select
                                id="strtTime"
                                className="form-control form-control-xs"
                              >
                                <option>20:30</option>
                              </select>
                            </FormGroup>
                          </Col>
                          <Col sm="3">
                            <div className="d-flex-align">
                              <FormGroup>
                                <select
                                  id="daysAd"
                                  style={{ width: "50px" }}
                                  className="form-control form-control-xs m-l-24"
                                >
                                  <option>0</option>
                                </select>
                              </FormGroup>
                              <div className="ml-2 m-t-6">days</div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div className="my-3">
                    <Row>
                      <Col sm="3">
                        <Label className="p-t-7">Ward</Label>
                      </Col>
                      <Col sm="9" style={{ marginLeft: "-53px" }}>
                        <Row>
                          <Col sm="10">
                            <FormGroup>
                              <select
                                id="strtDate"
                                className="form-control form-control-xs"
                              >
                                <option>General</option>
                                <option>Gynaecology</option>
                              </select>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="3">
                        <Label className="p-t-7" htmlFor="endDate">
                          Room
                        </Label>
                      </Col>
                      <Col sm="9" style={{ marginLeft: "-53px" }}>
                        <Row>
                          <Col sm="6">
                            <FormGroup>
                              <select
                                id="endDate"
                                className="form-control form-control-xs"
                              >
                                <option>Room 001</option>
                                <option>Room 002</option>
                                <option>Room 003</option>
                              </select>
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <div className="d-flex-align">
                              <div className="mr-2 m-t-6">Bed</div>
                              <FormGroup>
                                <select
                                  id="daysAd"
                                  className="form-control form-control-xs "
                                >
                                  <option>Bed 1</option>
                                  <option>Bed 2</option>
                                </select>
                              </FormGroup>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Inpatients;

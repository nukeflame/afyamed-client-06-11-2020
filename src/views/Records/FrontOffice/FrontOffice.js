import React, { Component } from "react";
import {
  Row,
  Card,
  Col,
  CardHeader,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
  Form,
  FormGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import ReactTable from "react-table";
import Label from "reactstrap/lib/Label";
import DatePicker from "react-datepicker";
import moment from "moment";
import classNames from "classnames";

class FrontOffice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appntMod: false,
      delPtMod: false,
      activePatients: "1",
      selectedRows: [],
      demoData: [
        {
          appntId: "APT/0001",
          patientName: "Ben Omondi",
          date: "11/09/2019 01:45 PM",
          phone: "0700412127",
          gender: "Male",
          source: "Offline",
          doctor: "Catherine Owaso",
          pStatus: 0
          // actions: ""
        }
      ],
      appntData: {
        appntId: "APT/0002",
        date: "",
        patientName: "",
        idNo: "",
        phone: "",
        doctor: "",
        gender: "",
        email: "",
        pStatus: "",
        message: ""
      }
    };
  }

  // appointment modal
  appointmentModal = e => {
    e.preventDefault();
    const { appntMod } = this.state;
    this.setState({
      appntMod: !appntMod
    });
  };

  // delete appointment
  delPatientModal = e => {
    e.preventDefault();
    const { delPtMod } = this.state;
    this.setState({
      delPtMod: !delPtMod
    });
  };

  // handle entry date
  handleDateChange = d => {
    let date = moment(d).format("DD/MM/YYYY h:mm a");
    this.setState(prevState => ({
      appntData: {
        ...prevState.appntData,
        date
      }
    }));
  };

  //cancel appnt mod
  cancelAppntModal = e => {
    e.preventDefault();
    this.setState({ appntMod: false });
  };

  // save appointment
  handleSaveAppointment = e => {
    e.preventDefault();

    this.setState(prevState => ({
      demoData: [...prevState.demoData, this.state.appntData]
    }));

    this.setState({ appntMod: false });
  };

  linkVisitor = e => {
    e.preventDefault();
  };

  linkPhone = e => {
    e.preventDefault();
  };

  linkComplain = e => {
    e.preventDefault();
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(prevState => ({
      appntData: {
        ...prevState.appntData,
        [name]: value
      }
    }));
  };

  render() {
    const { appntMod, delPtMod, activePatients, demoData } = this.state;

    const {
      patientName,
      idNo,
      phone,
      doctor,
      gender,
      email,
      pStatus,
      message,
      date
    } = this.state.appntData;

    const appntCol = [
      {
        Header: "Appointment ID",
        accessor: "appntId"
      },
      {
        Header: "Patient Name",
        accessor: "patientName",
        minWidth: 100
      },
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "Phone",
        accessor: "phone"
      },
      {
        Header: "Gender",
        accessor: "gender",
        minWidth: 60
      },
      {
        Header: "Doctor",
        accessor: "doctor",
        minWidth: 100
      },
      {
        Header: "Source",
        accessor: "source",
        minWidth: 60
      },
      {
        Header: "Status",
        accessor: "status",
        minWidth: 60,
        Cell: props => (
          <span>
            {props.value === 1 ? (
              <Badge className="mr-1" color="success">
                Approved
              </Badge>
            ) : (
              <Badge className="mr-1" color="warning">
                Pending
              </Badge>
            )}
          </span>
        )
      }
      // {
      //   id: "friendName", // Required because our accessor is not a string
      //   Header: " Actions",
      //   headerClassName: "hidden",
      //   accessor: d => 1 // Custom value accessors!
      // }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <div className="navitem-header">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={
                      "pl-0 " +
                      classNames({
                        active: activePatients === "1"
                      })
                    }
                  >
                    <i className="fa fa-user-md nav-ico pr-1" />
                    <span className="nav-title">Front Office</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
        <div className="body-pills">
          <TabContent
            activeTab={activePatients}
            className="animated fadeIn content-pills"
          >
            <TabPane tabId="1" className="animated fadeIn">
              <Row className="m-l-30 m-r-30">
                <Col sm="12">
                  <Row>
                    <Col sm="12">
                      <Card className="box">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button
                                  className="btn-box"
                                  type="button"
                                  onClick={this.appointmentModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    Add Appointment
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn-box"
                                  type="button"
                                  onClick={this.togglePatientModal}
                                >
                                  <i className="fa fa-reorder c-primary pr-1" />
                                  <span className="mini-title">
                                    Visitor Book
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn-box"
                                  type="button"
                                  onClick={this.togglePatientModal}
                                >
                                  <i className="fa fa-phone c-primary pr-1" />
                                  <span className="mini-title">
                                    Phone Call Log
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn-box"
                                  type="button"
                                  onClick={this.togglePatientModal}
                                >
                                  <i className="fa fa-reorder c-primary pr-1" />
                                  <span className="mini-title">Postal</span>
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn-box"
                                  type="button"
                                  onClick={this.togglePatientModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">Complain</span>
                                </button>
                              </li>
                              {/* <li>
                                <button
                                  className="btn-box"
                                  type="button"
                                  onClick={this.editPatient}
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
                                  onClick={this.delPatientModal}
                                  disabled={
                                    selectedRows && selectedRows.length
                                      ? false
                                      : true
                                  }
                                >
                                  <span>Delete</span>
                                </button>
                              </li> */}
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                        <div>
                          <ReactTable
                            className="-highlight text-left"
                            data={demoData}
                            columns={appntCol}
                            getTdProps={(state, rowInfo, column, instance) => {
                              return {
                                onClick: e => {
                                  this.handleRowClick(state, rowInfo);
                                }
                              };
                            }}
                          />
                        </div>
                      </Card>

                      {/* Add Appointment */}
                      <Modal
                        isOpen={appntMod}
                        toggle={this.appointmentModal}
                        backdrop="static"
                        className={this.props.className}
                      >
                        <ModalHeader>
                          <span className="modal-title text-center f-s-14 f-w-600">
                            <i className="icon-user f-w-600 pr-1" />
                            Add Appointment
                          </span>
                          <span>
                            <Button
                              color="link"
                              className="modal-close-x"
                              type="button"
                              onClick={this.appointmentModal}
                            >
                              <i className="fa fa-times text-white" />
                            </Button>
                          </span>
                        </ModalHeader>
                        <Form>
                          <ModalBody className="md-body">
                            <Row>
                              <Col md="12" sm="12" lg="12">
                                <div className="p-3">
                                  <FormGroup row>
                                    <Col sm="6">
                                      <Label>Appointment Date</Label>
                                      <small className="req"> *</small>
                                      <div>
                                        <DatePicker
                                          className="form-control"
                                          style={{ minWidth: "218px" }}
                                          selected={date}
                                          // onChange={}
                                          timeFormat="HH:mm"
                                          timeIntervals={15}
                                          dateFormat="MMMM d, yyyy h:mm aa"
                                          timeCaption="time"
                                          required
                                        />
                                      </div>
                                    </Col>
                                    <Col sm="6">
                                      <Label>Patient Name</Label>
                                      <Input
                                        type="text"
                                        className="form-control-xs"
                                        value={patientName}
                                        name="patientName"
                                        onChange={this.handleChange}
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col sm="6">
                                      <Label>ID No.</Label>
                                      <small className="req"> *</small>
                                      <Input
                                        type="text"
                                        className="form-control-xs"
                                        value={idNo}
                                        name="idNo"
                                        onChange={this.handleChange}
                                        required
                                      />
                                    </Col>
                                    <Col sm="6">
                                      <Label>Phone</Label>
                                      <small className="req"> *</small>
                                      <Input
                                        type="text"
                                        className="form-control-xs"
                                        value={phone}
                                        name="phone"
                                        onChange={this.handleChange}
                                        required
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col sm="6">
                                      <Label>Doctor</Label>
                                      <small className="req"> *</small>
                                      <Input
                                        type="select"
                                        className="form-control-xs"
                                        value={doctor}
                                        name="doctor"
                                        onChange={this.handleChange}
                                        required
                                      >
                                        <option value="0">Select</option>
                                        <option value="1">
                                          Anderson Maliki
                                        </option>
                                        <option value="2">John Doe</option>
                                        <option value="3">Mary Menza</option>
                                        <option value="4">Brian Lang</option>
                                        <option value="5">Eva Mweni</option>
                                      </Input>
                                    </Col>
                                    <Col sm="6">
                                      <Label>Gender</Label>
                                      <small className="req"> *</small>
                                      <Input
                                        type="select"
                                        className="form-control-xs"
                                        value={gender}
                                        name="gender"
                                        onChange={this.handleChange}
                                        required
                                      >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col sm="6">
                                      <Label>Email</Label>
                                      <Input
                                        type="text"
                                        className="form-control-xs"
                                        value={email}
                                        name="email"
                                        onChange={this.handleChange}
                                      />
                                    </Col>
                                    <Col sm="6">
                                      <Label>Status</Label>
                                      <Input
                                        type="select"
                                        className="form-control-xs"
                                        value={pStatus}
                                        name="pStatus"
                                        onChange={this.handleChange}
                                        required
                                      >
                                        <option value="2">Active</option>
                                        <option value="1">Pending</option>
                                        <option value="0">Cancel</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col sm="12">
                                      <Label htmlFor="message">Message</Label>
                                      <small className="req"> *</small>
                                      <Input
                                        type="textarea"
                                        id="message"
                                        className="form-control-xs"
                                        value={message}
                                        name="message"
                                        onChange={this.handleChange}
                                      />
                                    </Col>
                                  </FormGroup>
                                </div>
                              </Col>
                            </Row>
                          </ModalBody>
                          <ModalFooter>
                            <div className="box-tools">
                              <Button
                                size="sm"
                                color="default"
                                className="mr-2"
                                onClick={this.cancelAppntModal}
                              >
                                Cancel
                              </Button>
                              <Button
                                size="sm"
                                color="primary"
                                className="btn-square"
                                type="submit"
                                onClick={this.handleSaveAppointment}
                              >
                                <i className="fa fa-save pr-1"></i> Submit
                              </Button>
                            </div>
                          </ModalFooter>
                        </Form>
                      </Modal>

                      {/* Delete Patient Modal */}
                      <Modal
                        isOpen={delPtMod}
                        toggle={this.delPatientModal}
                        className={"modal-sm " + this.props.className}
                        style={{ top: "30%" }}
                      >
                        <ModalHeader className="p-t-5 p-b-5">
                          <span className="f-s-14">
                            <i className="fa fa-trash pr-1" />
                            Delete Patient
                          </span>
                        </ModalHeader>
                        <ModalBody>
                          <span>
                            Are you sure? This patient will be deleted
                            permanently!
                          </span>
                        </ModalBody>
                        <ModalFooter>
                          <div>
                            <Button
                              className="btn-default btn-square mr-2"
                              size="sm"
                              onClick={this.delPatientModal}
                            >
                              Cancel
                            </Button>
                            <Button
                              className="btn-danger btn-square"
                              size="sm"
                              onClick={this.delPatient}
                            >
                              Delete
                            </Button>
                          </div>
                        </ModalFooter>
                      </Modal>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default FrontOffice;

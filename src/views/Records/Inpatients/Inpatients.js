import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  Input,
  Label,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CardBody
} from "reactstrap";
import Calendar from "react-calendar";
import ReactTable from "react-table";
import DatePicker from "react-datepicker";
import Select from "react-select";

class Inpatients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      modal: false,
      avatar: null,
      showSearchBar: false,
      dropdownOpen: false,
      date: new Date(),
      admPatMd: false,
      admQuePatMd: false,
      selectedRows: [],
      savingInpatient: false,
      startDate: new Date(),
      roomData: {
        room: 1
      },
      optionPatients: [
        {
          value: 0,
          label: "Main Branch",
          hospName: "Main Branch"
        }
      ]
    };
  }

  admitPatientMd = () => {
    this.setState({
      admPatMd: !this.state.admPatMd
    });
  };

  admitPatientFromQueue = () => {
    this.setState({
      admQuePatMd: !this.state.admQuePatMd
    });
  };

  setStartDate = () => {};

  onChangeCalendar = date => {
    console.log(date);
    this.setState({ date });
  };

  handleChangeRoom = e => {
    const { value } = e.target;
    this.setState(prevState => ({
      roomData: {
        ...prevState.roomData,
        room: parseInt(value)
      }
    }));
  };

  handleChangePatient = e => {
    this.setState(prevState => ({
      branchData: {
        ...prevState.branchData,
        id: e.value,
        name: e.hospName
      }
    }));
  };

  render() {
    const {
      date,
      admPatMd,
      selectedRows,
      showSearchBar,
      dropdownOpen,
      savingInpatient,
      startDate,
      admQuePatMd,
      roomData,
      optionPatients
    } = this.state;

    const data = [];
    const columns = [
      {
        Header: "Inpatient No",
        accessor: "schemeName"
      },
      {
        Header: "Outpatient No",
        accessor: "princMember"
      },
      {
        Header: "Admitted at",
        accessor: "membershipNo"
      },
      {
        Header: "Surname",
        accessor: "surname"
      },
      {
        Header: "OtherNames",
        accessor: "othernames"
      },
      {
        Header: "Ward",
        accessor: "bed"
      },
      {
        Header: "Bed",
        accessor: "bed"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="3">
            <div className="mini-side">
              <Calendar onChangeCalendar={this.onChange} value={date} />
              <div className="my-2 f-s-11">
                <h6 className="mb-1 f-s-13 f-w-600">Patient Admission</h6>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Adm ID:</span>
                  </Col>
                  <Col sm="8">
                    <span>000684</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Visit ID:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">OtherNames:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Surname:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">OP NO:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Ward:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Ref No:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Rate:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Bed No:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Admitted By:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Bed Status:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Adm At:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Medic:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Discharg. By:</span>
                  </Col>
                  <Col sm="8">
                    <span>000024</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="4">
                    <span className="bold">Duration:</span>
                  </Col>
                  <Col sm="8">
                    <span>000023</span>
                  </Col>
                </FormGroup>
              </div>
            </div>
          </Col>
          <Col sm="9">
            <div>
              <small className="text-muted">
                Expected Discharges in next 24hrs
                <span className="px-1 f-w-600">0</span>
              </small>
            </div>
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
                              onClick={this.admitPatientMd}
                            >
                              <i className="fa fa-plus c-primary" />
                              <span className="mini-title">Admit Patient</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              type="button"
                              onClick={this.admitPatientFromQueue}
                            >
                              <i className="fa fa-plus c-primary" />
                              <span className="mini-title">
                                Admit From Queue
                              </span>
                            </button>
                          </li>
                          <li>
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
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.handleSearchBar}
                            >
                              <i className="fa fa-search" />
                              <span>Search</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              type="button"
                              onClick={e => this.queuePatient(e)}
                            >
                              <span className="bold">
                                <i className="fa fa-log-out"></i> Discharge
                                Patient
                              </span>
                            </button>
                          </li>
                        </ul>
                      </Col>
                      <Col sm="2">
                        <ul className="header-right">
                          <li>
                            <ButtonDropdown
                              isOpen={dropdownOpen}
                              toggle={this.toggleDropDown}
                            >
                              <DropdownToggle
                                color="link"
                                size="sm"
                                className="p-0 mr-2"
                              >
                                <i className="icon-settings pr-1" />
                                <span>Actions</span>
                              </DropdownToggle>
                              <DropdownMenu right className="top-dropdown">
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem>Proxied Patients</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>
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
                  <div>
                    <ReactTable
                      data={data}
                      columns={columns}
                      // loading={loadPatients}
                      defaultPageSize={16}
                      className="-highlight -striped text-left"
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
                                    selectedRows.push(
                                      state.sortedData[i]._original
                                    );
                                  }
                                } else {
                                  for (
                                    let i = rowInfo.index;
                                    i <= this.previousRow.index;
                                    i++
                                  ) {
                                    selectedRows.push(
                                      state.sortedData[i]._original
                                    );
                                  }
                                }
                              } else {
                                rowInfo._index = rowInfo.index;
                                selectedRows.push(rowInfo.original);
                                this.previousRow = rowInfo;
                              }

                              this.setState({
                                selectedTd: rowInfo.index,
                                selectedRows
                              });
                            },

                            onDoubleClick: e => {
                              e.preventDefault();
                              this.props.history.push("/records/patientChart");
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
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Inpatient Admission Modal */}
        <Modal
          isOpen={admPatMd}
          toggle={this.admitPatientMd}
          style={{ top: "10%" }}
          className={this.props.className}
          fade={false}
          modalClassName="modal_stretch animated fadeIn"
        >
          <ModalHeader>
            <span className="modal-title f-s-14">
              <i className="fa fa-user-md pr-1" />
              Inpatient Admission
            </span>
            <span>
              <Button
                color="link"
                className="modal-close-x"
                type="button"
                onClick={this.admitPatientMd}
              >
                <i className="fa fa-times text-white" />
              </Button>
            </span>
          </ModalHeader>
          <ModalBody className="p-0">
            <Card className="box header">
              <CardHeader className="box-header">
                <div>
                  <ul className="header-left">
                    <li>
                      <button className="btn-box" onClick={this.admitPatientMd}>
                        {savingInpatient ? (
                          <span>Processing ...</span>
                        ) : (
                          <span>
                            <i className="fa fa-save f-s-11 c-primary pr-1" />
                            <span className="mini-title">Save &amp; Close</span>
                          </span>
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn-box"
                        onClick={this.admitPatientMd}
                      >
                        <span>Cancel</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </CardHeader>
              <CardBody className="md-body">
                <Row className="m-t-10">
                  <Col sm="10">
                    <FormGroup className="mb-2">
                      <Label htmlFor="patientAd" className="bold mb-0">
                        Patient
                      </Label>
                      <Input
                        id="patientAd"
                        className="form-control form-control-xs"
                        placeholder="Type the patient"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="medicAd" className="bold mb-0">
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
                            <DatePicker
                              dateFormat="yyyy/MM/dd"
                              selected={startDate}
                              onChange={date => this.setStartDate(date)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="3">
                          <FormGroup>
                            <DatePicker
                              selected={startDate}
                              onChange={date => this.setStartDate(date)}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              dateFormat="h:mm aa"
                            />
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
                <div className="mt-3">
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
              </CardBody>
            </Card>
          </ModalBody>
        </Modal>

        {/* Inpatient Queue Admission Modal */}
        <Modal
          isOpen={admQuePatMd}
          toggle={this.admitPatientFromQueue}
          style={{ top: "10%" }}
          className={this.props.className}
          fade={false}
          modalClassName="modal_stretch animated fadeIn"
        >
          <ModalHeader>
            <span className="modal-title f-s-14">
              <i className="fa fa-user-md pr-1" />
              Admit From Queue
            </span>
            <span>
              <Button
                color="link"
                className="modal-close-x"
                type="button"
                onClick={this.admitPatientFromQueue}
              >
                <i className="fa fa-times text-white" />
              </Button>
            </span>
          </ModalHeader>
          <ModalBody className="p-0">
            <Row>
              <Col sm="12">
                <Card className="box">
                  <CardHeader className="box-header">
                    <Row>
                      <Col sm="9">
                        <ul className="header-left">
                          <li>
                            <div>
                              <FormGroup check inline>
                                <Input
                                  name="room"
                                  type="radio"
                                  value={1}
                                  checked={roomData.room === 1 ? true : false}
                                  className="form-check-input"
                                  onChange={this.handleChangeRoom}
                                />
                                <Label className="form-check-label p-t-2">
                                  My Room
                                </Label>
                              </FormGroup>
                              <FormGroup check inline>
                                <Input
                                  name="room"
                                  type="radio"
                                  value={0}
                                  checked={roomData.room === 0 ? true : false}
                                  className="form-check-input"
                                  onChange={this.handleChangeRoom}
                                />
                                <Label className="form-check-label p-t-2">
                                  All
                                </Label>
                              </FormGroup>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </CardHeader>
                </Card>
                <div className="container pb-3">
                  <FormGroup row>
                    <Col sm="12">
                      <Label htmlFor="selBranch" className="bold mb-1">
                        Select Patient From Queue
                      </Label>
                      <Select
                        id="selBranch"
                        options={optionPatients}
                        className="form-control-xs none"
                        onChange={this.handleChangePatient}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="6">
                      <Label htmlFor="selBranch" className="bold mb-1">
                        Ward
                      </Label>
                      <Input type="select" className="form-control-xs">
                        <option value="8">Male Ward</option>
                        <option value="9">Female Ward</option>
                        <option value="10">Pediatric Ward</option>
                        <option value="12">Maternity Ward</option>
                        <option value="33">Private ward 3</option>
                        <option value="34">private ward 10</option>
                      </Input>
                    </Col>
                    <Col sm="6">
                      <Label htmlFor="selBranch" className="bold mb-1">
                        Bed No
                      </Label>
                      <Input type="text" className="form-control-xs" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="6">
                      <Label htmlFor="selBranch" className="bold mb-1">
                        Rate (Per Day)
                      </Label>
                      <Input type="text" className="form-control-xs" />
                    </Col>
                    <Col sm="6">
                      <Label htmlFor="selBranch" className="bold mb-1">
                        Bed No
                      </Label>
                      <Input type="text" className="form-control-xs" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="6">
                      <Label htmlFor="selBranch" className="bold mb-1">
                        Admission Date Time
                      </Label>
                      <Input
                        type="datetime-local"
                        className="form-control-xs"
                        id="AdmissionDateTime"
                      />
                    </Col>
                    <Col sm="6">
                      <Label htmlFor="selBranch" className="bold mb-1">
                        Admitting Doctor
                      </Label>
                      <Input type="text" className="form-control-xs" />
                    </Col>
                  </FormGroup>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Inpatients;

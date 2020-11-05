import React, { Component } from "react";
import { connect } from "react-redux";
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
  CardBody,
  // FormFeedback,
  FormGroup,
  Label,
  Table,
} from "reactstrap";
import classNames from "classnames";
import DatePicker from "react-datepicker";
import { fetchMedics } from "../../../../redux/actions/medicActions";
import { fetchPatientHisory } from "../../../../redux/actions/patientHistoryActions";
import { fetchHistoryValues } from "../../../../redux/actions/patientHistoryValuesActions";
import {
  createPatientHistoryData,
  findPatientHistoryData,
} from "../../../../redux/actions/patientHistoryDataActions";
import { getCurrentPatient } from "../../../../redux/actions/patientActions";

export class PatientHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeHistory: "1",
      editValueMd: false,
      savingHistory: false,
      historyData: {
        startDate: new Date(),
        historyName: "1",
        isCompleted: true,
        medicId: "1",
        location: "",
      },
      historyValueData: [],
    };
  }

  handleEditValues = () => {
    const { editValueMd } = this.state;
    this.setState({
      editValueMd: !editValueMd,
    });
  };

  handleChangeEditValues = (e) => {
    const { user } = this.props;
    const { name, value } = e.target;
    this.setState((prevState) => ({
      historyData: {
        ...prevState.historyData,
        [name]: value,
      },
    }));

    if (name === "historyName") {
      const data = {
        historyId: value,
        hospId: user.hospId,
      };
      this.props.fetchHistoryValues(data);
    }
  };

  setStartDate = (date) => {
    this.setState((prevState) => ({
      historyData: {
        ...prevState.historyData,
        startDate: date,
      },
    }));
  };

  emptyRows = () => {
    const data = (
      <>
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
        <tr>
          <td className="left">
            <div className="emptyItem-row"></div>
          </td>
        </tr>
      </>
    );

    return data;
  };

  handleHistoryValue = (e, r) => {
    const { historyValueData } = this.state;
    const { value } = e.target;
    // this.setState(prevState => ({
    //   historyValueData: {
    //     ...prevState.historyValueData,
    //     [name]: value
    //   }
    // }));
    this.setState({
      historyValueData: { ...historyValueData, [r.name]: value },
    });
  };

  handleChangeEditValuesCheck = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      historyData: {
        ...prevState.historyData,
        [name]: checked,
      },
    }));
  };

  handleClickList = (e, name, value) => {
    e.preventDefault();
    // $(".optionDisplay").toggleClass("hidden");
    this.setState((prevState) => ({
      historyValueData: {
        ...prevState.historyValueData,
        [name]: value,
      },
    }));
  };

  savePatientHistory = () => {
    this.props.getCurrentPatient();
    // const { currentPatient } = this.props;
    const { historyValueData } = this.state;
    // const data = {
    //   patientId: currentPatient.id,
    //   nameId: historyData.historyName,
    //   date: historyData.startDate,
    //   medicId: historyData.medicId,
    //   isCompleted: historyData.isCompleted,
    //   location: historyData.location,
    //   historyValueData: JSON.stringify(historyValueData),
    // };

    console.log(historyValueData);

    // this.props.createPatientHistoryData(data).then(() => {
    //   this.setState({ editValueMd: false });
    // });
  };

  tableHistoryData = (p) => {
    const n = this.props.patientHistoryData[0];
    if (parseInt(n.patientHistory) === p.id) {
      return Object.keys(n.historyData).map((j, k) => (
        <tr key={k}>
          <td className="left ">{j}</td>
          {Object.values(n.historyData).map((m, n) =>
            k === n ? (
              // m.notes !== "" ? (
              //   <td key={n} className="left">
              //     {m.toLowerCase() !== "yes" ? m : null}
              //   </td>
              // ) : (
              <td key={n} style={{ fontWeight: "500", fontSize: "12px" }}>
                {m.toLowerCase() !== "yes" ? m : null}
              </td>
            ) : // )
            null
          )}
        </tr>
      ));
    } else {
      return (
        <tr>
          <td className="left">None Given</td>
        </tr>
      );
    }
    //    <tr>
    //       <td className="left">
    //         None Given
    //          <span className="item-right">
    //    - Above Normal
    //  </span>
    //       </td>
    //     </tr>
    //    {this.emptyRows()}
  };

  componentDidMount() {
    const { user, currentPatient } = this.props;
    this.props.fetchPatientHisory({ hospId: user.hospId });
    //patient values
    const data = { historyId: 1, hospId: user.hospId };
    this.props.fetchHistoryValues(data);
    //patient history data
    this.props.findPatientHistoryData(currentPatient.id);
  }

  render() {
    const {
      activeHistory,
      editValueMd,
      savingHistory,
      historyData,
      historyValueData,
    } = this.state;
    const {
      medics,
      patientHistories,
      patientHistoryData,
      patientHistoriesValues,
    } = this.props;

    return (
      <div>
        <Row>
          <Col sm="12">
            <Nav tabs className="header-pils">
              <NavItem>
                <NavLink
                  className={classNames({
                    active: activeHistory === "1",
                  })}
                >
                  Patient History
                </NavLink>
              </NavItem>
              <NavItem />
              <NavItem>
                <Button
                  color="link"
                  type="button"
                  className="nav-right"
                  onClick={this.handleEditValues}
                >
                  Edit Values
                </Button>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <div className="body-pills">
          <TabContent
            activeTab={activeHistory}
            className="animated fadeIn content-pills"
          >
            <TabPane tabId="1" className="animated fadeIn">
              {JSON.stringify(patientHistoryData[0])}
              <Row>
                {patientHistories && patientHistories.length > 0
                  ? patientHistories.map((p) => (
                      <Col md="6" key={p.id}>
                        <fieldset className="dashboard-fieldset">
                          <legend className="dashboard-fieldset">
                            <h6>{p.name}</h6>
                          </legend>
                          <Row>
                            <Col md="12">
                              <Card className="dashboard-card">
                                <CardBody>
                                  <div className="item-history">
                                    <Table
                                      striped
                                      responsive
                                      size="sm"
                                      className="item-table"
                                    >
                                      <tbody>
                                        {patientHistoryData &&
                                        patientHistoryData.length > 0 ? (
                                          this.tableHistoryData(p)
                                        ) : (
                                          <tr>
                                            <td className="left">None Given</td>
                                          </tr>
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
                    ))
                  : null}
              </Row>
            </TabPane>
          </TabContent>

          {/* Edit Values */}
          <Modal
            isOpen={editValueMd}
            toggle={this.handleEditValues}
            className={this.props.className}
            backdrop="static"
            fade={false}
            size="lg"
            modalClassName="modal_stretch animated fadeIn"
          >
            <ModalHeader className="m-0">
              <span className="modal-title f-s-14">
                <i className="fa fa-edit pr-1" />
                Patient History - Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.handleEditValues}
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
                        <button
                          type="button"
                          className="btn-box"
                          onClick={this.savePatientHistory}
                        >
                          {savingHistory ? (
                            <span>Processing ...</span>
                          ) : (
                            <span>
                              <i className="fa fa-save f-s-11 c-primary pr-1" />
                              <span className="mini-title">
                                Save &amp; Close
                              </span>
                            </span>
                          )}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn-box"
                          onClick={this.handleEditValues}
                        >
                          <span>Cancel</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </CardHeader>
              </Card>
              <Row>
                <Col md="4" className="sidel-bg">
                  <div className="modal-fluid consultation-fluid-l">
                    <div>
                      <FormGroup>
                        <Label htmlFor="historyName" className="bold mb-0">
                          Name
                        </Label>
                        <Input
                          type="select"
                          id="historyName"
                          name="historyName"
                          className="form-control-xs"
                          value={historyData.historyName}
                          onChange={(e) => this.handleChangeEditValues(e)}
                        >
                          {patientHistories && patientHistories.length > 0 ? (
                            patientHistories.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name}
                              </option>
                            ))
                          ) : (
                            <option value>--None--</option>
                          )}
                        </Input>
                      </FormGroup>
                      <div className="form-group">
                        <label htmlFor="consDate" className="bold mb-0">
                          Date
                        </label>
                        <Row>
                          <Col sm="12">
                            <DatePicker
                              id="consDate"
                              showPopperArrow={false}
                              selected={historyData.startDate}
                              dateFormat="d - MMMM - yyyy"
                              className="form-control form-control-xs"
                              onChange={(date) => this.setStartDate(date)}
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="form-group">
                        <label htmlFor="medicId" className="bold mb-0">
                          Medic
                        </label>
                        <Input
                          type="select"
                          id="medicId"
                          className="form-control-xs p-l-2 bold text-dark"
                          name="medicId"
                          value={historyData.medicId}
                          onChange={(e) => this.handleChangeEditValues(e)}
                        >
                          {medics && medics.length > 0 ? (
                            medics.map((m) => (
                              <option key={m.id} value={m.id}>
                                {m.name}
                              </option>
                            ))
                          ) : (
                            <option value disabled>
                              --None--
                            </option>
                          )}
                        </Input>
                      </div>
                      <FormGroup>
                        <Label htmlFor="location" className="bold mb-0">
                          Location
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          className="form-control-xs"
                          value={historyData.location}
                          onChange={this.handleChangeEditValues}
                        />
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          bsSize="lg"
                          className="form-check-input"
                          type="checkbox"
                          id="isCompleted"
                          name="isCompleted"
                          checked={historyData.isCompleted ? true : false}
                          onChange={(e) => this.handleChangeEditValuesCheck(e)}
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="isCompleted"
                        >
                          Is Completed
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                </Col>
                <Col md="8" className="sider-bg">
                  <div className="modal-fluid history-options">
                    <Row>
                      {patientHistoriesValues &&
                      patientHistoriesValues.length > 0
                        ? patientHistoriesValues.map((r) => (
                            <Col md="6" key={r.id}>
                              <FormGroup className="option-dropdown">
                                <Label htmlFor={r.slug}>{r.name}</Label>
                                <Input
                                  className="form-control-xs"
                                  id={r.slug}
                                  name={historyValueData[r]}
                                  value={historyValueData[r.value]}
                                  onChange={(e) =>
                                    this.handleHistoryValue(e, r)
                                  }
                                />
                                <div className="optionList">
                                  {/* eslint-disable-next-line */}
                                  <a href="#">
                                    <i className="fa fa-caret-down"></i>
                                  </a>
                                  <ul
                                    className="optionDisplay hidden "
                                    data-name={r.slug}
                                  >
                                    <li>Yes</li>
                                    <li>No</li>
                                  </ul>
                                </div>
                              </FormGroup>
                            </Col>
                          ))
                        : null}
                      <Col md="12">
                        <FormGroup>
                          <Label htmlFor="notes">Notes: </Label>
                          <Input
                            type="textarea"
                            id="notes"
                            className="form-control-xs"
                            name="notes"
                            onChange={(e) => this.handleHistoryValue(e)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  medics: state.medics.medics,
  patientHistories: state.patientHistories.items,
  patientHistoriesValues: state.patientHistoriesValues.items,
  patientHistoryData: state.patientHistoryData.items,
});

const mapDispatchToProps = {
  fetchPatientHisory,
  fetchMedics,
  fetchHistoryValues,
  createPatientHistoryData,
  findPatientHistoryData,
  getCurrentPatient,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientHistory);

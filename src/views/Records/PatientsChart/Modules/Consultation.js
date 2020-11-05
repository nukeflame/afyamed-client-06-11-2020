import React, { Component } from "react";
import {
  Card,
  CardHeader,
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
  FormGroup,
  Label,
  Input,
  CardBody,
  FormFeedback,
} from "reactstrap";
import ReactTable from "react-table";
import { findQueues } from "../../../../redux/actions/queueActions";
import { setCurrentPatient } from "../../../../redux/actions/patientActions";
import {
  createConsultation,
  destroyConsultation,
} from "../../../../redux/actions/consultationActions";
import { fetchMedics } from "../../../../redux/actions/medicActions";
import { connect } from "react-redux";
import {
  ConsultationData,
  LabRequest,
  BillingData,
  AddDocument,
  SummaryReport,
  ImageRequest,
} from "./Consults";
import DatePicker from "react-datepicker";
import moment from "moment";
import Swal from "sweetalert2";
import $ from "jquery";

class Consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
      activeModTab: 0,
      addConsultationMod: false,
      queueMod: false,
      summaryMod: false,
      consultData: {
        id: null,
        startDate: new Date(),
        medicId: "",
        locationId: "",
        billMedication: false,
        title: "",
        complaints: "",
        diagnoses: [],
        clinicalFindings: "",
        treatments: "",
        medications: [],
        drugDuration: "",
        notes: "",
        materials: "",
        recomendations: "",
        summary: "",
        surgeries: "",
      },
      vitals: [],
      vitalData: {
        bps: "",
        temp: "",
        pulse: "",
        respRate: "",
        bpd: "",
        weight: "",
        height: "",
        bmi: "",
        sp02: "",
      },
      patientData: {
        opdId: null,
      },
      opdData: "",
      bodySystemData: {
        fatigue: "",
        fevers: "",
        headache: "",
        otherGeneral: "",
        palpilations: "",
        weightLoss: "",
        swelling: "",
        otherCardiovascular: "",
        bluredVision: "",
        doubleVission: "",
        otherEyes: "",
        wheezing: "",
        shortnessBreath: "",
        otherRespiratory: "",
      },
    };
  }

  toggleDropDown = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  };

  toggleConsModal = () => {
    const { addConsultationMod } = this.state;
    this.setState({
      addConsultationMod: !addConsultationMod,
    });
  };

  toggleMiniBox = (tab) => {
    const { activeModTab } = this.state;
    if (activeModTab !== tab) {
      this.setState({
        activeModTab: tab,
      });
    }
  };

  handleSelectedVisit = (e, props) => {
    e.preventDefault();
    this.setState({ opdData: props });
    this.summaryModal();
  };

  inQueueModal = () => {
    const { queueMod } = this.state;
    this.setState({
      queueMod: !queueMod,
    });
  };

  summaryModal = () => {
    const { summaryMod } = this.state;
    this.setState({
      summaryMod: !summaryMod,
    });
  };

  setStartDate = (date) => {
    this.setState((prevState) => ({
      consultData: {
        ...prevState.consultData,
        startDate: date,
      },
    }));
  };

  handleChangeCons = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      consultData: {
        ...prevState.consultData,
        [name]: value,
      },
    }));
  };

  saveConsultation = () => {
    const { cp } = this.props;
    const { consultData, vitalData, vitals } = this.state;
    const data = {
      appointDate: moment(consultData.startDate).format(),
      medicId: consultData.medicId,
      title: consultData.title,
      summary: consultData.summary,
      diagnoses: consultData.diagnoses,
      medications: consultData.medications,
      complaints: consultData.complaints,
      patientId: cp.id,
      bps: vitalData.bps,
      temp: vitalData.temp,
      pulse: vitalData.pulse,
      respRate: vitalData.respRate,
      bpd: vitalData.bpd,
      weight: vitalData.weight,
      height: vitalData.height,
      bmi: vitalData.bmi,
      sp02: vitalData.sp02,
      vitals,
    };

    // console.log(data.diagnoses);
    this.props.createConsultation(data).then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
      });
      Toast.fire({
        type: "success",
        title: "Consultation Saved!",
      });

      this.setState({
        addConsultationMod: false,
      });
      this.resetPatientData();
    });
  };

  handleVitalChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      vitalData: {
        ...prevState.vitalData,
        [name]: value,
      },
    }));
  };

  handleVitalBlur = (e) => {
    e.preventDefault();
    const { vitalData } = this.state;
    let vitals = [];
    let items = {};

    if (vitalData.bps) {
      items = {
        id: 1,
        generalExam: "Blood Pressure Systolic",
        remark: vitalData.bps + " mmHg",
      };

      vitals = [...vitals, items];
    }
    if (vitalData.bpd) {
      items = {
        id: 2,
        generalExam: "Blood Pressure Distolic",
        remark: vitalData.bpd + " mmHg",
      };
      vitals = [...vitals, items];
    }
    if (vitalData.temp) {
      items = {
        id: 3,
        generalExam: "Body Temprature",
        remark: vitalData.temp + " C",
      };
      vitals = [...vitals, items];
    }
    if (vitalData.pulse) {
      items = {
        id: 4,
        generalExam: "Pulse Rate",
        remark: vitalData.pulse,
      };
      vitals = [...vitals, items];
    }
    if (vitalData.respRate) {
      items = {
        id: 5,
        generalExam: "Respiratory Rate",
        remark: vitalData.respRate + " b/m",
      };
      vitals = [...vitals, items];
    }
    if (vitalData.weight) {
      items = {
        id: 6,
        generalExam: "Weight",
        remark: vitalData.weight + " C",
      };
      vitals = [...vitals, items];
    }
    if (vitalData.height) {
      items = {
        id: 7,
        generalExam: "Height",
        remark: vitalData.height + " M2",
      };
      vitals = [...vitals, items];
    }
    if (vitalData.bmi) {
      items = {
        id: 8,
        generalExam: "Body Mass Index",
        remark: vitalData.bmi + " %",
      };
      vitals = [...vitals, items];
    }
    if (vitalData.sp02) {
      items = {
        id: 9,
        generalExam: "Sp02 (oxygen saturation)",
        remark: vitalData.sp02 + " %",
      };
      vitals = [...vitals, items];
    }

    this.setState({ vitals });
  };

  handleDelVital = (e, data) => {
    e.preventDefault();
    let { vitals } = this.state;
    vitals = vitals.filter((v) => v.id !== data.id);
    this.setState({ vitals });
  };

  resetPatientData = () => {
    this.setState({
      consultData: {
        id: null,
        startDate: new Date(),
        medicId: "",
        locationId: "",
        billMedication: false,
        title: "",
        complaints: "",
        diagnosis: "",
        clinicalFindings: "",
        treatments: "",
        drugName: "",
        refils: "",
        dosage: "",
        application: "",
        frequency: "",
        medications: [],
        drugDuration: "",
        notes: "",
        materials: "",
        recomendations: "",
        summary: "",
        surgeries: "",
      },
      vitals: [],
      vitalData: {
        bps: "",
        temp: "",
        pulse: "",
        respRate: "",
        bpd: "",
        weight: "",
        height: "",
        bmi: "",
        sp02: "",
      },
      patientData: {
        opdId: null,
      },
      noteReview: null,
    });
  };

  changeConsultation = (data) => {
    if (data.diagnoses) {
      this.setState((prevState) => ({
        consultData: {
          ...prevState.consultData,
          diagnoses: data.diagnoses,
        },
      }));
    }
    if (data.medications) {
      this.setState((prevState) => ({
        consultData: {
          ...prevState.consultData,
          medications: data.medications,
        },
      }));
    }
  };

  handleEditConsultation = (e) => {
    e.preventDefault();
    const { selectedRows } = this.state;
    if (selectedRows.length > 0) {
      // const p = selectedRows[0];
      // this.setState(prevState => ({
      //   patientData: {
      //     ...prevState.patientData,
      //     avatar: null,
      //     surname: p.surname,
      //     othernames: p.otherNames,
      //     telephone: p.telephone,
      //     nationality: p.nationality,
      //     phone: p.phone,
      //     email: p.email,
      //     idType: p.idType,
      //     days: p.days,
      //     months: p.months,
      //     years: p.years,
      //     occupation: p.occupation,
      //     idNo: p.idNo,
      //     refNo: p.refNo,
      //     residence: p.residence,
      //     town: p.town,
      //     postalAddress: p.postalAddress,
      //     emergRelation: p.emergRelation,
      //     emergName: p.emergName,
      //     emergContacts: p.emergContacts,
      //     postalCode: p.postalCode,
      //     streetRoad: p.streetRoad,
      //     loc: p.location
      //   }
      // }));
    }

    // this.setState({ patientMod: true });
  };

  handleDelConsultation = () => {
    const { selectedRows } = this.state;
    const _this = this;
    let consIds = [];
    for (let i = 0; i < selectedRows.length; i++) {
      consIds.push(selectedRows[i].id);
    }
    _this.props.destroyConsultation(consIds);
    // const v = new Noty({
    //   text:
    //     "You are about to delete this record . Are you sure you want to continue?",
    //   layout: "topCenter",
    //   type: "error",
    //   theme: "metroui",
    //   buttons: [
    //     Noty.button("Ok", "btn btn-info btn-sm btn-square mr-2 ", () => {
    //       _this.setState({
    //         selectedRows: []
    //       });
    //       //destroy document
    //       _this.props.destroyConsultation(consIds);
    //       new Noty({
    //         text: `Record deleted successfully!`,
    //         layout: "topRight",
    //         type: "success",
    //         timeout: 3000,
    //         theme: "metroui",
    //         function: () => {
    //           consIds = [];
    //           _this.setState({ selectedRows: [] });
    //         }
    //       }).show();
    //       v.close();
    //     }),
    //     Noty.button(
    //       "Cancel",
    //       "btn btn-outline-secondary btn-sm btn-square",
    //       () => {
    //         _this.setState({
    //           selectedRows: []
    //         });
    //         v.close();
    //       }
    //     )
    //   ]
    // }).show();
  };

  handleOptionList = (e, value) => {
    e.preventDefault();
    if (value !== null) {
      $(".optionDisplay").toggleClass("hidden");
    }
  };

  handleClickList = (e, name, value) => {
    e.preventDefault();
    $(".optionDisplay").toggleClass("hidden");
    this.setState((prevState) => ({
      bodySystemData: {
        ...prevState.bodySystemData,
        [name]: value,
      },
    }));
  };

  handleBodySystemChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      bodySystemData: {
        ...prevState.bodySystemData,
        [name]: value,
      },
    }));
  };

  componentDidMount() {
    const { roomStatus } = this.props;
    this.props.findQueues(roomStatus.roomId);
    //fetch medics
    this.props.fetchMedics();
  }

  render() {
    const {
      selectedRows,
      activeModTab,
      addConsultationMod,
      queueMod,
      summaryMod,
      consultData,
      vitalData,
      vitals,
      noteReview,
      opdData,
      bodySystemData,
    } = this.state;
    const {
      cp,
      roomQueues,
      findConsLoading,
      visits,
      savingConsultation,
      medics,
      consultationErrors,
    } = this.props;

    const columns = [
      {
        Header: "Visit Id",
        accessor: "visitId",
        minWidth: 40,
      },
      {
        Header: "Date of Visit",
        accessor: "dateOfVisit",
        minWidth: 105,
      },
      {
        Header: "Note",
        accessor: "consultation.title",
      },
      {
        Header: "Medic",
        accessor: "medic.name",
        minWidth: 70,
      },
      {
        Header: "Summary Report",
        accessor: "summaryReport",
        minWidth: 70,
        Cell: (props) => (
          <Button
            color="link"
            size="sm"
            className="p-0"
            onClick={(e) => this.handleSelectedVisit(e, props.original)}
          >
            <span className="">View Summary</span>
          </Button>
        ),
      },
    ];

    const queueCol = [
      {
        Header: "Queue No",
        accessor: "queueNo",
      },
      {
        Header: "OPD No",
        accessor: "opdNo",
      },
      {
        Header: "Name",
        accessor: "patientName",
      },
      {
        Header: "From",
        accessor: "fromRoom.depName",
      },
      {
        Header: "Mins",
        accessor: "mins",
      },
    ];

    const vitalsCol = [
      {
        Header: "General Examination",
        accessor: "generalExam",
      },
      {
        Header: "Remark",
        accessor: "remark",
      },
      {
        Header: "",
        accessor: "actions",
        Cell: (props) => (
          <Button
            color="link"
            size="sm"
            className="p-0"
            onClick={(e) => this.handleDelVital(e, props.original)}
          >
            <i className="fas fa-trash text-danger f-s-11" />
          </Button>
        ),
      },
    ];

    return (
      <div>
        <Row>
          <Col sm="12">
            <Card className="box" style={{ marginBottom: "15px" }}>
              <CardHeader className="box-header">
                <Row>
                  <Col sm="6">
                    <ul className="header-left">
                      <li>
                        <button
                          className="btn-box"
                          type="button"
                          onClick={this.toggleConsModal}
                        >
                          <i className="fa fa-plus c-primary" />
                          <span className="mini-title">Add Consultation</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-box"
                          type="button"
                          onClick={this.handleEditConsultation}
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
                          type="button"
                          className="btn-box"
                          onClick={this.handleDelConsultation}
                          disabled={
                            selectedRows && selectedRows.length ? false : true
                          }
                        >
                          <span>Delete</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-box"
                          type="button"
                          onClick={(e) => this.inQueueModal(e)}
                        >
                          <span className="bold">In Queue</span>
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
                    </ul>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="p-0">
                <Row>
                  <Col sm="8">
                    <ReactTable
                      data={visits}
                      columns={columns}
                      loading={findConsLoading}
                      className="-highlight -striped text-left"
                      pageSizeOptions={[17, 30, 40, 50]}
                      defaultPageSize={17}
                      getTrProps={(state, rowInfo) => {
                        if (rowInfo && rowInfo.row) {
                          return {
                            onClick: (e) => {
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
                                selectedRows,
                              });
                            },

                            onDoubleClick: (e) => {
                              e.preventDefault();
                              let noteReview = {};
                              noteReview = this.state.selectedRows[0];
                              this.setState({ noteReview });
                            },

                            style: {
                              background:
                                this.state.selectedRows.some(
                                  (e) => e.id === rowInfo.original.id
                                ) && "#42a5f533",
                            },
                          };
                        } else {
                          return {};
                        }
                      }}
                    />
                  </Col>
                  <Col sm="4">
                    <div
                      style={{
                        marginTop: "5px",
                        marginLeft: "-30px",
                        padding: "10px",
                        paddingBottom: "0px",
                        height: "calc(100vh - 165px)",
                        overflowY: "scroll",
                      }}
                    >
                      {noteReview ? (
                        noteReview.consultation ? (
                          <div>
                            {JSON.stringify(noteReview.consultation)}
                            <h6 className="bold">
                              {noteReview.consultation.title}
                            </h6>

                            <div>
                              <i className="text-muted">Clinical Summary</i>
                              <p>{noteReview.consultation.clinicalSummary}</p>
                            </div>
                          </div>
                        ) : (
                          <p className="empty-view">No data records yet</p>
                        )
                      ) : (
                        <p className="empty-view">No record selected</p>
                      )}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            {/* Add Consultation Modal */}
            <Modal
              isOpen={addConsultationMod}
              toggle={this.toggleConsModal}
              className={this.props.className}
              backdrop="static"
              fade={false}
              size="xl"
              modalClassName="modal_stretch animated fadeIn"
            >
              <ModalHeader className="m-0">
                <span className="modal-title f-s-14">
                  <i className="icon-user pr-1" />
                  Consultation - {cp.fullname}
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleConsModal}
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
                            className="btn-box"
                            onClick={this.saveConsultation}
                          >
                            {savingConsultation ? (
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
                            className="btn-box"
                            onClick={this.toggleConsModal}
                          >
                            <span>Cancel</span>
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
                <Row>
                  <Col sm="4" xl="3" className="sidel-bg">
                    <div className="modal-fluid consultation-fluid-l">
                      <div>
                        <div className="form-group">
                          <label htmlFor="consDate" className="bold mb-0">
                            Date
                          </label>
                          <Row>
                            <Col sm="12">
                              <DatePicker
                                id="consDate"
                                showPopperArrow={false}
                                selected={consultData.startDate}
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
                            value={consultData.medicId}
                            onChange={(e) => this.handleChangeCons(e)}
                            invalid={
                              consultationErrors.medic &&
                              consultationErrors.medic.length > 0
                                ? true
                                : false
                            }
                          >
                            <option value>--None--</option>
                            {medics && medics.length > 0 ? (
                              medics.map((m) => (
                                <option key={m.id} value={m.id}>
                                  {m.name}
                                </option>
                              ))
                            ) : (
                              <option value>No Medic record list</option>
                            )}
                          </Input>
                          <FormFeedback className="animated fadeIn">
                            {consultationErrors.medic}
                          </FormFeedback>
                        </div>
                        <div className="form-group  ">
                          <label htmlFor="location" className="bold mb-0">
                            Location
                          </label>
                          <Input id="location" className="form-control-xs" />
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
                            <span>Content Panel</span>
                          </ListGroupItem>
                          <ListGroupItem
                            onClick={() => this.toggleMiniBox(1)}
                            action
                            active={activeModTab === 1}
                          >
                            Body System
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
                      <div className=" f-s-12">
                        <FormGroup row>
                          <Col sm="12">
                            <FormGroup check inline>
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                id="billMedication0"
                                name="billMedication0"
                                value="1"
                              />
                              <Label
                                className="form-check-label"
                                check
                                htmlFor="billMedication0"
                              >
                                Ignore Consultation with Cost 0
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col sm="12">
                            <FormGroup check inline>
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                id="billMedication"
                                name="billMedication"
                                value="1"
                              />
                              <Label
                                className="form-check-label"
                                check
                                htmlFor="billMedication"
                              >
                                Bill Medcation
                              </Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </div>
                    </div>
                  </Col>
                  <Col sm="8" xl="9" className="sider-bg">
                    <div className="modal-fluid consultation-fluid">
                      <TabContent className="tab-box" activeTab={activeModTab}>
                        <TabPane tabId={0} className="animated fadeIn">
                          <ConsultationData
                            {...this.props}
                            consultData={consultData}
                            handleChangeCons={this.handleChangeCons}
                            changeConsultation={this.changeConsultation}
                          />
                        </TabPane>
                        <TabPane tabId={1} className="animated fadeIn">
                          <div className="consultation-wrapper">
                            <div className="d-flex-align">
                              <h6 className="f-s-14 bold">
                                Review of Body System
                              </h6>
                              <div
                                style={{
                                  position: "absolute",
                                  right: "30px",
                                  marginTop: "-10px",
                                }}
                              >
                                <Button
                                  color="link"
                                  type="button"
                                  className="f-s-14"
                                >
                                  Layout
                                </Button>
                              </div>
                            </div>
                            <div className="body-system">
                              <Row>
                                <Col sm="3">
                                  <h6>General</h6>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="fatigue"
                                      className="bold mb-0"
                                    >
                                      Fatigue
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="fatigue"
                                      name="fatigue"
                                      value={bodySystemData.fatigue}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={(e) =>
                                          this.handleOptionList(e)
                                        }
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul
                                        className="optionDisplay hidden"
                                        data-name="fatigue"
                                      >
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "fatigue",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "fatigue",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="fevers"
                                      className="bold mb-0"
                                    >
                                      Fevers
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="fevers"
                                      name="fevers"
                                      value={bodySystemData.fevers}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "fevers",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "fevers",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="headache"
                                      className="bold mb-0"
                                    >
                                      Headache
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="headache"
                                      name="headache"
                                      value={bodySystemData.headache}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "headache",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "headache",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="weightLoss"
                                      className="bold mb-0"
                                    >
                                      Weight Loss
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="weightLoss"
                                      name="weightLoss"
                                      value={bodySystemData.weightLoss}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "weightLoss",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "weightLoss",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label
                                      htmlFor="otherGeneral"
                                      className="bold mb-0"
                                    >
                                      Other
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="otherGeneral"
                                      name="otherGeneral"
                                      value={bodySystemData.otherGeneral}
                                      onChange={this.handleBodySystemChange}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col sm="3">
                                  <h6>Cardiovascular</h6>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="chestPain"
                                      className="bold mb-0"
                                    >
                                      Chest pain
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="chestPain"
                                      name="chestPain"
                                      value={bodySystemData.chestPain}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line  */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "chestPain",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "chestPain",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="difficultBreath"
                                      className="bold mb-0"
                                    >
                                      Difficult Breathing
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="difficultBreath"
                                      name="difficultBreath"
                                      value={bodySystemData.difficultBreath}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "difficultBreath",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "difficultBreath",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="palpilations"
                                      className="bold mb-0"
                                    >
                                      Palpitations
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="palpilations"
                                      name="palpilations"
                                      value={bodySystemData.palpilations}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "palpilations",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "palpilations",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="swelling"
                                      className="bold mb-0"
                                    >
                                      Swelling
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="swelling"
                                      name="swelling"
                                      value={bodySystemData.swelling}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "swelling",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "swelling",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label
                                      htmlFor="otherCardiovascular"
                                      className="bold mb-0"
                                    >
                                      Other
                                    </Label>
                                    <Input
                                      id="otherCardiovascular"
                                      className="form-control form-control-xs"
                                      value={bodySystemData.otherCardiovascular}
                                      name="otherCardiovascular"
                                      onChange={this.handleBodySystemChange}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col sm="3">
                                  <h6>Eyes</h6>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="bluredVision"
                                      className="bold mb-0"
                                    >
                                      Blurred Vission
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="bluredVision"
                                      name="bluredVision"
                                      value={bodySystemData.bluredVision}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "bluredVision",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "bluredVision",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>

                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="doubleVission"
                                      className="bold mb-0"
                                    >
                                      Double Vission
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="doubleVission"
                                      name="doubleVission"
                                      value={bodySystemData.doubleVission}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "doubleVission",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "doubleVission",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label
                                      htmlFor="otherEyes"
                                      className="bold mb-0"
                                    >
                                      Other
                                    </Label>
                                    <Input
                                      id="otherEyes"
                                      className="form-control-xs"
                                      name="otherEyes"
                                      value={bodySystemData.otherEyes}
                                      onChange={this.handleBodySystemChange}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col sm="3">
                                  <h6>Respiratory</h6>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="wheezing"
                                      className="bold mb-0"
                                    >
                                      Wheezing
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="wheezing"
                                      name="wheezing"
                                      value={bodySystemData.wheezing}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={this.handleOptionList}
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "wheezing",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "wheezing",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="shortnessBreath"
                                      className="bold mb-0"
                                    >
                                      Shortness of breath
                                    </Label>
                                    <Input
                                      className="form-control-xs"
                                      id="shortnessBreath"
                                      name="shortnessBreath"
                                      value={bodySystemData.shortnessBreath}
                                      onChange={this.handleBodySystemChange}
                                    />
                                    <div className="optionList">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        href="#"
                                        onClick={(e) =>
                                          this.handleOptionList(
                                            e,
                                            "shortnessBreath"
                                          )
                                        }
                                      >
                                        <i className="fa fa-caret-down"></i>
                                      </a>
                                      <ul className="optionDisplay hidden">
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "shortnessBreath",
                                              "Yes"
                                            )
                                          }
                                        >
                                          Yes
                                        </li>
                                        <li
                                          onClick={(e) =>
                                            this.handleClickList(
                                              e,
                                              "shortnessBreath",
                                              "No"
                                            )
                                          }
                                        >
                                          No
                                        </li>
                                      </ul>
                                    </div>
                                  </FormGroup>

                                  <FormGroup>
                                    <Label
                                      htmlFor="otherRespiratory"
                                      className="bold mb-0"
                                    >
                                      Other
                                    </Label>
                                    <Input
                                      id="otherRespiratory"
                                      className="form-control form-control-xs"
                                      name="otherRespiratory"
                                      value={bodySystemData.otherRespiratory}
                                      onChange={this.handleBodySystemChange}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId={2} className="animated fadeIn">
                          <div className="consultation-wrapper">
                            <div className="d-flex-align">
                              <h6 className="f-s-14 bold">Vital Signs</h6>
                              <div
                                style={{
                                  position: "absolute",
                                  right: "30px",
                                  marginTop: "-10px",
                                  display: "none",
                                }}
                              >
                                <Button
                                  color="link"
                                  type="button"
                                  className="f-s-14"
                                >
                                  Layout
                                </Button>
                              </div>
                            </div>
                            <div className="pt-2 mr-3">
                              <Row>
                                <Col sm="3">
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="bps" className="bold mb-0">
                                      BP Systolic
                                    </Label>
                                    <Input
                                      type="number"
                                      className="form-control-xs"
                                      id="bps"
                                      name="bps"
                                      value={vitalData.bps}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="bpd" className="bold mb-0">
                                      BP Distolic
                                    </Label>
                                    <Input
                                      type="number"
                                      className="form-control-xs"
                                      id="bpd"
                                      name="bpd"
                                      value={vitalData.bpd}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="sp02" className="bold mb-0">
                                      Sp02
                                    </Label>
                                    <Input
                                      type="number"
                                      className="form-control-xs"
                                      id="sp02"
                                      name="sp02"
                                      value={vitalData.sp02}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col sm="3">
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="temp" className="bold mb-0">
                                      Temperature
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control-xs"
                                      id="temp"
                                      name="temp"
                                      value={vitalData.temp}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="weight"
                                      className="bold mb-0"
                                    >
                                      Weight
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control-xs"
                                      id="weight"
                                      name="weight"
                                      value={vitalData.weight}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col sm="3">
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="pulse"
                                      className="bold mb-0"
                                    >
                                      Pulse
                                    </Label>
                                    <Input
                                      type="number"
                                      className="form-control-xs"
                                      id="pulse"
                                      name="pulse"
                                      value={vitalData.pulse}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="height"
                                      className="bold mb-0"
                                    >
                                      Height
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control-xs"
                                      id="height"
                                      name="height"
                                      value={vitalData.height}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col sm="3">
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="respRate"
                                      className="bold mb-0"
                                    >
                                      Resp Rate (bpm)
                                    </Label>
                                    <Input
                                      type="number"
                                      className="form-control-xs"
                                      id="respRate"
                                      name="respRate"
                                      value={vitalData.respRate}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="bmi" className="bold mb-0">
                                      BMI
                                    </Label>
                                    <Input
                                      type="number"
                                      className="form-control-xs"
                                      id="bmi"
                                      name="bmi"
                                      value={vitalData.bmi}
                                      onChange={(e) =>
                                        this.handleVitalChange(e)
                                      }
                                      onBlur={(e) => this.handleVitalBlur(e)}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col sm="12">
                                  <div className="mt-2">
                                    <ReactTable
                                      data={vitals}
                                      columns={vitalsCol}
                                      showPagination={false}
                                      sortable={false}
                                      className="-highlight -striped text-left"
                                      defaultPageSize={9}
                                    ></ReactTable>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId={3} className="animated fadeIn">
                          <div className="consultation-wrapper">
                            <div>
                              <h6>Physical Exam</h6>
                            </div>
                            <div>
                              <Row>
                                <Col sm="3">
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="gen" className="bold mb-0">
                                      General
                                    </Label>
                                    <select
                                      id="gen"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="head" className="bold mb-0">
                                      Head
                                    </Label>
                                    <select
                                      id="head"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="eyes" className="bold mb-0">
                                      Eyes
                                    </Label>
                                    <select
                                      id="eyes"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="ears" className="bold mb-0">
                                      Ears
                                    </Label>
                                    <select
                                      id="ears"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="nose" className="bold mb-0">
                                      Nose
                                    </Label>
                                    <select
                                      id="nose"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="mnt" className="bold mb-0">
                                      Mouth and Throat
                                    </Label>
                                    <select
                                      id="mnt"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="neck" className="bold mb-0">
                                      Neck
                                    </Label>
                                    <select
                                      id="neck"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="breasts"
                                      className="bold mb-0"
                                    >
                                      Breasts
                                    </Label>
                                    <select
                                      id="breasts"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label
                                      htmlFor="gatsro"
                                      className="bold mb-0"
                                    >
                                      Gastrointestinal
                                    </Label>
                                    <select
                                      id="gatsro"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="gent" className="bold mb-0">
                                      Genitourinary
                                    </Label>
                                    <select
                                      id="gent"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="neur" className="bold mb-0">
                                      Neurologic
                                    </Label>
                                    <select
                                      id="neur"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                  <FormGroup className="option-dropdown">
                                    <Label htmlFor="psy" className="bold mb-0">
                                      Psyhiatric
                                    </Label>
                                    <select
                                      id="psy"
                                      className="form-control form-control-xs"
                                    >
                                      <option />
                                      <option />
                                    </select>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId={4} className="animated fadeIn">
                          <LabRequest {...this.props} />
                        </TabPane>
                        <TabPane tabId={5} className="animated fadeIn">
                          <ImageRequest {...this.props} />
                        </TabPane>
                        <TabPane tabId={6} className="docFiles animated fadeIn">
                          <AddDocument {...this.props} />
                        </TabPane>
                        <TabPane
                          tabId={7}
                          className="animated fadeIn"
                          style={{ padding: "0px" }}
                        >
                          <BillingData {...this.props} />
                        </TabPane>
                      </TabContent>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>

            {/* View Summary  Modal */}
            <Modal
              isOpen={summaryMod}
              toggle={this.summaryModal}
              className={this.props.className}
              fade={false}
              size="lg"
              modalClassName="modal_stretch animated fadeIn"
            >
              <ModalHeader className="m-0">
                <span className="modal-title f-s-14">
                  <i className="fa fa-files pr-1" />
                  View Summary Report
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.summaryModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="p-0">
                <SummaryReport opdData={opdData} />
              </ModalBody>
            </Modal>

            {/* Queue Modal */}
            <Modal
              isOpen={queueMod}
              toggle={this.inQueueModal}
              className={this.props.className}
              fade={false}
              autoFocus={true}
              size="lg"
              modalClassName="modal_stretch animated fadeIn"
            >
              <ModalHeader className="m-0">
                <span className="modal-title f-s-14">
                  <i className="icon-list pr-1" />
                  Queue List
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.inQueueModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="p-0">
                <Row>
                  <Col sm="12">
                    <ReactTable
                      data={roomQueues}
                      columns={queueCol}
                      // loading={loadPatients}
                      showPageSizeOptions={false}
                      className="-highlight -striped text-left"
                      defaultPageSize={17}
                      getTrProps={(state, rowInfo) => {
                        if (rowInfo && rowInfo.row) {
                          return {
                            onClick: (e) => {
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
                                selectedRows,
                              });
                            },

                            onDoubleClick: (e) => {
                              e.preventDefault();
                              this.props.setCurrentPatient(rowInfo.original);
                              this.setState({ queueMod: false });
                              this.props.history.push("/records/patientChart");
                            },

                            style: {
                              background:
                                this.state.selectedRows.some(
                                  (e) => e.id === rowInfo.original.id
                                ) && "#42a5f533",
                            },
                          };
                        } else {
                          return {};
                        }
                      }}
                    />
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  roomQueues: state.queues.roomQueues,
  roomStatus: state.roomStatus.roomStatus,
  findConsLoading: state.consultations.findConsLoading,
  visits: state.consultations.visits,
  savingConsultation: state.consultations.savingConsultation,
  medics: state.medics.medics,
  consultationErrors: state.consultations.consultationErrors,
});

const mapDispatchToProps = {
  findQueues,
  setCurrentPatient,
  createConsultation,
  fetchMedics,
  destroyConsultation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Consultation);

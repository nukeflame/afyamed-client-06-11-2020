import React, { Component } from "react";
import {
  Card,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  CardHeader,
  Col,
  Row,
  FormGroup,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Button,
  Input,
  Label,
  ButtonDropdown,
  Nav,
  NavItem,
  NavLink,
  Form,
  TabContent,
  TabPane,
} from "reactstrap";
import { connect } from "react-redux";
import {
  fetchPatients,
  createPatient,
  destroyPatient,
  setCurrentPatient,
  updatePatient,
} from "../../../redux/actions/patientActions";
import { createQueue } from "../../../redux/actions/queueActions";
import ReactTable from "react-table";
import PatientDetails from "./PatientDetails";
import Payer from "./Payer";
import moment from "moment";
import Noty from "noty";
import classNames from "classnames";
import Swal from "sweetalert2";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import laoderBtnSm from "../../../assets/loader/sharp-sm.svg";

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadPatients: false,
      delPtMod: false,
      patientMod: false,
      queueMod: false,
      schemeMod: false,
      showSearchBar: false,
      dropdownOpen: false,
      webcamData: {
        webcamMod: false,
        enableWebcam: false,
        errorDevice: false,
        facingMode: { exact: "environment" },
        imageName: "",
        sampleImage: "",
      },
      activePatient: "1",
      activeNav: new Array(4).fill("1"),
      selectedRows: [],
      selectedTd: "",
      activePatients: "1",
      isEditPatient: false,
      patientData: {
        id: "",
        avatar: null,
        avatarWeb: false,
        surname: "",
        othernames: "",
        telephone: "",
        nationality: "",
        phone: "",
        email: "",
        idType: "",
        dob: "",
        weeks: "",
        months: "",
        years: "",
        sex: "Male",
        occupation: "",
        idNo: "",
        refNo: "",
        residence: "",
        town: "",
        postalAddress: "",
        emergRelation: "",
        emergName: "",
        emergContacts: "",
        postalCode: "",
        streetRoad: "",
        loc: "",
      },
      queueData: {
        patientId: "",
        patientNo: "",
        surname: "",
        otherNames: "",
        opNo: "",
        age: "",
        from: "",
        to: "1",
        scheme: "1",
        clinic: "1",
        note: "",
        printTicket: false,
        isEmergency: false,
      },
    };
  }

  togglePatientModal = () => {
    const { patientMod } = this.state;
    this.setState({
      patientMod: !patientMod,
      activeNav: new Array(7).fill("1"),
    });
    this.resetPatientData();
  };

  toggleDropDown = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  };

  handleChangeSelected = (e, t) => {
    this.setState((prevState) => ({
      patientData: {
        ...prevState.patientData,
        [t]: e.value,
      },
    }));
  };

  toggleNav = (tabPane, tab) => {
    const newArray = this.state.activeNav.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeNav: newArray,
    });
  };

  // handle input change
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      patientData: {
        ...prevState.patientData,
        [name]: value,
      },
    }));
  };

  handleChangeDate = (data) => {
    this.setState((prevState) => ({
      patientData: {
        ...prevState.patientData,
        dob: data,
      },
    }));
  };

  // toogle camera
  startWebcamToggle = (e) => {
    e.preventDefault();
    const { webcamMod } = this.state.webcamData;
    this.setState((prevState) => ({
      webcamData: {
        ...prevState.webcamData,
        webcamMod: !webcamMod,
        enableWebcam: false,
        imageName: "",
      },
      patientData: {
        ...prevState.patientData,
        avatar: null,
        avatarWeb: false,
      },
    }));
  };

  // enable cam fn
  handleEnableWebcam = () => {
    const { enableWebcam } = this.state.webcamData;
    this.setState((prevState) => ({
      webcamData: {
        ...prevState.webcamData,
        enableWebcam: !enableWebcam,
      },
    }));
  };

  // set webcam reference
  websetRef = (webcam) => {
    this.webcam = webcam;
  };

  // set browse file reference
  browseRefImg = (browseImg) => {
    this.browseImg = browseImg;
  };

  // btn upload manual
  handleUploadImage = (e) => {
    e.preventDefault();
    this.browseImg.click();
  };

  //file change
  handleFileChange = (e) => {
    e.persist();
    let reader,
      file = this.browseImg.files[0];

    if (file.length === 0) {
      return;
    }

    reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.setState((prevState) => ({
        patientData: {
          ...prevState.patientData,
          avatar: e.target.result,
        },
      }));
    };
  };

  // capture image
  captureImage = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState((prevState) => ({
      webcamData: {
        ...prevState.webcamData,
        imageName: `IMG_${moment().format("Ymd_h:m:s")}.jpg`,
        sampleImage: imageSrc,
      },
    }));
  };

  saveCapture = () => {
    const { sampleImage } = this.state.webcamData;
    this.setState((prevState) => ({
      patientData: {
        ...prevState.patientData,
        avatar: sampleImage,
      },
      webcamData: {
        ...prevState.webcamData,
        webcamMod: false,
        enableWebcam: false,
        sampleImage: "",
      },
    }));
  };

  // camera layout
  handleCameraView = (e) => {
    let val = e.target.value;
    if (val === "user") {
      this.setState((prevState) => ({
        webcamData: {
          ...prevState.webcamData,
          facingMode: "user",
          sampleImage: "",
        },
      }));
    } else if (val === "environment") {
      this.setState((prevState) => ({
        webcamData: {
          ...prevState.webcamData,
          facingMode: { exact: "environment" },
          sampleImage: "",
        },
      }));
    }
  };

  // remove img
  eraseImage = (e) => {
    this.setState((prevState) => ({
      webcamData: {
        ...prevState.webcamData,
        imageSrc: "",
        sampleImage: "",
      },
      patientData: {
        ...prevState.patientData,
        avatar: null,
      },
    }));
  };

  // scheme modal
  schemeModal = (e) => {
    e.preventDefault();
    const { schemeMod } = this.state;
    this.setState({
      schemeMod: !schemeMod,
    });
  };

  //handle forward to doctor
  savePatient = (e) => {
    e.preventDefault();
    const _this = this;
    const { roomStatus } = this.props;
    const { patientData, isEditPatient } = this.state;
    // process data to database
    if (isEditPatient) {
      this.props.updatePatient(patientData).then((res) => {
        // const patient = res.data;
        this.setState({ patientMod: false });
        this.resetPatientData();
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
        });
        Toast.fire({
          type: "success",
          title: "Patient Updated!",
        });
      });
    } else {
      this.props.createPatient(patientData).then((res) => {
        const patient = res.data;
        this.setState({ patientMod: false });
        this.resetPatientData();
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
        });
        Toast.fire({
          type: "success",
          title: "Patient Saved!",
        });
        const v = new Noty({
          text: patient.fullname,
          layout: "topRight",
          type: "success",
          theme: "metroui",
          closeWith: ["click", "button"],
          buttons: [
            Noty.button(
              "Queue this Patient <i class='fas fa-hand-point-right f-s-13'/>",
              "btn btn-info btn-sm btn-square",
              function () {
                _this.setState((prevState) => ({
                  queueData: {
                    ...prevState.queueData,
                    patientId: patient.id,
                    patientNo: patient.patientNo,
                    surname: patient.surname,
                    otherNames: patient.otherNames,
                    opNo: patient.patientNo,
                    age: patient.age,
                    from: roomStatus.roomId,
                    to: "1",
                    scheme: "1",
                    clinic: "1",
                    note: "",
                    printTicket: false,
                    isEmergency: false,
                  },
                }));
                _this.setState({ queueMod: true });
                v.close();
              }
            ),
          ],
        }).show();
      });
    }
  };

  delPatientModal = (e) => {
    e.preventDefault();
    const { delPtMod } = this.state;
    this.setState({
      delPtMod: !delPtMod,
    });
  };

  delPatient = () => {
    const { selectedRows } = this.state;
    this.props.destroyPatient(selectedRows);
    this.setState({
      delPtMod: false,
      selected: null,
    });
  };

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar,
    });
  };

  handleImport = () => {
    new Noty({
      timeout: 2500,
      type: "success",
      layout: "topCenter",
      text: "<span>Saved</span>",
    }).show();
  };

  handleSelectedSearch = (e, props) => {
    e.preventDefault();
    this.props.setCurrentPatient(props);
    this.props.history.push("/records/patientChart");
  };

  editPatient = (e) => {
    e.preventDefault();
    const { selectedRows } = this.state;
    if (selectedRows.length > 0) {
      const p = selectedRows[0];
      this.setState((prevState) => ({
        isEditPatient: true,
        patientData: {
          ...prevState.patientData,
          id: p.id,
          avatar: p.avatar,
          avatarWeb: true,
          surname: p.surname,
          othernames: p.otherNames,
          nationality: p.nationality,
          phone: p.phone !== null ? p.phone : "",
          idType: p.idType !== null ? p.idType : "",
          dob: p.dob,
          weeks: p.weeks !== null ? p.weeks : "",
          months: p.months !== null ? p.months : "",
          years: p.years !== null ? p.years : "",
          occupation: p.occupation !== null ? p.occupation : "",
          idNo: p.idNo !== null ? p.idNo : "",
          residence: p.residence !== null ? p.residence : "",
          town: p.town !== null ? p.town : "",
          emergRelation: p.emergRelation !== null ? p.emergRelation : "",
          emergName: p.emergName !== null ? p.emergName : "",
          emergContacts: p.emergContacts !== null ? p.emergContacts : "",
          sex: p.gender !== null ? p.gender : "",
          telephone: p.telephone !== null ? p.telephone : "",
          refNo: p.refNo !== null ? p.refNo : "",
          email: p.email !== null ? p.email : "",
          postalAddress: p.postalAddress !== null ? p.postalAddress : "",
          postalCode: p.postalCode !== null ? p.postalCode : "",
          streetRoad: p.streetRoad !== null ? p.streetRoad : "",
          loc: p.location !== null ? p.location : "",
        },
      }));
    }

    this.setState({ patientMod: true });
  };

  queuePatientClose = () => {
    this.setState({ queueMod: false });
  };

  queuePatient = (e) => {
    e.preventDefault();
    const { selectedRows } = this.state;
    const pt = selectedRows[0];
    const { roomStatus } = this.props;
    this.setState((prevState) => ({
      queueData: {
        ...prevState.queue,
        patientId: pt.id,
        patientNo: pt.patientNo,
        surname: pt.surname,
        otherNames: pt.otherNames,
        opNo: pt.patientNo,
        age: pt.age,
        from: roomStatus.roomId,
        to: "1",
        scheme: "1",
        clinic: "1",
        note: "",
        printTicket: false,
        isEmergency: false,
      },
    }));
    this.setState({ queueMod: true });
  };

  saveQueuePatient = () => {
    const { queueData } = this.state;
    this.props.createQueue(queueData).then((res) => {
      const { patient, toRoom } = res.data;
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
      });
      Toast.fire({
        type: "success",
        title: `${patient.surname} queued to ${toRoom.depName}`,
      });
      this.setState({ queueMod: false });
    });
  };

  handleQueueChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      queueData: {
        ...prevState.queueData,
        [name]: value,
      },
    }));
  };

  handleQueueCheck = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      queueData: {
        ...prevState.queueData,
        [name]: checked,
      },
    }));
  };

  resetPatientData = () => {
    this.setState((prevState) => ({
      isEditPatient: false,
      patientData: {
        ...prevState.patientData,
        id: "",
        avatar: null,
        avatarWeb: false,
        surname: "",
        othernames: "",
        telephone: "",
        nationality: "",
        phone: "",
        email: "",
        idType: "",
        dob: "",
        weeks: "",
        months: "",
        years: "",
        sex: "Male",
        occupation: "",
        idNo: "",
        refNo: "",
        residence: "",
        town: "",
        postalAddress: "",
        emergRelation: "",
        emergName: "",
        emergContacts: "",
        postalCode: "",
        streetRoad: "",
        loc: "",
      },
    }));
  };

  componentDidMount() {
    // fetch patients
    this.props.fetchPatients();
  }

  render() {
    const {
      patientMod,
      activeNav,
      patientData,
      webcamData,
      selectedRows,
      delPtMod,
      dropdownOpen,
      showSearchBar,
      activePatient,
      loadPatients,
      queueMod,
      schemeMod,
      queueData,
    } = this.state;

    const {
      patients,
      departments,
      saveProcessing,
      clinics,
      queueProcessing,
    } = this.props;

    const patientCol = [
      {
        Header: "Patient No.",
        accessor: "patientNo",
        minWidth: 40,
      },
      {
        Header: "Patient",
        accessor: "surname",
        minWidth: 130,
        Cell: (props) => (
          //  eslint-disable-next-line
          <a
            href="#"
            className="patient-select"
            onClick={(e) => this.handleSelectedSearch(e, props.original)}
          >
            <span>{props.original.fullname}</span>
          </a>
        ),
      },
      {
        Header: "Age",
        accessor: "age",
        minWidth: 50,
      },
      {
        Header: "I.D No.",
        accessor: "idNo",
        minWidth: 90,
      },
      {
        Header: "Address",
        accessor: "adress",
        minWidth: 150,
        Cell: (props) => (
          <span>
            {props.original.residence !== null ? props.original.residence : ""}{" "}
            - {props.original.town !== null ? props.original.town.name : ""}
          </span>
        ),
      },

      {
        Header: "Entry Date",
        accessor: "entryDate",
        minWidth: 150,
      },
      {
        Header: "Created By",
        accessor: "regUser.fullname",
      },
    ];

    const chemeData = [
      {
        schemeName: "NHIF Outpatient",
        membershipNo: "27343838",
        isPrinciple: "Yes",
        princMember: "Memenr",
      },
    ];

    const schemeCol = [
      {
        Header: "Scheme Name",
        accessor: "schemeName",
        minWidth: 200,
      },
      {
        Header: "Principal Member",
        accessor: "princMember",
      },
      {
        Header: "Membership No.",
        accessor: "membershipNo",
      },
      {
        Header: "Is Principal Member",
        accessor: "isPrinciple",
      },
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <div className="navitem-header pb-2">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={
                      "pl-0 disabled " +
                      classNames({
                        active: activePatient === "1",
                      })
                    }
                  >
                    <i className="fa fa-user-plus nav-ico pr-1" />
                    <span className="nav-title">Patient Registry</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
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
                          onClick={this.togglePatientModal}
                        >
                          <i className="fa fa-plus c-primary" />
                          <span className="mini-title">New Patient</span>
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
                          onClick={(e) => this.queuePatient(e)}
                          disabled={
                            selectedRows && selectedRows.length === 1
                              ? false
                              : true
                          }
                        >
                          <span
                            className={classNames({
                              bold: selectedRows && selectedRows.length === 1,
                            })}
                          >
                            Queue
                          </span>
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
                        <button className="btn-box" onClick={this.handleImport}>
                          <i className="fa fa-file" />
                          <span>Import</span>
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
                          <Button size="sm" className="btn-default btn-square">
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
                  data={patients}
                  columns={patientCol}
                  loading={loadPatients}
                  className="-highlight -striped text-left"
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
              </div>
            </Card>

            {/* Add Patient Modal */}
            <Modal
              isOpen={patientMod}
              toggle={this.togglePatientModal}
              backdrop="static"
              fade={false}
              className={this.props.className}
              size="lg"
              modalClassName="modal_stretch animated fadeIn"
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="icon-user pr-1" />
                  Patient Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.togglePatientModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="md-body">
                <Row>
                  <Col sm="12">
                    <Form>
                      <Nav tabs className="nav_tab">
                        <NavItem>
                          <NavLink
                            active={activeNav[0] === "1"}
                            onClick={() => {
                              this.toggleNav(0, "1");
                            }}
                            className="bold"
                          >
                            Patient
                          </NavLink>
                        </NavItem>
                        {/*<NavItem>
                          <NavLink
                            active={activeNav[0] === "2"}
                            onClick={() => {
                              this.toggleNav(0, "2");
                            }}
                            className="bold"
                          >
                            Notes
                          </NavLink>
                        </NavItem>*/}
                        <NavItem>
                          <NavLink
                            active={activeNav[0] === "3"}
                            onClick={() => {
                              this.toggleNav(0, "3");
                            }}
                            className="bold"
                          >
                            Schemes
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            active={activeNav[0] === "4"}
                            onClick={() => {
                              this.toggleNav(0, "4");
                            }}
                            className="bold"
                          >
                            BarCode
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={activeNav[0]}>
                        <TabPane tabId="1">
                          <div className="row-tapane animated fadeIn">
                            <PatientDetails
                              patientData={patientData}
                              handleChange={this.handleChange}
                              handleChangeDate={this.handleChangeDate}
                              handleChangeSelected={this.handleChangeSelected}
                              handleEnableWebcam={this.handleEnableWebcam}
                              captureImage={this.captureImage}
                              websetRef={this.websetRef}
                              browseRefImg={this.browseRefImg}
                              handleCameraView={this.handleCameraView}
                              saveCapture={this.saveCapture}
                              startWebcamToggle={this.startWebcamToggle}
                              handleUploadImage={this.handleUploadImage}
                              handleFileChange={this.handleFileChange}
                              eraseImage={this.eraseImage}
                              webcamData={webcamData}
                            />
                          </div>
                        </TabPane>
                        <TabPane tabId="2">
                          <div className="animated fadeIn">
                            <FormGroup className="my-3">
                              <Label>Notes:</Label>
                            </FormGroup>
                          </div>
                        </TabPane>
                        <TabPane tabId="3">
                          <div className="row-tapane animated fadeIn">
                            <Row>
                              <Col sm="12">
                                <Row className="my-3">
                                  <Col md="6">
                                    <Button
                                      color="secondary"
                                      size="sm"
                                      className="btn-square btn-top mr-2"
                                      onClick={this.schemeModal}
                                    >
                                      <i className="fa fa-plus" /> Add Customer
                                      Scheme
                                    </Button>
                                  </Col>
                                </Row>
                                <div className="mb-3">
                                  <ReactTable
                                    data={chemeData}
                                    columns={schemeCol}
                                    defaultPageSize={15}
                                    className="-highlight text-left"
                                    showPagination={false}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </TabPane>
                        <TabPane tabId="4">
                          <div className="row-tapane animated fadeIn">
                            <Payer />
                          </div>
                        </TabPane>
                      </TabContent>
                    </Form>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="text-left">
                  {activeNav[0] === "1" ? (
                    <Button
                      color="danger"
                      size="sm"
                      className="btn-square btn-top text-left"
                      type="button"
                    >
                      Smart Card
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <Button
                    color="secondary"
                    size="sm"
                    className="btn-square btn-top mr-2"
                    type="button"
                    onClick={this.togglePatientModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="info"
                    size="sm"
                    className="btn-square btn-top"
                    type="button"
                    disabled={saveProcessing ? true : false}
                    onClick={this.savePatient}
                  >
                    {saveProcessing ? (
                      <span>
                        Proccessing <img src={laoderBtnSm} alt="" />
                      </span>
                    ) : (
                      <span>
                        <i className="fas fa-save pr-1" />
                        Save &amp; Close
                      </span>
                    )}
                  </Button>
                </div>
              </ModalFooter>
            </Modal>

            {/* Add Customer Scheme */}
            <Modal
              isOpen={schemeMod}
              toggle={this.schemeModal}
              backdrop="static"
              className={this.props.className}
              style={{ top: "10%" }}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="icon-user pr-1" />
                  Scheme Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.schemeModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="md-body">
                <Row className="mt-1 p-2">
                  <Col sm="12">
                    <FormGroup row>
                      <Col sm="6">
                        <FormGroup>
                          <Label htmlFor="surname">Select Scheme:</Label>
                          <Input
                            type="select"
                            id="surname"
                            className="form-control-xs"
                            autoComplete="off"
                          >
                            <option>NHIF Outpatient</option>
                            <option>AAR Insurance</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup>
                          <Label htmlFor="surname">Principal Member:</Label>
                          <Input
                            id="surname"
                            className="form-control-xs"
                            autoComplete="off"
                          />
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm="6">
                        <FormGroup>
                          <Label htmlFor="surname">Membership No.</Label>
                          <Input
                            id="surname"
                            className="form-control-xs"
                            autoComplete="off"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="check_box">
                          <Input
                            type="checkbox"
                            id="surname"
                            checked={false}
                            className="check_box--input"
                            autoComplete="off"
                          />
                          <label htmlFor="surname" className="check_box--label">
                            <span class="check_box--label-text">
                              Is Principal Member
                            </span>
                          </label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div>
                  <Button size="sm" className="btn-square mr-2" color="default">
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    className="btn-square"
                    color="info"
                    onClick={this.schemeModal}
                  >
                    Save &amp; Close
                  </Button>
                </div>
              </ModalFooter>
            </Modal>

            {/* Delete Patient Modal */}
            <Modal
              isOpen={delPtMod}
              toggle={this.delPatientModal}
              style={{ top: "25%" }}
              fade={false}
              className={this.props.className}
              size="sm"
              modalClassName="modal_stretch animated fadeIn"
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fa fa-trash pr-1" />
                  Delete Patient
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.delPatientModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <p>Are you sure? This patients will be deleted permanently!</p>
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

            {/* Queue Patient Modal */}
            <Modal
              isOpen={queueMod}
              toggle={this.queuePatient}
              className={this.props.className}
              backdrop="static"
              fade={false}
              modalClassName="modal_stretch animated fadeInUp"
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fa fa-tasks pr-1" /> Queue Patient
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.queuePatientClose}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <div className="modal-fluid">
                  <div className="form-hr">
                    <h6 className="form-title">Patient Details</h6>
                    <hr />
                  </div>
                  <FormGroup row>
                    <Col sm="6">
                      <Label htmlFor="queue-surname">Surname</Label>
                      <Input
                        id="queue-surname"
                        className="form-control-xs bold"
                        disabled
                        name="surname"
                        onChange={(e) => this.handleQueueChange(e)}
                        value={queueData.surname}
                      />
                    </Col>
                    <Col sm="6">
                      <Label htmlFor="queue-names">Other Names</Label>
                      <Input
                        id="queue-names"
                        className="form-control-xs bold"
                        disabled
                        name="otherNames"
                        onChange={(e) => this.handleQueueChange(e)}
                        value={queueData.otherNames}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="6">
                      <Label htmlFor="queue-op">O.P No.</Label>
                      <Input
                        id="queue-op"
                        className="form-control-xs bold"
                        disabled
                        name="opNo"
                        onChange={(e) => this.handleQueueChange(e)}
                        value={queueData.opNo}
                      />
                    </Col>
                    <Col sm="6">
                      <Label htmlFor="queue-age">Age</Label>
                      <Input
                        id="queue-age"
                        className="form-control-xs bold"
                        disabled
                        name="age"
                        onChange={(e) => this.handleQueueChange(e)}
                        value={queueData.age + "yr(s)"}
                      />
                    </Col>
                  </FormGroup>
                  <div className="form-hr">
                    <h6 className="form-title">Queue Info</h6>
                    <hr />
                  </div>
                  <FormGroup row>
                    <Col sm="6">
                      <Label htmlFor="queue-from" className="bold">
                        From
                      </Label>
                      <Input
                        id="queue-from"
                        className="form-control-xs"
                        type="select"
                        name="from"
                        value={queueData.from}
                        onChange={(e) => this.handleQueueChange(e)}
                      >
                        <option value disabled>
                          --Select--
                        </option>
                        {departments && departments.length > 0
                          ? departments.map((dp) => (
                              <option key={dp.id} value={dp.id}>
                                {dp.depName}
                              </option>
                            ))
                          : "No record found."}
                      </Input>
                    </Col>
                    <Col sm="6">
                      <Label htmlFor="queue-to" className="bold">
                        To
                      </Label>
                      <Input
                        id="queue-to"
                        className="form-control-xs"
                        type="select"
                        name="to"
                        value={queueData.to}
                        onChange={(e) => this.handleQueueChange(e)}
                      >
                        <option value disabled>
                          --Select--
                        </option>
                        {departments && departments.length > 0
                          ? departments.map((dp) => (
                              <option key={dp.id} value={dp.id}>
                                {dp.depName}
                              </option>
                            ))
                          : "No record found."}
                      </Input>
                    </Col>
                  </FormGroup>
                  <Row>
                    <Col sm="6">
                      <FormGroup>
                        <Label htmlFor="queue-clinic" className="bold">
                          Clinic
                        </Label>
                        <Input
                          id="queue-clinic"
                          className="form-control-xs"
                          type="select"
                          name="clinic"
                          value={queueData.clinic}
                          onChange={this.handleQueueChange}
                        >
                          <option value disabled>
                            --Select--
                          </option>
                          {clinics && clinics.length > 0
                            ? clinics.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name}
                                </option>
                              ))
                            : "No record found."}
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="queue-scheme" className="bold">
                          Visit Default Scheme
                        </Label>
                        <Input
                          id="queue-scheme"
                          className="form-control-xs"
                          type="select"
                          name="scheme"
                          value={queueData.scheme}
                          onChange={(e) => this.handleQueueChange(e)}
                        >
                          <option value disabled>
                            --Select--
                          </option>
                          <option value="1">Cash Payers</option>
                          <option value="2">Insurance</option>
                        </Input>
                      </FormGroup>

                      <FormGroup check inline>
                        <div className="custom-control custom-checkbox pr-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="print-ticket"
                            name="printTicket"
                            checked={queueData.printTicket ? true : false}
                            onChange={this.handleQueueCheck}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="print-ticket"
                          >
                            Print Queue Ticket
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <Label htmlFor="queue-note" className="bold">
                          Note
                        </Label>
                        <Input
                          id="queue-note"
                          className="form-control-xs"
                          type="textarea"
                          style={{ minHeight: "92px" }}
                          name="note"
                          value={queueData.note}
                          onChange={(e) => this.handleQueueChange(e)}
                        />
                      </FormGroup>
                      <FormGroup check inline className="mb-2">
                        <div className="custom-control custom-checkbox pr-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="queue-emerg"
                            name="isEmergency"
                            checked={queueData.isEmergency ? true : false}
                            onChange={this.handleQueueCheck}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="queue-emerg"
                          >
                            Is Emergency
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </ModalBody>
              <ModalFooter>
                <div>
                  <Button
                    className="btn-success btn-square"
                    size="sm"
                    onClick={this.saveQueuePatient}
                  >
                    {queueProcessing ? (
                      <span>
                        Proccessing <img src={laoderBtnSm} alt="" />
                      </span>
                    ) : (
                      <span>
                        <i className="fa fa-forward pr-1" /> Queue Patient
                      </span>
                    )}
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

const mapStateToProps = (state) => ({
  patients: state.patients.data,
  departments: state.departments.data,
  saveProcessing: state.patients.saveProcessing,
  roomStatus: state.roomStatus.roomStatus,
  clinics: state.clinics.clinics,
  queueProcessing: state.queues.queueProcessing,
});

const mapDispatchToProps = {
  fetchPatients,
  createPatient,
  destroyPatient,
  createQueue,
  updatePatient,
  setCurrentPatient,
};

export default connect(mapStateToProps, mapDispatchToProps)(Patients);

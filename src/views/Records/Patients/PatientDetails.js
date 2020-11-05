import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormFeedback,
} from "reactstrap";
import defaultAvatar from "../../../assets/avatar/defAvatar.gif";
import { fetchOccupations } from "../../../redux/actions/occpActions";
import { fetchTowns } from "../../../redux/actions/townActions";
import { fetchCountries } from "../../../redux/actions/countryActions";
import imageUrl from "../../../config/urls/imageUrl";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import moment from "moment";
import Select from "react-select";
import classNames from "classnames";

class PatientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: "1",
      ageMod: false,
      occMod: false,

      addAgeData: {
        years: "0",
        months: "0",
        weeks: "0",
      },
      errorAge: {
        years: false,
        months: false,
        weeks: false,
      },
    };
  }

  addAgeToggle = () => {
    const { ageMod } = this.state;
    this.setState({ ageMod: !ageMod });
  };

  handleChangeAge = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      addAgeData: {
        ...prevState.addAgeData,
        [name]: value,
      },
    }));
    this.props.handleChange(e);
  };

  setYearForm = () => {
    // const { addAgeData } = this.state;
  };

  addOccpToggle = () => {
    const { occMod } = this.state;
    this.setState({ occMod: !occMod });
  };

  addAgeClose = () => {
    this.setState((prevState) => ({
      ageMod: false,
      addAgeData: {
        ...prevState.addAgeData,
        years: "0",
        months: "0",
        weeks: "0",
      },
    }));
  };

  addAgeBlur = (e) => {
    const { name } = e.target;
    if (name === "years") {
      this.setState((prevState) => ({
        errorAge: {
          ...prevState.errorAge,
          years: false,
        },
      }));
    }
    if (name === "months") {
      this.setState((prevState) => ({
        errorAge: {
          ...prevState.errorAge,
          months: false,
        },
      }));
    }
    if (name === "weeks") {
      this.setState((prevState) => ({
        errorAge: {
          ...prevState.errorAge,
          weeks: false,
        },
      }));
    }
  };

  handleAddAge = () => {
    const { addAgeData } = this.state;
    if (addAgeData.years === "") {
      this.setState((prevState) => ({
        errorAge: {
          ...prevState.errorAge,
          years: true,
        },
        addAgeData: {
          ...prevState.addAgeData,
          weeks: "0",
          months: "0",
        },
      }));

      this.setState({ ageMod: true });
    } else {
      // calc years
      let y = Number(addAgeData.years),
        m = Number(addAgeData.months),
        w = Number(addAgeData.weeks),
        d = new Date();
      d.setFullYear(d.getFullYear() - y);
      d.setMonth(d.getMonth() - m);
      d.setDate(d.getDate() - w);
      const ts = moment(d).format("YYYY-MM-DD");
      this.props.handleChangeDate(ts);
      this.setState({ ageMod: false });
    }
  };

  componentDidMount() {
    this.props.fetchOccupations();
    this.props.fetchCountries();
    this.props.fetchTowns();
  }

  render() {
    const { activeNav, ageMod, addAgeData, errorAge } = this.state;
    const {
      handleChange,
      startWebcamToggle,
      className,
      handleEnableWebcam,
      captureImage,
      websetRef,
      browseRefImg,
      saveCapture,
      handleCameraView,
      handleUploadImage,
      handleFileChange,
      eraseImage,
      patientErrors,
      webcamData,
      patientData,
      occupations,
      countries,
      towns,
      handleChangeSelected,
    } = this.props;

    const videoConstraints = {
      width: 300,
      height: 300,
      facingMode: webcamData.facingMode,
    };

    return (
      <div>
        <Row>
          <Col sm="9">
            {/* spacing */}
            <div className="my-3"></div>
            <FormGroup row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="surname" className="bold">
                    Surname:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    id="surname"
                    className="form-control-xs"
                    name="surname"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.surname}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.surname && patientErrors.surname.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.surname}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="othernames" className="bold">
                    Other Names:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    id="othernames"
                    className="form-control-xs"
                    name="othernames"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.othernames}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.othernames &&
                      patientErrors.othernames.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.othernames}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="phone" className="bold">
                    Phone:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    id="phone"
                    className="form-control-xs"
                    name="phone"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.phone}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.phone && patientErrors.phone.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.phone}
                  </FormFeedback>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="sex" className="bold">
                    Sex:
                  </Label>
                  <small className="req"> *</small>
                  <div>
                    <FormGroup check inline className="pt-1">
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        name="sex"
                        value="Male"
                        checked={patientData.sex === "Male" ? true : false}
                        onChange={(e) => handleChange(e)}
                        invalid={
                          patientErrors.sex && patientErrors.sex.length > 0
                            ? true
                            : false
                        }
                      />
                      <Label className="form-check-label" check htmlFor="male">
                        Male
                      </Label>
                    </FormGroup>
                    <FormGroup check inline className="pt-1">
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="female"
                        name="sex"
                        value="Female"
                        checked={patientData.sex === "Female" ? true : false}
                        onChange={(e) => handleChange(e)}
                      />
                      <Label
                        className="form-check-label"
                        check
                        htmlFor="female"
                      >
                        Female
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    type="email"
                    id="email"
                    autoComplete="off"
                    className="form-control-xs"
                    name="email"
                    value={patientData.email}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="telephone">Telephone</Label>
                  <Input
                    type="text"
                    id="telephone"
                    className="form-control-xs"
                    name="telephone"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.telephone}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="dob" className="bold">
                    Date of Birth:
                  </Label>
                  <small className="req"> *</small>
                  <div className="d-flex-align">
                    <Input
                      type="date"
                      className="form-control-xs"
                      name="dob"
                      id="dob"
                      value={patientData.dob}
                      onChange={(e) => handleChange(e)}
                      invalid={
                        patientErrors.dob && patientErrors.dob.length > 0
                          ? true
                          : false
                      }
                    />
                    <Button
                      color="link"
                      size="sm"
                      type="button"
                      onClick={this.addAgeToggle}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>
                  </div>
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.dob}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="occupation" className="bold">
                    Occupation:
                  </Label>
                  <small className="req"> *</small>
                  <Select
                    id="occupation"
                    options={occupations}
                    onChange={(e) => handleChangeSelected(e, "occupation")}
                    className={
                      "form-control-xs none " +
                      classNames({
                        "is-invalid":
                          patientErrors.occupation &&
                          patientErrors.occupation.length > 0,
                      })
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.occupation}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="nationality" className="bold">
                    Nationality:
                  </Label>
                  <small className="req"> *</small>
                  <Select
                    id="nationality"
                    options={countries}
                    onChange={(e) => handleChangeSelected(e, "nationality")}
                    className={
                      "form-control-xs none " +
                      classNames({
                        "is-invalid":
                          patientErrors.nationality &&
                          patientErrors.nationality.length > 0,
                      })
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.nationality}
                  </FormFeedback>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="idType" className="bold">
                    ID Type:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    type="select"
                    id="idType"
                    className="form-control-xs"
                    name="idType"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.idType}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.idType && patientErrors.idType.length > 0
                        ? true
                        : false
                    }
                  >
                    <option value="None">None</option>
                    <option value="National Identity Card">
                      National Identity Card
                    </option>
                    <option value="Alien's Card">Alien's Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Military ID">Military ID</option>
                    <option value="Birth Certificate ID">
                      Birth Certificate ID
                    </option>
                    <option value="Driving License">Driving License</option>
                    <option value="Student ID">Student ID</option>
                  </Input>
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.idType}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="idNo">ID No:</Label>
                  <Input
                    id="idNo"
                    className="form-control-xs"
                    name="idNo"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.idNo}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.idNo && patientErrors.idNo.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.idNo}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="refNo">Reference No:</Label>
                  <Input
                    id="refNo"
                    autoCorrect="off"
                    autoComplete="off"
                    className="form-control-xs"
                    name="refNo"
                    value={patientData.refNo}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
            </FormGroup>
            <div className="form-hr">
              <h6 className="form-title">Physical Address</h6>
              <hr />
            </div>
            <FormGroup row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="residence" className="bold">
                    Residence:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    id="residence"
                    autoCorrect="off"
                    autoComplete="off"
                    className="form-control-xs"
                    name="residence"
                    value={patientData.residence}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.residence &&
                      patientErrors.residence.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.residence}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="town" className="bold">
                    Town:
                  </Label>
                  <small className="req"> *</small>
                  <Select
                    id="town"
                    options={towns}
                    onChange={(e) => handleChangeSelected(e, "town")}
                    className={
                      "form-control-xs none " +
                      classNames({
                        "is-invalid":
                          patientErrors.town && patientErrors.town.length > 0,
                      })
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.town}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="postalCode">Postal Code:</Label>
                  <Input
                    id="postalCode"
                    className="form-control-xs"
                    name="postalCode"
                    autoComplete="off"
                    value={patientData.postalCode}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="postalAddress">Postal Address:</Label>
                  <Input
                    id="postalAddress"
                    className="form-control-xs"
                    name="postalAddress"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.postalAddress}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="streetRoad">Street/Road:</Label>
                  <Input
                    id="streetRoad"
                    className="form-control-xs"
                    name="streetRoad"
                    autoComplete="off"
                    value={patientData.streetRoad}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="loc">Location:</Label>
                  <Input
                    id="loc"
                    className="form-control-xs"
                    name="loc"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.loc}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
            </FormGroup>
            <div className="form-hr">
              <h6 className="form-title">Emergency Contacts</h6>
              <hr className="hrf-line" />
            </div>
            <FormGroup row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="emergRelation" className="bold">
                    Relationship:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    id="emergRelation"
                    className="form-control-xs"
                    name="emergRelation"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.emergRelation}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.emergRelation &&
                      patientErrors.emergRelation.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.emergRelation}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="emergName" className="bold">
                    Name:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    id="emergName"
                    className="form-control-xs"
                    name="emergName"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.emergName}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.emergName &&
                      patientErrors.emergName.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.emergName}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="emergContacts" className="bold">
                    Contacts:
                  </Label>
                  <small className="req"> *</small>
                  <Input
                    id="emergContacts"
                    className="form-control-xs"
                    name="emergContacts"
                    autoCorrect="off"
                    autoComplete="off"
                    value={patientData.emergContacts}
                    onChange={(e) => handleChange(e)}
                    invalid={
                      patientErrors.emergContacts &&
                      patientErrors.emergContacts.length > 0
                        ? true
                        : false
                    }
                  />
                  <FormFeedback className="animated fadeIn">
                    {patientErrors.emergContacts}
                  </FormFeedback>
                </FormGroup>
              </Col>
            </FormGroup>
          </Col>
          <Col sm="3">
            <div className="pb-1">
              <Nav tabs className="nav_tab">
                <NavItem className="nav_sider">
                  <NavLink active={activeNav === "1"} disabled className="bold">
                    Webcam
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeNav[0]} className="nav_tab-content">
                <TabPane tabId="1">
                  {/* spacing */}
                  <div className="my-3"></div>
                  <div className="text-center">
                    <div className="p-avatar">
                      {patientData.avatar === null ? (
                        <img src={defaultAvatar} alt="" />
                      ) : patientData.avatarWeb ? (
                        <img src={imageUrl + patientData.avatar} alt="" />
                      ) : (
                        <img src={patientData.avatar} alt="" />
                      )}
                    </div>
                    <div className="pb-2">
                      <Row>
                        <Col sm="6">
                          <Button
                            color="secondary"
                            block
                            size="sm"
                            className="btn-square"
                            onClick={(e) => startWebcamToggle(e)}
                          >
                            Webcam
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button
                            color="secondary"
                            block
                            size="sm"
                            className="btn-square"
                            onClick={(e) => handleUploadImage(e)}
                          >
                            Browse
                          </Button>
                          <input
                            type="file"
                            ref={(input) => browseRefImg(input)}
                            className="hidden"
                            onChange={(e) => handleFileChange(e)}
                            accept="image/*"
                          />
                        </Col>
                      </Row>
                      <Row className="pt-1">
                        <Col sm="12">
                          <Button
                            color="secondary"
                            block
                            size="sm"
                            className="btn-square"
                            onClick={(e) => eraseImage(e)}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            {/* Webcam Modal */}
            <Modal
              isOpen={webcamData.webcamMod}
              toggle={(e) => startWebcamToggle(e)}
              backdrop="static"
              className={className}
              fade={false}
              style={{ top: "15%" }}
              modalClassName="modal_stretch animated fadeIn"
            >
              <ModalHeader>
                <span className="modal-title text-center f-s-14 f-w-600">
                  <i className="icon-camera f-w-600 pr-1" />
                  Capture Image
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={(e) => startWebcamToggle(e)}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col sm="8">
                    <div className="cameraview">
                      {webcamData.errorDevice ? (
                        <div className="p-relative">
                          <div className="p-center">
                            <p>Camera device not found!</p>
                          </div>
                        </div>
                      ) : webcamData.enableWebcam ? (
                        <Webcam
                          audio={false}
                          height={300}
                          ref={(webcam) => websetRef(webcam)}
                          screenshotFormat="image/jpeg"
                          width={300}
                          videoConstraints={videoConstraints}
                          // onUserMediaError={this.onUserMediaError}
                        />
                      ) : (
                        <div className="p-relative">
                          <div className="p-center">
                            <p>Enable Camera</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm="4">
                    <div style={{ position: "relative" }}>
                      <Button
                        type="button"
                        color="secondary"
                        size="sm"
                        block
                        className="btn-square m-t-5"
                        onClick={(e) => handleEnableWebcam(e)}
                      >
                        {webcamData.enableWebcam
                          ? "Disable Camera"
                          : "Enable Camera"}
                      </Button>
                      <FormGroup className="my-3">
                        <Label>Camera Layout</Label>
                        <Input
                          type="select"
                          className="form-control-xs"
                          onChange={(e) => handleCameraView(e)}
                        >
                          <option value="environment">Back Camera</option>
                          <option value="user">Front Camera</option>
                        </Input>
                      </FormGroup>
                      <Button
                        type="button"
                        color="info"
                        size="sm"
                        block
                        className="btn-square my-3"
                        disabled={
                          webcamData.errorDevice ||
                          webcamData.enableWebcam === false
                            ? true
                            : false
                        }
                        onClick={(e) => captureImage(e)}
                      >
                        Capture
                      </Button>

                      <div>
                        {webcamData.sampleImage !== "" ? (
                          <img
                            src={webcamData.sampleImage}
                            alt=""
                            style={{ height: "136px" }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Row>
                  <Col sm="12">
                    <Button
                      type="button"
                      color="primary"
                      size="sm"
                      className="btn-square mr-2"
                      disabled={
                        webcamData.errorDevice || webcamData.imageName === ""
                          ? true
                          : false
                      }
                      onClick={(e) => saveCapture(e)}
                    >
                      Ok
                    </Button>
                    <Button
                      type="button"
                      color="secondary"
                      size="sm"
                      className="btn-square"
                      onClick={(e) => startWebcamToggle(e)}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </ModalFooter>
            </Modal>

            {/* Add Age */}
            <Modal
              isOpen={ageMod}
              toggle={(e) => this.addAgeToggle(e)}
              backdrop="static"
              className={this.props.className}
              fade={false}
              size="sm"
              modalClassName="modal_stretch animated fadeIn"
            >
              <ModalHeader>
                <span className="modal-title text-center f-s-14">
                  <i className="icon-calendar pr-1" />
                  Add Age
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={(e) => this.addAgeToggle(e)}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <div className="modal-fluid">
                  <Form>
                    <FormGroup row>
                      <Col md="4">
                        <Label>Years:</Label>
                        <Input
                          type="number"
                          name="years"
                          value={addAgeData.years}
                          className="form-control-xs"
                          onChange={(e) => this.handleChangeAge(e)}
                          onBlur={(e) => this.addAgeBlur(e)}
                          invalid={errorAge.years ? true : false}
                        />
                      </Col>
                      <Col md="4">
                        <Label>Weeks:</Label>
                        <Input
                          type="number"
                          name="weeks"
                          value={addAgeData.weeks}
                          onChange={(e) => this.handleChangeAge(e)}
                          onBlur={(e) => this.addAgeBlur(e)}
                          className="form-control-xs"
                        />
                      </Col>
                      <Col md="4">
                        <Label>Months:</Label>
                        <Input
                          type="number"
                          name="months"
                          value={addAgeData.months}
                          onChange={(e) => this.handleChangeAge(e)}
                          onBlur={(e) => this.addAgeBlur(e)}
                          className="form-control-xs"
                        />
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </ModalBody>
              <ModalFooter>
                <div>
                  <Button
                    size="sm"
                    className="btn-square mr-2"
                    color="default"
                    onClick={this.addAgeClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    className="btn-square"
                    color="info"
                    onClick={this.handleAddAge}
                  >
                    <i className="fas fa-plus"></i> Add
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
  patientErrors: state.patients.patientErrors,
  occupations: state.occupations.data,
  countries: state.countries.countries,
  towns: state.towns.towns,
});

const mapDispatchToProps = {
  fetchOccupations,
  fetchCountries,
  fetchTowns,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails);

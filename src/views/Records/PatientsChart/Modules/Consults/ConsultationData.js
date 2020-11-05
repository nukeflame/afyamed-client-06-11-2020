import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Button, FormGroup, Label, Input, Form } from "reactstrap";
import $ from "jquery";
import { fetchSearchDiagnosis } from "../../../../../redux/actions/searchActions";

class ConsultationData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        diagnosis: "",
        diseaseId: null,
        drugName: "",
        drugQty: "",
        refils: "",
        dosage: "",
        application: "",
        frequency: "",
        drugDuration: "days",
        period: "",
        notes: "",
      },
      diagsResults: [],
      diagnoses: [],
      clinicalFindings: [],
      procedures: [],
      medications: [],
    };
  }

  handleChangeData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(
      (prevState) => ({
        items: {
          ...prevState.items,
          [name]: value,
        },
      }),
      () => {
        const { items } = this.state;
        if (items.diagnosis && items.diagnosis.length > 1) {
          if (items.diagnosis.length % 2 === 0) {
            $(".search-diagnoses-wrapper").addClass("animated fadeOut");
            $(".search-diagnoses-wrapper").removeClass("hidden");
            const search = { diagnosis: items.diagnosis };
            this.props.fetchSearchDiagnosis(search).then(() => {
              this.setState({ diagsResults: this.props.diagnosesData });
            });
          }
        } else if (!items.diagnosis) {
          this.setState({ diagsResults: [] });
          $(".search-diagnoses-wrapper").addClass("animated fadeIn hidden");
        }
      }
    );
  };

  handleChangeDiagnosis = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState((prevState) => ({
      items: {
        ...prevState.items,
        [name]: value,
      },
    }));
  };

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  handleAddDiagnosis = (e) => {
    const { items } = this.state;
    if (e.keyCode === 13) {
      if (items.diagnosis.length) {
        const string = this.capitalize(items.diagnosis);
        const item = { diseaseId: null, name: string, code: null };
        let diagnoses = this.state.diagnoses;
        diagnoses = [...diagnoses, item];
        //change prop diagnoses
        const data = { diagnoses };
        this.props.changeConsultation(data);
        this.setState((prevState) => ({
          diagnoses,
          items: {
            ...prevState.items,
            diagnosis: "",
          },
          diagsResults: [],
        }));
      }
    }
  };

  handleAddDiagnosisBtn = (e) => {
    e.preventDefault();
    const { items } = this.state;
    if (items.diagnosis.length) {
      const string = this.capitalize(items.diagnosis);
      const item = { diseaseId: null, name: string, code: null };
      let diagnoses = this.state.diagnoses;
      diagnoses = [...diagnoses, item];
      //change prop diagnoses
      const data = { diagnoses };
      this.props.changeConsultation(data);
      this.setState((prevState) => ({
        diagnoses,
        items: {
          ...prevState.items,
          diagnosis: "",
        },
        diagsResults: [],
      }));
    }
  };

  handleDelDiagnosis = (e, i) => {
    e.preventDefault();
    let diagnoses = [];
    diagnoses = this.state.diagnoses.filter((f, index) => index !== i);
    const data = {
      diagnoses,
    };
    this.props.changeConsultation(data);
    this.setState({ diagnoses });
  };

  handleDelMedication = (e, i) => {
    e.preventDefault();
    let medications = [];
    medications = this.state.medications.filter((f, index) => index !== i);
    const data = { medications };
    this.props.changeConsultation(data);
    this.setState({ medications });
  };

  handleAddMedication = () => {
    const { items } = this.state;
    if (!items.drugName.length) {
      return;
    } else if (!items.drugQty.length) {
      return;
    } else if (!items.refils.length) {
      return;
    } else if (!items.period.length) {
      return;
    }

    const item = {
      drugId: null,
      name: `${items.drugName ? this.capitalize(items.drugName) : ""} ${
        items.drugQty ? "- " + items.drugQty : ""
      } ${items.refils ? "- " + items.refils : ""} ${
        items.dosage ? "- " + items.dosage : ""
      } ${items.application ? "- " + this.capitalize(items.application) : ""} ${
        items.frequency ? "- " + items.frequency : ""
      } ${items.period ? "- " + items.period + " " + items.drugDuration : ""} ${
        items.notes ? "- " + this.capitalize(items.notes) : ""
      }`,
    };

    let medications = this.state.medications;
    medications = [...medications, item];
    const data = { medications };
    this.props.changeConsultation(data);
    this.setState((prevState) => ({
      medications,
      items: {
        ...prevState.items,
        drugName: "",
        drugQty: "",
        refils: "",
        dosage: "",
        application: "",
        frequency: "",
        drugDuration: "days",
        period: "",
        notes: "",
      },
    }));
  };

  handleDieses = (e, f) => {
    e.preventDefault();
    //set disease name
    const item = { diseaseId: f.id, name: f.name, code: f.code };
    let diagnoses = this.state.diagnoses;
    diagnoses = [...diagnoses, item];
    //change prop diagnoses
    const data = { diagnoses };
    this.props.changeConsultation(data);
    this.setState((prevState) => ({
      diagnoses,
      items: {
        ...prevState.items,
        diagnosis: "",
      },
      diagsResults: [],
    }));
    $("#diagnosis").focus();
  };

  render() {
    const {
      diagnoses,
      clinicalFindings,
      procedures,
      medications,
      items,
      diagsResults,
    } = this.state;
    const { consultData, handleChangeCons, consultationErrors } = this.props;

    //filter diagnosis

    // value: function findByValue(source, value) {
    //   var findSource = source;

    //   if (!source || source.length < 1) {
    //     findSource = this.state.defaultOptions;
    //   }

    //   if (!findSource) {
    //     return null;
    //   }

    //   return findSource.filter(function (object) {
    //     return object.value === value;
    //   })[0];

    // const filteredDiag = diagsResults.filter(item => {
    //   let values = Object.values(item);

    //   // if (search.length) {
    //   //   const flag = false;
    //   //   values.forEach(val => {
    //   //     if (val.toLoweCase().indexOf(search) > -1) {
    //   //       flag = true;
    //   //       return;
    //   //     }
    //   //   });

    //   //   if (flag) {
    //   //     return items;
    //   //   }
    //   //   return item;

    //   // values.some(key => console.log(key));

    //   // return values.some(key => item[key].toLowerCase().includes(search));
    // });

    return (
      <div className="animated fadeIn consultation-wrapper">
        <Row>
          <Col sm="2">
            <Label htmlFor="title">Title</Label>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Input
                id="title"
                className="form-control-xs"
                name="title"
                value={consultData.title}
                onChange={(e) => handleChangeCons(e)}
                invalid={
                  consultationErrors.title &&
                  consultationErrors.title.length > 0
                    ? true
                    : false
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <Label htmlFor="complaint">Complaints</Label>
          </Col>
          <Col sm="8">
            <FormGroup>
              <Input
                type="textarea"
                id="complaint"
                style={{ minHeight: "100px" }}
                className="form-control-xs"
                placeholder="Enter patient's complaint"
                name="complaints"
                value={consultData.complaints}
                onChange={(e) => handleChangeCons(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="expanded-row">
          <Row>
            <Col sm="2">
              <Label htmlFor="diagnosis">Diagnoses</Label>
            </Col>
            <Col sm="8">
              {diagnoses && diagnoses.length > 0 ? (
                <div className="expanded-box">
                  {diagnoses.map((d, index) => (
                    <div className="d-flex-align" key={index}>
                      <div className="expanded-tab">
                        {d.diseaseId !== null ? (
                          <p className="expanded-list">
                            {d.name} - {d.code}
                          </p>
                        ) : (
                          <p className="expanded-list">{d.name}</p>
                        )}
                      </div>
                      <Button
                        type="button"
                        color="link"
                        className="delt-btn"
                        size="sm"
                        title="Delete Diagnosis"
                        onClick={(e) => this.handleDelDiagnosis(e, index)}
                      >
                        <i className="fa fa-trash text-danger f-s-11"></i>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : null}
              <FormGroup>
                <div className="d-flex-align">
                  <Input
                    type="text"
                    id="diagnosis"
                    className="form-control-xs"
                    placeholder="Type the diagnosis and press Enter"
                    name="diagnosis"
                    spellCheck="off"
                    autoComplete="off"
                    value={items.diagnosis}
                    onChange={(e) => this.handleChangeData(e)}
                    onKeyDown={(e) => this.handleAddDiagnosis(e)}
                  />
                  <Button
                    color="link"
                    className="ml-2"
                    size="sm"
                    title="Add Diagnosis"
                    type="button"
                    onClick={this.handleAddDiagnosisBtn}
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                </div>
              </FormGroup>
              <div className="d-flex-align">
                <div className="search-diagnoses-wrapper hidden">
                  <ul>
                    {diagsResults.map((f) => (
                      <li key={f.id}>
                        {/* eslint-disable-next-line */}
                        <a href="#" onClick={(e) => this.handleDieses(e, f)}>
                          {f.name} - <b>{f.code}</b>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="diagnoses-space"></div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="expanded-row">
          <Row>
            <Col sm="2">
              <Label htmlFor="clinicalFindings">Clinical Findings</Label>
            </Col>
            <Col sm="8">
              {clinicalFindings && clinicalFindings.length > 0 ? (
                <div className="expanded-box">
                  {clinicalFindings.map((d) => (
                    <div className="d-flex-align" key={d.id}>
                      <div className="expanded-tab">
                        <p className="expanded-list">{d.name}</p>
                      </div>
                      <Button
                        color="link"
                        className="delt-btn"
                        size="sm"
                        title="Delete Diagnosis"
                      >
                        <i className="fa fa-trash text-danger  f-s-10"></i>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : null}
              <FormGroup>
                <div className="d-flex-align">
                  <Input
                    id="clinicalFindings"
                    className="form-control-xs"
                    placeholder="Type the clinical finding  and press Enter"
                    name="clinicalFindings"
                    value={consultData.clinicalFindings}
                    onChange={(e) => handleChangeCons(e)}
                  />
                  <Button
                    color="link"
                    className="ml-2"
                    size="sm"
                    title="Add Clinical Finding"
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div className="expanded-row">
          <Row>
            <Col sm="2">
              <Label htmlFor="procedures">Procedures</Label>
            </Col>
            <Col sm="8">
              {procedures && procedures.length > 0 ? (
                <div className="expanded-box">
                  {procedures.map((d) => (
                    <div className="d-flex-align" key={d.id}>
                      <div className="expanded-tab">
                        <p className="expanded-list">{d.name}</p>
                      </div>
                      <Button
                        color="link"
                        className="delt-btn"
                        size="sm"
                        title="Delete Diagnosis"
                      >
                        <i className="fa fa-trash text-danger  f-s-10"></i>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : null}
              <FormGroup>
                <div className="d-flex-align">
                  <Input
                    id="procedures"
                    className="form-control-xs"
                    placeholder="Type the procedures and press Enter"
                    name="procedures"
                    value={consultData.procedures}
                    onChange={(e) => handleChangeCons(e)}
                  />
                  <Button
                    color="link"
                    className="ml-2"
                    size="sm"
                    title="Add Treatment"
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div className="expanded-row medication">
          <Row>
            <Col sm="2">
              <Label htmlFor="drugName">Medication</Label>
            </Col>
            <Col sm="8">
              {medications && medications.length > 0 ? (
                <div className="expanded-box">
                  {medications.map((d, index) => (
                    <div className="d-flex-align" key={index}>
                      <div className="expanded-tab">
                        <p className="expanded-list">{d.name}</p>
                      </div>
                      <Button
                        color="link"
                        className="delt-btn"
                        size="sm"
                        title="Delete Medication"
                        onClick={(e) => this.handleDelMedication(e, index)}
                      >
                        <i className="fa fa-trash text-danger  f-s-10"></i>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : null}
              <FormGroup>
                <Form>
                  <Row>
                    <Col sm="8">
                      <Row>
                        <Col sm="8">
                          <FormGroup className="m-r-24">
                            <Input
                              id="drugName"
                              className="form-control-xs"
                              placeholder="Drug name from inventory"
                              name="drugName"
                              autoComplete="off"
                              value={items.drugName}
                              onChange={(e) => this.handleChangeData(e)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Input
                              id="drugQty"
                              className="form-control-xs"
                              placeholder="Drug Qty"
                              name="drugQty"
                              autoComplete="off"
                              value={items.drugQty}
                              onChange={(e) => this.handleChangeData(e)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="4">
                      <div className="d-flex-align">
                        <Row>
                          <Col sm="4">
                            <Label htmlFor="refils" className="pt-1 mr-2">
                              Refils
                            </Label>
                          </Col>
                          <Col sm="8">
                            <FormGroup>
                              <Input
                                type="number"
                                id="refils"
                                className="form-control-xs"
                                name="refils"
                                autoComplete="off"
                                value={items.refils}
                                onChange={(e) => this.handleChangeData(e)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          type="button"
                          color="link"
                          className="ml-2"
                          size="sm"
                          title="Add Medication"
                          onClick={(e) => this.handleAddMedication(e)}
                        >
                          <i className="fas fa-plus"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="8">
                      <Row>
                        <Col sm="4">
                          <FormGroup className="m-r-24">
                            <Input
                              id="dosage"
                              className="form-control-xs"
                              placeholder="Dosage"
                              name="dosage"
                              autoComplete="off"
                              value={items.dosage}
                              onChange={(e) => this.handleChangeData(e)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup className="m-r-24">
                            <Input
                              id="application"
                              className="form-control-xs"
                              placeholder="Application"
                              name="application"
                              autoComplete="off"
                              value={items.application}
                              onChange={(e) => this.handleChangeData(e)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Input
                              id="frequency"
                              className="form-control-xs"
                              placeholder="Frequency"
                              name="frequency"
                              autoComplete="off"
                              value={items.frequency}
                              onChange={(e) => this.handleChangeData(e)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="4">
                      <div className="d-flex-align">
                        <Row>
                          <Col sm="4">
                            <FormGroup>
                              <Input
                                style={{
                                  width: "63px",
                                }}
                                id="period"
                                className="form-control-xs m-l-20 text-right"
                                name="period"
                                autoComplete="off"
                                value={items.period}
                                onChange={(e) => this.handleChangeData(e)}
                              />
                            </FormGroup>
                          </Col>
                          <Col sm="8">
                            <FormGroup>
                              <Input
                                type="select"
                                id="drugDuration"
                                className="form-control-xs"
                                name="drugDuration"
                                value={items.drugDuration}
                                onChange={(e) => this.handleChangeData(e)}
                              >
                                <option value="days">days</option>
                                <option value="weeks">weeks</option>
                                <option value="months">months</option>
                                <option value="years">years</option>{" "}
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          color="link"
                          style={{ marginLeft: "19px" }}
                          size="sm"
                        ></Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <div className="d-flex-align">
                        <Input
                          id="notes"
                          className="form-control-xs"
                          placeholder="Notes"
                          autoComplete="off"
                          name="notes"
                          value={items.notes}
                          onChange={(e) => this.handleChangeData(e)}
                        />
                        <div style={{ display: "block", width: "39px" }}></div>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <Row>
          <Col sm="2">
            <Label htmlFor="materials">Materials</Label>
          </Col>
          <Col sm="8">
            <FormGroup>
              <div className="d-flex-align">
                <Input
                  id="materials"
                  className="form-control-xs"
                  name="materials"
                  value={consultData.materials}
                  onChange={(e) => handleChangeCons(e)}
                />
                <Button
                  type="button"
                  color="link"
                  className="f-s-10"
                  size="sm"
                  onClick={(e) => this.handleAddMedication(e)}
                >
                  hide
                </Button>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <Label htmlFor="surgeries">Surgeries</Label>
          </Col>
          <Col sm="8">
            <FormGroup>
              <div className="d-flex-align">
                <Input
                  id="surgeries"
                  className="form-control-xs"
                  name="surgeries"
                  multiple
                  value={consultData.surgeries}
                  onChange={(e) => handleChangeCons(e)}
                />
                <Button
                  type="button"
                  color="link"
                  className="f-s-10 hidden"
                  size="sm"
                  onClick={(e) => this.handleAddMedication(e)}
                >
                  hide
                </Button>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <Label htmlFor="recomendations">Recomend</Label>
          </Col>
          <Col sm="8">
            <FormGroup>
              <div className="d-flex-align">
                <Input
                  id="recomendations"
                  className="form-control-xs"
                  name="recomendations"
                  value={consultData.recomendations}
                  onChange={(e) => handleChangeCons(e)}
                />
                <Button
                  type="button"
                  color="link"
                  className="f-s-10"
                  size="sm"
                  onClick={(e) => this.handleAddMedication(e)}
                >
                  hide
                </Button>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="10">
            <FormGroup>
              <div>
                <Label htmlFor="details" className="p-t-5">
                  Clinical Summary
                </Label>
                <span className="float-right">
                  <Button color="link" className="f-s-11 hidden">
                    Insert Questionaire
                  </Button>
                </span>
              </div>

              <Input
                type="textarea"
                className="form-control-xs"
                style={{
                  height: "90px",
                  marginTop: "-5px",
                }}
                name="summary"
                value={consultData.summary}
                onChange={(e) => handleChangeCons(e)}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diagnosesData: state.search.diagnoses,
  consultationErrors: state.consultations.consultationErrors,
});

const mapDispatchToProps = {
  fetchSearchDiagnosis,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsultationData);

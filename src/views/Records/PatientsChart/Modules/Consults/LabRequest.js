import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Input,
  FormGroup,
  Label
} from "reactstrap";
export default class LabRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labReqMd: false,
      savingLabReq: false,
      labReqData: {
        notes: "",
        patientScheme: "1",
        labTest: "",
        testCompleted: false
      }
    };
  }

  handleLabReq = () => {
    const { labReqMd } = this.state;
    this.setState({ labReqMd: !labReqMd });
  };

  handleChangeLabReq = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      labReqData: {
        ...prevState.labReqData,
        [name]: value
      }
    }));
  };

  render() {
    const { labReqData, labReqMd, savingLabReq } = this.state;

    return (
      <div className="animated fadeIn">
        <Card className="box header" style={{ marginBottom: "10px" }}>
          <CardHeader className="box-header bg1">
            <Row>
              <Col sm="6">
                <ul className="header-left">
                  <li>
                    <button
                      className="btn-box"
                      type="button"
                      onClick={this.handleLabReq}
                    >
                      <i className="fa fa-plus c-primary" />
                      <span className="mini-title">Add Lab Request</span>
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
              </Col>
            </Row>
          </CardHeader>
        </Card>
        <Row>
          <Col sm="12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            accusantium possimus sint! Adipisci soluta voluptates debitis a
            maiores officia, iste culpa, quo eos ducimus officiis. Quam deserunt
            impedit dolorem voluptatum.
          </Col>
        </Row>

        {/* Edit Values */}
        <Modal
          isOpen={labReqMd}
          toggle={this.handleLabReq}
          className={this.props.className}
          backdrop="static"
          fade={false}
          size="lg"
          modalClassName="modal_stretch animated fadeIn"
          style={{ top: "7%" }}
        >
          <ModalHeader className="m-0">
            <span className="modal-title f-s-14">
              <i className="fa fa-edit pr-1" />
              Laboratory Request - Editor
            </span>
            <span>
              <Button
                color="link"
                className="modal-close-x"
                type="button"
                onClick={this.handleLabReq}
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
                        {savingLabReq ? (
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
                        onClick={this.handleLabReq}
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
                      <Label htmlFor="patientScheme" className="bold mb-0">
                        Patient Scheme
                      </Label>
                      <Input
                        type="select"
                        id="patientScheme"
                        name="patientScheme"
                        className="form-control-xs"
                        value={labReqData.patientScheme}
                        onChange={e => this.handleChangeLabReq(e)}
                      >
                        <option value="1">Cash Payers</option>
                        <option value="2">Insurance</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="labTest" className="bold mb-0">
                        Lab Test
                      </Label>
                      <Input
                        type="select"
                        id="labTest"
                        name="labTest"
                        className="form-control-xs"
                        value={labReqData.labTest}
                        onChange={e => this.handleChangeLabReq(e)}
                      >
                        <option value="1">Bs For Malaria</option>
                        <option value="2">Random Blood Sugar</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="notes" className="bold mb-0">
                        Notes
                      </Label>
                      <Input
                        type="textarea"
                        id="notes"
                        name="notes"
                        className="form-control-xs"
                        value={labReqData.notes}
                        onChange={e => this.handleChangeLabReq(e)}
                      />
                    </FormGroup>
                    <FormGroup check inline>
                      <Input
                        bsSize="lg"
                        className="form-check-input"
                        type="checkbox"
                        id="testCompleted"
                        name="testCompleted"
                        checked={labReqData.testCompleted ? true : false}
                        onChange={e => this.handleChangeLabReq(e)}
                      />
                      <Label
                        className="form-check-label"
                        check
                        htmlFor="testCompleted"
                      >
                        Tests Completed
                      </Label>
                    </FormGroup>
                  </div>
                </div>
              </Col>
              <Col md="8" className="sider-bg">
                <div className="modal-fluid history-options">sjjd</div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  Input,
  Label,
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  FormGroup
} from "reactstrap";
import Calendar from "react-calendar";

class CheckIns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      addCheckinMod: false
    };
  }

  addCheckinModal = () => {
    const { addCheckinMod } = this.state;
    this.setState({
      addCheckinMod: !addCheckinMod
    });
  };

  render() {
    const { date, addCheckinMod } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="3">
            <div className="mini-side">
              <Calendar onChangeCalendar={this.onChange} value={date} />
            </div>
            <div className="mb-2">
              <FormGroup check inline className="m-l-15">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  id="wmedic"
                  name="wmedic"
                  value="1"
                />
                <Label
                  className="form-check-label f-w-600"
                  check
                  htmlFor="wmedic"
                >
                  Medics
                </Label>
              </FormGroup>
            </div>
            <div className="mb-2">
              <FormGroup className="m-l-15">
                <select className="form-control-xs w-100 mb-1">
                  <option>Service</option>
                </select>
                <select className="form-control-xs w-100 mb-1">
                  <option>Service Type</option>
                </select>
                <select className="form-control-xs w-100">
                  <option>Service Location</option>
                </select>
              </FormGroup>
            </div>
          </Col>
          <Col sm="9">
            <Row>
              <Col sm="12">
                <Card className="box">
                  <CardHeader className="box-header">
                    <div>
                      <ul className="header-left">
                        <li>
                          <button
                            className="btn-box"
                            onClick={this.addCheckinModal}
                          >
                            <i className="fa fa-plus c-primary pr-1" />
                            <span className="mini-title">Add Checkin</span>
                          </button>
                        </li>
                        <li>
                          <button className="btn-box">
                            <i className="fa fa-print  pr-1" />
                            <span>Print</span>
                          </button>
                        </li>
                      </ul>
                      <ul className="header-right">
                        <li>
                          <button className="btn-box">
                            <i className="fa fa-wrench" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
            {/* Checkin Editor Modal */}
            <Modal
              isOpen={addCheckinMod}
              toggle={this.addCheckinModal}
              backdrop="static"
              style={{ top: "10%" }}
              className={this.props.className}
            >
              <ModalHeader className="m-0">
                <span className="text-muted f-s-14">
                  <i className="icon-login" /> Checkin Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    onClick={this.addCheckinModal}
                  >
                    <i className="fa fa-times text-muted" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="bg1">
                <Card className="box header">
                  <CardHeader className="box-header">
                    <div>
                      <ul className="header-left">
                        <li>
                          <button className="btn-box" onClick={this.newUser}>
                            <i className="fa fa-save f-s-11 c-primary pr-1" />
                            <span className="mini-title">Save and Close</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </CardHeader>
                </Card>
                <div className="modal-fluid ">
                  <Row>
                    <Col sm="6">
                      <FormGroup>
                        <Label htmlFor="medics" className="f-s-12">
                          Medic
                        </Label>
                        <Input
                          type="select"
                          id="medics"
                          className="form-control-xs"
                        >
                          <option value="0" />
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="patient" className="f-s-12">
                          Patient
                        </Label>
                        <Input
                          type="text"
                          id="patient"
                          placeholder="Type the Patient"
                          className="form-control-xs"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <Label className="f-s-12 mb-0">Status</Label>
                      </FormGroup>
                      <div className="b-grey">
                        <FormGroup check className="pb-1">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="checkIn"
                            name="inline-radios"
                            checked
                          />
                          <Label
                            className="form-check-label f-w-600"
                            check
                            htmlFor="checkIn"
                          >
                            Checkin
                          </Label>
                        </FormGroup>
                        <FormGroup check className="pb-2  pl-5">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="admitted"
                            name="inline-radios"
                            checked
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="admitted"
                          >
                            Admitted
                          </Label>
                        </FormGroup>
                        <FormGroup check className="pb-1">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="canceled"
                            name="inline-radios"
                            checked
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="canceled"
                          >
                            Canceled
                          </Label>
                        </FormGroup>
                        <FormGroup check className="pb-1">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="noshow"
                            name="inline-radios"
                            checked
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="noshow"
                          >
                            No Show
                          </Label>
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <FormGroup className="pt-3">
                        <div>
                          <Label htmlFor="treatment" className="p-t-5">
                            Treatment
                          </Label>
                          <span className="float-right">
                            <small className="text-muted">Optional</small>
                          </span>
                        </div>
                        <Input
                          id="treatment"
                          placeholder="Type the treatment or the code"
                          className="form-control-xs"
                        />
                      </FormGroup>

                      <FormGroup>
                        <div>
                          <Label htmlFor="notes" className="p-t-5">
                            Notes
                          </Label>
                          <span className="float-right">
                            <small className="text-muted">Optional</small>
                          </span>
                        </div>

                        <textarea
                          id="notes"
                          className="form-control form-control-xs"
                          style={{ height: "60px", marginTop: "-5px" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <FormGroup check className="pt-3">
                        <Input
                          className="form-check-input"
                          type="checkbox"
                          id="notifyM"
                          name="inline-radios"
                          checked
                        />
                        <Label
                          className="form-check-label"
                          checked
                          htmlFor="notifyM"
                        >
                          Notify Medic by Message
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CheckIns;

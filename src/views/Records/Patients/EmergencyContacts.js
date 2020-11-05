import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  ModalFooter
} from "reactstrap";
import ReactTable from "react-table";

class EmergencyContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emrgData: [],
      emrgContMod: false
    };
  }

  emrgContModal = () => {
    const { emrgContMod } = this.state;
    this.setState({
      emrgContMod: !emrgContMod
    });
  };

  render() {
    const { emrgData, emrgContMod } = this.state;

    const emrgCol = [
      {
        Header: "Surname",
        accessor: "surname"
      },
      {
        Header: "Other Names",
        accessor: "otherNames"
      },
      {
        Header: "Relationship To Patient",
        accessor: "relPatient"
      },
      {
        Header: "Mobile Phone",
        accessor: "mobPhone"
      }
    ];

    return (
      <div>
        <Row>
          <Col sm="12">
            <Row className="my-3">
              <Col md="6">
                <Button
                  color="secondary"
                  size="sm"
                  className="btn-square btn-top mr-2"
                  onClick={this.emrgContModal}
                >
                  <i className="fa fa-plus" /> Add Emergency Contact
                </Button>
              </Col>
            </Row>
            <div className="mb-3">
              <ReactTable
                data={emrgData}
                columns={emrgCol}
                defaultPageSize={15}
                className="-highlight text-left"
                showPagination={false}
              />
            </div>
          </Col>
          {/* Add Emmergency Conts */}
          <Modal
            isOpen={emrgContMod}
            toggle={this.emrgContModal}
            backdrop="static"
            className={"animated fadeIn " + this.props.className}
            style={{ top: "10%" }}
          >
            <ModalHeader>
              <span className="modal-title text-center f-s-14 f-w-600">
                <i className="icon-user f-w-600 pr-1" />
                Emergency Contact
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.emrgContModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="md-body">
              <Row className="mt-3">
                <Col sm="12">
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="surname">Surname</Label>
                        <small className="req"> *</small>
                        <Input
                          id="surname"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">Other Names</Label>
                        <small className="req"> *</small>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">I.D No.</Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="mobPhone">Phone</Label>
                        <small className="req"> *</small>
                        <Input
                          id="mobPhone"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">Estate</Label>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">House No.</Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="surname">Plot No.</Label>
                        <Input
                          id="surname"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">Street/Road</Label>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">Location</Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="surname">District</Label>
                        <Input
                          id="surname"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">P.O Box</Label>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">Code </Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <Label htmlFor="idNo">Relation To Patient </Label>
                        <small className="req"> *</small>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <div className="form-hr">
                    <h6 className="form-title">Employer Details</h6>
                    <hr className="hr-line" />
                  </div>
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="surname">Name</Label>
                        <Input
                          id="surname"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">Staff No.</Label>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">Tel No.</Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="surname">P.O Box</Label>
                        <Input
                          id="surname"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">Postal Code</Label>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">Fax No.</Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="surname">Email</Label>
                        <Input
                          id="surname"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">Situated In</Label>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">Floor </Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="surname">Street/Road</Label>
                        <Input
                          id="surname"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="otherNames">Department</Label>
                        <Input
                          id="otherNames"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label htmlFor="idNo">Position</Label>
                        <Input
                          id="idNo"
                          className="form-control-xs"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <div>
                <Button size="sm" className="btn-square" color="info">
                  Save Contact &amp; Close
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Row>
      </div>
    );
  }
}

export default EmergencyContacts;

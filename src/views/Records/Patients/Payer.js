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
// import DatePicker from "react-datepicker";

class Payer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payerMod: false
    };
  }

  payerModal = e => {
    e.preventDefault();
    const { payerMod } = this.state;
    this.setState({
      payerMod: !payerMod
    });
  };

  render() {
    const { payerMod } = this.state;

    const chemeData = [
      {
        schemeName: "NHIF Outpatient",
        membershipNo: "27343838",
        isPrinciple: "Yes",
        princMember: "Memenr"
      }
    ];
    const schemeCol = [
      {
        Header: "Scheme Name",
        accessor: "schemeName",
        minWidth: 200
      },
      {
        Header: "Principal Member",
        accessor: "princMember"
      },
      {
        Header: "Membership No.",
        accessor: "membershipNo"
      },
      {
        Header: "Is Principal Member",
        accessor: "isPrinciple"
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
                  onClick={this.payerModal}
                >
                  <i className="fa fa-plus" /> Add Customer Scheme
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
            {/* Add Customer Scheme */}
            <Modal
              isOpen={payerMod}
              toggle={this.payerModal}
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
                    onClick={this.payerModal}
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
                  <Button size="sm" className="btn-square" color="info">
                    Save &amp; Close
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

export default Payer;

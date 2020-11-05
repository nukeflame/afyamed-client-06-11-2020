import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Input,
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import ReactTable from "react-table";

class PaymentMode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chequeMod: false,
      showSearchBar: false
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  // fn Cheque modal
  toggleChequeModal = () => {
    const { chequeMod } = this.state;

    this.setState({
      chequeMod: !chequeMod
    });
  };

  render() {
    const { showSearchBar, chequeMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "Bank",
        accessor: "bank",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Destination",
        accessor: "destination",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Paid To",
        accessor: "paidTo",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Cheque No.",
        accessor: "chequeNo",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "DateTime Payable",
        accessor: "dateTimePayable",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Amount",
        accessor: "canBeReceived",
        headerClassName: "text-right",
        ClassName: "text-right"
      }
    ];

    return (
      <Row>
        <Col sm="12">
          <Card className="box">
            <CardHeader className="box-header">
              <Row>
                <Col sm="9">
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.toggleChequeModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Cheque</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <span>Edit</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <span>Delete</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.handleSearchBar}
                      >
                        <i className="fa fa-search  pr-1" />
                        <span>Search</span>
                      </button>
                    </li>
                  </ul>
                </Col>
                <Col sm="3">
                  <ul className="header-right">
                    <li>
                      <select className="form-control header-control pt-1">
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>Last 7 Days</option>
                        <option>Last Week</option>
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>Last 30 Days</option>
                        <option>Last 60 Days</option>
                        <option>Last 90 Days</option>
                        <option>Last 120 Days</option>
                        <option>All Time</option>
                      </select>
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
                data={data}
                columns={columns}
                className="-highlight -striped"
              />
            </div>
          </Card>

          {/* Cheque modal */}
          <Modal
            isOpen={chequeMod}
            toggle={this.toggleChequeModal}
            backdrop="static"
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Cheque Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleChequeModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="modal-fluid">
              <h6 className="text-muted">
                <u>Cheque Details</u>
              </h6>
              <Row>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Bank Account: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Equity Bank</option>
                      <option>SBI Bank</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Amount: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Amount in words: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Pay: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Cheque No: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Date Payable: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <h6 className="text-muted my-2">
                <u>Payment Details</u>
              </h6>
              <Row>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Destination Account: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Equity Bank</option>
                      <option>SBI Bank</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Sub-Account: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Equity Bank</option>
                      <option>SBI Bank</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Reference: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="8">
                  <FormGroup>
                    <Label className="bold">Description : </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <div className="box-tools">
                <Button
                  size="sm"
                  color="default"
                  className="mr-2 btn-square"
                  onClick={this.toggleChequeModal}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="btn-square"
                  type="submit"
                >
                  <i className="fa fa-save pr-1"></i> Save &amp; Close
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default PaymentMode;

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
      bankDepMod: false,
      showSearchBar: false
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  // fn payment mode modal
  toggleBankDepModal = () => {
    const { bankDepMod } = this.state;

    this.setState({
      bankDepMod: !bankDepMod
    });
  };

  render() {
    const { showSearchBar, bankDepMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "JV ID",
        accessor: "jvId",
        minWidth: 50,
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Source",
        accessor: "payName",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Sub Account",
        accessor: "subAccount",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "To Bank",
        accessor: "toBank",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "DateTime of Deposit",
        accessor: "dateTimeDeposit",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Deposited By",
        accessor: "depositedBy",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Total Amount",
        accessor: "totalAmount",
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
                <Col sm="12">
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.toggleBankDepModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Bank Deposit</span>
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
                    <li>
                      <button className="btn-box">
                        <i className="fa fa-print  pr-1" />
                        <span>Print</span>
                      </button>
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
                className="-highlight -striped "
              />
            </div>
          </Card>

          {/* Payment Mode modal */}
          <Modal
            isOpen={bankDepMod}
            toggle={this.toggleBankDepModal}
            backdrop="static"
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Bank Deposit Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleBankDepModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="modal-fluid">
              <Row>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Source: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Cash At Hand</option>
                      <option>Petty Cash</option>
                    </Input>
                  </FormGroup>
                  <FormGroup className="mt-2 mb-0">
                    <Label>Current Balance:- </Label>
                    <span className="bold pl-2">6,000,000,000</span>
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
                    <Label className="bold">To Bank Account: </Label>
                    <Input className="form-control-xs" type="text">
                      <option>Equity Bank</option>
                      <option>SBI Bank</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Cheque Notes: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Deposited By: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">Bank Ref. No: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label className="bold">DateTime of Deposit: </Label>
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
                  onClick={this.toggleBankDepModal}
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

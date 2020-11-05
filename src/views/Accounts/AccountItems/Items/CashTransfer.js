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

class CashTransfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cashTransMod: false,
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
  toggleCashTransModal = () => {
    const { cashTransMod } = this.state;

    this.setState({
      cashTransMod: !cashTransMod
    });
  };

  render() {
    const { showSearchBar, cashTransMod } = this.state;

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
        Header: "Destination",
        accessor: "subAccount",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "DateTime Transfered",
        accessor: "dateTimeTrans",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Transfered By",
        accessor: "transferedBy",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Received By",
        accessor: "transferedBy",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Acknowledged By",
        accessor: "transferedBy",
        headerClassName: "text-left",
        ClassName: "text-left"
      },
      {
        Header: "Amount",
        accessor: "amount",
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
                        onClick={this.toggleCashTransModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Cash Transfer</span>
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

          {/* Cash Transfers modal */}
          <Modal
            isOpen={cashTransMod}
            toggle={this.toggleCashTransModal}
            backdrop="static"
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Cash Transfers Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleCashTransModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row className="mt-2">
                <Col sm="6">
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
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Destination: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>MPESA</option>
                      <option>Petty Cash</option>
                    </Input>
                  </FormGroup>
                  <FormGroup className="mt-2 mb-0">
                    <Label>Current Balance:- </Label>
                    <span className="bold pl-2">8,000,000,000</span>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Received By: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">DateTime Transfered: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Amount: </Label>
                    <Input className="form-control-xs text-right" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Amount in words: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="12">
                  <FormGroup>
                    <Label className="bold">Description: </Label>
                    <Input
                      className="form-control-xs"
                      type="textarea"
                      style={{ minHeight: "50px" }}
                    />
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
                  onClick={this.toggleCashTransModal}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="btn-square"
                  type="submit"
                >
                  <i className="icon-login pr-1"></i> Transfer
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default CashTransfer;

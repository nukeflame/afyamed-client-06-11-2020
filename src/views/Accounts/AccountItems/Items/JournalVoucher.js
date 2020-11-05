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

class JournalVoucher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journVouchMod: false,
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
  toggleJournalVModal = () => {
    const { journVouchMod } = this.state;

    this.setState({
      journVouchMod: !journVouchMod
    });
  };

  render() {
    const { showSearchBar, journVouchMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "JV ID.",
        accessor: "jvId",
        minWidth: 50
      },
      {
        Header: "Fiscal Period",
        accessor: "fsPeriod"
      },
      {
        Header: "Transaction Date",
        accessor: "transDate"
      },
      {
        Header: "Source Ref",
        accessor: "sourceRef"
      },
      {
        Header: "Description",
        accessor: "description"
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
                        onClick={this.toggleJournalVModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add </span>
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
                        <span>Unpost</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <span>Entries</span>
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
                className="-highlight -striped text-left"
              />
            </div>
          </Card>

          {/* Journal Voucher modal */}
          <Modal
            isOpen={journVouchMod}
            toggle={this.toggleJournalVModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Journal Voucher Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleJournalVModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row className="mt-1">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">JV ID: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Amount: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Transaction Date Time: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Transaction By: </Label>
                    <Input className="form-control-xs" type="text" disabled />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Description: </Label>
                    <Input className="form-control-xs" type="textarea" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Source Reference: </Label>
                    <Input className="form-control-xs" type="textarea" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="my-3">
                <Col sm="12">
                  <FormGroup check inline>
                    <div className="custom-control custom-checkbox pr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isActive"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="isActive"
                      >
                        Is Posted
                      </label>
                    </div>
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
                  onClick={this.toggleJournalVModal}
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

export default JournalVoucher;

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

class BankRecon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payMod: false,
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
  togglePayModal = () => {
    const { payMod } = this.state;

    this.setState({
      payMod: !payMod
    });
  };

  render() {
    const { showSearchBar, payMod } = this.state;

    const data = [
      {
        payNo: "1",
        payName: "Cash",
        subAccount: "Cash At Hand",
        category: "Cash",
        isDefault: "Yes",
        canBeReceived: "Yes"
      },
      {
        payNo: "2",
        payName: "MPESA",
        subAccount: "MPESA",
        category: "Cash",
        isDefault: "Yes",
        canBeReceived: "Yes"
      },
      {
        payNo: "3",
        payName: "Cheque",
        subAccount: "Default Bank Account",
        category: "Cheque",
        isDefault: "No",
        canBeReceived: "No"
      }
    ];

    const columns = [
      {
        Header: "No.",
        accessor: "payNo",
        minWidth: 50
      },
      {
        Header: "Name",
        accessor: "payName"
      },
      {
        Header: "Sub Account",
        accessor: "subAccount"
      },
      {
        Header: "Category",
        accessor: "category"
      },
      {
        Header: "is Default",
        accessor: "isDefault",
        minWidth: 60
      },
      {
        Header: "Can Be Received",
        accessor: "canBeReceived",
        minWidth: 60
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
                      <button className="btn-box" onClick={this.togglePayModal}>
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">
                          Add Bank Reconciliation
                        </span>
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
                        <span>Close Period</span>
                      </button>
                    </li>
                  </ul>
                </Col>
                <Col sm="3">
                  <ul className="header-right">
                    <li>
                      <FormGroup check inline>
                        <Input
                          name="status"
                          type="radio"
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Active</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          name="status"
                          type="radio"
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Inactive</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          name="status"
                          type="radio"
                          className="form-check-input"
                        />
                        <Label className="form-check-label">All</Label>
                      </FormGroup>
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

          {/* Payment Mode modal */}
          <Modal
            isOpen={payMod}
            toggle={this.togglePayModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Payment Mode Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.togglePayModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Name: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Sub Account: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Airtel Money</option>
                      <option>Mpesa</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Payment Mode Category: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Cash</option>
                      <option>Cheque</option>
                      <option>Credit Card</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">API: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>None</option>
                      <option>Mpesa STK Push</option>
                    </Input>
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
                        Is Default
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isOpen"
                      />
                      <label className="custom-control-label" htmlFor="isOpen">
                        Can Be Received
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
                  onClick={this.togglePayModal}
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

export default BankRecon;

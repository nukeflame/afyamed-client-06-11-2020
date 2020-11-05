import React, { Component } from "react";
import {
  Card,
  Input,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Table,
  Button,
  Nav
} from "reactstrap";
import ReactTable from "react-table";

class Patients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      modal: false,
      dropdownOpen: false,
      patientData: JSON.parse(localStorage.getItem("cp"))
    };
  }

  toggle = tab => {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  toggleDropDown = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen
    });
  };

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  componentDidMount() {
    // const patientData = JSON.parse(localStorage.getItem("cp"));
    // this.setState({ patientData });
  }

  render() {
    const { patientData, activeTab, modal } = this.state;

    const columns = [
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "No.",
        accessor: "no"
      },
      {
        Header: "Payer",
        accessor: "payer"
      },
      {
        Header: "Due Date",
        accessor: "dueDate"
      },
      {
        Header: "Total Amount",
        accessor: "totalAmount"
      },
      {
        Header: "Paid Amount",
        accessor: "paidAmount"
      },
      {
        Header: "Copayer Sub",
        accessor: "copayerSub"
      },

      {
        Header: "Payer",
        accessor: "payer"
      },
      {
        Header: "Copayer Sub",
        accessor: "copayerSub"
      }
    ];
    const data = [];

    return (
      <div className="animated fadeIn">
        {/* Patient details */}
        {patientData !== null ? (
          <div className="top-breadcumb navbar">
            <Nav
              className="d-md-down-none animated fadeIn"
              id="patientProfile"
              navbar
            >
              dsds
            </Nav>
          </div>
        ) : null}

        {/* section layot */}
        <div className="section-layout">
          <Row>
            <Col sm="2" md="2">
              <ListGroup id="list-tab" role="tablist" className="mini-side">
                <h5 className="h-title pl-3">Transactions</h5>
                <div className="pb-1">
                  <ListGroupItem
                    onClick={() => this.toggle(0)}
                    action
                    active={activeTab === 0}
                  >
                    <span className="pl-3">Invoices</span>
                  </ListGroupItem>
                  <ListGroupItem
                    onClick={() => this.toggle(1)}
                    action
                    active={activeTab === 1}
                  >
                    <span className="pl-3">Payments</span>
                  </ListGroupItem>
                  <ListGroupItem
                    onClick={() => this.toggle(2)}
                    action
                    active={activeTab === 2}
                  >
                    <span className="pl-3">Receipts</span>
                  </ListGroupItem>
                </div>
              </ListGroup>
            </Col>
            <Col sm="10" md="10">
              <TabContent className="tab-box" activeTab={activeTab}>
                <TabPane tabId={0} className="animated fadeIn">
                  <Row>
                    <Col sm="12">
                      <Card className="box">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.toggleModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">New</span>
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
                                <button className="btn-box">
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-money  pr-1" />
                                  <span>Enter Payment</span>
                                </button>
                              </li>
                            </ul>
                            <ul className="header-right">
                              <li>
                                <Input
                                  placeholder="Type the patient"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <select className="form-control header-control pt-1">
                                  <option>All Time</option>
                                  <option>1</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                        <div>
                          <ReactTable
                            className="-highlight"
                            data={data}
                            columns={columns}
                          />
                          {/* <Table striped responsive size="sm">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>No</th>
                                <th>Payer</th>
                                <th>Due Date</th>
                                <th>Total Amount</th>
                                <th>Paid Amount</th>
                                <th>Copayer Sub</th>
                                <th>Copayer Paid</th>
                                <th>Location</th>
                              </tr>
                            </thead>
                            <tbody />
                          </Table> */}
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={1} className="animated fadeIn">
                  <Row>
                    <Col sm="12">
                      <Card className="box">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    New Lab Request
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
                                <button className="btn-box">
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                            </ul>
                            <ul className="header-right">
                              <li>
                                <Input
                                  placeholder="Type the medic"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <Input
                                  placeholder="Type the patient"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <select className="form-control header-control pt-1">
                                  <option>All Time</option>
                                  <option>1</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={2} className="animated fadeIn">
                  <Row>
                    <Col sm="12">
                      <Card className="box">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    New Lab Request
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
                                <button className="btn-box">
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                            </ul>
                            <ul className="header-right">
                              <li>
                                <Input
                                  placeholder="Type the medic"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <Input
                                  placeholder="Type the patient"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <select className="form-control header-control pt-1">
                                  <option>All Time</option>
                                  <option>1</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={3} className="animated fadeIn">
                  <Row>
                    <Col sm="12">
                      <Card className="box">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    New Lab Request
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
                                <button className="btn-box">
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                            </ul>
                            <ul className="header-right">
                              <li>
                                <Input
                                  placeholder="Type the medic"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <Input
                                  placeholder="Type the patient"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <select className="form-control header-control pt-1">
                                  <option>All Time</option>
                                  <option>1</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={4} className="animated fadeIn">
                  <Row>
                    <Col sm="12">
                      <Card className="box">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    New Lab Request
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
                                <button className="btn-box">
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                            </ul>
                            <ul className="header-right">
                              <li>
                                <Input
                                  placeholder="Type the medic"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <Input
                                  placeholder="Type the patient"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <select className="form-control header-control pt-1">
                                  <option>All Time</option>
                                  <option>1</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={5} className="animated fadeIn">
                  <Row>
                    <Col sm="12">
                      <Card className="box">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    New Lab Request
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
                                <button className="btn-box">
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                            </ul>
                            <ul className="header-right">
                              <li>
                                <Input
                                  placeholder="Type the medic"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <Input
                                  placeholder="Type the patient"
                                  className="header-control"
                                />
                              </li>
                              <li>
                                <select className="form-control header-control pt-1">
                                  <option>All Time</option>
                                  <option>1</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>

              {/* Invoice Modal */}
              <Modal
                isOpen={modal}
                toggle={this.toggleModal}
                backdrop="static"
                className={"modal-xl " + this.props.className}
              >
                <ModalHeader>
                  <span className="modal-title text-center f-s-14">
                    <i className="fa fa-receipt" /> Patient Invoice
                  </span>
                </ModalHeader>
                <ModalBody className="bg1">
                  <Row>
                    <Col sm="12">
                      <Card className="box header">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.toggleModal}
                                >
                                  <i className="fa fa-save f-s-15 c-primary pr-1" />
                                  <span className="mini-title">
                                    Save and Close
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.toggleModal}
                                >
                                  <span>Close</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <span>Set Adjustments</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-money pr-1" />
                                  <span>Enter Payment</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <span>View Invoice</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>

                  <div className="modal-fluid">
                    <Row>
                      <Col sm="12">
                        <div>
                          <h4 className="f-w-600">Invoice</h4>
                          <hr className="mt-0 hr" />
                        </div>
                        <Row>
                          <Col sm="6">
                            <Row>
                              <Col sm="10">
                                <FormGroup>
                                  <Label
                                    htmlFor="invPatient"
                                    className="f-w-600 f-s-11"
                                  >
                                    Patient:
                                  </Label>
                                  <Input
                                    id="invPatient"
                                    className="form-control-xs"
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm="2">
                                <div
                                  className="m-l-24"
                                  style={{ marginTop: "26px" }}
                                >
                                  <Button
                                    size="sm"
                                    color="primary"
                                    outline
                                    style={{ height: "27px" }}
                                  >
                                    <i className="fa fa-plus" />
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col sm="6">
                            <FormGroup>
                              <Label htmlFor="invLocation" className="f-s-11">
                                Location
                              </Label>
                              <Input
                                id="invLocation"
                                className="form-control-xs"
                                style={{ width: "60%" }}
                              />
                            </FormGroup>
                            <Row>
                              <Col sm="6">
                                <FormGroup>
                                  <Label htmlFor="invDate" className="f-s-11">
                                    Date
                                  </Label>
                                  <select
                                    id="invDate"
                                    className="form-control form-control-xs p-t-3"
                                  >
                                    <option>14-Feb-2019</option>
                                  </select>
                                </FormGroup>
                                <FormGroup>
                                  <Label htmlFor="invNo" className="f-s-11">
                                    No.
                                  </Label>
                                  <Input
                                    id="invNo"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm="6">
                                <FormGroup>
                                  <Label
                                    htmlFor="invDueDate"
                                    className="f-s-11"
                                  >
                                    Due Date
                                  </Label>
                                  <select
                                    id="invDueDate"
                                    className="form-control form-control-xs p-t-3"
                                  >
                                    <option>14-Feb-2019</option>
                                  </select>
                                </FormGroup>
                                <FormGroup>
                                  <Label htmlFor="invSeries" className="f-s-11">
                                    Series
                                  </Label>
                                  <Input
                                    id="invSeries"
                                    className="form-control form-control-xs"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="bg2">
                      <Col sm="6">
                        <Row>
                          <Col sm="2">
                            <FormGroup>
                              <Label htmlFor="invCode" className="f-s-11">
                                Code
                              </Label>
                              <Input
                                id="invCode"
                                style={{ width: "60px" }}
                                className="form-control form-control-xs f-s-10"
                              />
                            </FormGroup>
                          </Col>
                          <Col sm="10">
                            <FormGroup>
                              <Label
                                htmlFor="invItem"
                                className="f-w-600 f-s-11"
                              >
                                Item:
                              </Label>
                              <Input
                                id="invItem"
                                style={{ width: "330px" }}
                                className="form-control form-control-xs f-s-10"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="6">
                        <div className="d-flex-align">
                          <FormGroup
                            style={{ marginLeft: "-31px" }}
                            className="m-r-6"
                          >
                            <Label
                              htmlFor="invMeasUnit"
                              className="f-w-600 f-s-11"
                            >
                              Meas. Unit
                            </Label>
                            <Input
                              id="invMeasUnit"
                              style={{ width: "62px" }}
                              className="form-control form-control-xs f-s-10"
                            />
                          </FormGroup>
                          <FormGroup className="m-r-6">
                            <Label htmlFor="invQty" className="f-w-600 f-s-11">
                              Qty:
                            </Label>
                            <Input
                              id="invQty"
                              style={{ width: "62px" }}
                              className="form-control form-control-xs f-s-10 text-right"
                            />
                          </FormGroup>
                          <FormGroup className="m-r-6">
                            <Label
                              htmlFor="invUnitPrice"
                              className="f-w-600 f-s-11"
                            >
                              Unit Price:
                            </Label>
                            <Input
                              id="invUnitPrice"
                              style={{ width: "62px" }}
                              className="form-control form-control-xs f-s-10"
                            />
                          </FormGroup>
                          <FormGroup className="m-r-6">
                            <Label htmlFor="invTax" className="f-s-11">
                              Tax %:
                            </Label>
                            <Input
                              id="invTax"
                              style={{ width: "62px" }}
                              className="form-control form-control-xs f-s-10"
                            />
                          </FormGroup>
                          <FormGroup className="ml-3 mr-3">
                            <Label htmlFor="invTax" className="f-s-11">
                              Line Total
                            </Label>
                            <div className="text-center m-t-7">1</div>
                          </FormGroup>
                          <FormGroup className="ml-3 mt-3">
                            <Button
                              color="primary"
                              outline
                              className="btn-square"
                            >
                              Add Line
                            </Button>
                          </FormGroup>
                        </div>
                        <div
                          className="d-flex-align"
                          style={{ marginLeft: "-31px" }}
                        >
                          <FormGroup className="m-r-6">
                            <Label htmlFor="invDisc" className="f-s-11">
                              Discount:
                            </Label>
                            <Input
                              id="invDisc"
                              style={{ width: "62px" }}
                              className="form-control form-control-xs f-s-10 text-right"
                            />
                          </FormGroup>
                          <FormGroup className="m-r-6">
                            <Label htmlFor="invQytDelv" className="f-s-11">
                              Qyt Deliv.
                            </Label>
                            <Input
                              id="invQytDelv"
                              style={{ width: "62px" }}
                              className="form-control form-control-xs f-s-10"
                            />
                          </FormGroup>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <Card
                          className="mt-1 f-s-12"
                          style={{
                            height: "314px",
                            fontFamily: "'Roboto', sans-serif"
                          }}
                        >
                          <Table responsive striped size="sm" className="mb-0">
                            <thead>
                              <tr>
                                <th style={{ width: "240px" }}>Item Name</th>
                                <th>MU</th>
                                <th>Quantity</th>
                                <th>Deliverd Qyt.</th>
                                <th>Unit Price</th>
                                <th>Tax %</th>
                                <th>Discount</th>
                                <th>Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Consultation</td>
                                <td>Item</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Card>
                        <div className="m-t-23 m-l-10 m-b-7">
                          <Button color="link" className="f-s-11">
                            Delete Line
                          </Button>
                        </div>
                        <div>
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="Invpayment"
                              value="1"
                            />
                            <Label
                              className="form-check-label f-s-10"
                              check
                              htmlFor="Invpayment"
                            >
                              Create Payment on Closing
                            </Label>
                          </FormGroup>
                          <div className="float-right">
                            <h4>
                              <span className="f-w-600">Total:</span>
                              <span className="pl-5">0</span>
                            </h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </ModalBody>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Patients;

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
  ModalFooter,
  FormGroup,
  Label,
  Button,
  Form,
  Nav
} from "reactstrap";
import ReactTable from "react-table";

class Patient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      invMod: false,
      recptMod: false,
      modal: false,
      dropdownOpen: false,
      patientData: null
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

  // toggle invoice
  toggleInvoiceModal = () => {
    const { invMod } = this.state;
    this.setState({
      invMod: !invMod
    });
  };

  // toggle receipt
  toggleRecptModal = () => {
    const { recptMod } = this.state;
    this.setState({
      recptMod: !recptMod
    });
  };

  componentDidMount() {
    const patientData = JSON.parse(localStorage.getItem("cp"));
    this.setState({ patientData });
  }

  render() {
    const { patientData, invMod, activeTab, recptMod } = this.state;

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

    // invoice columns
    const invCol = [
      {
        Header: "Item Name",
        accessor: "itemName",
        headerClassName: "text-left",
        minWidth: 200
      },
      {
        Header: "MU",
        accessor: "measureUnit",
        headerClassName: "text-left",
        minWidth: 70
      },
      {
        Header: "Quantity",
        accessor: "quntity",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70
      },
      {
        Header: "Deliverd Qty.",
        accessor: "deliverdQty",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70
      },
      {
        Header: "Unit Price",
        accessor: "unitPrice",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70
      },
      {
        Header: "Tax %",
        accessor: "tax",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70
      },
      {
        Header: "Discount",
        accessor: "discount",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70
      },
      {
        Header: "Value",
        accessor: "value",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 80
      }
    ];

    const invData = [];

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
                                  onClick={this.toggleInvoiceModal}
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
                            defaultPageSize={12}
                            columns={columns}
                          />
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
                                    New Payment
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
                                <button
                                  className="btn-box"
                                  onClick={this.toggleRecptModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    New Receipt
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
                isOpen={invMod}
                toggle={this.toggleInvoiceModal}
                backdrop="static"
                className={"modal-xl " + this.props.className}
              >
                <ModalHeader>
                  <span className="text-center f-s-14">
                    <i className="fa fa-receipt pr-1" />
                    Patient Invoice
                  </span>
                  <span>
                    <Button
                      color="link"
                      className="modal-close-x"
                      type="button"
                      onClick={this.toggleInvoiceModal}
                    >
                      <i className="fa fa-times text-white" />
                    </Button>
                  </span>
                </ModalHeader>
                <ModalBody className="bg1 md-body">
                  <Row>
                    <Col md="12">
                      <Card className="box header">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
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
                    <div className="receipt-header">
                      <h4>Invoice</h4>
                      <hr className="mt-0 hr" />
                    </div>
                    <Form className="form-horizontal">
                      <Row>
                        <Col sm="6">
                          <FormGroup row>
                            <Label
                              sm="2"
                              size="sm"
                              htmlFor="input-small"
                              className="bold"
                            >
                              Patient:
                            </Label>
                            <Col sm="6">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Adress:
                            </Label>
                            <Col sm="6">
                              <Row>
                                <Col sm="8">
                                  <p className="form-control-static f-s-11">
                                    47260- 11th Ave. N.E <br />
                                    Seatle 980506 <br />
                                    WA
                                    <br />
                                  </p>
                                </Col>
                                <Col sm="2">
                                  <Button
                                    color="link"
                                    size="sm"
                                    className="f-s-11"
                                  >
                                    Edit
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col sm="6">
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Location:
                            </Label>
                            <Col sm="6">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Date:
                            </Label>
                            <Col sm="10" className="d-flex-align">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                              <Label
                                htmlFor="input-small"
                                className="center-lb"
                              >
                                Due Date:
                              </Label>
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              No:
                            </Label>
                            <Col sm="10" className="d-flex-align">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                              <Label
                                htmlFor="input-small"
                                className="center-lb"
                              >
                                Series:
                              </Label>
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Currency:
                            </Label>
                            <Col sm="4">
                              <Input
                                bsSize="sm"
                                type="select"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              >
                                <option>USD</option>
                                <option>EUR</option>
                                <option>KSH</option>
                              </Input>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="receipt-body">
                        <Col sm="4">
                          <Row>
                            <Col sm="2">
                              <FormGroup>
                                <Label htmlFor="invCode">Code:</Label>
                                <Input
                                  id="invCode"
                                  style={{
                                    minWidth: "53px",
                                    marginRight: "5px"
                                  }}
                                  autoComplete="off"
                                  className="form-control form-control-xs"
                                />
                              </FormGroup>
                            </Col>
                            <Col sm="10">
                              <FormGroup row>
                                <Col sm="10">
                                  <Label
                                    htmlFor="invItem"
                                    className="bold f-s-11"
                                  >
                                    Item:
                                  </Label>
                                  <Input
                                    id="invItem"
                                    autoComplete="off"
                                    style={{
                                      minWidth: "171px",
                                      marginRight: "5px"
                                    }}
                                    className="form-control form-control-xs"
                                  />
                                </Col>
                                <Col sm="2">
                                  <Button
                                    color="link"
                                    size="sm"
                                    style={{
                                      marginTop: "17px",
                                      marginLeft: "-7px"
                                    }}
                                  >
                                    <i className="fa fa-plus"></i>
                                  </Button>
                                </Col>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="8">
                          <Row>
                            <Col sm="10">
                              <div className="d-flex-align item-input">
                                <FormGroup>
                                  <Label htmlFor="invMeasUnit" className="bold">
                                    Meas. Unit
                                  </Label>

                                  <Input
                                    id="invMeasUnit"
                                    autoComplete="off"
                                    className="form-control form-control-xs "
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="invQty" className="bold ">
                                    Qty:
                                  </Label>
                                  <Input
                                    id="invQty"
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Label
                                    htmlFor="invUnitPrice"
                                    className="bold"
                                  >
                                    Unit Price:
                                  </Label>
                                  <Input
                                    id="invUnitPrice"
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                                <FormGroup className="mr-2">
                                  <Label htmlFor="invTax">Tax %:</Label>
                                  <Input
                                    id="invTax"
                                    style={{ width: "50px" }}
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                    value={"0"}
                                  />
                                </FormGroup>
                                <FormGroup className="mr-2">
                                  <Label htmlFor="invDisc">Discount:</Label>
                                  <Input
                                    id="invDisc"
                                    style={{ width: "50px" }}
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Label htmlFor="invTax">Line:</Label>
                                  <div className="text-center m-t-7">
                                    <span className="bold">30</span>
                                  </div>
                                </FormGroup>
                              </div>
                              <div className="d-flex-align item-input m-t-10">
                                <FormGroup>
                                  <Label htmlFor="invQytDelv">Qty Deliv.</Label>
                                  <Input
                                    id="invQytDelv"
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                              </div>
                            </Col>
                            <Col sm="2">
                              <FormGroup>
                                <Button
                                  color="primary"
                                  outline
                                  size="sm"
                                  className="btn-square mt-3"
                                >
                                  Add Line
                                </Button>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                    <div className="item-table">
                      <ReactTable
                        columns={invCol}
                        data={invData}
                        noDataText={""}
                        showPagination={false}
                        showPaginationBottom={false}
                        showPageSizeOptions={false}
                        defaultPageSize={7}
                        className="-highlight "
                      />
                    </div>
                    <div className="mt-2 info-dialog">
                      <span className="text-left">
                        Double click an invoice line to change it. To remove a
                        line, select it and pres DEL. To view hidden invoice
                        list press View Invoice.
                      </span>
                      <span className="float-right">
                        <Button color="link" size="sm">
                          Hide
                        </Button>
                      </span>
                    </div>

                    {/* <div className="item-del">
                      <Button color="link" className="f-s-11">
                        Delete Line
                      </Button>
                    </div> */}
                    <div>
                      <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="checkbox"
                          id="Invpayment"
                          checked
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
                          <span className="bold">Total:</span>
                          <span className="pl-5">0</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <div className="box-tools">
                    <Button
                      size="sm"
                      color="default"
                      className="mr-2 btn-square"
                      onClick={this.toggleInvoiceModal}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      color="primary"
                      className="btn-square"
                      type="submit"
                      onClick={this.handleSaveAppointment}
                    >
                      <i className="fa fa-save pr-1"></i> Save &amp; Close
                    </Button>
                  </div>
                </ModalFooter>
              </Modal>

              {/* Receipt Modal */}
              <Modal
                isOpen={recptMod}
                toggle={this.toggleRecptModal}
                backdrop="static"
                className={"modal-xl " + this.props.className}
              >
                <ModalHeader>
                  <span className="text-center f-s-14">
                    <i className="fa fa-receipt pr-1" />
                    Receipt
                  </span>
                  <span>
                    <Button
                      color="link"
                      className="modal-close-x"
                      type="button"
                      onClick={this.toggleRecptModal}
                    >
                      <i className="fa fa-times text-white" />
                    </Button>
                  </span>
                </ModalHeader>
                <ModalBody className="bg1 md-body">
                  <Row>
                    <Col md="12">
                      <Card className="box header">
                        <CardHeader className="box-header">
                          <div>
                            <ul className="header-left">
                              <li>
                                <button className="btn-box">
                                  <span>Set Adjustments</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-print pr-1" />
                                  <span>Print/Exportt</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <span>Layout</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>
                  <div className="modal-fluid">
                    <div className="receipt-header">
                      <h4>Receipt</h4>
                      <hr className="mt-0 hr" />
                    </div>
                    <Form className="form-horizontal">
                      <Row>
                        <Col sm="6">
                          <FormGroup row>
                            <Label
                              sm="2"
                              size="sm"
                              htmlFor="input-small"
                              className="bold"
                            >
                              Patient:
                            </Label>
                            <Col sm="6">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Adress:
                            </Label>
                            <Col sm="6">
                              <Row>
                                <Col sm="8">
                                  <p className="form-control-static f-s-11">
                                    47260- 11th Ave. N.E <br />
                                    Seatle 980506 <br />
                                    WA
                                    <br />
                                  </p>
                                </Col>
                                <Col sm="2">
                                  <Button
                                    color="link"
                                    size="sm"
                                    className="f-s-11"
                                  >
                                    Edit
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col sm="6">
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Location:
                            </Label>
                            <Col sm="6">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Date:
                            </Label>
                            <Col sm="4">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              No:
                            </Label>
                            <Col sm="10" className="d-flex-align">
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                              <Label
                                htmlFor="input-small"
                                className="center-lb"
                              >
                                Series:
                              </Label>
                              <Input
                                bsSize="sm"
                                type="text"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Currency:
                            </Label>
                            <Col sm="4">
                              <Input
                                bsSize="sm"
                                type="select"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              >
                                <option>USD</option>
                                <option>EUR</option>
                                <option>KSH</option>
                              </Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm="2" size="sm" htmlFor="input-small">
                              Method:
                            </Label>
                            <Col sm="4">
                              <Input
                                bsSize="sm"
                                type="select"
                                id="input-small"
                                name="input-small"
                                className="input-sm form-control-xs"
                              >
                                <option>Cash</option>
                                <option>Credit Card</option>
                                <option>KSH</option>
                              </Input>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="receipt-body">
                        <Col sm="4">
                          <Row>
                            <Col sm="2">
                              <FormGroup>
                                <Label htmlFor="invCode">Code:</Label>
                                <Input
                                  id="invCode"
                                  style={{
                                    minWidth: "70px",
                                    marginRight: "5px"
                                  }}
                                  autoComplete="off"
                                  className="form-control form-control-xs"
                                />
                              </FormGroup>
                            </Col>
                            <Col sm="10">
                              <FormGroup row>
                                <Col sm="10">
                                  <Label
                                    htmlFor="invItem"
                                    className="bold f-s-11"
                                  >
                                    Item:
                                  </Label>
                                  <Input
                                    id="invItem"
                                    autoComplete="off"
                                    style={{
                                      minWidth: "171px",
                                      marginRight: "5px"
                                    }}
                                    className="form-control form-control-xs"
                                  />
                                </Col>
                                <Col sm="2">
                                  <Button
                                    color="link"
                                    size="sm"
                                    style={{
                                      marginTop: "17px",
                                      marginLeft: "-7px"
                                    }}
                                  >
                                    <i className="fa fa-plus"></i>
                                  </Button>
                                </Col>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="8">
                          <Row>
                            <Col sm="10">
                              <div className="d-flex-align item-input">
                                <FormGroup className="mr-1">
                                  <Label htmlFor="invMeasUnit" className="bold">
                                    Meas. Unit
                                  </Label>
                                  <Input
                                    id="invMeasUnit"
                                    autoComplete="off"
                                    className="form-control form-control-xs "
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="invQty" className="bold ">
                                    Qty:
                                  </Label>
                                  <Input
                                    id="invQty"
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Label
                                    htmlFor="invUnitPrice"
                                    className="bold"
                                  >
                                    Unit Price:
                                  </Label>
                                  <Input
                                    id="invUnitPrice"
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                                <FormGroup className="mr-2">
                                  <Label htmlFor="invTax">Tax %:</Label>
                                  <Input
                                    id="invTax"
                                    style={{ width: "40px" }}
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                    value={"0"}
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Label htmlFor="invDisc">Discount:</Label>
                                  <Input
                                    id="invDisc"
                                    style={{ width: "40px" }}
                                    autoComplete="off"
                                    className="form-control form-control-xs text-right"
                                  />
                                </FormGroup>
                              </div>
                            </Col>
                            <Col sm="2">
                              <FormGroup>
                                <Button
                                  color="primary"
                                  outline
                                  size="sm"
                                  className="btn-square mt-3"
                                >
                                  Add Line
                                </Button>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                    <div className="item-table">
                      <ReactTable
                        columns={invCol}
                        data={invData}
                        noDataText={""}
                        showPagination={false}
                        showPaginationBottom={false}
                        showPageSizeOptions={false}
                        defaultPageSize={7}
                        className="-highlight "
                      />
                    </div>
                    {/* <div className="mt-2 info-dialog">
                      <span className="text-left">
                        Double click an invoice line to change it. To remove a
                        line, select it and pres DEL. To view hidden invoice
                        list press View Invoice.
                      </span>
                      <span className="float-right">
                        <Button color="link" size="sm">
                          Hide
                        </Button>
                      </span>
                    </div> */}

                    {/* <div className="item-del">
                      <Button color="link" className="f-s-11">
                        Delete Line
                      </Button>
                    </div> */}
                    <div className="mt-2">
                      <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="checkbox"
                          id="Invpayment"
                          checked
                          value="1"
                        />
                        <Label
                          className="form-check-label f-s-10"
                          check
                          htmlFor="Invpayment"
                        >
                          Auto print on Save and Close
                        </Label>
                      </FormGroup>
                      <div className="float-right">
                        <h4>
                          <span className="bold">Total:</span>
                          <span className="pl-5 bold">1,000,000.00</span>
                        </h4>
                      </div>
                    </div>
                    <div>
                      <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="checkbox"
                          id="Invpayment"
                          checked
                          value="1"
                        />
                        <Label
                          className="form-check-label f-s-10"
                          check
                          htmlFor="Invpayment"
                        >
                          Auto save and silent print on Print/Export
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <div className="box-tools">
                    <Button
                      size="sm"
                      color="default"
                      className="mr-2 btn-square"
                      onClick={this.toggleRecptModal}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      color="primary"
                      className="btn-square"
                      type="submit"
                      onClick={this.handleSaveAppointment}
                    >
                      <i className="fa fa-save pr-1"></i> Save &amp; Close
                    </Button>
                  </div>
                </ModalFooter>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Patient;

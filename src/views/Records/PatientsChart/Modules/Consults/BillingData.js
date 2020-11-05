import React, { Component } from "react";
import {
  Card,
  Input,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
  Form,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classNames from "classnames";
import ReactTable from "react-table";
import { connect } from "react-redux";

class BillingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invMod: false,
      recptMod: false,
      topActiveTab: "1",
    };
  }

  toggleTopNav = (tab) => {
    const { topActiveTab } = this.state;
    if (topActiveTab !== tab) {
      this.setState({
        topActiveTab: tab,
      });
    }
  };

  // toggle invoice
  toggleInvoiceModal = () => {
    const { invMod } = this.state;
    this.setState({
      invMod: !invMod,
    });
  };

  // toggle receipt
  toggleRecptModal = () => {
    const { recptMod } = this.state;
    this.setState({
      recptMod: !recptMod,
    });
  };

  linkToTrans = (e) => {
    e.preventDefault();
    this.props.history.push("/billing/patient");
  };

  render() {
    const { topActiveTab, invMod, recptMod } = this.state;
    const data = [
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Consultation",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
      {
        date: "23-Mar-2020",
        item: "Physiotherapy",
        qty: "300",
        delivQty: "1",
        stock: "",
        cost: "0",
      },
    ];
    const columns = [
      {
        Header: () => (
          <span>
            <input
              className=""
              type="checkbox"
              id="checkBillable"
              name="checkBillable"
            />
          </span>
        ),
        accessor: "checkItems",
        minWidth: 30,
        Cell: (row) => (
          <div className="p-t-3">
            <input
              className=""
              type="checkbox"
              id="checkBillable1"
              name="checkBillable1"
            />
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: "date",
        minWidth: 90,
      },
      {
        Header: "Item",
        accessor: "item",
        minWidth: 200,
      },
      {
        Header: "Quantity",
        accessor: "qty",
      },
      {
        Header: "Deliv. Qty",
        accessor: "delivQty",
      },
      {
        Header: "Stock",
        accessor: "stock",
      },
      {
        Header: "Cost",
        accessor: "cost",
        Cell: () => (
          <div>
            <input
              className="billable-input"
              type="number"
              id="cost"
              name="cost"
            />
          </div>
        ),
      },
      {
        Header: "Taxes Included",
        accessor: "inclTaxes",
        className: "text-center",
        Cell: () => (
          <div className="p-t-3">
            <input
              className=""
              type="checkbox"
              id="checkBillable2"
              name="checkBillable2"
            />
          </div>
        ),
      },
    ];
    // invoice columns
    const invCol = [
      {
        Header: "Item Name",
        accessor: "itemName",
        headerClassName: "text-left",
        minWidth: 200,
      },
      {
        Header: "MU",
        accessor: "measureUnit",
        headerClassName: "text-left",
        minWidth: 70,
      },
      {
        Header: "Quantity",
        accessor: "quntity",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70,
      },
      {
        Header: "Deliverd Qty.",
        accessor: "deliverdQty",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70,
      },
      {
        Header: "Unit Price",
        accessor: "unitPrice",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70,
      },
      {
        Header: "Tax %",
        accessor: "tax",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70,
      },
      {
        Header: "Discount",
        accessor: "discount",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 70,
      },
      {
        Header: "Value",
        accessor: "value",
        headerClassName: "text-right",
        className: "text-right",
        minWidth: 80,
      },
    ];

    const invData = [];

    return (
      <div className="animated fadeIn consultation-wrapper pb-0">
        <Row>
          <Col sm="3">
            <div className="d-flex-col">
              <div className="d-flex-align">
                <h5 className="mb-0">
                  <span className="f-s-12">Ksh</span> 200.00
                </h5>
                <span className="f-s-13 pl-2 text-muted">Total Amount</span>
              </div>
              <div className="d-flex-align mt-3">
                <h5 className="mb-0">
                  <span className="f-s-12">Ksh</span> 200.00
                </h5>
                <span className="f-s-13 pl-2 text-muted">Total Paid</span>
              </div>
              <div className="d-flex-align">
                <h5 className="mb-0">
                  <span className="f-s-12">Ksh</span> 0.00
                </h5>
                <span className="f-s-13 pl-2 text-muted">Balance</span>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <Button color="link" size="sm" onClick={this.linkToTrans}>
              <i className="icon-plus" /> Add Transaction
            </Button>
            <Button color="link" size="sm">
              <i className="icon-share-alt" /> Summary Report
            </Button>
            <div>
              <Button color="link" size="sm">
                <i className="fa fa-arrow-right" /> More...
              </Button>
            </div>
          </Col>
          <Col sm="3">
            <Button color="link" size="sm">
              Edit Billing Notes
            </Button>
          </Col>
        </Row>
        <div className="mt-4">
          <Row>
            <Col sm="12">
              <div className="navitem-header">
                <Nav tabs className="header-pils">
                  <NavItem>
                    <NavLink
                      className={
                        "pl-0 " +
                        classNames({
                          active: topActiveTab === "1",
                        })
                      }
                      onClick={() => {
                        this.toggleTopNav("1");
                      }}
                    >
                      Billable Items
                    </NavLink>
                  </NavItem>
                  <NavItem />
                  <NavItem>
                    <NavLink
                      className={classNames({
                        active: topActiveTab === "2",
                      })}
                      onClick={() => {
                        this.toggleTopNav("2");
                      }}
                    >
                      Transactions
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames({
                        active: topActiveTab === "3",
                      })}
                      onClick={() => {
                        this.toggleTopNav("3");
                      }}
                    >
                      Prepaid
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames({
                        active: topActiveTab === "4",
                      })}
                      onClick={() => {
                        this.toggleTopNav("4");
                      }}
                    >
                      Balance Sheet
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>
          <div className="body-pills pt-2">
            <TabContent activeTab={topActiveTab} className="content-pills">
              <TabPane tabId="1" className="animated fadeIn pl-0">
                <Row>
                  <Col sm="12">
                    <Card className="box">
                      <CardHeader className="box-header">
                        <div className="float-left">
                          <h6 className="mb-0 p-t-3">BILLABLE ITEMS</h6>
                        </div>
                        <div className="float-right">
                          <ul className="header-left">
                            <li>
                              <button
                                className="btn-box"
                                type="button"
                                onClick={this.toggleInvoiceModal}
                              >
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Build Invoice
                                </span>
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn-box"
                                type="button"
                                onClick={this.toggleRecptModal}
                              >
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Build Receipt
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <Row>
                        <Col sm="12">
                          <ReactTable
                            className="docume_file text-left"
                            data={data}
                            columns={columns}
                            showPageSizeOptions={false}
                            defaultPageSize={12}
                            sortable={false}
                          />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2" className="animated fadeIn">
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
                                  Add Consultation
                                </span>
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
                              <button className="btn-box">
                                <i className="fa fa-print  pr-1" />
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-settings" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div className="container mt-2 mb-2">
                        <div className="row">
                          <div className="col-md-12">
                            <ul className="timeline">d</ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3" className="animated fadeIn">
                2
              </TabPane>
              <TabPane tabId="4" className="animated fadeIn">
                3{" "}
              </TabPane>
            </TabContent>
          </div>
        </div>

        {/* Invoice Modal */}
        <Modal
          isOpen={invMod}
          toggle={this.toggleInvoiceModal}
          backdrop="static"
          className={this.props.className}
          fade={false}
          size="xl"
          modalClassName="modal_stretch animated fadeIn"
        >
          <ModalHeader className="m-0">
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
          <ModalBody className="bg1 md-body p-0">
            <Card className="box header">
              <CardHeader className="box-header">
                <div>
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        type="button"
                        onClick={this.toggleInvoiceModal}
                      >
                        <span>
                          <i className="fa fa-save f-s-11 c-primary pr-1" />
                          <span className="mini-title">Save &amp; Close</span>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        type="button"
                        onClick={this.toggleInvoiceModal}
                      >
                        <span>Cancel</span>
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
            <Row>
              <Col md="12">
                <div className="modal-fluid">
                  <div className="p-3">
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
                                    marginRight: "5px",
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
                                      marginRight: "5px",
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
                                      marginLeft: "-7px",
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
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>

        {/* Receipt Modal */}
        <Modal
          isOpen={recptMod}
          toggle={this.toggleRecptModal}
          backdrop="static"
          className={this.props.className}
          fade={false}
          size="xl"
          modalClassName="modal_stretch animated fadeIn"
        >
          <ModalHeader className="m-0">
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
          <ModalBody className="bg1 p-0">
            <Row>
              <Col md="12">
                <Card className="box header">
                  <CardHeader className="box-header">
                    <div>
                      <ul className="header-left">
                        <li>
                          <button
                            className="btn-box"
                            type="button"
                            onClick={this.toggleRecptModal}
                          >
                            <span>
                              <i className="fa fa-save f-s-11 c-primary pr-1" />
                              <span className="mini-title">
                                Save &amp; Close
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn-box"
                            type="button"
                            onClick={this.toggleRecptModal}
                          >
                            <span>Cancel</span>
                          </button>
                        </li>
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
              <div className="p-3">
                <div className="receipt-header">
                  <h5>Receipt</h5>
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
                              <Button color="link" size="sm" className="f-s-11">
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
                          <Label htmlFor="input-small" className="center-lb">
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
                                marginRight: "5px",
                              }}
                              autoComplete="off"
                              className="form-control form-control-xs"
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="10">
                          <FormGroup row>
                            <Col sm="10">
                              <Label htmlFor="invItem" className="bold f-s-11">
                                Item:
                              </Label>
                              <Input
                                id="invItem"
                                autoComplete="off"
                                style={{
                                  minWidth: "171px",
                                  marginRight: "5px",
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
                                  marginLeft: "-7px",
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
                              <Label htmlFor="invUnitPrice" className="bold">
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
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BillingData);

import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane,
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
import PaymentMode from "./Items/PaymentMode";
import JournalVoucher from "./Items/JournalVoucher";
import Taxes from "./Items/Taxes";
import CashTransfer from "./Items/CashTransfer";
import Scheme from "./Items/Scheme";
import Bank from "./Items/Bank";
import BankDeposit from "./Items/BankDeposit";
import Cheque from "./Items/Cheque";
import BankRecon from "./Items/BankRecon";
import Budgeting from "./Items/Budgeting";

class AccountItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 14,
      fpMod: false,
      accMod: false,
      subAccMod: false,
      configAccMod: false,
      showSearchBar: false
    };
  }

  toggleActiveTab = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  handleSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  // fn fiscal period modal
  toggleFpModal = () => {
    const { fpMod } = this.state;

    this.setState({
      fpMod: !fpMod
    });
  };

  // fn ledger accounts modal
  toggleAccModal = () => {
    const { accMod } = this.state;

    this.setState({
      accMod: !accMod
    });
  };

  // fn sub ledger accounts modal
  toggleSubAccModal = () => {
    const { subAccMod } = this.state;

    this.setState({
      subAccMod: !subAccMod
    });
  };

  // fn configure accounts modal
  toggleConfigAccModal = () => {
    const { configAccMod } = this.state;

    this.setState({
      configAccMod: !configAccMod
    });
  };

  render() {
    const {
      activeTab,
      showSearchBar,
      fpMod,
      accMod,
      subAccMod,
      configAccMod
    } = this.state;

    const data = [
      {
        fpNo: "2",
        openDate: "January 1, 2020",
        closeDate: "December 31, 2020",
        isActive: "No",
        isOpen: "Yes"
      },
      {
        fpNo: "1",
        openDate: "June 27, 2018",
        closeDate: "December 31, 2019",
        isActive: "Yes",
        isOpen: "Yes"
      }
    ];

    const columns = [
      {
        Header: "Fiscal Period No.",
        accessor: "fpNo"
      },
      {
        Header: "Open Date",
        accessor: "openDate",
        headerClassName: "text-left",
        className: "text-left"
      },
      {
        Header: "Close Date",
        accessor: "closeDate"
      },
      {
        Header: "Is Active",
        accessor: "isActive"
      },
      {
        Header: "is Open",
        accessor: "isOpen"
      }
    ];

    const accCol = [
      {
        Header: "Account No.",
        accessor: "accountNo"
      },
      {
        Header: "Account Name",
        accessor: "accountName"
      },
      {
        Header: "Account Class",
        accessor: "accountClass"
      }
    ];

    const accData = [
      {
        accountNo: "1082",
        accountName: "Inventory",
        accountClass: "Current Assets"
      },
      {
        accountNo: "1156",
        accountName: "Motor Vehicles",
        accountClass: "Fixed Assets"
      },
      {
        accountNo: "3056",
        accountName: "Accounts Receivable",
        accountClass: "Current Assets"
      },
      {
        accountNo: "3056",
        accountName: "Accounts Payable",
        accountClass: "Current Liabilities"
      }
    ];

    const subAccCol = [
      {
        Header: "Sub-Account ID.",
        accessor: "accountNo"
      },
      {
        Header: "Name",
        accessor: "subName"
      },
      {
        Header: "Balance",
        accessor: "subBalance"
      }
    ];

    const subAccData = [
      {
        accountNo: "1082",
        accountName: "Inventory",
        accountClass: "Current Assets"
      },
      {
        accountNo: "1156",
        accountName: "Motor Vehicles",
        accountClass: "Fixed Assets"
      },
      {
        accountNo: "3056",
        accountName: "Accounts Receivable",
        accountClass: "Current Assets"
      },
      {
        accountNo: "3056",
        accountName: "Accounts Payable",
        accountClass: "Current Liabilities"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <ListGroupItem
                onClick={() => this.toggleActiveTab(0)}
                action
                active={activeTab === 0}
              >
                <div>Fiscal Periods</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(1)}
                action
                active={activeTab === 1}
              >
                <div>Ledger Accounts</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(2)}
                action
                active={activeTab === 2}
              >
                <div>Payment Modes</div>
              </ListGroupItem>

              <ListGroupItem
                onClick={() => this.toggleActiveTab(3)}
                action
                active={activeTab === 3}
              >
                <div>Journal Vouchers</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(4)}
                action
                active={activeTab === 4}
              >
                <div>Taxes</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(5)}
                action
                active={activeTab === 5}
              >
                <div>Cash Transfers</div>
              </ListGroupItem>
              <span className="hr-line"></span>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(6)}
                action
                active={activeTab === 6}
              >
                <div>Schemes</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(7)}
                action
                active={activeTab === 7}
              >
                <div>Scheme Items</div>
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggleActiveTab(8)}
                action
                active={activeTab === 8}
              >
                <div>Currency Units</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(9)}
                action
                active={activeTab === 9}
              >
                <div>Asset Management</div>
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggleActiveTab(10)}
                action
                active={activeTab === 10}
              >
                <div>Banks</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(11)}
                action
                active={activeTab === 11}
              >
                <div>Bank Deposits</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(12)}
                action
                active={activeTab === 12}
              >
                <div>Cheques</div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggleActiveTab(13)}
                action
                active={activeTab === 13}
              >
                <div>Bank Reconciliation</div>
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggleActiveTab(14)}
                action
                active={activeTab === 14}
              >
                <div>Budgeting</div>
              </ListGroupItem>
              {/* </div> */}
            </ListGroup>
          </Col>
          <Col sm="10">
            <TabContent className="tab-box" activeTab={activeTab}>
              <TabPane tabId={0} className="animated fadeIn">
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
                                  onClick={this.toggleFpModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    Add Fiscal Period
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
                                  <Label className="form-check-label">
                                    Active
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Input
                                    name="status"
                                    type="radio"
                                    className="form-check-input"
                                  />
                                  <Label className="form-check-label">
                                    Inactive
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Input
                                    name="status"
                                    type="radio"
                                    className="form-check-input"
                                  />
                                  <Label className="form-check-label">
                                    All
                                  </Label>
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
                                  <Label className="-body-label">
                                    Search for:
                                  </Label>
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
                                  <Button
                                    size="sm"
                                    className="btn-default btn-square"
                                  >
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
                          className="-highlight text-left"
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
                        <Row>
                          <Col sm="9">
                            <ul className="header-left">
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.toggleAccModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    Add Account
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
                                <button
                                  className="btn-box"
                                  onClick={this.toggleConfigAccModal}
                                >
                                  <span>Configure</span>
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
                                  <Label className="-body-label">
                                    Search for:
                                  </Label>
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
                                  <Button
                                    size="sm"
                                    className="btn-default btn-square"
                                  >
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
                          data={accData}
                          columns={accCol}
                          className="-highlight text-left"
                        />
                      </div>
                    </Card>
                    {/* Sub account */}
                    <Card className="box">
                      <CardHeader className="box-header">
                        <Row>
                          <Col sm="9">
                            <ul className="header-left">
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.toggleSubAccModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">
                                    Add Sub Account
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
                                  <Label className="-body-label">
                                    Search for:
                                  </Label>
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
                                  <Button
                                    size="sm"
                                    className="btn-default btn-square"
                                  >
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
                          data={subAccData}
                          columns={subAccCol}
                          className="-highlight text-left"
                        />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={2} className="animated fadeIn">
                <PaymentMode />
              </TabPane>
              <TabPane tabId={3} className="animated fadeIn">
                <JournalVoucher />
              </TabPane>
              <TabPane tabId={4} className="animated fadeIn">
                <Taxes />
              </TabPane>
              <TabPane tabId={5} className="animated fadeIn">
                <CashTransfer />
              </TabPane>
              <TabPane tabId={6} className="animated fadeIn">
                <Scheme />
              </TabPane>
              <TabPane tabId={7} className="animated fadeIn">
                <PaymentMode />
              </TabPane>
              <TabPane tabId={8} className="animated fadeIn">
                <PaymentMode />
              </TabPane>
              <TabPane tabId={9} className="animated fadeIn">
                <PaymentMode />
              </TabPane>
              <TabPane tabId={10} className="animated fadeIn">
                <Bank />
              </TabPane>
              <TabPane tabId={11} className="animated fadeIn">
                <BankDeposit />
              </TabPane>
              <TabPane tabId={12} className="animated fadeIn">
                <Cheque />
              </TabPane>
              <TabPane tabId={13} className="animated fadeIn">
                <BankRecon />
              </TabPane>
              <TabPane tabId={14} className="animated fadeIn">
                <Budgeting />
              </TabPane>
            </TabContent>

            {/* Fiscal Period modal */}
            <Modal
              isOpen={fpMod}
              toggle={this.toggleFpModal}
              backdrop="static"
              className={this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-calendar pr-1" />
                  Fiscal Period Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleFpModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Row>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Period ID: </Label>
                          <Input
                            className="form-control-xs text-right"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Close Date: </Label>
                          <Input className="form-control-xs" type="date" />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Open Date: </Label>
                          <Input className="form-control-xs" type="daye" />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup check inline className="mt-3">
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
                              Is Active
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="isOpen"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="isOpen"
                            >
                              Is Open
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleFpModal}
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

            {/* Ledger Accounts modal */}
            <Modal
              isOpen={accMod}
              toggle={this.toggleAccModal}
              backdrop="static"
              className={this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-money pr-1" />
                  Accounts Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleAccModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Row>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Period ID: </Label>
                          <Input
                            className="form-control-xs text-right"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Close Date: </Label>
                          <Input className="form-control-xs" type="date" />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Open Date: </Label>
                          <Input className="form-control-xs" type="daye" />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup check inline className="mt-3">
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
                              Is Active
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="isOpen"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="isOpen"
                            >
                              Is Open
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleAccModal}
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

            {/* Sub Ledger Accounts modal */}
            <Modal
              isOpen={subAccMod}
              toggle={this.toggleSubAccModal}
              backdrop="static"
              className={this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-money pr-1" />
                  Sub-Account Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleSubAccModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Row>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Sub-Account Name: </Label>
                          <Input className="form-control-xs" type="text" />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Current Balance: </Label>
                          <Input className="form-control-xs" type="number" />
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Account: </Label>
                          <Input className="form-control-xs" type="select">
                            <option></option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleSubAccModal}
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

            {/* Configure Accounts modal */}
            <Modal
              isOpen={configAccMod}
              toggle={this.toggleConfigAccModal}
              backdrop="static"
              className={this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-money pr-1" />
                  Configure Accounts For Auto Posting
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleConfigAccModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <h5>Accounts Configuration</h5>
                    <Row>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Account Configuration: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Select Account: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <h5>Sub-Accounts Configuration</h5>
                    <Row>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Sub-Account Configuration: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Select Sub-Account: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleConfigAccModal}
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

            {/* Configure Accounts modal */}
            <Modal
              isOpen={configAccMod}
              toggle={this.toggleConfigAccModal}
              backdrop="static"
              className={this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-money pr-1" />
                  Configure Accounts For Auto Posting
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleConfigAccModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <h5>Accounts Configuration</h5>
                    <Row>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Account Configuration: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Select Account: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <h5>Sub-Accounts Configuration</h5>
                    <Row>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Sub-Account Configuration: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup className="mt-3">
                          <Label>Select Sub-Account: </Label>
                          <Input className="form-control-xs" type="select">
                            <option>Cash</option>
                            <option>Bank</option>
                            <option>Accrued Liabilities</option>
                            <option>Inventory</option>
                            <option>Cost Of Sales</option>
                            <option>Revenue</option>
                            <option>Receivables</option>
                            <option>Payables</option>
                            <option>Customer Deposits</option>
                            <option>Long Term Borrowings </option>
                            <option>Short Term Borrowings </option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleConfigAccModal}
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
      </div>
    );
  }
}

export default AccountItems;

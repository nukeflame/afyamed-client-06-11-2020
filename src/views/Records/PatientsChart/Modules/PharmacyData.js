import React, { Component } from "react";
import {
  Card,
  Input,
  CardHeader,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Table,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classNames from "classnames";

class PharmacyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topActiveTab: "1",
      receiptMd: false
    };
  }

  toggleTopNav = tab => {
    const { topActiveTab } = this.state;

    if (topActiveTab !== tab) {
      this.setState({
        topActiveTab: tab
      });
    }
  };

  dispenseReceipt = () => {
    const { receiptMd } = this.state;
    this.setState({
      receiptMd: !receiptMd
    });
  };

  render() {
    const { topActiveTab, receiptMd } = this.state;

    return (
      <div>
        <Row>
          <Col sm="12">
            <div className="timelist">
              <Button
                size="sm"
                className="btn-square"
                onClick={this.dispenseReceipt}
              >
                <i className="fa fa-pied-piper" /> Dispense By Receipt
              </Button>
              <div className="time-right">
                <span />
              </div>
            </div>
            <Row className="mt-4">
              <Col sm="12">
                <div className="navitem-header">
                  <Nav tabs className="header-pils">
                    <NavItem>
                      <NavLink
                        className={classNames({
                          active: topActiveTab === "1"
                        })}
                        onClick={() => {
                          this.toggleTopNav("1");
                        }}
                      >
                        Billable Drugs
                      </NavLink>
                    </NavItem>
                    <NavItem />
                    <NavItem>
                      <NavLink
                        className={classNames({
                          active: topActiveTab === "2"
                        })}
                        onClick={() => {
                          this.toggleTopNav("2");
                        }}
                      >
                        Prepaid
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classNames({
                          active: topActiveTab === "3"
                        })}
                        onClick={() => {
                          this.toggleTopNav("3");
                        }}
                      >
                        Dispensed
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>
            <div className="body-pills pt-3">
              <TabContent
                activeTab={topActiveTab}
                className="animated fadeIn content-pills"
              >
                <TabPane tabId="1" className="animated fadeIn">
                  <Card className="box" />
                </TabPane>
                <TabPane tabId="2" className="animated fadeIn">
                  <Card className="box" />
                </TabPane>
                <TabPane tabId="3" className="animated fadeIn">
                  <Card className="box" />
                </TabPane>
              </TabContent>
            </div>
          </Col>

          {/* Receipt Modal */}
          <Modal
            isOpen={receiptMd}
            toggle={this.dispenseReceipt}
            backdrop="static"
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title text-center f-s-14">
                <i className="fa fa-file-text" /> Receipt
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
                              onClick={this.dispenseReceipt}
                            >
                              <i className="fa fa-save f-s-15 c-primary pr-1" />
                              <span className="mini-title">Save and Close</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.dispenseReceipt}
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
                              <i className="fa fa-print pr-1" />
                              <span>Print/Export</span>
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
                      <h4 className="f-w-600">Receipt</h4>
                      <hr className="mt-0 hr" />
                    </div>
                    <Row>
                      <Col sm="6">
                        <Row>
                          <Col sm="10">
                            <FormGroup>
                              <Label
                                htmlFor="invPatient"
                                className="f-w-600 f-s-11 mb-0"
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
                              style={{ marginTop: "19px" }}
                            >
                              <Button
                                size="sm"
                                color="primary"
                                outline
                                className="btn-round"
                                style={{ height: "27px" }}
                              >
                                <i className="icon-plus f-w-600" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="6">
                        <FormGroup>
                          <Label htmlFor="invLocation" className="f-s-11 mb-0">
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
                              <Label htmlFor="invDate" className="f-s-11 mb-0">
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
                              <Label htmlFor="invNo" className="f-s-11 mb-0">
                                No.
                              </Label>
                              <Input
                                id="invNo"
                                className="form-control form-control-xs text-right"
                              />
                            </FormGroup>

                            <FormGroup>
                              <Label htmlFor="invNo" className="f-s-11 mb-0">
                                Method
                              </Label>
                              <Input
                                id="invNo"
                                type="select"
                                className="form-control form-control-xs"
                              >
                                <option>Cash</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col sm="6">
                            <FormGroup>
                              <Label
                                htmlFor="invSeries"
                                className="f-s-11 mb-0"
                              >
                                Series
                              </Label>
                              <Input
                                id="invSeries"
                                className="form-control form-control-xs"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="invNo" className="f-s-11 mb-0">
                                Currency
                              </Label>
                              <Input
                                id="invNo"
                                type="select"
                                className="form-control form-control-xs"
                              >
                                <option>Ksh</option>
                                <option>USD</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="bg2 mt-3">
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
                          <Label htmlFor="invItem" className="f-w-600 f-s-11">
                            Item:
                          </Label>
                          <Input
                            id="invItem"
                            style={{ width: "260px" }}
                            className="form-control form-control-xs f-s-10"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="6">
                    <div className="d-flex-align">
                      <FormGroup
                        style={{ marginLeft: "-90px" }}
                        className="m-r-6"
                      >
                        <Label htmlFor="invMeasUnit" className="f-w-600 f-s-11">
                          Meas. Unit:
                        </Label>
                        <Input
                          id="invMeasUnit"
                          style={{ width: "75px" }}
                          className="form-control form-control-xs f-s-10"
                        />
                      </FormGroup>
                      <FormGroup className="m-r-6">
                        <Label htmlFor="invQty" className="f-w-600 f-s-11">
                          Qty:
                        </Label>
                        <Input
                          id="invQty"
                          style={{ width: "75px" }}
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
                          style={{ width: "75px" }}
                          className="form-control form-control-xs f-s-10"
                        />
                      </FormGroup>
                      <FormGroup className="m-r-6">
                        <Label htmlFor="invTax" className="f-s-11">
                          Tax %:
                        </Label>
                        <Input
                          id="invTax"
                          style={{ width: "75px" }}
                          className="form-control form-control-xs f-s-10"
                        />
                      </FormGroup>
                      <FormGroup className="m-r-6">
                        <Label htmlFor="invDisc" className="f-s-11">
                          Discount:
                        </Label>
                        <Input
                          id="invDisc"
                          style={{ width: "75px" }}
                          className="form-control form-control-xs f-s-10 text-right"
                        />
                      </FormGroup>
                      <FormGroup className="ml-3 mt-3">
                        <Button color="primary" outline className="btn-square">
                          Add Line
                        </Button>
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
                            Auto print on Save and Close
                          </Label>
                        </FormGroup>
                        <div className="float-right">
                          <h4>
                            <span className="f-w-600">Total:</span>
                            <span className="pl-5">0</span>
                          </h4>
                        </div>
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
                            Auto save and silent print on Print/Export
                          </Label>
                        </FormGroup>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </ModalBody>
          </Modal>
        </Row>
      </div>
    );
  }
}

export default PharmacyData;

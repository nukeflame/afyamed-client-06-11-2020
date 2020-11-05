import React, { Component } from "react";
import {
  Card,
  Input,
  CardHeader,
  Col,
  FormGroup,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
import CardBody from "reactstrap/lib/CardBody";

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
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

  render() {
    const { activeTab } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <div>
                <h5 className="h-title mb-0 pl-3">Medical</h5>
                <ListGroupItem
                  onClick={() => this.toggle(0)}
                  action
                  active={activeTab === 0}
                >
                  <span className="pl-3">Patient Report</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(1)}
                  action
                  active={activeTab === 1}
                >
                  <span className="pl-3">Diagonoses</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(2)}
                  action
                  active={activeTab === 2}
                >
                  <span className="pl-3">Diagonoses &amp; Reports</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(3)}
                  action
                  active={activeTab === 3}
                >
                  <span className="pl-3">Prescriptions</span>
                </ListGroupItem>
              </div>
              <div>
                <h6 className="h-title mb-0 pl-3">Statistics</h6>
                <ListGroupItem
                  onClick={() => this.toggle(4)}
                  action
                  active={activeTab === 4}
                >
                  <span className="pl-3">Diagonoses Statistics</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(5)}
                  action
                  active={activeTab === 5}
                >
                  <span className="pl-3">Treatment Statistics</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(6)}
                  action
                  active={activeTab === 6}
                >
                  <span className="pl-3">Prescriptions Statistics</span>
                </ListGroupItem>
              </div>
              <div>
                <h5 className="h-title mb-0 pl-3">Scheduling</h5>
                <ListGroupItem
                  onClick={() => this.toggle(7)}
                  action
                  active={activeTab === 7}
                >
                  <span className="pl-3">Appointments</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(8)}
                  action
                  active={activeTab === 8}
                >
                  <span className="pl-3">Resource Usage</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(9)}
                  action
                  active={activeTab === 9}
                >
                  <span className="pl-3">Admission</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(10)}
                  action
                  active={activeTab === 10}
                >
                  <span className="pl-3">Admission Days</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(11)}
                  action
                  active={activeTab === 11}
                >
                  <span className="pl-3">Admission By Copayer</span>
                </ListGroupItem>
              </div>
              <div>
                <h6 className="h-title mb-0 pl-3">Financial</h6>
                <ListGroupItem
                  onClick={() => this.toggle(12)}
                  action
                  active={activeTab === 12}
                >
                  <span className="pl-3">Balance Sheet</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(13)}
                  action
                  active={activeTab === 13}
                >
                  <span className="pl-3">Patient Balance Sheet</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(14)}
                  action
                  active={activeTab === 14}
                >
                  <span className="pl-3">Patient Financial Summary</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(15)}
                  action
                  active={activeTab === 15}
                >
                  <span className="pl-3">Medics Income</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(16)}
                  action
                  active={activeTab === 16}
                >
                  <span className="pl-3">Medics Billed Income</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(17)}
                  action
                  active={activeTab === 17}
                >
                  <span className="pl-3">Income By Referrer</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(18)}
                  action
                  active={activeTab === 18}
                >
                  <span className="pl-3">Income By Copayer</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(19)}
                  action
                  active={activeTab === 19}
                >
                  <span className="pl-3">Items By Copayer</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(20)}
                  action
                  active={activeTab === 20}
                >
                  <span className="pl-3">Costs &amp; Profits</span>
                </ListGroupItem>
              </div>
              <div>
                <h5 className="h-title mb-0 pl-3">Billing</h5>
                <ListGroupItem
                  onClick={() => this.toggle(21)}
                  action
                  active={activeTab === 21}
                >
                  <span className="pl-3">Patients</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(22)}
                  action
                  active={activeTab === 22}
                >
                  <span className="pl-3">Aged Receivables</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(23)}
                  action
                  active={activeTab === 23}
                >
                  <span className="pl-3">Unpaid Invoices</span>
                </ListGroupItem>
              </div>
              <div>
                <h6 className="h-title mb-0 pl-3">Purchases</h6>
                <ListGroupItem
                  onClick={() => this.toggle(24)}
                  action
                  active={activeTab === 24}
                >
                  <span className="pl-3">Suppliers</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(25)}
                  action
                  active={activeTab === 25}
                >
                  <span className="pl-3">Unpaid Invoices</span>
                </ListGroupItem>
              </div>
              <div>
                <h5 className="h-title mb-0 pl-3">Company</h5>
                <ListGroupItem
                  onClick={() => this.toggle(26)}
                  action
                  active={activeTab === 26}
                >
                  <span className="pl-3">Patients</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(27)}
                  action
                  active={activeTab === 27}
                >
                  <span className="pl-3">Contacts</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(28)}
                  action
                  active={activeTab === 28}
                >
                  <span className="pl-3">Transfers</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(29)}
                  action
                  active={activeTab === 29}
                >
                  <span className="pl-3">Transfer Request</span>
                </ListGroupItem>
              </div>
              <h6 className="h-title mb-0  pl-3">More Reports</h6>
            </ListGroup>
          </Col>
          <Col sm="10">
            <TabContent className="tab-box" activeTab={activeTab}>
              <TabPane tabId={0} className="animated fadeIn">
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

              <TabPane tabId={6} className="animated fadeIn">
                {/* Prescriptions Statistics */}
                <Row>
                  <Col sm="12">
                    <Card className="box" style={{ minHeight: "970px" }}>
                      <CardBody>
                        <h6 className="card-title f-w-600">
                          Prescriptions Statistics
                        </h6>
                        <Row>
                          <Col sm="3">
                            <FormGroup>
                              <Label htmlFor="medics">&nbsp;Medics</Label>
                              <Input
                                type="select"
                                id="medics"
                                bsSize="sm"
                                className="form-control-xs"
                              >
                                <option value="0">All</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                                <option value="4">Option #4</option>
                                <option value="5">Option #5</option>
                              </Input>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="medics">&nbsp;Medics</Label>
                              <Input
                                type="select"
                                id="medics"
                                bsSize="sm"
                                className="form-control-xs"
                              >
                                <option value="0">All Time</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                                <option value="4">Option #4</option>
                                <option value="5">Option #5</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col sm="3">
                            <FormGroup>
                              <Label htmlFor="medics">&nbsp;Medics</Label>
                              <Input
                                type="select"
                                id="medics"
                                bsSize="sm"
                                className="form-control-xs"
                              >
                                <option value="0">All</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                                <option value="4">Option #4</option>
                                <option value="5">Option #5</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col sm="3">
                            <FormGroup>
                              <Label htmlFor="medics">&nbsp;Medics</Label>
                              <Input
                                type="select"
                                id="medics"
                                bsSize="sm"
                                className="form-control-xs"
                              >
                                <option value="0">All</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                                <option value="4">Option #4</option>
                                <option value="5">Option #5</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="12">
                            <Card />
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Reports;

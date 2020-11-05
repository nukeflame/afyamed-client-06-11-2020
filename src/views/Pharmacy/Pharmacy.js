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
  TabPane
} from "reactstrap";

class Pharmacy extends Component {
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
              <div className="pb-1">
                <ListGroupItem
                  onClick={() => this.toggle(0)}
                  action
                  active={activeTab === 0}
                >
                  <span>Patient Drugs</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(1)}
                  action
                  active={activeTab === 1}
                >
                  <span>Billed List</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(2)}
                  action
                  active={activeTab === 2}
                >
                  <span>Prepaid List</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(3)}
                  action
                  active={activeTab === 3}
                >
                  <span>Dispensed List</span>
                </ListGroupItem>
              </div>
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
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pharmacy;

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
  Button,
  ModalFooter,
  Label,
  FormGroup
} from "reactstrap";
import ReactTable from "react-table";
import DatePicker from "react-datepicker";

class Lab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      labMod: false
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

  toggleLabModal = () => {
    const { labMod } = this.state;
    this.setState({
      labMod: !labMod
    });
  };

  render() {
    const { labMod, activeTab } = this.state;
    const data = [];
    const columns = [
      {
        Header: "Lab Test"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <div className="mini-side-group">
                <h5 className="h-title pl-3">Requests</h5>
                <ListGroupItem
                  onClick={() => this.toggle(0)}
                  action
                  active={activeTab === 0}
                >
                  <span className="pl-3">Pending</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(1)}
                  action
                  active={activeTab === 1}
                >
                  <span className="pl-3">Completed</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(2)}
                  action
                  active={activeTab === 2}
                >
                  <span className="pl-3">All</span>
                </ListGroupItem>
              </div>
              <h6 className="h-title  pl-3">Test Results</h6>
              <div className="pb-1">
                <ListGroupItem
                  onClick={() => this.toggle(3)}
                  action
                  active={activeTab === 3}
                >
                  <span className="pl-3">Pending</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(4)}
                  action
                  active={activeTab === 4}
                >
                  <span className="pl-3">Completed</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggle(5)}
                  action
                  active={activeTab === 5}
                >
                  <span className="pl-3">All</span>
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
                              <button
                                className="btn-box"
                                onClick={this.toggleLabModal}
                              >
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
                              <select className="form-control header-control pt-1">
                                <option>All Time</option>
                                <option>1</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <ReactTable data={data} columns={columns} />
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

            {/* Lab request modal */}
            <Modal
              isOpen={labMod}
              toggle={this.toggleLabModal}
              backdrop="static"
              className={"modal-xl " + this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fa fa-flask pr-1" />
                  Lab Request - Kennedy Peters (43yrs)
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleLabModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="md-body">
                <Row>
                  <Col md="12">
                    <Card className="box header">
                      <CardHeader className="box-header">
                        <div>
                          <ul className="header-left">
                            <li>
                              <button className="btn-box">
                                <span>Enter Results</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <span>Enter Results From Template</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-print pr-1" />
                                <span>Print</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                    </Card>
                  </Col>
                </Row>
                <div className="side-bg">
                  <Row>
                    <Col sm="4" className="sidel-bg">
                      <FormGroup row className="mb-2">
                        <Col sm="2">
                          <Label className="text-center">Date</Label>
                        </Col>
                        <Col sm="10">
                          <DatePicker
                            className="form-control-xs w-191"
                            selected={new Date()}
                            dateFormat="dd/MM/Y"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row className="mb-2">
                        <Col sm="2">
                          <Label>Medic</Label>
                        </Col>
                        <Col sm="10">
                          <Input type="select" className="form-control-xs">
                            <option>--none--</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row className="mb-2">
                        <Col sm="2">
                          <Label>Notes</Label>
                        </Col>
                        <Col sm="10">
                          <Input
                            type="textarea"
                            id="message"
                            className="form-control-xs"
                            name="message"
                          />
                          <FormGroup check inline className="py-2">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="male"
                              name="sex"
                              value="Male"
                            />
                            <Label
                              className="form-check-label"
                              check
                              htmlFor="male"
                            >
                              Tests Completed
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row className="mb-2">
                        <Col sm="12">
                          <Label className="mb-0">Format</Label>
                          <div>
                            <FormGroup check inline>
                              <Input
                                className="form-check-input"
                                type="radio"
                                id="male"
                                name="sex"
                                value="Male"
                              />
                              <Label
                                className="form-check-label bold"
                                check
                                htmlFor="male"
                              >
                                Tests List
                              </Label>
                            </FormGroup>
                            <FormGroup check inline>
                              <Input
                                className="form-check-input"
                                type="radio"
                                id=""
                                name="sex"
                                value=""
                              />
                              <Label
                                className="form-check-label"
                                check
                                htmlFor="male"
                              >
                                Document
                              </Label>
                            </FormGroup>
                          </div>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col sm="8" className="sider-bg">
                      ssdd
                    </Col>
                  </Row>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleLabModal}
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

export default Lab;

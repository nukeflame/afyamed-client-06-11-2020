import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane,
  Input,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from "reactstrap";
import ReactTable from "react-table";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";

class Activities extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 6,
      searchMod: false,
      drugPrescMod: false
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleSearchModal = () => {
    const { searchMod } = this.state;
    this.setState({
      searchMod: !searchMod
    });
  };

  toggleDrugPrescModal = () => {
    const { drugPrescMod } = this.state;
    this.setState({
      drugPrescMod: !drugPrescMod
    });
  };

  handleClickPatient = e => {
    this.setState({
      searchMod: false,
      drugPrescMod: true
    });
  };

  render() {
    const { activeTab, searchMod, drugPrescMod } = this.state;
    const data = [];

    const columns = [
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Type",
        accessor: "type"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Medic",
        accessor: "medic"
      }
    ];
    const consultCol = [
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Medic",
        accessor: "medic"
      }
    ];
    const formCol = [
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Category",
        accessor: "category"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Created by",
        accessor: "createdBy"
      }
    ];
    const imgCol = [
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Image Name",
        accessor: "imageName"
      }
    ];
    const docCol = [
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Document Name",
        accessor: "docName"
      }
    ];
    const diagnCol = [
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Medic",
        accessor: "medic"
      }
    ];
    const drugCol = [
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Medic",
        accessor: "medic"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <ListGroupItem
                onClick={() => this.toggle(0)}
                action
                active={activeTab === 0}
              >
                <span>Medical Activities</span>
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggle(1)}
                action
                active={activeTab === 1}
              >
                Consultations
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggle(2)}
                action
                active={activeTab === 2}
              >
                Forms
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggle(3)}
                action
                active={activeTab === 3}
              >
                Images
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggle(4)}
                action
                active={activeTab === 4}
              >
                Documents
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggle(5)}
                action
                active={activeTab === 5}
              >
                Diagonoses
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggle(6)}
                action
                active={activeTab === 6}
              >
                Drug Prescriptions
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggle(7)}
                action
                active={activeTab === 7}
              >
                Treatments
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.toggle(8)}
                action
                active={activeTab === 8}
              >
                Treatments Plans
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggle(9)}
                action
                active={activeTab === 9}
              >
                Medical Certificates
              </ListGroupItem>

              <ListGroupItem
                onClick={() => this.toggle(10)}
                action
                active={activeTab === 10}
              >
                Medical Attendances Chart
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggle(11)}
                action
                active={activeTab === 11}
              >
                Materials
              </ListGroupItem>
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
                                  Add Consultation
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
                                placeholder="Type the patient"
                                className="header-control"
                              />
                            </li>
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <ReactTable
                          className="-highlight text-center"
                          data={data}
                          columns={columns}
                          // getTrProps={(state, rowInfo) =>
                          //   this.handleRowClick(state, rowInfo)
                          // }
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
                                  Add Consultation
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
                                placeholder="Type the patient"
                                className="header-control"
                              />
                            </li>
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <ReactTable
                          className="-highlight text-center"
                          data={data}
                          columns={consultCol}
                          // getTrProps={(state, rowInfo) =>
                          //   this.handleRowClick(state, rowInfo)
                          // }
                        />
                      </div>
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
                                <span className="mini-title">Add Form</span>
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
                                <span>More...</span>
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
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="icon-settings" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <ReactTable data={data} columns={formCol} />
                      </div>
                      <Row>
                        <Col sm="12">
                          <CardBody className="bg1">
                            <h6>Lab Cholesterol</h6>
                          </CardBody>
                        </Col>
                      </Row>
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
                                <span>Compare</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-print  pr-1" />
                                <span>Print</span>
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
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <Row>
                        <Col sm="6" className="m-r-15">
                          <div>
                            <ReactTable
                              className="-highlight text-center"
                              data={data}
                              columns={imgCol}
                              // getTrProps={(state, rowInfo) =>
                              //   this.handleRowClick(state, rowInfo)
                              // }
                            />
                          </div>
                        </Col>
                        <Col sm="6" className="m-l-15">
                          <div className="p-relative">
                            <span className="p-center">No Image selected</span>
                          </div>
                        </Col>
                      </Row>
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
                                  Add Patient Document
                                </span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Add from Template
                                </span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">Capture pdf</span>
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
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <Row>
                        <Col sm="6" className="m-r-15">
                          <div>
                            <ReactTable
                              className="-highlight text-center"
                              data={data}
                              columns={docCol}
                              // getTrProps={(state, rowInfo) =>
                              //   this.handleRowClick(state, rowInfo)
                              // }
                            />
                          </div>
                        </Col>
                        <Col sm="6" className="m-l-15">
                          <div className="p-relative">
                            <span className="p-center">
                              No Document selected
                            </span>
                          </div>
                        </Col>
                      </Row>
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
                                  Add Diagnosis
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
                            <li>
                              <button className="btn-box">
                                <span>More..</span>
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
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <ReactTable data={data} columns={diagnCol} />
                      </div>
                      <Row>
                        <Col sm="12">
                          <CardBody className="bg1">Diagnosis</CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={6} className="animated fadeIn">
                <Row>
                  <Col sm="12">
                    <Card className="box">
                      <CardHeader className="box-header">
                        <div>
                          <ul className="header-left">
                            <li>
                              <button
                                className="btn-box"
                                onClick={this.toggleSearchModal}
                              >
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Add Drug Prescription
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
                            <li>
                              <button className="btn-box">
                                <span>More...</span>
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
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <ReactTable data={data} columns={drugCol} />
                      </div>
                      <Row>
                        <Col sm="12">
                          <CardBody className="bg1">kd</CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={7} className="animated fadeIn">
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
                                placeholder="Type the patient"
                                className="header-control"
                              />
                            </li>
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <Table striped responsive size="sm">
                          <thead>
                            <tr>
                              <th>Patient</th>
                              <th>Type</th>
                              <th>Title</th>

                              <th>Medic </th>
                            </tr>
                          </thead>
                          <tbody />
                        </Table>
                      </div>
                      <CardFooter className="box-foottable">
                        Record: <i className="fa fa-forward" />
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={8} className="animated fadeIn">
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
                                placeholder="Type the patient"
                                className="header-control"
                              />
                            </li>
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <Table striped responsive size="sm">
                          <thead>
                            <tr>
                              <th>Patient</th>
                              <th>Type</th>
                              <th>Title</th>

                              <th>Medic </th>
                            </tr>
                          </thead>
                          <tbody />
                        </Table>
                      </div>
                      <CardFooter className="box-foottable">
                        Record: <i className="fa fa-forward" />
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={9} className="animated fadeIn">
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
                                  Add Certificate
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
                                placeholder="Type the patient"
                                className="header-control"
                              />
                            </li>
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <Table striped responsive size="sm">
                          <thead>
                            <tr>
                              <th>Patient</th>
                              <th>Type</th>
                              <th>Title</th>

                              <th>Medic </th>
                            </tr>
                          </thead>
                          <tbody />
                        </Table>
                      </div>
                      <CardFooter className="box-foottable">
                        Record: <i className="fa fa-forward" />
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={10} className="animated fadeIn">
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
                                placeholder="Type the patient"
                                className="header-control"
                              />
                            </li>
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <Table striped responsive size="sm">
                          <thead>
                            <tr>
                              <th>Patient</th>
                              <th>Type</th>
                              <th>Title</th>

                              <th>Medic </th>
                            </tr>
                          </thead>
                          <tbody />
                        </Table>
                      </div>
                      <CardFooter className="box-foottable">
                        Record: <i className="fa fa-forward" />
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={11} className="animated fadeIn">
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
                                placeholder="Type the patient"
                                className="header-control"
                              />
                            </li>
                            <li>
                              <select className="form-control header-control pt-1">
                                <option>Last 60 days</option>
                                <option>Yesterday</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <Table striped responsive size="sm">
                          <thead>
                            <tr>
                              <th>Patient</th>
                              <th>Type</th>
                              <th>Title</th>

                              <th>Medic </th>
                            </tr>
                          </thead>
                          <tbody />
                        </Table>
                      </div>
                      <CardFooter className="box-foottable">
                        Record: <i className="fa fa-forward" />
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            {/* Search Modal */}
            <Modal
              isOpen={searchMod}
              toggle={this.toggleSearchModal}
              backdrop="static"
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader>
                <span className="modal-title text-center f-s-14">
                  <i className="fa fa-search" /> Search Patient
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleSearchModal}
                  >
                    <i className="fa fa-times text-muted" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="bg1">
                <Row>
                  <Col sm="6">
                    <Input
                      size="sm"
                      className="btn-block btn-square"
                      placeholder="Type your search here"
                    />
                  </Col>
                </Row>
                <div className="mt-3">
                  <Row>
                    <Col sm="12">
                      <Card className="box" style={{ minHeight: "450px" }}>
                        <Table hover responsive size="sm" className="searchTbl">
                          <thead>
                            <tr>
                              <th style={{ width: "180px" }}>Patient</th>
                              <th>Age</th>
                              <th>Huduma No.</th>
                              <th>Adress</th>
                              <th>Patient No.</th>
                              <th>Entry Date</th>
                              <th>Medic </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr onDoubleClick={this.handleClickPatient}>
                              <td>Kennedy Mwanzi Peter</td>
                              <td>21yrs</td>
                              <td>352812226</td>
                              <td>Changamwe, Chaani, Mombasa Kenya</td>
                              <td>0001</td>
                              <td>01-08-2019s</td>
                              <td>Andrew Fuller</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col sm="12">
                    <div className="float-right">
                      <Button
                        size="sm"
                        color="info"
                        className="btn-square mr-1"
                      >
                        Ok
                      </Button>
                      <Button
                        size="sm"
                        color="secondary"
                        className="btn-square"
                        onClick={this.toggleSearchModal}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            {/* Drug Prescription Modal */}
            <Modal
              isOpen={drugPrescMod}
              toggle={this.toggleDrugPrescModal}
              backdrop="static"
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader>
                <span className="modal-title text-center f-s-14">
                  <i className="fa fa-user-md" /> Drug Prescription - Kennedy
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleDrugPrescModal}
                  >
                    <i className="fa fa-times text-muted" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="bg1">
                <div>
                  <Card className="box header">
                    <CardHeader className="box-header">
                      <div>
                        <ul className="header-left">
                          <li>
                            <button
                              className="btn-box"
                              type="submit"
                              onClick={this.toggleDrugPrescModal}
                            >
                              <i className="fa fa-save f-s-15 c-primary pr-1" />
                              <span className="mini-title">Save and Close</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              type="button"
                              onClick={this.toggleDrugPrescModal}
                            >
                              <span>Close</span>
                            </button>
                          </li>
                          <li>
                            <button className="btn-box">
                              <i className="fa fa-print  pr-1" />
                              <span>Print</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
                <Row>
                  <Col sm="4" className="sidel-bg">
                    <FormGroup>
                      <Label htmlFor="text-input">Date</Label>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        className="form-control-xs"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="text-input">Medic</Label>
                      <Input
                        type="select"
                        id="text-input"
                        name="text-input"
                        className="form-control-xs"
                      >
                        <option>--none--</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        type="text"
                        id="location"
                        className="form-control-xs"
                      />
                    </FormGroup>
                    <div className="mt-2">
                      <Button color="link">Schedule Consultation</Button>
                    </div>
                  </Col>
                  <Col sm="8" className="sider-bg">
                    <Card className="box" style={{ minHeight: "250px" }}>
                      <CardHeader className="box-header">
                        <div>
                          <ul className="header-left">
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">Add Drug</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <span>Edit</span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <span>Remove</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div>
                        <Table striped responsive size="sm">
                          <thead>
                            <tr>
                              <th style={{ width: "150px" }}>Name</th>
                              <th>Drug</th>
                              <th>R</th>
                              <th>Ad</th>
                              <th>Fr</th>
                              <th>D</th>
                              <th>N </th>
                              <th>Start Date </th>
                              <th>End Date </th>
                            </tr>
                          </thead>
                          <tbody />
                        </Table>
                      </div>
                    </Card>
                    <div>
                      <Row>
                        <Col sm="10">
                          <FormGroup>
                            <Label htmlFor="diagnosis">Diagnosis</Label>

                            <Input
                              className="form-control-xs"
                              placeholder="Type the diagnosis or the code and press Enter"
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="2">
                          <div className="m-l-24" style={{ marginTop: "29px" }}>
                            <Button
                              size="sm"
                              color="primary"
                              outline
                              className="btn-round mr-2"
                              style={{ height: "27px" }}
                            >
                              <i className="icon-plus f-w-600" />
                            </Button>
                            <Button
                              size="sm"
                              color="primary"
                              className="btn-round"
                              style={{ height: "27px" }}
                            >
                              <i className="fa fa-search" />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="mb-1">
                      <FormGroup>
                        <Label htmlFor="notes">Notes</Label>
                        <Input
                          type="textarea"
                          name="notes"
                          id="notes"
                          className="form-control-xs"
                          style={{
                            height: "150px"
                          }}
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Activities;

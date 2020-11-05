import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Input,
  Button,
  Label
} from "reactstrap";
import ReactTable from "react-table";
import classNames from "classnames";

class Consultations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDoc: "1",
      activeTab: 0,
      selectedRows: [],
      loadPatients: false,
      showSearchBar: false
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  toggle = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { showSearchBar, activeDoc, activeTab, loadPatients } = this.state;

    const data = [];

    const columns = [
      {
        Header: "Visit ID.",
        accessor: "index"
      },
      {
        Header: "RegisterNo",
        accessor: "registerNo",
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Patient",
        accessor: "patient"
      },
      {
        Header: "Title",
        accessor: "title",
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Medic",
        accessor: "medic"
      }
    ];

    const { searchModal } = this.props;

    const patients = [
      {
        id: 1,
        queueNo: "027090",
        opdNo: "9505",
        patientName: "James Mugenda",
        sex: "Male",
        age: "90",
        from: "Reception",
        to: "Cash Office",
        residence: "Nairobi",
        occupation: "Civil Engineer",
        mins: "4"
      },
      {
        id: 2,
        queueNo: "404343",
        opdNo: "0444",
        patientName: "Jactone Omaoke Mugenda",
        sex: "Male",
        age: "90",
        from: "Reception",
        to: "Cash Office",
        residence: "Nyali",
        occupation: "Lawyer",
        mins: "40"
      }
    ];

    const patientCol = [
      {
        Header: "Queue No.",
        accessor: "queueNo",
        minWidth: 90
      },
      {
        Header: "OPD No.",
        accessor: "opdNo",
        minWidth: 90
      },
      {
        Header: "Patient's Name",
        accessor: "patientName",
        minWidth: 200,
        Cell: props => (
          <Link to="/records/patient-chart" className="bold">
            {props.value}
          </Link>
        )
      },

      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Sex",
        accessor: "sex"
      },
      {
        Header: "Residence",
        accessor: "residence"
      },
      {
        Header: "Occupation",
        accessor: "occupation"
      },
      {
        Header: "From",
        accessor: "from"
      },
      {
        Header: "Minutes",
        accessor: "mins"
      }
    ];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <div className="navitem-header pb-2">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={
                      "pl-0 disabled " +
                      classNames({
                        active: activeDoc === "1"
                      })
                    }
                  >
                    <i className="fa fa-user-md nav-ico pr-1" />
                    <span className="nav-title">Consultation</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <ListGroupItem
                onClick={() => this.toggle(0)}
                action
                active={activeTab === 0}
              >
                <span>On Queue</span>
              </ListGroupItem>
              <span className="hr-line" />
              <ListGroupItem
                onClick={() => this.toggle(1)}
                action
                active={activeTab === 1}
              >
                <span>Doctor </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm="10">
            <TabContent className="tab-box" activeTab={activeTab}>
              <TabPane tabId={0} className="animated fadeIn">
                <Card className="box">
                  <CardHeader className="box-header">
                    <Row>
                      <Col sm="10">
                        <ul className="header-left">
                          <li>
                            <h6 className="mb-0  pr-3">
                              Patients on Doctor Queue
                            </h6>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              type="button"
                              onClick={e => searchModal(e)}
                            >
                              <i className="fa fa-plus c-primary" />
                              <span className="mini-title">
                                Add Patient to Doctor
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.handleSearchBar}
                            >
                              <i className="fa fa-search" />
                              <span>Search</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.handleImport}
                            >
                              <i className="fa fa-print" />
                              <span>Print</span>
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
                              <Button
                                size="sm"
                                className="btn-default btn-square"
                              >
                                Clear
                              </Button>
                            </Col>
                          </FormGroup>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <ReactTable
                      data={patients}
                      columns={patientCol}
                      loading={loadPatients}
                      className="-highlight -striped text-left"
                      getTrProps={(state, rowInfo) => {
                        if (rowInfo && rowInfo.row) {
                          return {
                            onClick: e => {
                              let selectedRows = [];

                              if (e.ctrlKey && this.previousRow) {
                                if (this.previousRow.index < rowInfo.index) {
                                  for (
                                    let i = this.previousRow.index;
                                    i <= rowInfo.index;
                                    i++
                                  ) {
                                    selectedRows.push(
                                      state.sortedData[i]._original
                                    );
                                  }
                                } else {
                                  for (
                                    let i = rowInfo.index;
                                    i <= this.previousRow.index;
                                    i++
                                  ) {
                                    selectedRows.push(
                                      state.sortedData[i]._original
                                    );
                                  }
                                }
                              } else {
                                rowInfo._index = rowInfo.index;
                                selectedRows.push(rowInfo.original);
                                this.previousRow = rowInfo;
                              }

                              this.setState({
                                selectedTd: rowInfo.index,
                                selectedRows
                              });
                            },

                            onDoubleClick: e => {
                              e.preventDefault();
                              // this.props;
                              // .setPatient(rowInfo.original)
                              // .then(() => {
                              //   this.props.history.push(
                              //     "/records/patient-chart"
                              //   );
                              // });
                            },

                            style: {
                              background:
                                this.state.selectedRows.some(
                                  e => e.id === rowInfo.original.id
                                ) && "#42a5f533"
                            }
                          };
                        } else {
                          return {};
                        }
                      }}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane tabId={1} className="animated fadeIn">
                <Card className="box">
                  <CardHeader className="box-header">
                    <Row>
                      <Col sm="10">
                        <ul className="header-left">
                          <li>
                            <button
                              className="btn-box"
                              type="button"
                              onClick={e => searchModal(e)}
                            >
                              <i className="fa fa-plus c-primary" />
                              <span className="mini-title">
                                Add Consultation
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.handleSearchBar}
                            >
                              <i className="fa fa-search" />
                              <span>Search</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.handleImport}
                            >
                              <i className="fa fa-print" />
                              <span>Print</span>
                            </button>
                          </li>
                          <li className="p-t-3">
                            (Total Consultations
                            <span className="pl-1 bold">0</span>)
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
                              <Button
                                size="sm"
                                className="btn-default btn-square"
                              >
                                Clear
                              </Button>
                            </Col>
                          </FormGroup>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <ReactTable
                      data={data}
                      columns={columns}
                      loading={loadPatients}
                      className="-highlight -striped text-left"
                      getTrProps={(state, rowInfo) => {
                        if (rowInfo && rowInfo.row) {
                          return {
                            onClick: e => {
                              let selectedRows = [];

                              if (e.ctrlKey && this.previousRow) {
                                if (this.previousRow.index < rowInfo.index) {
                                  for (
                                    let i = this.previousRow.index;
                                    i <= rowInfo.index;
                                    i++
                                  ) {
                                    selectedRows.push(
                                      state.sortedData[i]._original
                                    );
                                  }
                                } else {
                                  for (
                                    let i = rowInfo.index;
                                    i <= this.previousRow.index;
                                    i++
                                  ) {
                                    selectedRows.push(
                                      state.sortedData[i]._original
                                    );
                                  }
                                }
                              } else {
                                rowInfo._index = rowInfo.index;
                                selectedRows.push(rowInfo.original);
                                this.previousRow = rowInfo;
                              }

                              this.setState({
                                selectedTd: rowInfo.index,
                                selectedRows
                              });
                            },

                            onDoubleClick: e => {
                              e.preventDefault();
                              // this.props
                              //   .setPatient(rowInfo.original)
                              //   .then(() => {
                              //     this.props.history.push(
                              //       "/records/patient-chart"
                              //     );
                              //   });
                            },

                            style: {
                              background:
                                this.state.selectedRows.some(
                                  e => e.id === rowInfo.original.id
                                ) && "#42a5f533"
                            }
                          };
                        } else {
                          return {};
                        }
                      }}
                    />
                  </div>
                </Card>{" "}
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Consultations;

import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  CardColumns,
  Col,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
import { Bar, Line } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import classNames from "classnames";
import ReactTable from "react-table";

const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(255,193,7,0.4)",
      borderColor: "rgba(255,193,7,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(255,193,7,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,193,7,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      options: {
        legend: {
          display: false,
          position: "top",
          labels: {
            usePointStyle: true,
            fontFamily: "Montserrat"
          }
        }
      },
      data: [1, 2, 3, 1, 2, 1.5, 0]
    }
  ]
};

const bar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Debit",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 19, 80, 81, 56, 55, 40]
    },
    {
      label: "Credit",
      backgroundColor: "rgba(0,123,255,0.2)",
      borderColor: "rgba(0,123,255,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(0,123,255,0.4)",
      hoverBorderColor: "rgba(0,123,255,1)",
      data: [5, 59, 40, 21, 6, 5, 20]
    },
    {
      label: "Balance",
      backgroundColor: "rgba(255,152,0,0.2)",
      borderColor: "rgba(255,152,0,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,152,0,0.4)",
      hoverBorderColor: "rgba(255,152,0,1)",
      data: [40, 30, 65, 40, 20, 40, 10]
    }
  ]
};

const lineOptions = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  }
};

const barOptions = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      topActiveTab: "1"
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  onRadioBtnClick = radioSelected => {
    this.setState({
      radioSelected: radioSelected
    });
  };

  toggleTopNav = tab => {
    const { topActiveTab } = this.state;

    if (topActiveTab !== tab) {
      this.setState({
        topActiveTab: tab
      });
    }
  };

  render() {
    const { topActiveTab } = this.state;

    const data = [
      {
        month: "2019-1",
        patients: "1",
        newPatients: "0",
        encounters: "1"
      },
      {
        month: "2019-2",
        patients: "1",
        newPatients: "0",
        encounters: "1"
      },
      {
        month: "2019-3",
        patients: "1",
        newPatients: "0",
        encounters: "1"
      },
      {
        month: "2019-4",
        patients: "1",
        newPatients: "0",
        encounters: "1"
      }
    ];

    const columns = [
      {
        Header: "Month",
        accessor: "month"
      },
      {
        Header: "Patients",
        accessor: "patients",
        className: "float-right"
      },
      {
        Header: "New Patients",
        accessor: "newPatients"
      },
      {
        Header: "Encounters",
        accessor: "encounters"
      }
    ];

    const finColumns = [
      {
        Header: "Month",
        accessor: "month"
      },
      {
        Header: "Credit",
        accessor: "credit"
      },
      {
        Header: "Debit",
        accessor: "debit"
      },
      {
        Header: "Balance",
        accessor: "balance"
      }
    ];

    const finData = [];

    return (
      <div className="animated fadeIn">
        <Row>
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
                    Dashboard
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
                    Stats
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
                    Charts
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
        <div className="body-pills">
          <TabContent
            activeTab={topActiveTab}
            className="animated fadeIn content-pills"
          >
            <TabPane tabId="1" className="animated fadeIn">
              <CardColumns className="cols-2">
                <Card>
                  <CardHeader>
                    Today Events
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div
                      className="chart-wrapper"
                      style={{ height: "150px" }}
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    My Tasks
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div
                      className="chart-wrapper"
                      style={{ height: "150px" }}
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    Messages-Inbox
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div
                      className="chart-wrapper"
                      style={{ height: "150px" }}
                    />
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    Recent Patients
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div
                      className="chart-wrapper"
                      style={{ height: "150px" }}
                    />
                  </CardBody>
                </Card>
              </CardColumns>
            </TabPane>
            <TabPane tabId="2" className="animated fadeIn">
              <Row>
                <Col sm="6">
                  <Card className="box" style={{ minHeight: "515px" }}>
                    <CardBody>
                      <h5 className="box-title">Encounters</h5>
                      <div className="small-box pt-2">
                        <div className="small-body">
                          <h5 className="mb-0">5</h5>
                          <small>Patients</small>
                        </div>
                        <div className="small-body">
                          <h5 className="mb-0">10</h5>
                          <small>Patients</small>
                        </div>
                      </div>
                    </CardBody>
                    <div>
                      <ReactTable
                        className="-highlight"
                        data={data}
                        columns={columns}
                        showPagination={false}
                        showPaginationBottom={false}
                        showPageSizeOptions={false}
                        defaultPageSize={27}
                        pageSizeOptions={[20, 15, 20, 25, 30, 40, 50, 100]}
                        getTdProps={(state, rowInfo, column, instance) => {
                          return {
                            onClick: e => {
                              console.log(rowInfo.row);
                            }
                          };
                        }}
                      />
                    </div>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card className="box" style={{ minHeight: "245px" }}>
                    <CardBody>
                      <h5 className="box-title">Financial Overview</h5>
                      <div className="small-box pt-2">
                        <div className="small-body">
                          <h5 className="mb-0">0</h5>
                          <small>Debit</small>
                        </div>
                        <div className="small-body">
                          <h5 className="mb-0">0</h5>
                          <small>Credit</small>
                        </div>
                        <div className="small-body">
                          <h5 className="mb-0">0</h5>
                          <small>Balance</small>
                        </div>
                      </div>
                    </CardBody>
                    <div>
                      <ReactTable
                        className="-highlight"
                        data={finData}
                        columns={finColumns}
                        showPagination={false}
                        showPaginationBottom={false}
                        showPageSizeOptions={false}
                        defaultPageSize={10}
                        pageSizeOptions={[10, 15, 20, 25, 30, 40, 50, 100]}
                      />
                    </div>
                  </Card>
                  <Card className="box" style={{ minHeight: "245px" }}>
                    <CardBody>
                      <h5 className="box-title">Sales Overview</h5>{" "}
                      <div className="small-box pt-2">
                        <div className="small-body">
                          <h5 className="mb-0">0</h5>
                          <small>Debit</small>
                        </div>
                        <div className="small-body">
                          <h5 className="mb-0">0</h5>
                          <small>Credit</small>
                        </div>
                        <div className="small-body">
                          <h5 className="mb-0">0</h5>
                          <small>Balance</small>
                        </div>
                      </div>
                    </CardBody>
                    <div>
                      <ReactTable
                        className="-highlight"
                        data={finData}
                        columns={finColumns}
                        showPagination={false}
                        showPaginationBottom={false}
                        showPageSizeOptions={false}
                        defaultPageSize={11}
                        pageSizeOptions={[10, 15, 20, 25, 30, 40, 50, 100]}
                      />
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" className="animated fadeIn">
              <CardColumns className="cols-2">
                <Card>
                  <CardHeader>
                    Patients
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="d-flex">
                      <div className="ml-5 pb-1">
                        <h3 className="pl-2 mb-1">3</h3> <small>Patients</small>
                      </div>
                      <div className="ml-5 pb-1">
                        <h3 className="pl-2 mb-1">10</h3>
                        <small>Encounters</small>
                      </div>
                    </div>
                    <div className="chart-wrapper" style={{ height: "150px" }}>
                      <Line data={line} options={lineOptions} />
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    New Patients
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="d-flex">
                      <div className="ml-5 pb-1">
                        <h3 className="pl-2 mb-1">3</h3> <small>Patients</small>
                      </div>
                      <div className="ml-5 pb-1">
                        <h3 className="pl-2 mb-1">10</h3>
                        <small>Encounters</small>
                      </div>
                    </div>
                    <div className="chart-wrapper" style={{ height: "150px" }}>
                      <Line data={line} options={lineOptions} />
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    Financial Overview
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="d-flex">
                      <div className="ml-5  pb-1">
                        <h3 className="pl-0 mb-1">3</h3> <small>Debit</small>
                      </div>
                      <div className="ml-5 pb-1">
                        <h3 className="pl-0 mb-1">10</h3> <small>Credit</small>
                      </div>
                      <div className="ml-5 pb-1">
                        <h3 className="pl-2 mb-1">10</h3> <small>Balance</small>
                      </div>
                    </div>
                    <div className="chart-wrapper" style={{ height: "150px" }}>
                      <Bar data={bar} options={barOptions} />
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    Sales Overview
                    <div className="card-header-actions">
                      <a
                        href="http://www.chartjs.org"
                        className="card-header-action"
                      >
                        <small className="text-muted">
                          <i className="fa fa-ellipsis-h" />
                        </small>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="d-flex">
                      <div className="ml-5 pb-1">
                        <h3 className="pl-0 mb-1">3</h3> <small>Debit</small>
                      </div>
                      <div className="ml-5 pb-1">
                        <h3 className="pl-0 mb-1">100</h3> <small>Credit</small>
                      </div>
                      <div className="ml-5 pb-1">
                        <h3 className="pl-2 mb-1">10</h3> <small>Balance</small>
                      </div>
                    </div>
                    <div className="chart-wrapper" style={{ height: "150px" }}>
                      <Bar data={bar} options={barOptions} />
                    </div>
                  </CardBody>
                </Card>
              </CardColumns>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Dashboard;

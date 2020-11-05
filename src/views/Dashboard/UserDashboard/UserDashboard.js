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
  TabPane,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
} from "reactstrap";
import { Bar, Line } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import classNames from "classnames";
import ReactTable from "react-table";
import $ from "jquery";
import { connect } from "react-redux";
import { eventClick } from "../../../redux/actions/notificationActions";
import Axios from "axios";

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
            fontFamily: "Montserrat",
          },
        },
      },
      data: [1, 2, 3, 1, 2, 1.5, 0],
    },
  ],
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
      data: [65, 19, 80, 81, 56, 55, 40],
    },
    {
      label: "Credit",
      backgroundColor: "rgba(0,123,255,0.2)",
      borderColor: "rgba(0,123,255,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(0,123,255,0.4)",
      hoverBorderColor: "rgba(0,123,255,1)",
      data: [5, 59, 40, 21, 6, 5, 20],
    },
    {
      label: "Balance",
      backgroundColor: "rgba(255,152,0,0.2)",
      borderColor: "rgba(255,152,0,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,152,0,0.4)",
      hoverBorderColor: "rgba(255,152,0,1)",
      data: [40, 30, 65, 40, 20, 40, 10],
    },
  ],
};

const lineOptions = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};

const barOptions = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
};

let todoId = 0;

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      topActiveTab: "1",
      customizeOpen: false,
      addWidgetMd: false,
      todos: [],
      todoData: {
        todo: "",
      },
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  onRadioBtnClick = (radioSelected) => {
    this.setState({
      radioSelected: radioSelected,
    });
  };

  toggleTopNav = (tab) => {
    const { topActiveTab } = this.state;

    if (topActiveTab !== tab) {
      this.setState({
        topActiveTab: tab,
      });
    }
  };

  handleCustomize = () => {
    const { customizeOpen } = this.state;
    this.setState({
      customizeOpen: !customizeOpen,
    });
  };

  addWidgetModal = () => {
    const { addWidgetMd } = this.state;
    this.setState({
      addWidgetMd: !addWidgetMd,
    });
  };

  handleClick = () => {
    Axios.get("http://localhost:8000/api/checkins").then((res) => {
      console.log(res.data);
    });
  };

  handleChangeTodo = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      todoData: {
        ...prevState.todoData,
        [name]: value,
      },
    }));
  };

  addTodo = (e) => {
    const { todoData } = this.state;
    if (e.keyCode === 13) {
      const { todos } = this.state;
      const todo = { text: todoData.todo, id: todoId++ };
      todos.push(todo);
      this.setState((prevState) => ({
        todoData: {
          ...prevState.todoData,
          todo: "",
        },
        todos,
      }));

      const data = JSON.stringify(JSON.stringify(todos));
      localStorage.setItem("toDo", data);
    }
  };

  handleRemoveTodo = (e, id) => {
    e.preventDefault();
    const remainder = this.state.todos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    this.setState({ todos: remainder });

    localStorage.removeItem("toDo");

    // const data = JSON.stringify(JSON.stringify(remainder));
    // localStorage.setItem("toDo", data);
  };

  handleFinishedTodo = (e, id) => {
    e.preventDefault();
    // const remainder = this.state.todos.filter(todo => {
    //   if (todo.id !== id) return todo;
    // });
    // this.setState({ todos: remainder });
  };

  TodoList = () => {
    const { todos, todoData } = this.state;
    const todoNode = todos.map((todo) => {
      return (
        <li key={todo.id}>
          <span className="created">{todo.text}</span>
          <span className="items animated fadeIn">
            {/* eslint-disable-next-line */}
            <a href="#" onClick={(e) => this.handleFinishedTodo(e, todo.id)}>
              <i className="fas fa-check"></i>
            </a>
            {/* eslint-disable-next-line */}
            <a
              href="#"
              className="text-danger"
              onClick={(e) => this.handleRemoveTodo(e, todo.id)}
            >
              <i className="fas fa-trash"></i>
            </a>
          </span>
        </li>
      );
    });

    return (
      <ol className="todo-list">
        {todoNode}
        <li className="edit">
          <FormGroup>
            <Input
              type="text"
              name="todo"
              value={todoData.todo}
              className="form-control-xs"
              placeholder="Create new task..."
              spellCheck="off"
              autoComplete="off"
              onChange={(e) => this.handleChangeTodo(e)}
              onKeyDown={(e) => this.addTodo(e)}
            />
          </FormGroup>
        </li>
      </ol>
    );
  };

  componentDidMount() {
    // set title
    document.title = "AfyaMed ::  Dashboard";
    $("[aria-label='breadcrumb']").addClass("hidden");
    //get Todo
    const toData = JSON.parse(JSON.parse(localStorage.getItem("toDo")));
    if (toData !== null) {
      this.setState({ todos: toData });
    }
  }

  componentWillUnmount() {
    $("[aria-label='breadcrumb']").removeClass("hidden");
  }

  render() {
    const { topActiveTab, customizeOpen, addWidgetMd } = this.state;
    const { user, branches, departments, roomStatus } = this.props;
    const styleBranch = {
      position: "absolute",
      right: "50px",
    };
    const styleRoom = {
      position: "absolute",
      width: "100%",
    };

    const data = [
      {
        month: "2019-1",
        patients: "1",
        newPatients: "0",
        encounters: "1",
      },
      {
        month: "2019-2",
        patients: "1",
        newPatients: "0",
        encounters: "1",
      },
      {
        month: "2019-3",
        patients: "1",
        newPatients: "0",
        encounters: "1",
      },
      {
        month: "2019-4",
        patients: "1",
        newPatients: "0",
        encounters: "1",
      },
    ];

    const columns = [
      {
        Header: "Month",
        accessor: "month",
      },
      {
        Header: "Patients",
        accessor: "patients",
        className: "float-right",
      },
      {
        Header: "New Patients",
        accessor: "newPatients",
      },
      {
        Header: "Encounters",
        accessor: "encounters",
      },
    ];

    const finColumns = [
      {
        Header: "Month",
        accessor: "month",
      },
      {
        Header: "Credit",
        accessor: "credit",
      },
      {
        Header: "Debit",
        accessor: "debit",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
    ];

    const finData = [];

    return (
      <div className="animated fadeIn">
        <div className="mt-4">
          <div className="top-breadcumb navbar">
            {/* Patient details */}
            <Nav
              className="d-md-down-none animated fadeIn"
              id="patientProfile"
              navbar
            >
              <NavItem className="px-1"></NavItem>
              <NavItem className="bold pr-2">
                <span className="f-s-14">{user && user.hospital.hospName}</span>
              </NavItem>
              <NavItem style={styleBranch}>
                Branch:
                <span className="bold pl-1">
                  {roomStatus && roomStatus.mainBranch !== ""
                    ? roomStatus.mainBranch > 0
                      ? "Main Branch"
                      : branches.map((b) =>
                          parseInt(roomStatus.branchId) === b.id
                            ? b.hospName
                            : null
                        )
                    : branches.map((b) =>
                        user && user.hospBranchId === b.id ? b.hospName : null
                      )}
                </span>
              </NavItem>
              <NavItem style={styleRoom}>
                Room:
                <span className="bold pl-1">
                  {roomStatus && roomStatus.roomId > 0
                    ? departments.map((b) =>
                        roomStatus.roomId === b.id ? b.depName : null
                      )
                    : departments.map((b) =>
                        user && user.deptId === b.id ? b.depName : null
                      )}
                </span>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div></div>
        <Row>
          <Col sm="12">
            <div className="m-t-10">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={classNames({
                      active: topActiveTab === "1",
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
                      active: topActiveTab === "2",
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
                      active: topActiveTab === "3",
                    })}
                    onClick={() => {
                      this.toggleTopNav("3");
                    }}
                  >
                    Charts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <ButtonDropdown
                    isOpen={customizeOpen}
                    toggle={this.handleCustomize}
                    className="nav-right"
                    style={{ top: "-11px" }}
                  >
                    <DropdownToggle color="link">
                      <span className="c-primary"> Customize</span>
                    </DropdownToggle>
                    <DropdownMenu right className="top-dropdown">
                      <DropdownItem onClick={this.addWidgetModal}>
                        Add Widgets
                      </DropdownItem>
                      <DropdownItem>Manage Widgets</DropdownItem>
                      <DropdownItem>Reset Widgets to Default</DropdownItem>
                      <DropdownItem onClick={this.chooseLayoutModal}>
                        Choose Layout
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
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
                  <CardBody className="widget-wrapper">
                    <div className="todo-list-wrapper">
                      <Row>
                        <Col md="12">
                          <div className="todo-list-form">
                            {this.TodoList()}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    Today Events
                    <div className="card-header-actions">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="card-header-action">
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
                    ></div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    Messages-Inbox
                    <div className="card-header-actions">
                      {/* eslint-disable-next-line */}
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
                      {/* eslint-disable-next-line */}
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
                            onClick: (e) => {
                              console.log(rowInfo.row);
                            },
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

        {/* Add widget Modal */}
        <Modal
          isOpen={addWidgetMd}
          toggle={this.addWidgetModal}
          size="lg"
          className={this.props.className}
          fade={false}
          modalClassName="modal_stretch animated fadeIn"
        >
          <ModalHeader className="m-0">
            <span className="modal-title f-s-14">Add Widgets</span>
            <span>
              <Button
                color="link"
                className="modal-close-x"
                type="button"
                onClick={this.addWidgetModal}
              >
                <i className="fa fa-times text-white" />
              </Button>
            </span>
          </ModalHeader>
          <ModalBody className="p-5">
            <div className="modal-fluid">
              <FormGroup row>
                <Col sm="3">
                  <div className="p-2">
                    <h6 className="f-s-13 bold mb-1">Shortcuts</h6>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="messagesInbox"
                          name="messagesInbox"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="messagesInbox"
                        >
                          Messages Inbox
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="myTasks"
                          name="myTasks"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="myTasks"
                        >
                          My Tasks
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="recentPatients"
                          name="recentPatients"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="recentPatients"
                        >
                          Recent Patients
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="alergies"
                          name="alergies"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="alergies"
                        >
                          Allergies
                        </label>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
                <Col sm="3">
                  <div className="p-2">
                    <h6 className="f-s-13 bold mb-1">General</h6>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="messagesInbox"
                          name="messagesInbox"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="messagesInbox"
                        >
                          Messages Inbox
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="myTasks"
                          name="myTasks"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="myTasks"
                        >
                          My Tasks
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="recentPatients"
                          name="recentPatients"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="recentPatients"
                        >
                          Recent Patients
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="alergies"
                          name="alergies"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="alergies"
                        >
                          Allergies
                        </label>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
                <Col sm="3">
                  <div className="p-2">
                    <h6 className="f-s-13 bold mb-1">General</h6>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="messagesInbox"
                          name="messagesInbox"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="messagesInbox"
                        >
                          Messages Inbox
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="myTasks"
                          name="myTasks"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="myTasks"
                        >
                          My Tasks
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="recentPatients"
                          name="recentPatients"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="recentPatients"
                        >
                          Recent Patients
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="alergies"
                          name="alergies"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="alergies"
                        >
                          Allergies
                        </label>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
                <Col sm="3">
                  <div className="p-2">
                    <h6 className="f-s-13 bold mb-1">General</h6>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="messagesInbox"
                          name="messagesInbox"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="messagesInbox"
                        >
                          Messages Inbox
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="myTasks"
                          name="myTasks"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="myTasks"
                        >
                          My Tasks
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="recentPatients"
                          name="recentPatients"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="recentPatients"
                        >
                          Recent Patients
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup check className="pl-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="alergies"
                          name="alergies"
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="alergies"
                        >
                          Allergies
                        </label>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
              </FormGroup>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  branches: state.branches.branches,
  roomStatus: state.roomStatus.roomStatus,
  departments: state.departments.data,
});

const mapDispatchToProps = {
  eventClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);

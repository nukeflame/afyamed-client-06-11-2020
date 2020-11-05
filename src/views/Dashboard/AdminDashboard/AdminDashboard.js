import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardColumns,
  Row,
  Col,
  Nav,
  NavItem
} from "reactstrap";
import $ from "jquery";
import Widget02 from "./Widget02";

export class AdminDashboard extends Component {
  componentDidMount() {
    // set title
    document.title = "AfyaMed ::  Dashboard";
    $("[aria-label='breadcrumb']").addClass("hidden");
  }

  componentWillUnmount() {
    $("[aria-label='breadcrumb']").removeClass("hidden");
  }

  render() {
    const { user, branches, departments, roomStatus } = this.props;
    const styleBranch = {
      position: "absolute",
      right: "50px"
    };

    const styleRoom = {
      position: "absolute",
      width: "100%"
    };
    return (
      <div>
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
                  {user.staff.mainBranch
                    ? "Main Branch"
                    : branches.map(b =>
                        roomStatus.branchId === b.id ? b.hospName : null
                      )}
                </span>
              </NavItem>
              <NavItem style={styleRoom}>
                Room:
                <span className="bold pl-1">
                  {roomStatus.roomId > 0
                    ? departments.map(b =>
                        roomStatus.roomId === b.id ? b.depName : null
                      )
                    : "Administration"}
                </span>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div>
          <Row>
            <Col sm="2">
              <Widget02
                mainText="Patient Registry"
                icon="icon-user-follow"
                color="success"
                variant="1"
                link="/records/patients"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Triage"
                icon="fas fa-band-aid"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Doctor"
                icon="fa fa-user-md"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Admissions"
                icon="fas fa-procedures"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Appointments"
                icon="fas fa-calendar-check"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Pharmacy"
                icon="fas fa-mortar-pestle"
                color="success"
                variant="1"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="2">
              <Widget02
                mainText="Laboratory"
                icon="fas fa-flask"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Over The Counter"
                icon="fas fa-stethoscope"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Customer Bills"
                icon="fas fa-money"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Customer Invoices"
                icon="fas fa-file-invoice"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Inventory"
                icon="fas fa-clipboard-list"
                color="success"
                variant="1"
              />
            </Col>
            <Col sm="2">
              <Widget02
                mainText="Reports"
                icon="fas fa-file-alt"
                color="success"
                variant="1"
              />
            </Col>
          </Row>
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
                <div className="chart-wrapper" style={{ height: "290px" }} />
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
                <div className="chart-wrapper" style={{ height: "290px" }} />
              </CardBody>
            </Card>
          </CardColumns>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  branches: state.branches.branches,
  roomStatus: state.roomStatus.roomStatus,
  departments: state.departments.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);

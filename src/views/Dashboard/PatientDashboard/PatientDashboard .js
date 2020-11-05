import React, { Component } from "react";
import { connect } from "react-redux";

export class PatientDashboard extends Component {
  render() {
    return <div>admin PatientDashboard </div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientDashboard);

import React, { Component } from "react";
import { Row, Col, Card, CardHeader } from "reactstrap";
import TimelineList from "./TimelineList";
import { connect } from "react-redux";
import { findTimeline } from "../../../../redux/actions/timelineActions";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: []
    };
  }

  componentDidMount() {
    const { cpStorage } = this.props;
    this.props.findTimeline(cpStorage.id);
  }

  componentDidUpdate(prevProps) {
    const { cpStorage } = this.props;
    if (prevProps.cpStorage.id !== cpStorage.id) {
      this.props.findTimeline(cpStorage.id);
    }
  }

  render() {
    const { timeline } = this.props;

    return (
      <div>
        <Row>
          <Col sm="12">
            <Card className="box" style={{ height: "calc(-121px + 100vh)" }}>
              <CardHeader className="box-header">
                <Row>
                  <Col sm="6">
                    <ul className="header-left">
                      <li>
                        <button
                          className="btn-box"
                          type="button"
                          onClick={this.toggleConsModal}
                        >
                          <i className="fa fa-plus c-primary" />
                          <span className="mini-title">Add Consultation</span>
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
                    </ul>
                  </Col>
                </Row>
              </CardHeader>
              <div className="container mt-2 mb-2">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="timeline">
                      <TimelineList timeline={timeline} />
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cpStorage: state.patients.cpStorage,
  timeline: state.timeline.timeline
});

const mapDispatchToProps = {
  findTimeline
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);

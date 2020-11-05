import React, { Component } from "react";
import { Row, Col, Card, CardHeader } from "reactstrap";

class TreatmentPlan extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <Card className="box">
              <CardHeader className="box-header">
                <div>
                  <ul className="header-left">
                    <li>
                      <button className="btn-box">
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Entry</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add from Template</span>
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
                        <i className="fa fa-print  pr-1" />
                        <span>Print</span>
                      </button>
                    </li>
                  </ul>
                  <ul className="header-right">
                    <li>
                      <button className="btn-box">
                        <span>Today</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <span>Completed</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <span>Dismissed</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <i className="icon-settings" />
                      </button>
                    </li>
                  </ul>
                </div>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TreatmentPlan;

import React, { Component } from "react";
import { Row, Col, Card, CardHeader } from "reactstrap";

class DrugPrescriptions extends Component {
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
                        <span className="mini-title">
                          Add Drug Prescription
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">
                          Repeat Drug Prescription
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

export default DrugPrescriptions;

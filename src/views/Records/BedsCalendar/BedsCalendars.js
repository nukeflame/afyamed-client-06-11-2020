import React, { Component } from "react";
import { Card, Col, Row, Input, Label, FormGroup } from "reactstrap";
import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react";
// import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

class BedsCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      modal: false,
      avatar: null,
      date: new Date()
    };
  }

  onChangeCalendar = date => {
    console.log(date);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="3">
            <div className="mini-side">
              <Calendar onChangeCalendar={this.onChange} value={date} />
            </div>
            <div>
              <FormGroup check inline className="m-l-15">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  id="wmedic"
                  name="wmedic"
                  value="1"
                />
                <Label
                  className="form-check-label f-w-600"
                  check
                  htmlFor="wmedic"
                >
                  Medic
                </Label>
              </FormGroup>
            </div>
            <div>
              <FormGroup check inline className="m-l-15">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  id="nmedic"
                  name="wmedic"
                  value="0"
                />
                <Label className="form-check-label" check htmlFor="nmedic">
                  Without Medic
                </Label>
              </FormGroup>
            </div>
          </Col>
          <Col sm="9">
            <Card>
              <FullCalendar
                dateClick={this.handleDateClick}
                plugins={[resourceTimelinePlugin]}
                defaultView={"resourceTimeline"}
                selectable={true}
                resources={[
                  { id: "a", title: "Room A" },
                  { id: "b", title: "Room B" },
                  { id: "c", title: "Room C" },
                  { id: "d", title: "Room D" }
                ]}
                schedulerLicenseKey={"GPL-My-Project-Is-Open-Source"}
                events={
                  "https://fullcalendar.io/demo-events.json?with-resources=4&single-day"
                }
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  handleDateClick = arg => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

export default BedsCalendar;

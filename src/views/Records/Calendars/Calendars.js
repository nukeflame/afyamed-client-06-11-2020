import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./Events";
import "./styles.scss";
// import localizer from "react-big-calendar/lib/localizers/globalize";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

class Calendars extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12">
              <div className="mb-3">
                <div className="example">
                  <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectEvent={event => alert(event.title)}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calendars;

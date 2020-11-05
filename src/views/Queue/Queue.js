import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardHeader,
  Button,
  ModalFooter,
  Modal,
  ModalBody,
  ModalHeader,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import ReactTable from "react-table";
import { connect } from "react-redux";
import { findQueues, fetchqueues } from "../../redux/actions/queueActions";

class Queue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchBar: false,
      showCol: true,
      locMod: false,
      roomData: {
        room: 1,
      },
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar,
    });
  };

  toggleLocModal = () => {
    const { locMod } = this.state;
    this.setState({
      locMod: !locMod,
    });
  };

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar,
    });
  };

  requestFullScreen = () => {
    // Supports most browsers and their versions.
    // var element = document.body;
    // var requestMethod =
    //   element.requestFullScreen ||
    //   element.webkitRequestFullScreen ||
    //   element.mozRequestFullScreen ||
    //   element.msRequestFullScreen;
    // if (requestMethod) {
    //   // Native full screen.
    //   requestMethod.call(element);
    // } else if (typeof window.ActiveXObject !== "undefined") {
    //   // Older IE.
    //   // // var wscript = new ActiveXObject("WScript.Shell");
    //   // if (wscript !== null) {
    //   //   wscript.SendKeys("{F11}");
    //   // }
    //   console.log("undefined");
    // }
  };

  handleChangeRoom = (e) => {
    const { value } = e.target;
    const { roomStatus } = this.props;
    this.setState((prevState) => ({
      roomData: {
        ...prevState.roomData,
        room: parseInt(value),
      },
    }));

    if (value > 0) {
      this.props.findQueues(roomStatus.roomId);
    } else {
      this.props.fetchqueues();
    }
  };

  componentDidMount() {
    const { roomStatus } = this.props;
    this.props.findQueues(roomStatus.roomId);
  }

  render() {
    const { showSearchBar, locMod, roomData } = this.state;
    const { roomQueues } = this.props;

    const columns = [
      {
        Header: "Queue No",
        accessor: "queueNo",
        minWidth: 60,
      },
      {
        Header: "Patient's Name",
        accessor: "patientName",
        minWidth: 150,
      },
      {
        Header: "DateTime In",
        accessor: "dateIn",
      },

      {
        Header: "Duration(mins)",
        accessor: "duration",
        Cell: (props) => <span>{props.value}</span>,
      },
      {
        Header: "From(Room)",
        accessor: "fromRoom.depName",
      },
      {
        Header: "To(Room)",
        accessor: "toRoom.depName",
      },
      {
        Header: "Note",
        accessor: "note",
      },
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <Card className="box">
              <CardHeader className="box-header">
                <Row>
                  <Col sm="9">
                    <ul className="header-left">
                      <li>
                        <h6 className="mb-0 bold pr-3 p-t-3">
                          Patients On Queue
                        </h6>
                      </li>
                      <li>
                        <button
                          className="btn-box"
                          onClick={this.handleSearchBar}
                        >
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
                      <li>
                        <div>
                          <FormGroup check inline>
                            <Input
                              name="room"
                              type="radio"
                              value={1}
                              checked={roomData.room === 1 ? true : false}
                              className="form-check-input"
                              onChange={this.handleChangeRoom}
                            />
                            <Label className="form-check-label p-t-2">
                              My Room
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Input
                              name="room"
                              type="radio"
                              value={0}
                              checked={roomData.room === 0 ? true : false}
                              className="form-check-input"
                              onChange={this.handleChangeRoom}
                            />
                            <Label className="form-check-label p-t-2">
                              All
                            </Label>
                          </FormGroup>
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col sm="3">
                    <ul className="header-right">
                      <li>
                        <button
                          className="btn-box"
                          onClick={this.requestFullScreen()}
                        >
                          <i className="fa fa-heart  pr-1" />
                          <span>Fullscreen</span>
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
                          <Button size="sm" className="btn-default btn-square">
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
                  data={roomQueues}
                  columns={columns}
                  showPageSizeOptions={false}
                  defaultPageSize={15}
                  className="-highlight -striped text-left"
                />
              </div>
            </Card>

            {/* Location modal */}
            <Modal
              isOpen={locMod}
              toggle={this.toggleLocModal}
              backdrop="static"
              className={this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-home pr-1" />
                  Location Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleLocModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="10">
                    <FormGroup row className="mt-3">
                      <Col sm="3">
                        <Label>Name: </Label>
                      </Col>
                      <Col sm="9">
                        <Input className="form-control-xs" />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3">
                        <Label>Description: </Label>
                      </Col>
                      <Col sm="9">
                        <Input
                          type="textarea"
                          style={{ minHeight: "78px" }}
                          className="form-control-xs"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3">
                        <Label>Status: </Label>
                      </Col>
                      <Col sm="9">
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Active
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3">
                        <Label>Min Profit % </Label>
                      </Col>
                      <Col sm="4">
                        <Input className="form-control-xs" />
                      </Col>
                      <span>%</span>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3"></Col>
                      <Col sm="9">
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Billing Location
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Pharmacy
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Lab Location
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Imaging Location
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleLocModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    color="primary"
                    className="btn-square"
                    type="submit"
                  >
                    <i className="fa fa-save pr-1"></i> Save &amp; Close
                  </Button>
                </div>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  roomQueues: state.queues.roomQueues,
  roomStatus: state.roomStatus.roomStatus,
});

const mapDispatchToProps = {
  findQueues,
  fetchqueues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);

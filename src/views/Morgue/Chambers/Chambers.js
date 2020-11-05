import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Input,
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import ReactTable from "react-table";

class Chambers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chamberMod: false,
      showSearchBar: false
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  // fn Morgue Chamber  modal
  toggleChamberModal = () => {
    const { chamberMod } = this.state;

    this.setState({
      chamberMod: !chamberMod
    });
  };

  render() {
    const { showSearchBar, chamberMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "Morgue Chamber No.",
        accessor: "bankId"
      },
      {
        Header: "Name",
        accessor: "bankNmae"
      },

      {
        Header: "Department",
        accessor: "branch"
      }
    ];

    return (
      <Row>
        <Col sm="12">
          <Card className="box">
            <CardHeader className="box-header">
              <Row>
                <Col sm="12">
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.toggleChamberModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Morgue Chamber</span>
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
                    <div></div>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <ReactTable
                data={data}
                columns={columns}
                className="-highlight -striped text-left"
              />
            </div>
          </Card>

          {/* Morgue Chambers modal */}
          <Modal
            isOpen={chamberMod}
            toggle={this.toggleChamberModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-building pr-1" />
                Morgue Chamber Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleChamberModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="modal-fluid">
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Name: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Storage Area: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Administrative</option>
                      <option>General Outpatient</option>
                      <option>Pharmacy</option>
                      <option>Stores</option>
                      <option>Procurement</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Chamber Status: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Not Occupied</option>
                      <option>Partially Occupied</option>
                      <option>Fully Occupied</option>
                      <option>Faulty</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Capacity: </Label>
                    <Input className="form-control-xs" type="text" />
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
                  onClick={this.toggleChamberModal}
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
    );
  }
}

export default Chambers;

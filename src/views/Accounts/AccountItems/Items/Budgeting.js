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

class Budgeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetMod: false,
      showSearchBar: false
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  // fn payment mode modal
  toggleBudgetModal = () => {
    const { budgetMod } = this.state;

    this.setState({
      budgetMod: !budgetMod
    });
  };

  render() {
    const { showSearchBar, budgetMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Period",
        accessor: "period"
      },
      {
        Header: "Created On",
        accessor: "subAccount"
      },
      {
        Header: "Last Update",
        accessor: "lastUpdate"
      },
      {
        Header: "Created By",
        accessor: "createdBy"
      }
    ];

    return (
      <Row>
        <Col sm="12">
          <Card className="box">
            <CardHeader className="box-header">
              <Row>
                <Col sm="8">
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.toggleBudgetModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Create Budget</span>
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
                        <span>Deactivate</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <i className="fa fa-clipboard  pr-1" />
                        <span className="bold">Copy Budget To New</span>
                      </button>
                    </li>
                  </ul>
                </Col>
                <Col sm="4">
                  <ul className="header-right">
                    <li>
                      <button className="btn-box">
                        <i className="fas fa-file-alt pr-1" />
                        <span className="bold">Budget Report</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <i className="fas fa-file-alt  pr-1" />
                        <span className="bold">Budget Vs Actual Report</span>
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

          {/* Payment Mode modal */}
          <Modal
            isOpen={budgetMod}
            toggle={this.toggleBudgetModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Budget Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleBudgetModal}
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
                    <Input
                      className="form-control-xs"
                      placeholder="Budget Name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Interval: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>Yearly</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Fiscal Year: </Label>
                    <Input className="form-control-xs" type="select">
                      <option disabled>Select Fiscal Year</option>
                      <option>Jan 2021 - Dec 2021</option>
                      <option>Jan 2020 - Dec 2020</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Pre-Fill data? </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Yes</option>
                      <option>No</option>
                    </Input>
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
                  onClick={this.toggleBudgetModal}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="btn-square"
                  type="submit"
                >
                  <i className="fa fa-save pr-1"></i> Create
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default Budgeting;

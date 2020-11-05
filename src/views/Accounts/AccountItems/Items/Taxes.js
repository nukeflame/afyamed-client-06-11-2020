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

class Taxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payMod: false,
      taxMod: false,
      otherTaxMod: false,
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
  toggleVatModal = () => {
    const { payMod } = this.state;

    this.setState({
      payMod: !payMod
    });
  };

  // fn other tax modal
  toggleOtherTaxModal = () => {
    const { otherTaxMod } = this.state;

    this.setState({
      otherTaxMod: !otherTaxMod
    });
  };

  render() {
    const { showSearchBar, payMod, otherTaxMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "VAT ID.",
        accessor: "vatId"
      },
      {
        Header: "Name",
        accessor: "vatName"
      },
      {
        Header: "Per Rate (%)",
        accessor: "perRate"
      }
    ];

    const otherCol = [
      {
        Header: "Other Tax ID",
        accessor: "vatId"
      },
      {
        Header: "Name",
        accessor: "vatName"
      },
      {
        Header: "Per Rate (%)",
        accessor: "perRate"
      }
    ];

    return (
      <Row>
        <Col sm="12">
          <Row>
            <Col sm="6">
              <Card className="box">
                <CardHeader className="box-header">
                  <Row>
                    <Col sm="12">
                      <ul className="header-left">
                        <li>
                          <button
                            className="btn-box"
                            onClick={this.toggleVatModal}
                          >
                            <i className="fa fa-plus c-primary pr-1" />
                            <span className="mini-title">Add VAT Type</span>
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
                            <Button
                              size="sm"
                              className="btn-default btn-square"
                            >
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
            </Col>
            <Col sm="6">
              <Card className="box">
                <CardHeader className="box-header">
                  <Row>
                    <Col sm="12">
                      <ul className="header-left">
                        <li>
                          <button
                            className="btn-box"
                            onClick={this.toggleOtherTaxModal}
                          >
                            <i className="fa fa-plus c-primary pr-1" />
                            <span className="mini-title">Add Other Tax</span>
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
                            <Button
                              size="sm"
                              className="btn-default btn-square"
                            >
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
                    columns={otherCol}
                    className="-highlight -striped text-left"
                  />
                </div>
              </Card>
            </Col>
          </Row>

          {/* Payment Mode modal */}
          <Modal
            isOpen={payMod}
            toggle={this.toggleVatModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                VAT Tax Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleVatModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Name: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Per Rate (%): </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">VAT Liability Sub-Account: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Accrued Liabilities</option>
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
                  onClick={this.toggleVatModal}
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

          {/* Other Tax Mode modal */}
          <Modal
            isOpen={otherTaxMod}
            toggle={this.toggleOtherTaxModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Other Tax Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleOtherTaxModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Name: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Per Rate (%): </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">VAT Liability Sub-Account: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>Accrued Liabilities</option>
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
                  onClick={this.toggleOtherTaxModal}
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

export default Taxes;

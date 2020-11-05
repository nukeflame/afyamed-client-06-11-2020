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

class Scheme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schemeMod: false,
      schemeCatMod: false,
      townMod: false,
      showSearchBar: false
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  // fn scheme modal
  toggleSchemeModal = () => {
    const { schemeMod } = this.state;

    this.setState({
      schemeMod: !schemeMod
    });
  };

  // fn scheme category modal
  toggleSchemeCatModal = () => {
    const { schemeCatMod } = this.state;

    this.setState({
      schemeCatMod: !schemeCatMod
    });
  };

  // fn add town modal
  toggleAddTownModal = () => {
    const { townMod } = this.state;

    this.setState({
      townMod: !townMod
    });
  };

  render() {
    const { showSearchBar, schemeMod, townMod, schemeCatMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "Scheme ID",
        accessor: "schemeId",
        minWidth: 50
      },
      {
        Header: "Name",
        accessor: "schemeName",
        minWidth: 200
      },
      {
        Header: "Credit Limit",
        accessor: "creditLimit"
      },
      {
        Header: "Is Active",
        accessor: "isActive"
      }
    ];

    const schemeCatCol = [
      {
        Header: "Scheme Cat ID",
        accessor: "schemeCatId"
      },
      {
        Header: "Name",
        accessor: "schemeCatName"
      }
    ];

    return (
      <Row>
        <Col sm="12">
          <Card className="box">
            <CardHeader className="box-header">
              <Row>
                <Col sm="9">
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.toggleSchemeModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Scheme</span>
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
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.toggleSchemeCatModal}
                      >
                        <span className="bold">Scheme Categories</span>
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

          {/* Scheme modal */}
          <Modal
            isOpen={schemeMod}
            toggle={this.toggleSchemeModal}
            backdrop="static"
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Scheme Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleSchemeModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="modal-fluid">
              <Row className="mt-2">
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Name: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Postal Address: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Email: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Deposit SubAccount: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Description: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="bold">Category: </Label>
                    <Input className="form-control-xs" type="select">
                      <option>General</option>
                      <option>Insurance</option>
                      <option>Companies</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label className="bold">Telephone 1: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Postal Code: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="town-city" className="bold">
                      Town/City:
                    </Label>
                    <div className="d-flex-align">
                      <Input
                        id="town-city"
                        className="form-control-xs"
                        type="select"
                        name="town-city"
                      >
                        <option value="1">Nairobi</option>
                        <option value="2">Mombasa</option>
                        <option value="3">Thika</option>
                      </Input>
                      <Button
                        color="link"
                        size="sm"
                        onClick={this.toggleAddTownModal}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className="bold">Telephone 2: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Credit Limit: </Label>
                    <Input className="form-control-xs tex-right" type="text" />
                  </FormGroup>
                  <FormGroup check inline>
                    <div className="custom-control custom-checkbox pr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isActive"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="isActive"
                      >
                        Enforce Credit Limit
                      </label>
                    </div>
                  </FormGroup>
                  <FormGroup check inline className="mb-1">
                    <div className="custom-control custom-checkbox pr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isActive"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="isActive"
                      >
                        Enforce Credit Limit for Inpatient
                      </label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className="bold">Receivable SubAccount: </Label>
                    <Input
                      className="form-control-xs tex-right"
                      type="select"
                      disabled
                    >
                      <option></option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Comment: </Label>
                    <Input className="form-control-xs" type="textarea" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Physical Address: </Label>
                    <Input
                      className="form-control-xs"
                      type="textarea"
                      style={{ minHeight: "58px" }}
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Credit Period From: </Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                  <FormGroup check inline>
                    <div className="custom-control custom-checkbox pr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isActive"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="isActive"
                      >
                        Is Active
                      </label>
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Credit Period To:</Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                  <FormGroup check inline>
                    <div className="custom-control custom-checkbox pr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isActive"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="isActive"
                      >
                        Is Default Scheme
                      </label>
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label className="bold">Current Balance:</Label>
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
                  onClick={this.toggleSchemeModal}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="btn-square"
                  type="submit"
                >
                  <i className="fas fa-save pr-1"></i> Save &amp; Close
                </Button>
              </div>
            </ModalFooter>
          </Modal>

          {/* Scheme Category modal */}
          <Modal
            isOpen={schemeCatMod}
            toggle={this.toggleSchemeCatModal}
            backdrop="static"
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-money pr-1" />
                Scheme Category Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleSchemeCatModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="modal-fluid">
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Name:</Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label className="bold">Description:</Label>
                    <Input className="form-control-xs" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <h6 className="text-muted my-2">Scheme Categories</h6>
              <Row>
                <Col sm="12">
                  <ReactTable
                    data={data}
                    columns={schemeCatCol}
                    className="-highlight -striped text-left"
                    pageSizeOptions={[15, 30, 40, 50]}
                    defaultPageSize={10}
                  />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <div className="box-tools">
                <Button
                  size="sm"
                  color="default"
                  className="mr-2 btn-square"
                  onClick={this.toggleSchemeCatModal}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="btn-square w-95p"
                  type="submit"
                >
                  Add
                </Button>
              </div>
            </ModalFooter>
          </Modal>

          {/* Add Town modal */}
          <Modal
            isOpen={townMod}
            toggle={this.toggleAddTownModal}
            backdrop="static"
            className={"modal-sm " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-building pr-1" />
                Add Town
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleAddTownModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="modal-fluid">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label className="bold">Town Name:</Label>
                    <Input type="text" className="form-control-xs" />
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
                  onClick={this.toggleAddTownModal}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="btn-square w-95p"
                  type="submit"
                >
                  Add
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default Scheme;

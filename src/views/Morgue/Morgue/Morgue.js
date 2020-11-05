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

class Morgue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      morgueMod: false,
      occupMod: false,
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

  // fn Morgue modal
  toggleMorgueModal = () => {
    const { morgueMod } = this.state;

    this.setState({
      morgueMod: !morgueMod
    });
  };

  // fn Occupation modal
  toggleOccupModal = () => {
    const { occupMod } = this.state;

    this.setState({
      occupMod: !occupMod
    });
  };

  // fn Occupation modal
  toggleTownModal = () => {
    const { townMod } = this.state;

    this.setState({
      townMod: !townMod
    });
  };

  render() {
    const { showSearchBar, morgueMod, occupMod, townMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "Deceased No",
        accessor: "MorgueId",
        minWidth: 50
      },
      {
        Header: "Surname",
        accessor: "surname"
      },
      {
        Header: "Other Names",
        accessor: "accNo"
      },
      {
        Header: "Place Of Death",
        accessor: "placeOfDeath"
      },
      {
        Header: "Date Of Death",
        accessor: "placeOfDeath"
      },
      {
        Header: "Received On",
        accessor: "placeOfDeath"
      },
      {
        Header: "Removal Status",
        accessor: "placeOfDeath"
      },
      {
        Header: "Duration",
        accessor: "duration"
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
                        onClick={this.toggleMorgueModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Deceased</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.toggleMorgueModal}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">
                          Register From Addmission
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
                      <button className="btn-box" disabled>
                        <span className="bold">Billing</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box" disabled>
                        <span className="bold">Postmoterm Results</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box" disabled>
                        <span className="bold">Remove Body</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box" disabled>
                        <span className="bold">Morgue Addmission Summary</span>
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

          {/* Morgue modal */}
          <Modal
            isOpen={morgueMod}
            toggle={this.toggleMorgueModal}
            backdrop="static"
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-building pr-1" />
                Morgue Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleMorgueModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <div className="form-hr">
                <h6 className="form-title">Deceased Details</h6>
                <hr />
              </div>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="morg-type" className="bold">
                      Type:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="morg-type"
                      className="form-control-xs"
                      name="select"
                      type="select"
                    >
                      <option>Internal</option>
                      <option>External</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="surname" className="bold">
                      Surname:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="surname"
                      className="form-control-xs"
                      name="surname"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="othernames" className="bold">
                      Other Names:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="othernames"
                      className="form-control-xs"
                      name="othernames"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="phone" className="bold">
                      Scheme:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="phone"
                      className="form-control-xs"
                      name="phone"
                      type="select"
                    >
                      <option>Cash Payers</option>
                      <option>Demo Scheme</option>
                      <option>AAR Insurance</option>
                    </Input>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="sex" className="bold">
                      Sex:
                    </Label>
                    <small className="req"> *</small>
                    <div>
                      <FormGroup check inline className="pt-1">
                        <Input
                          className="form-check-input"
                          type="radio"
                          id="male"
                          name="sex"
                          value="Male"
                          // onChange={e => handleChange(e)}
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="male"
                        >
                          Male
                        </Label>
                      </FormGroup>
                      <FormGroup check inline className="pt-1">
                        <Input
                          className="form-check-input"
                          type="radio"
                          id="female"
                          name="sex"
                          value="Female"
                          // onChange={e => handleChange(e)}
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="female"
                        >
                          Female
                        </Label>
                      </FormGroup>
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="occupation" className="bold">
                      Occupation:
                    </Label>
                    <small className="req"> *</small>
                    <div className="d-flex-align">
                      <Input
                        id="occupation"
                        className="form-control-xs"
                        type="select"
                        name="occupation"
                      >
                        <option value="1">Labourer</option>
                        <option value="2">Technician</option>
                        <option value="3">Lecturer</option>
                      </Input>
                      <Button
                        color="link"
                        size="sm"
                        onClick={this.toggleOccupModal}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idType" className="bold">
                      ID Type:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      type="select"
                      id="idType"
                      className="form-control-xs"
                      name="idType"
                    >
                      <option value="0">None</option>
                      <option value="1">National Identity Card</option>
                      <option value="2">Alien's Card</option>
                      <option value="3">Passport</option>
                      <option value="4">Military ID</option>
                      <option value="5">Birth Certificate ID</option>
                      <option value="6">Driving License</option>
                      <option value="7">Student ID</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idNo" className="bold">
                      ID No:
                    </Label>
                    <small className="req"> *</small>
                    <Input id="idNo" className="form-control-xs" name="idNo" />
                  </FormGroup>
                </Col>
              </FormGroup>
              <div className="form-hr">
                <h6 className="form-title">Physical Address</h6>
                <hr />
              </div>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="residence" className="bold">
                      Residence:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="residence"
                      className="form-control-xs"
                      name="residence"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="occupation" className="bold">
                      Town:
                    </Label>
                    <small className="req"> *</small>
                    <div className="d-flex-align">
                      <Input
                        id="occupation"
                        className="form-control-xs"
                        type="select"
                        name="occupation"
                      >
                        <option value="1">Mombasa</option>
                        <option value="2">Nairobi</option>
                        <option value="3">Thika</option>
                      </Input>
                      <Button
                        color="link"
                        size="sm"
                        onClick={this.toggleTownModal}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="occupation" className="bold">
                      Nationality:
                    </Label>
                    <small className="req"> *</small>
                    <div className="d-flex-align">
                      <Input
                        id="occupation"
                        className="form-control-xs"
                        type="select"
                        name="occupation"
                      >
                        <option value="1">Kenyan</option>
                        <option value="2">Indian</option>
                        <option value="3">Tanzanian</option>
                      </Input>
                      <Button
                        color="link"
                        size="sm"
                        onClick={this.toggleNatioModal}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="postalCode" className="bold">
                      Physical Address:
                    </Label>
                    <Input
                      id="postalCode"
                      className="form-control-xs"
                      name="postalCode"
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="residence" className="bold">
                      Date Of Death:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="residence"
                      className="form-control-xs"
                      name="residence"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="occupation" className="bold">
                      Place Of Death:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="occupation"
                      className="form-control-xs"
                      type="select"
                      name="occupation"
                    />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="occupation" className="bold">
                      Cause Of Death:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="occupation"
                      className="form-control-xs"
                      type="text"
                      name="occupation"
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
              <div className="form-hr">
                <h6 className="form-title">Admission Details</h6>
                <hr />
              </div>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="residence" className="bold">
                      DateTime Received:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      type="date"
                      id="residence"
                      className="form-control-xs"
                      name="residence"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="occupation" className="bold">
                      Storage Area:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="occupation"
                      className="form-control-xs"
                      type="select"
                      name="occupation"
                    >
                      <option value="1">Mombasa</option>
                      <option value="2">Nairobi</option>
                      <option value="3">Thika</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="occupation" className="bold">
                      Storage Chamber:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="occupation"
                      className="form-control-xs"
                      type="select"
                      name="occupation"
                    >
                      <option value="1">Kenyan</option>
                      <option value="2">Indian</option>
                      <option value="3">Tanzanian</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="postalCode" className="bold">
                      Expected Removal Date:
                    </Label>
                    <Input
                      type="date"
                      id="postalCode"
                      className="form-control-xs"
                      name="postalCode"
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
              <div className="form-hr">
                <h6 className="form-title">Next Of Kin (1) Details</h6>
                <hr />
              </div>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="residence" className="bold">
                      Next Of Kin:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="residence"
                      className="form-control-xs"
                      name="residence"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idType" className="bold">
                      ID Type:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      type="select"
                      id="idType"
                      className="form-control-xs"
                      name="idType"
                    >
                      <option value="0">None</option>
                      <option value="1">National Identity Card</option>
                      <option value="2">Alien's Card</option>
                      <option value="3">Passport</option>
                      <option value="4">Military ID</option>
                      <option value="5">Birth Certificate ID</option>
                      <option value="6">Driving License</option>
                      <option value="7">Student ID</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idNo" className="bold">
                      ID No:
                    </Label>
                    <small className="req"> *</small>
                    <Input id="idNo" className="form-control-xs" name="idNo" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idNo" className="bold">
                      Telephone:
                    </Label>
                    <small className="req"> *</small>
                    <Input id="idNo" className="form-control-xs" name="idNo" />
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="residence" className="bold">
                      Relationship:
                    </Label>
                    <small className="req"> *</small>
                    <Input
                      id="residence"
                      className="form-control-xs"
                      name="residence"
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
              <div className="form-hr">
                <h6 className="form-title">Next Of Kin (2) Details</h6>
                <hr />
              </div>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="residence" className="bold">
                      Next Of Kin:
                    </Label>

                    <Input
                      id="residence"
                      className="form-control-xs"
                      name="residence"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idType" className="bold">
                      ID Type:
                    </Label>

                    <Input
                      type="select"
                      id="idType"
                      className="form-control-xs"
                      name="idType"
                    >
                      <option value="0">None</option>
                      <option value="1">National Identity Card</option>
                      <option value="2">Alien's Card</option>
                      <option value="3">Passport</option>
                      <option value="4">Military ID</option>
                      <option value="5">Birth Certificate ID</option>
                      <option value="6">Driving License</option>
                      <option value="7">Student ID</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idNo" className="bold">
                      ID No:
                    </Label>

                    <Input id="idNo" className="form-control-xs" name="idNo" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="idNo" className="bold">
                      Telephone:
                    </Label>

                    <Input id="idNo" className="form-control-xs" name="idNo" />
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm="3">
                  <FormGroup>
                    <Label htmlFor="residence" className="bold">
                      Relationship:
                    </Label>
                    <Input
                      id="residence"
                      className="form-control-xs"
                      name="residence"
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <div className="box-tools">
                <Button
                  size="sm"
                  color="default"
                  className="mr-2 btn-square"
                  onClick={this.toggleMorgueModal}
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

          {/* Occupation modal */}
          <Modal
            isOpen={occupMod}
            toggle={this.toggleOccupModal}
            backdrop="static"
            style={{ top: "10%" }}
            className={"modal-sm " + this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fas fa-building pr-1" />
                Add Occupation
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleOccupModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label className="bold">Occupation Name:</Label>
                    <Input className="form-control-xs" />
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
                  onClick={this.toggleOccupModal}
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

          {/* Town modal */}
          <Modal
            isOpen={townMod}
            toggle={this.toggleTownModal}
            backdrop="static"
            style={{ top: "10%" }}
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
                  onClick={this.toggleTownModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label className="bold">Town Name:</Label>
                    <Input className="form-control-xs" />
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
                  onClick={this.toggleTownModal}
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

export default Morgue;

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
  Label
} from "reactstrap";
import ReactTable from "react-table";

class Suppliers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchBar: false,
      showCol: true,
      locMod: false
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  toggleLocModal = () => {
    const { locMod } = this.state;

    this.setState({
      locMod: !locMod
    });
  };

  render() {
    const { showSearchBar, locMod } = this.state;

    const data = [];

    const columns = [
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "No",
        accessor: "no"
      },
      {
        Header: "Item",
        accessor: "item"
      },

      {
        Header: "Description",
        accessor: "description"
      },
      {
        Header: "Created By",
        accessor: "createdBy"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <Card className="box">
              <CardHeader className="box-header">
                <Row>
                  <Col sm="6">
                    <ul className="header-left">
                      <li>
                        <button className="btn-box">
                          <span className="bold">End Shift</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn-box">
                          <i className="fas fa-file-alt"></i>
                          <span className="bold">
                            Cashier Shifts Summary Report{" "}
                          </span>
                        </button>
                        <button className="btn-box">
                          <i className="fas fa-file-alt"></i>
                          <span className="bold">
                            Cashier Shift(s) Receipt Summary Report{" "}
                          </span>
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
                  className="-highlight text-left"
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

export default Suppliers;

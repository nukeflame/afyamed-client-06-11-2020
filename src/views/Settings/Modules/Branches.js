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
  FormFeedback,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { fetchHospitals } from "../../../redux/actions/hospitalActions";
import { fetchModules } from "../../../redux/actions/moduleActions";
import {
  createBranch,
  updateBranch,
  destroyBranch,
} from "../../../redux/actions/branchActions";
import ReactTable from "react-table";
import sharpLoader from "../../../assets/loader/sharp-sm.svg";

class Branches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingHosp: false,
      delBranchMod: false,
      editBranch: false,
      showSearchBar: false,
      activeBranch: "1",
      showCol: true,
      addBranchMod: false,
      selectedRows: [],
      BranchInfo: {
        id: "",
        userId: "",
        surname: "",
        otherNames: "",
        BranchEmail: "",
        idType: "1",
        idNo: "",
        phone: "",
        role: "1",
        hospName: "",
        hospCode: "",
        address: "",
        location: "",
        hospEmail: "",
        telephone: "",
        isActive: true,
      },
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar,
    });
  };

  // handle change values
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      BranchInfo: {
        ...prevState.BranchInfo,
        [name]: value,
      },
    }));
  };

  // handle checked values
  handleChecked = (e, Id) => {
    const { modulePerms } = this.state.BranchInfo;
    const { checked } = e.target;
    //prevent duplicates
    if (checked) {
      modulePerms.push(Id);
    } else {
      modulePerms.splice(modulePerms.indexOf(Id), 1);
    }

    this.setState((prevState) => ({
      BranchInfo: {
        ...prevState.BranchInfo,
        modulePerms,
      },
    }));
  };

  isActiveCheck = (e) => {
    const { checked } = e.target;
    this.setState((prevState) => ({
      BranchInfo: {
        ...prevState.BranchInfo,
        isActive: checked,
      },
    }));
  };

  addBranchModal = () => {
    const { addBranchMod } = this.state;
    const hospCode = Math.random().toString(36).substring(2, 10).toUpperCase();

    this.setState((prevState) => ({
      addBranchMod: !addBranchMod,
      BranchInfo: {
        ...prevState.BranchInfo,
        hospCode,
        id: "",
        surname: "",
        otherNames: "",
        BranchEmail: "",
        idType: "1",
        idNo: "",
        phone: "",
        role: "1",
        hospName: "",
        address: "",
        location: "",
        hospEmail: "",
        telephone: "",
        isActive: true,
      },
    }));
  };

  // fn save Branch
  handleSaveBranch = (e) => {
    e.preventDefault();
    const { editBranch, BranchInfo } = this.state;
    if (editBranch) {
      //edit Branch
      this.props
        .updateBranch(BranchInfo)
        .then(() => {
          this.resetBranch();
          this.setState({ addBranchMod: false });
        })
        .catch(() => {
          this.resetBranch();
        });
    } else {
      //save Branch
      this.props.createBranch(BranchInfo);

      // .then(() => {
      //   this.resetBranch();
      //   this.setState({ addBranchMod: false });
      // })
      // .catch(() => {
      //   this.resetBranch();
      // });
    }
  };

  editBranch = (e) => {
    e.preventDefault();
    const { selectedRows } = this.state;

    if (selectedRows.length > 0) {
      const c = selectedRows[0];

      let modulePerms = [];
      for (let i = 0; i < c.Branch.modulePerms.length; i++) {
        const s = c.Branch.modulePerms[i];
        modulePerms.push(s.id);
      }

      this.setState((prevState) => ({
        addBranchMod: true,
        editBranch: true,
        BranchInfo: {
          ...prevState.BranchInfo,
          id: c.Branch.id,
          userId: c.Branch.userId,
          surname: c.Branch.surname,
          otherNames: c.Branch.otherName,
          BranchEmail: c.Branch.email,
          idType: c.Branch.idType,
          idNo: c.Branch.idNo,
          phone: c.Branch.phone,
          role: c.Branch.role,
          hospName: c.hospName,
          hospCode: c.hospCode,
          hospitalUrl: c.hospUrl,
          address: c.address,
          location: c.location,
          hospEmail: c.hospEmail,
          telephone: c.telephone,
          isActive: c.isActive,
          modulePerms: modulePerms,
        },
      }));
    }
  };

  delBranchModal = (e) => {
    e.preventDefault();
    const { delBranchMod } = this.state;
    this.setState({
      delBranchMod: !delBranchMod,
    });
  };

  deleteBranch = () => {
    const { selectedRows } = this.state;
    if (selectedRows.length > 0) {
      this.props.destroyBranch(selectedRows).then(() => {
        this.setState({
          delBranchMod: false,
          selectedRows: [],
        });
      });
    }
  };

  resetBranch = () => {
    this.setState((prevState) => ({
      editBranch: false,
      BranchInfo: {
        ...prevState.BranchInfo,
        id: "",
        userId: "",
        surname: "",
        otherNames: "",
        BranchEmail: "",
        password: "",
        confPswd: "",
        idType: "1",
        idNo: "",
        phone: "",
        role: "1",
        hospName: "",
        hospCode: "",
        hospitalUrl: "",
        address: "",
        location: "",
        hospEmail: "",
        telephone: "",
        isActive: true,
        modulePerms: [],
      },
    }));
  };

  returnToClients = () => {
    console.log("he");
  };

  render() {
    const {
      showSearchBar,
      addBranchMod,
      loadingHosp,
      selectedRows,
      delBranchMod,
    } = this.state;

    const {
      surname,
      otherNames,
      BranchEmail,
      idType,
      idNo,
      phone,
      role,
      hospName,
      address,
      location,
      hospEmail,
      telephone,
      isActive,
    } = this.state.BranchInfo;

    const { BranchErrors, branches } = this.props;

    const columns = [
      {
        Header: "Name",
        accessor: "hospName",
        minWidth: 190,
        Cell: (props) => <span className="bold">{props.value}</span>,
      },

      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Branch Phone",
        accessor: "telephone",
      },
      {
        Header: "Hosp. Branch Email",
        accessor: "hospEmail",
        minWidth: 130,
      },
      {
        Header: "Is Active",
        accessor: "isActive",
        minWidth: 60,
        className: "",
        Cell: (props) => (
          <span>
            {props.value ? (
              <Badge color="success" pill>
                ACTIVE
              </Badge>
            ) : (
              <Badge color="warning" pill>
                OFFLINE
              </Badge>
            )}
          </span>
        ),
      },
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
                        <button
                          className="btn-box"
                          onClick={this.addBranchModal}
                        >
                          <i className="fa fa-plus c-primary pr-1" />
                          <span className="mini-title">New Branch</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-box"
                          onClick={this.editBranch}
                          disabled={selectedRows.length === 1 ? false : true}
                        >
                          <span>Edit</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-box"
                          disabled={selectedRows.length > 0 ? false : true}
                          onClick={this.delBranchModal}
                        >
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
                    </ul>
                  </Col>
                  <Col sm="6">
                    <ul className="header-right">
                      <li></li>
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
                  data={branches}
                  columns={columns}
                  loading={loadingHosp}
                  className="-highlight -striped text-left"
                  getTrProps={(state, rowInfo) => {
                    if (rowInfo && rowInfo.row) {
                      return {
                        onClick: (e) => {
                          let selectedRows = [];

                          if (e.ctrlKey && this.previousRow) {
                            if (this.previousRow.index < rowInfo.index) {
                              for (
                                let i = this.previousRow.index;
                                i <= rowInfo.index;
                                i++
                              ) {
                                selectedRows.push(
                                  state.sortedData[i]._original
                                );
                              }
                            } else {
                              for (
                                let i = rowInfo.index;
                                i <= this.previousRow.index;
                                i++
                              ) {
                                selectedRows.push(
                                  state.sortedData[i]._original
                                );
                              }
                            }
                          } else {
                            rowInfo._index = rowInfo.index;
                            selectedRows.push(rowInfo.original);
                            this.previousRow = rowInfo;
                          }

                          this.setState({
                            selectedTd: rowInfo.index,
                            selectedRows,
                          });
                        },

                        onDoubleClick: (e) => {
                          e.preventDefault();
                          // this.props.setPatient(rowInfo.original).then(() => {
                          //   this.props.history.push("/records/patient-chart");
                          // });
                        },

                        style: {
                          background:
                            this.state.selectedRows.some(
                              (e) => e.id === rowInfo.original.id
                            ) && "#42a5f533",
                        },
                      };
                    } else {
                      return {};
                    }
                  }}
                />
              </div>
            </Card>

            {/* Add Branch Modal */}
            <Modal
              isOpen={addBranchMod}
              toggle={this.addBranchModal}
              backdrop="static"
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="icon-user-follow" /> Branch Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.addBranchModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="modal-fluid">
                <div className="form-hr">
                  <h6 className="form-title">Branch Details</h6>
                  <hr />
                </div>
                <FormGroup row>
                  <Col sm="3">
                    <Label htmlFor="surname" className="bold">
                      Surname:
                    </Label>
                    <Input
                      id="surname"
                      className="form-control-xs"
                      name="surname"
                      value={surname}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.surname && BranchErrors.surname.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.surname}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="otherNames" className="bold">
                      Other Names:
                    </Label>
                    <Input
                      id="otherNames"
                      className="form-control-xs"
                      name="otherNames"
                      value={otherNames}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.otherNames &&
                        BranchErrors.otherNames.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.otherNames}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="idType" className="bold">
                      ID Type:
                    </Label>
                    <Input
                      type="select"
                      id="idType"
                      className="form-control-xs"
                      name="idType"
                      value={idType}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.idType && BranchErrors.idType.length > 0
                          ? true
                          : false
                      }
                    >
                      {this.props.ids && this.props.ids.length > 0 ? (
                        this.props.ids.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No records found.</option>
                      )}
                    </Input>
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.idType}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="idNo" className="bold">
                      ID No:
                    </Label>
                    <Input
                      id="idNo"
                      className="form-control-xs"
                      name="idNo"
                      value={idNo}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.idNo && BranchErrors.idNo.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.idNo}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="3">
                    <Label htmlFor="BranchEmail" className="bold">
                      Email:
                    </Label>
                    <Input
                      type="email"
                      id="BranchEmail"
                      className="form-control-xs"
                      name="BranchEmail"
                      value={BranchEmail}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.BranchEmail &&
                        BranchErrors.BranchEmail.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.BranchEmail}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="phone" className="bold">
                      Phone:
                    </Label>
                    <Input
                      id="phone"
                      className="form-control-xs"
                      name="phone"
                      value={phone}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.phone && BranchErrors.phone.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.phone}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="role-is" className="bold">
                      My Role is:
                    </Label>
                    <Input
                      id="role-is"
                      type="select"
                      className="form-control-xs"
                      name="role"
                      value={role}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.role && BranchErrors.role.length > 0
                          ? true
                          : false
                      }
                    >
                      {this.props.positions &&
                      this.props.positions.length > 0 ? (
                        this.props.positions.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No records found.</option>
                      )}
                    </Input>
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.roleIs}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <div className="form-hr">
                  <h6 className="form-title">Branch Information</h6>
                  <hr />
                </div>
                <FormGroup row>
                  <Col sm="3">
                    <Label htmlFor="hospName" className="bold">
                      Branch Name:
                    </Label>
                    <Input
                      id="hospName"
                      className="form-control-xs"
                      name="hospName"
                      value={hospName}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.hospName &&
                        BranchErrors.hospName.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.hospName}
                    </FormFeedback>
                  </Col>

                  <Col sm="3">
                    <Label htmlFor="telephone" className="bold">
                      Telephone:
                    </Label>
                    <Input
                      id="telephone"
                      className="form-control-xs"
                      name="telephone"
                      value={telephone}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.telephone &&
                        BranchErrors.telephone.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.telephone}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="hospEmail" className="bold">
                      Branch Email:
                    </Label>
                    <Input
                      type="email"
                      id="hospEmail"
                      className="form-control-xs"
                      name="hospEmail"
                      value={hospEmail}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.hospEmail &&
                        BranchErrors.hospEmail.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.hospEmail}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="address" className="bold">
                      Address:
                    </Label>
                    <Input
                      id="address"
                      className="form-control-xs"
                      name="address"
                      value={address}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.address && BranchErrors.address.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.address}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="3">
                    <Label htmlFor="location" className="bold">
                      Location:
                    </Label>
                    <Input
                      id="location"
                      className="form-control-xs"
                      name="location"
                      value={location}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        BranchErrors.location &&
                        BranchErrors.location.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {BranchErrors.location}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <FormGroup check inline className="pt-4">
                      <div className="custom-control custom-checkbox pr-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="isActive"
                          name="isActive"
                          checked={isActive ? true : false}
                          onChange={(e) => this.isActiveCheck(e)}
                        />
                        <label
                          className="custom-control-label bold"
                          htmlFor="isActive"
                        >
                          Is Active
                        </label>
                      </div>
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
                    onClick={this.addBranchModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    color="primary"
                    className="btn-square"
                    type="submit"
                    onClick={this.handleSaveBranch}
                  >
                    {this.props.savingBranch ? (
                      <span>
                        Processing
                        <img src={sharpLoader} alt="" className="pl-1" />
                      </span>
                    ) : (
                      <span>
                        Save &amp; Close <i className="fa fa-save pl-1"></i>
                      </span>
                    )}
                  </Button>
                </div>
              </ModalFooter>
            </Modal>

            {/* Delete Group Modal */}
            <Modal
              isOpen={delBranchMod}
              toggle={this.delBranchModal}
              className={"modal-sm " + this.props.className}
              style={{ top: "30%" }}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fa fa-trash pr-1" />
                  Delete Branch
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.delBranchModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <span>
                  Are you sure? this item will be deleted permanently!
                </span>
              </ModalBody>
              <ModalFooter>
                <div>
                  <Button
                    className="btn-default btn-square mr-2"
                    size="sm"
                    onClick={this.delBranchModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="btn-danger btn-square"
                    size="sm"
                    onClick={this.deleteBranch}
                  >
                    Delete
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
  selectedHosp: state.hospitals.selectedHosp,
  branches: state.branches.branches,
  hospitals: state.hospitals.data,
  modules: state.modules.items,
  savingBranch: state.branches.savingBranch,
  BranchErrors: state.branches.BranchErrors,
  positions: state.positions.items,
  ids: state.ids.items,
});

const mapDispatchToProps = {
  createBranch,
  updateBranch,
  fetchHospitals,
  destroyBranch,
  fetchModules,
};

export default connect(mapStateToProps, mapDispatchToProps)(Branches);

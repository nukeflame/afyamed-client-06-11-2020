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
  Nav,
  NavItem,
  NavLink,
  FormFeedback,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import {
  fetchHospitals,
  selectedHosp,
} from "../../redux/actions/hospitalActions";
import { fetchModules } from "../../redux/actions/moduleActions";
import {
  createClient,
  fetchclients,
  updateClient,
  destroyClient,
} from "../../redux/actions/clientActions";
import ReactTable from "react-table";
import classNames from "classnames";
import sharpLoader from "../../assets/loader/sharp-sm.svg";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingHosp: false,
      delClientMod: false,
      isEditClient: false,
      showSearchBar: false,
      activeClient: "1",
      showCol: true,
      addClientMod: false,
      selectedRows: [],
      clientInfo: {
        id: "",
        userId: "",
        surname: "",
        otherNames: "",
        clientEmail: "",
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
    };
  }

  handleSearchBar = () => {
    const { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar,
    });
  };

  // makeId = length => {
  //   let r = " ";
  //   let r = " ";
  //   let r = " ";
  // };

  // handle change values
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      clientInfo: {
        ...prevState.clientInfo,
        [name]: value,
      },
    }));
  };

  // handle checked values
  handleChecked = (e, Id) => {
    const { modulePerms } = this.state.clientInfo;
    const { checked } = e.target;
    //prevent duplicates
    if (checked) {
      modulePerms.push(Id);
    } else {
      modulePerms.splice(modulePerms.indexOf(Id), 1);
    }

    this.setState((prevState) => ({
      clientInfo: {
        ...prevState.clientInfo,
        modulePerms,
      },
    }));
  };

  isActiveCheck = (e) => {
    const { checked } = e.target;
    this.setState((prevState) => ({
      clientInfo: {
        ...prevState.clientInfo,
        isActive: checked,
      },
    }));
  };

  addClientModal = () => {
    const { addClientMod } = this.state;
    // const hospCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    this.setState({
      addClientMod: !addClientMod,
    });
    this.resetClient();
  };

  // fn save client
  handleSaveClient = (e) => {
    e.preventDefault();
    const { isEditClient, clientInfo } = this.state;
    if (isEditClient) {
      //edit client
      this.props
        .updateClient(clientInfo)
        .then(() => {
          this.resetClient();
          this.setState({ addClientMod: false });
        })
        .catch(() => {
          this.resetClient();
        });
    } else {
      //save client
      console.log(clientInfo);

      // this.props
      //   .createClient(clientInfo)
      //   .then(() => {
      //     this.resetClient();
      //     this.setState({ addClientMod: false });
      //   })
      //   .catch(() => {
      //     this.resetClient();
      //   });
    }
  };

  editClient = (e) => {
    e.preventDefault();
    const { selectedRows } = this.state;

    if (selectedRows.length > 0) {
      const c = selectedRows[0];

      let modulePerms = [];
      for (let i = 0; i < c.client.modulePerms.length; i++) {
        const s = c.client.modulePerms[i];
        modulePerms.push(s.id);
      }

      this.setState((prevState) => ({
        addClientMod: true,
        isEditClient: true,
        clientInfo: {
          ...prevState.clientInfo,
          id: c.client.id,
          userId: c.client.userId,
          surname: c.client.surname,
          otherNames: c.client.otherName,
          clientEmail: c.client.email,
          idType: c.client.idType,
          idNo: c.client.idNo,
          phone: c.client.phone,
          role: c.client.role,
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

  delClientModal = (e) => {
    e.preventDefault();
    const { delClientMod } = this.state;
    this.setState({
      delClientMod: !delClientMod,
    });
  };

  deleteClient = () => {
    const { selectedRows } = this.state;
    if (selectedRows.length > 0) {
      this.props.destroyClient(selectedRows).then(() => {
        this.setState({
          delClientMod: false,
          selectedRows: [],
        });
      });
    }
  };

  resetClient = () => {
    this.setState((prevState) => ({
      isEditClient: false,
      clientInfo: {
        ...prevState.clientInfo,
        id: "",
        userId: "",
        surname: "",
        otherNames: "",
        clientEmail: "",
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

  componentDidMount() {
    // fetch hospitals
    this.props.fetchHospitals();
    //fetch modules
    this.props.fetchModules();
  }

  render() {
    const {
      showSearchBar,
      addClientMod,
      loadingHosp,
      activeClient,
      selectedRows,
      delClientMod,
      isEditClient,
    } = this.state;

    const {
      surname,
      otherNames,
      clientEmail,
      password,
      confPswd,
      idType,
      idNo,
      phone,
      role,
      hospName,
      hospCode,
      address,
      location,
      hospEmail,
      telephone,
      isActive,
      modulePerms,
    } = this.state.clientInfo;

    const { hospitals, modules, clientErrors, positions } = this.props;

    const columns = [
      {
        Header: "Name",
        accessor: "hospName",
        minWidth: 190,
        Cell: (props) => <span className="bold">{props.value}</span>,
      },
      {
        Header: "Hosp. ID",
        accessor: "hospId",
      },
      {
        Header: "Hosp. Code",
        accessor: "hospCode",
      },
      {
        Header: "Hosp. URL",
        accessor: "hospUrl",
        minWidth: 130,
      },
      {
        Header: "Contact Person",
        accessor: "client.fullname",
        minWidth: 150,
      },
      {
        Header: "Client Phone",
        accessor: "client.phone",
      },
      {
        Header: "Position",
        accessor: "client.role",
        Cell: (props) => (
          <span>
            {positions && positions.length > 0
              ? positions.map((p) => {
                  return p.id === props.value ? p.name : null;
                })
              : null}
          </span>
        ),
      },
      {
        Header: "Hosp. Email",
        accessor: "hospEmail",
        minWidth: 130,
      },
      {
        Header: "Branch(s)",
        accessor: "hospBranches.length",
        minWidth: 60,
        className: "text-center",
      },
      {
        Header: "Is Active",
        accessor: "isActive",
        minWidth: 60,
        className: "text-center",
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
            <div className="navitem-header pb-2">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={
                      "pl-0 disabled " +
                      classNames({
                        active: activeClient === "1",
                      })
                    }
                  >
                    <i className="fa fa-users nav-ico pr-1" />
                    <span className="nav-title">Clients</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
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
                          onClick={this.addClientModal}
                        >
                          <i className="fa fa-plus c-primary pr-1" />
                          <span className="mini-title">New Client</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-box"
                          onClick={this.editClient}
                          disabled={selectedRows.length === 1 ? false : true}
                        >
                          <span>Edit</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-box"
                          disabled={selectedRows.length > 0 ? false : true}
                          onClick={this.delClientModal}
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
                  data={hospitals}
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
                          // this.props.selectedHosp(rowInfo.original).then(() => {
                          //   this.props.history.push("/admin/branches");
                          // });
                          this.props.selectedHosp(rowInfo.original);
                          this.props.history.push("/admin/branches");
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

            {/* Add Client Modal */}
            <Modal
              isOpen={addClientMod}
              toggle={this.addClientModal}
              backdrop="static"
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="icon-user-follow" /> Client Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.addClientModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody className="modal-fluid">
                <div className="form-hr">
                  <h6 className="form-title">Client Details</h6>
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
                        clientErrors.surname && clientErrors.surname.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.surname}
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
                        clientErrors.otherNames &&
                        clientErrors.otherNames.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.otherNames}
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
                        clientErrors.idType && clientErrors.idType.length > 0
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
                      {clientErrors.idType}
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
                        clientErrors.idNo && clientErrors.idNo.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.idNo}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="3">
                    <Label htmlFor="clientEmail" className="bold">
                      Client Email:
                    </Label>
                    <Input
                      type="email"
                      id="clientEmail"
                      className="form-control-xs"
                      name="clientEmail"
                      value={clientEmail}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        clientErrors.clientEmail &&
                        clientErrors.clientEmail.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.clientEmail}
                    </FormFeedback>
                  </Col>

                  <Col
                    sm="3"
                    className={classNames({
                      hidden: isEditClient,
                    })}
                  >
                    <Label htmlFor="password" className="bold">
                      Password:
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      className="form-control-xs"
                      name="password"
                      value={password}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        clientErrors.password &&
                        clientErrors.password.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.password}
                    </FormFeedback>
                  </Col>
                  <Col
                    sm="3"
                    className={classNames({
                      hidden: isEditClient,
                    })}
                  >
                    <Label htmlFor="conf_pswd" className="bold">
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      id="conf_pswd"
                      className="form-control-xs"
                      name="confPswd"
                      value={confPswd}
                      onChange={(e) => this.handleChange(e)}
                    />
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
                        clientErrors.phone && clientErrors.phone.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.phone}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <div className="form-hr">
                  <h6 className="form-title">Hospital Information</h6>
                  <hr />
                </div>
                <FormGroup row>
                  <Col sm="3">
                    <Label htmlFor="hospName" className="bold">
                      Hospital Name:
                    </Label>
                    <Input
                      id="hospName"
                      className="form-control-xs"
                      name="hospName"
                      value={hospName}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        clientErrors.hospName &&
                        clientErrors.hospName.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.hospName}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="hospCode" className="bold">
                      Hospital Code:
                    </Label>
                    <Input
                      id="hospCode"
                      className="form-control-xs"
                      name="hospCode"
                      value={hospCode}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        clientErrors.hospCode &&
                        clientErrors.hospCode.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.hospCode}
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
                        clientErrors.telephone &&
                        clientErrors.telephone.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.telephone}
                    </FormFeedback>
                  </Col>
                  <Col sm="3">
                    <Label htmlFor="hospEmail" className="bold">
                      Email:
                    </Label>
                    <Input
                      type="email"
                      id="hospEmail"
                      className="form-control-xs"
                      name="hospEmail"
                      value={hospEmail}
                      onChange={(e) => this.handleChange(e)}
                      invalid={
                        clientErrors.hospEmail &&
                        clientErrors.hospEmail.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.hospEmail}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
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
                        clientErrors.address && clientErrors.address.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.address}
                    </FormFeedback>
                  </Col>
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
                        clientErrors.location &&
                        clientErrors.location.length > 0
                          ? true
                          : false
                      }
                    />
                    <FormFeedback className="animated fadeIn">
                      {clientErrors.location}
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
                        clientErrors.role && clientErrors.role.length > 0
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
                      {clientErrors.roleIs}
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
                <div className="form-hr">
                  <h6 className="form-title">Module Permission</h6>
                  <hr />
                </div>
                <FormGroup row>
                  {modules && modules.length > 0
                    ? modules.map((mod) => (
                        <Col sm="3" key={mod.id}>
                          <FormGroup check inline>
                            <div className="custom-control custom-checkbox pr-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={mod.slug}
                                name={mod.slug}
                                checked={
                                  modulePerms.includes(mod.id) ? true : false
                                }
                                onChange={(e) => this.handleChecked(e, mod.id)}
                              />
                              <label
                                className="custom-control-label bold"
                                htmlFor={mod.slug}
                              >
                                {mod.name}
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                      ))
                    : null}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.addClientModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    color="primary"
                    className="btn-square"
                    type="submit"
                    onClick={this.handleSaveClient}
                  >
                    {this.props.savingClient ? (
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
              isOpen={delClientMod}
              toggle={this.delClientModal}
              className={"modal-sm " + this.props.className}
              style={{ top: "30%" }}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fa fa-trash pr-1" />
                  Delete Client
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.delClientModal}
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
                    onClick={this.delClientModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="btn-danger btn-square"
                    size="sm"
                    onClick={this.deleteClient}
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
  clients: state.clients.data,
  hospitals: state.hospitals.data,
  modules: state.modules.items,
  savingClient: state.clients.savingClient,
  clientErrors: state.clients.clientErrors,
  positions: state.positions.items,
  ids: state.ids.items,
});

const mapDispatchToProps = {
  fetchclients,
  createClient,
  updateClient,
  fetchHospitals,
  destroyClient,
  fetchModules,
  selectedHosp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

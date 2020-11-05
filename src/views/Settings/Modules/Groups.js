import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Button,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormFeedback,
  Badge
} from "reactstrap";
import ReactTable from "react-table";
import sharpLoader from "../../../assets/loader/sharp-sm.svg";
import {
  createGroup,
  updateGroup,
  destroyGroup
} from "../../../redux/actions/groupActions";

class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRows: [],
      showSearchBar: false,
      rolesLoading: false,
      delGrpMod: false,
      groupMod: false,
      editGroupMod: false,
      groupData: {
        id: "",
        role: "",
        slug: "",
        isActive: true
      }
    };
  }

  toggleGroupModal = () => {
    const { groupMod } = this.state;
    this.setState({ groupMod: !groupMod });
    this.resetGroup();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      groupData: {
        ...prevState.groupData,
        [name]: value
      }
    }));
  };

  handleGroupCheck = e => {
    const { name, checked } = e.target;
    this.setState(prevState => ({
      groupData: {
        ...prevState.groupData,
        [name]: checked
      }
    }));
  };

  resetGroup = () => {
    this.setState({
      editGroupMod: false,
      selectedRows: [],
      groupData: { role: "", slug: "", isActive: true }
    });
  };

  saveGroup = () => {
    const { user } = this.props;
    const { groupData, editGroupMod } = this.state;

    const grpData = {
      id: groupData.id,
      role: groupData.role,
      slug: groupData.slug,
      isActive: groupData.isActive,
      hospId: user.hospId
    };

    if (editGroupMod) {
      //edit
      this.props.updateGroup(grpData).then(() => {
        this.setState({ groupMod: false });
        this.resetGroup();
      });
    } else {
      //save
      this.props.createGroup(grpData).then(() => {
        this.setState({ groupMod: false });
        this.resetGroup();
      });
    }
  };

  delGroupModal = e => {
    e.preventDefault();
    const { delGrpMod } = this.state;
    this.setState({
      delGrpMod: !delGrpMod
    });
  };

  deleteGroup = () => {
    const { selectedRows } = this.state;
    this.props.destroyGroup(selectedRows).then(() => {
      this.setState({
        delGrpMod: false,
        selectedRows: []
      });
    });
  };

  editGroup = () => {
    const { selectedRows } = this.state;
    const g = selectedRows[0];

    this.setState(prevState => ({
      groupData: {
        ...prevState.groupData,
        id: g.id,
        role: g.name,
        slug: g.slug,
        isActive: g.isActive
      }
    }));

    this.setState({ groupMod: true, editGroupMod: true });
  };

  render() {
    const {
      selectedRows,
      showSearchBar,
      groupMod,
      groupData,
      delGrpMod
    } = this.state;

    const { groups, fetchingGroups, savingRoles, groupErrors } = this.props;
    const columns = [
      {
        Header: "Role",
        accessor: "name"
      },
      {
        Header: "Slug",
        accessor: "slug"
      },
      {
        Header: "Users",
        accessor: "users.length"
      },
      {
        Header: "Is Active",
        accessor: "isActive",
        Cell: props => (
          <span>
            {props.value ? (
              <Badge color="success" pill>
                ACTIVE
              </Badge>
            ) : (
              <Badge color="warning" pill>
                DEACTIVATED
              </Badge>
            )}
          </span>
        )
      }
    ];

    return (
      <Row>
        <Col sm="12">
          <Card className="box">
            <CardHeader className="box-header">
              <Row>
                <Col sm="10">
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        type="button"
                        onClick={this.toggleGroupModal}
                      >
                        <i className="fa fa-plus c-primary" />
                        <span className="mini-title">New Group</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        type="button"
                        onClick={this.editGroup}
                        disabled={
                          selectedRows && selectedRows.length === 1
                            ? false
                            : true
                        }
                      >
                        <span>Edit</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.delGroupModal}
                        disabled={
                          selectedRows && selectedRows.length ? false : true
                        }
                      >
                        <span>Delete</span>
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
                data={groups}
                columns={columns}
                loading={fetchingGroups}
                pageSizeOptions={[17, 34, 45, 50]}
                defaultPageSize={17}
                className="-highlight -striped text-left"
                getTrProps={(state, rowInfo) => {
                  if (rowInfo && rowInfo.row) {
                    return {
                      onClick: e => {
                        let selectedRows = [];

                        if (e.ctrlKey && this.previousRow) {
                          if (this.previousRow.index < rowInfo.index) {
                            for (
                              let i = this.previousRow.index;
                              i <= rowInfo.index;
                              i++
                            ) {
                              selectedRows.push(state.sortedData[i]._original);
                            }
                          } else {
                            for (
                              let i = rowInfo.index;
                              i <= this.previousRow.index;
                              i++
                            ) {
                              selectedRows.push(state.sortedData[i]._original);
                            }
                          }
                        } else {
                          rowInfo._index = rowInfo.index;
                          selectedRows.push(rowInfo.original);
                          this.previousRow = rowInfo;
                        }

                        this.setState({
                          selectedTd: rowInfo.index,
                          selectedRows
                        });
                      },

                      onDoubleClick: e => {
                        this.editGroup();
                      },

                      style: {
                        background:
                          this.state.selectedRows.some(
                            e => e.id === rowInfo.original.id
                          ) && "#42a5f533"
                      }
                    };
                  } else {
                    return {};
                  }
                }}
              />
            </div>
          </Card>

          {/* Add Group Modal */}
          <Modal
            isOpen={groupMod}
            toggle={this.toggleGroupModal}
            backdrop="static"
            className={this.props.className}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="icon-lock pr-1" />
                Group Editor
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.toggleGroupModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody className="bg1">
              <Form>
                <FormGroup row className="my-3">
                  <Col sm="2">
                    <Label htmlFor="role" className="bold">
                      Role:
                    </Label>
                  </Col>
                  <Col sm="6">
                    <Input
                      id="role"
                      className="form-control-xs"
                      name="role"
                      invalid={
                        groupErrors.role && groupErrors.role.length > 0
                          ? true
                          : false
                      }
                      value={groupData.role}
                      onChange={e => this.handleChange(e)}
                    />
                    <FormFeedback className="animated fadeIn">
                      {groupErrors.role}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row className="my-3">
                  <Col sm="2">
                    <Label htmlFor="slug" className="bold">
                      Slug:
                    </Label>
                  </Col>
                  <Col sm="6">
                    <Input
                      id="slug"
                      className="form-control-xs"
                      name="slug"
                      invalid={
                        groupErrors.slug && groupErrors.slug.length > 0
                          ? true
                          : false
                      }
                      value={groupData.slug}
                      onChange={e => this.handleChange(e)}
                    />
                    <FormFeedback className="animated fadeIn">
                      {groupErrors.slug}
                    </FormFeedback>
                    <div className="custom-control custom-checkbox pr-3 my-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="is-active-role"
                        name="isActive"
                        checked={groupData.isActive ? true : false}
                        onChange={e => this.handleGroupCheck(e)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="is-active-role"
                      >
                        Is Active
                      </label>
                    </div>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <div>
                <Button
                  color="secondary"
                  size="sm"
                  className="btn-square btn-top mr-2"
                  type="button"
                  onClick={this.toggleGroupModal}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  className="btn-square btn-top"
                  type="button"
                  disabled={savingRoles ? true : false}
                  onClick={this.saveGroup}
                >
                  {savingRoles ? (
                    <span>
                      Processing
                      <img src={sharpLoader} alt="" className="pl-1" />
                    </span>
                  ) : (
                    <span>
                      Save <i className="icon-save" />
                    </span>
                  )}
                </Button>
              </div>
            </ModalFooter>
          </Modal>

          {/* Delete Group Modal */}
          <Modal
            isOpen={delGrpMod}
            toggle={this.delGroupModal}
            className={"modal-sm " + this.props.className}
            style={{ top: "30%" }}
          >
            <ModalHeader>
              <span className="modal-title f-s-14">
                <i className="fa fa-trash pr-1" />
                Delete Group
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  type="button"
                  onClick={this.delGroupModal}
                >
                  <i className="fa fa-times text-white" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <span>Are you sure? This Group will be deleted permanently!</span>
            </ModalBody>
            <ModalFooter>
              <div>
                <Button
                  className="btn-default btn-square mr-2"
                  size="sm"
                  onClick={this.delGroupModal}
                >
                  Cancel
                </Button>
                <Button
                  className="btn-danger btn-square"
                  size="sm"
                  onClick={this.deleteGroup}
                >
                  Delete
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups.findGroups,
  savingRoles: state.groups.savingRoles,
  fetchingGroups: state.groups.fetchingGroups,
  groupErrors: state.groups.groupErrors,
  user: state.user.user
});

const mapDispatchToProps = { createGroup, updateGroup, destroyGroup };

export default connect(mapStateToProps, mapDispatchToProps)(Groups);

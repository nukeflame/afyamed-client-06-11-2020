import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane,
  FormGroup,
} from "reactstrap";
import { connect } from "react-redux";
import {
  fetchPermGroups,
  updatePermGroup,
} from "../../../redux/actions/permActions";
// import { getClientData } from "../../../config/auth";
import { showGroups } from "../../../redux/actions/groupActions";

class Permissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: 0,
      roleGroupId: 0,
      permCatIds: [],
      catData: [],
      group: {},
    };
  }

  toggleGroups = (group, tab) => {
    const { activeGroup } = this.state;
    const { user } = this.props;
    const hospBranchId = user.hospId;
    //toggle tabs
    if (activeGroup !== tab) {
      this.setState({ activeGroup: tab, roleGroupId: group.id });
    }
    const perm = group.permissions;
    const branchPerms = [];
    let nameSlug = [];
    // hospital branch
    if (perm.length > 0) {
      for (let i = 0; i < perm.length; i++) {
        const p = perm[i];
        if (hospBranchId === p.pivot.hosp_branch_id) {
          branchPerms.push(p);
        }
      }
    }
    //hospital branch permissions
    if (branchPerms.length > 0) {
      for (let i = 0; i < branchPerms.length; i++) {
        const b = branchPerms[i];
        if (b.pivot.can_view) {
          nameSlug.push(`${b.slug}-view`);
        }
        if (b.pivot.can_edit) {
          nameSlug.push(`${b.slug}-edit`);
        }
        if (b.pivot.can_create) {
          nameSlug.push(`${b.slug}-create`);
        }
        if (b.pivot.can_delete) {
          nameSlug.push(`${b.slug}-delete`);
        }
      }
    }
    this.props.showGroups(user.hospId);
    this.setState({ catData: nameSlug });
  };

  handleCheck = (e, cat) => {
    const { name, value } = e.target;
    const { roleGroupId, catData } = this.state;
    const newArr = catData.filter((item) => item !== name);

    const checked = catData.includes(name);
    if (checked) {
      this.setState({
        catData: newArr,
      });
    } else {
      this.setState({
        catData: [...catData, name],
      });
    }

    const hospBranchId = 1;
    const data = {
      catId: cat.id,
      value,
      roleGroupId,
      hospBranchId,
      checked: checked ? 0 : 1,
    };

    this.props.updatePermGroup(data);
  };

  checkStatus = (user) => {
    const { groups } = this.props;
    if (groups.length > 0) {
      const group = groups[0];
      // const { activeGroup } = this.state;
      const hospBranchId = user.hospId;
      //toggle tabs
      this.setState({ activeGroup: 0, roleGroupId: group.id });
      const perm = group.permissions;
      const branchPerms = [];
      let nameSlug = [];
      // hospital branch
      if (perm.length > 0) {
        for (let i = 0; i < perm.length; i++) {
          const p = perm[i];
          if (hospBranchId === p.pivot.hosp_branch_id) {
            branchPerms.push(p);
          }
        }
      }
      //hospital branch permissions
      if (branchPerms.length > 0) {
        for (let i = 0; i < branchPerms.length; i++) {
          const b = branchPerms[i];
          if (b.pivot.can_view) {
            nameSlug.push(`${b.slug}-view`);
          }
          if (b.pivot.can_edit) {
            nameSlug.push(`${b.slug}-edit`);
          }
          if (b.pivot.can_create) {
            nameSlug.push(`${b.slug}-create`);
          }
          if (b.pivot.can_delete) {
            nameSlug.push(`${b.slug}-delete`);
          }
        }
      }

      this.setState({ catData: nameSlug });
    }
  };

  componentDidMount() {
    this.props.fetchPermGroups();
    const { user } = this.props;
    if (user !== null) {
      const hospId = user.hospId;
      this.props.showGroups(hospId).then(() => {
        this.checkStatus(user);
      });
    }
  }

  render() {
    const { activeGroup, catData } = this.state;
    const {
      groups,
      permGroups,
      hospitalModules,
      hospitalPermissions,
    } = this.props;

    return (
      <Row>
        <Col sm="2">
          <ListGroup id="list-tab" role="tablist" className="mini-side">
            <h5 className="h-title pl-3">Groups</h5>
            <div className="pb-1">
              {groups && groups.length > 0
                ? groups.map((group, index) => {
                    return (
                      <ListGroupItem
                        key={index}
                        onClick={() => this.toggleGroups(group, index)}
                        action
                        active={activeGroup === index}
                      >
                        <span className="pl-3">{group.name}</span>
                      </ListGroupItem>
                    );
                  })
                : null}
            </div>
          </ListGroup>
        </Col>
        <Col sm="10">
          <TabContent className="tab-box" activeTab={activeGroup}>
            <TabPane tabId={activeGroup} className="animated fadeIn">
              {/* Administrators */}
              <Row>
                <Col sm="12">
                  <Card className="box" style={{ height: "529px" }}>
                    <CardHeader className="bg-warn">
                      Enable or Disable user interfaces features by checking or
                      uncheckingn the boxes below
                    </CardHeader>
                    <CardBody>
                      {/* Perm Groups */}
                      {permGroups && permGroups.length > 0
                        ? permGroups.map((perm) => (
                            <div className="mb-3" key={perm.id}>
                              <h6 className="card-title bold mb-1">
                                {perm.slug === "general" ? "General" : null}
                                {hospitalModules.map((h) =>
                                  h.slug === perm.slug ? perm.name : null
                                )}
                              </h6>
                              {/* Categories */}
                              {hospitalPermissions.map((hPerm) =>
                                perm.slug === hPerm.slug
                                  ? perm.categories.map((cat) =>
                                      hPerm.categories.map((hp) =>
                                        cat.id === hp.id ? (
                                          <Row key={cat.id}>
                                            <Col sm="3">
                                              <FormGroup check inline>
                                                <div className="custom-control custom-checkbox pr-3">
                                                  <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id={`${cat.slug}-view`}
                                                    name={`${cat.slug}-view`}
                                                    value="canView"
                                                    checked={
                                                      catData.includes(
                                                        cat.slug + "-view"
                                                      )
                                                        ? true
                                                        : false
                                                    }
                                                    // disabled={
                                                    //   isEmpty(catData.canView)
                                                    //     ? false
                                                    //     : true
                                                    // }
                                                    onChange={(e) =>
                                                      this.handleCheck(e, cat)
                                                    }
                                                  />
                                                  <label
                                                    className="custom-control-label"
                                                    htmlFor={`${cat.slug}-view`}
                                                  >
                                                    {cat.name}
                                                  </label>
                                                </div>
                                              </FormGroup>
                                            </Col>
                                            <Col sm="3">
                                              <FormGroup check inline>
                                                <div className="custom-control custom-checkbox pr-3">
                                                  <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id={`${cat.slug}-create`}
                                                    name={`${cat.slug}-create`}
                                                    value="canCreate"
                                                    checked={
                                                      catData.includes(
                                                        cat.slug + "-create"
                                                      )
                                                        ? true
                                                        : false
                                                    }
                                                    onChange={(e) =>
                                                      this.handleCheck(e, cat)
                                                    }
                                                  />
                                                  <label
                                                    className="custom-control-label"
                                                    htmlFor={`${cat.slug}-create`}
                                                  >
                                                    Create
                                                  </label>
                                                </div>
                                              </FormGroup>
                                            </Col>
                                            <Col sm="3">
                                              <FormGroup check inline>
                                                <div className="custom-control custom-checkbox pr-3">
                                                  <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id={`${cat.slug}-edit`}
                                                    name={`${cat.slug}-edit`}
                                                    value="canEdit"
                                                    checked={
                                                      catData.includes(
                                                        cat.slug + "-edit"
                                                      )
                                                        ? true
                                                        : false
                                                    }
                                                    onChange={(e) =>
                                                      this.handleCheck(e, cat)
                                                    }
                                                  />
                                                  <label
                                                    className="custom-control-label"
                                                    htmlFor={`${cat.slug}-edit`}
                                                  >
                                                    Edit
                                                  </label>
                                                </div>
                                              </FormGroup>
                                            </Col>
                                            <Col sm="3">
                                              <FormGroup check inline>
                                                <div className="custom-control custom-checkbox pr-3">
                                                  <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id={`${cat.slug}-delete`}
                                                    name={`${cat.slug}-delete`}
                                                    value="canDelete"
                                                    checked={
                                                      catData.includes(
                                                        cat.slug + "-delete"
                                                      )
                                                        ? true
                                                        : false
                                                    }
                                                    onChange={(e) =>
                                                      this.handleCheck(e, cat)
                                                    }
                                                  />
                                                  <label
                                                    className="custom-control-label"
                                                    htmlFor={`${cat.slug}-delete`}
                                                  >
                                                    Delete
                                                  </label>
                                                </div>
                                              </FormGroup>
                                            </Col>
                                          </Row>
                                        ) : null
                                      )
                                    )
                                  : null
                              )}
                            </div>
                          ))
                        : null}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  groups: state.groups.findGroups,
  permGroups: state.permGroups.items,
  hospitalModules: state.modules.hospitalModules,
  hospitalPermissions: state.modules.hospitalPermissions,
});

const mapDispatchToProps = {
  showGroups,
  fetchPermGroups,
  updatePermGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormFeedback
} from "reactstrap";

import { checkUserPwd } from "../../../redux/actions/userActions";
import sharpLoader from "../../../assets/loader/sharp-sm.svg";

export class SystemDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashData: {
        systemPass: ""
      },
      proceedBtn: false
    };
  }

  handleSytemPass = e => {
    e.preventDefault();
    const { value } = e.target;

    this.setState(prevState => ({
      dashData: {
        ...prevState.dashData,
        systemPass: value
      }
    }));
  };

  handleKeyUp = e => {
    if (e.target.value.length > 0) {
      this.setState({
        proceedBtn: true
      });
      // enter key
      if (e.keyCode === 13) {
        this.proceedSytemDash();
      }
    } else {
      this.setState({
        proceedBtn: false
      });
    }
  };

  proceedSytemDash = () => {
    const { dashData } = this.state;
    const { user } = this.props;
    const formData = new FormData();
    formData.append("userId", user.id);
    formData.append("password", dashData.systemPass);

    this.props.checkUserPwd(formData).then(() => {
      this.props.history.push("/admin/system-dashboard");
      this.props.systemDashboardToggle();
    });
    this.setState(prevState => ({
      dashData: {
        ...prevState.dashData,
        systemPass: ""
      }
    }));
  };

  render() {
    const {
      systemDashboardToggle,
      dashMod,
      checkSytemPassError,
      checkingUserPwd
    } = this.props;
    const { dashData, proceedBtn } = this.state;

    return (
      <Modal
        isOpen={dashMod}
        toggle={systemDashboardToggle}
        backdrop="static"
        className={"modal-sm " + this.props.className}
      >
        <ModalHeader>
          <span className="modal-title f-s-14">
            <i className="fas fa-key pr-1" />
            Authenticate To Proceed
          </span>
          <span>
            <Button
              color="link"
              className="modal-close-x"
              type="button"
              onClick={e => systemDashboardToggle(e)}
            >
              <i className="fa fa-times text-white" />
            </Button>
          </span>
        </ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Col sm="12">
              <Label htmlFor="systemPass" className="bold mb-1">
                Password:
              </Label>
              <Input
                id="systemPass"
                className="form-control-xs br-4"
                name="systemPass"
                type="password"
                autoFocus={false}
                autoComplete="off"
                value={dashData.systemPass}
                onChange={this.handleSytemPass}
                onKeyUp={this.handleKeyUp}
                invalid={
                  checkSytemPassError && checkSytemPassError.length > 0
                    ? true
                    : false
                }
              />
              <FormFeedback className="animated fadeIn">
                {checkSytemPassError}
              </FormFeedback>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Row>
            <Col sm="12">
              <div>
                <Button
                  color="info"
                  size="sm"
                  onClick={this.proceedSytemDash}
                  disabled={proceedBtn ? false : true}
                >
                  {checkingUserPwd ? (
                    <span>
                      Authenticating
                      <img src={sharpLoader} alt="" className="pl-1" />
                    </span>
                  ) : (
                    <span>
                      Proceed <i className="icon-save" />
                    </span>
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  checkSytemPassError: state.user.checkSytemPassError,
  checkingUserPwd: state.user.checkingUserPwd
});

const mapDispatchToProps = { checkUserPwd };

export default connect(mapStateToProps, mapDispatchToProps)(SystemDashboard);

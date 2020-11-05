import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";

import { checkUserPwd } from "../../../redux/actions/userActions";

export class AlertBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashData: {
        systemPass: "",
      },
      proceedBtn: false,
    };
  }

  handleSytemPass = (e) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState((prevState) => ({
      dashData: {
        ...prevState.dashData,
        systemPass: value,
      },
    }));
  };

  handleKeyUp = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        proceedBtn: true,
      });
      // enter key
      if (e.keyCode === 13) {
        this.proceedSytemDash();
      }
    } else {
      this.setState({
        proceedBtn: false,
      });
    }
  };

  render() {
    const { alertBoxToggle, alertMd, alertInfo, alertHeader } = this.props;

    return (
      <Modal
        isOpen={alertMd}
        toggle={alertBoxToggle}
        backdrop="static"
        className={"modal-lg " + this.props.className}
        style={{ top: "20%" }}
      >
        <ModalHeader>
          <span className="modal-title f-s-14">
            <i className="ti-info pr-1" />
            Alert
          </span>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              <div className="text-center">
                <h1>{alertHeader}!</h1>
                <div>
                  <h5>{alertInfo}</h5>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  alertMd: state.alert.alertMd,
  alertInfo: state.alert.alertInfo,
  alertHeader: state.alert.alertHeader,
});

const mapDispatchToProps = { checkUserPwd };

export default connect(mapStateToProps, mapDispatchToProps)(AlertBox);

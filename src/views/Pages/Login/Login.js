import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Col,
  Container,
  Input,
  Row,
  Form,
  FormGroup,
  Label,
  FormFeedback
} from "reactstrap";
import bgImg from "../../../assets/11.jpg";
import spinnerLoader from "../../../assets/loader/spinner.svg";
import {
  logginUser,
  handleLoginStatus
} from "../../../redux/actions/loggingAction";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      dataHosp: {},
      visible: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = e => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "username") {
      this.setState(prevState => ({
        visible: false,
        errors: {
          ...prevState.errors,
          name: false
        }
      }));
    } else if (name === "password") {
      this.setState(prevState => ({
        visible: false,
        errors: {
          ...prevState.errors,
          pass: false
        }
      }));
    }
  };

  handleLogging = e => {
    e.preventDefault();
    const { username, password, dataHosp } = this.state;
    const { logginUser, history, cookies } = this.props;
    const userData = {
      clientId: dataHosp.clientId,
      username,
      password
    };

    logginUser(userData).then(level => {
      this.props.handleLoginStatus();
      cookies.set("level", level, { path: "/" });
      history.push("/");
    });
  };

  redirectHospAuth = () => {
    localStorage.removeItem("client");
  };

  componentDidMount() {
    // set title
    document.title = "AfyaMed :: Login";

    this.setState({
      dataHosp:
        JSON.parse(localStorage.getItem("client")) !== null
          ? JSON.parse(localStorage.getItem("client"))
          : ""
    });
  }

  render() {
    const { dataHosp } = this.state;
    const { submittedLoging, loggingErrors } = this.props;

    return (
      <div className="top-content" style={{ background: `url('${bgImg}')` }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="5" sm="5" className="form-box">
              <div className="loginbg" style={{ background: "#20a8d840" }}>
                <div className="form-top">
                  <div className="form-top-left">
                    {/* <img src={logoTop} className="logowidth" /> */}
                    <h3
                      className="color-white"
                      style={{
                        color: "#FFFFFF",
                        background: "transparent",
                        textShadow: "4px 3px 0px #7A7A7A",
                        fontSize: "27px"
                      }}
                    >
                      {dataHosp.name}
                    </h3>
                  </div>
                  <div className="form-top-right">
                    <i className="fa fa-user-lock" />
                  </div>
                </div>
                <div className="form-bottom">
                  <h6 className="font-white ">
                    Please insert your credentials
                  </h6>
                  <Form onSubmit={this.handleLogging}>
                    <FormGroup className="mt-3">
                      <Label className="sr-only" htmlFor="form-username">
                        Username
                      </Label>
                      <Input
                        name="username"
                        placeholder="Username"
                        id="username"
                        className="form-username"
                        onChange={e => this.handleChange(e)}
                        onFocus={this.handleFocus}
                        invalid={
                          loggingErrors.username &&
                          loggingErrors.username.length
                            ? true
                            : false
                        }
                      />
                      <FormFeedback
                        style={{ color: "#ffeb3b" }}
                        className="animated fadeIn"
                      >
                        {loggingErrors.username}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup className="my-3">
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                        className="form-password"
                        onChange={e => this.handleChange(e)}
                        onFocus={this.handleFocus}
                        invalid={
                          loggingErrors.password &&
                          loggingErrors.password.length
                            ? true
                            : false
                        }
                      />
                      <FormFeedback
                        style={{ color: "#ffeb3b" }}
                        className="animated fadeIn"
                      >
                        {loggingErrors.password}
                      </FormFeedback>
                    </FormGroup>

                    <button
                      type="submit"
                      className="btn loginsubmit-btn mb-2"
                      disabled={submittedLoging ? true : false}
                    >
                      {submittedLoging ? (
                        <img src={spinnerLoader} alt="" />
                      ) : (
                        <span>
                          Sign In <i className="icon-login" />
                        </span>
                      )}
                    </button>
                    {/* errors */}
                    {loggingErrors.notfound && loggingErrors.notfound.length ? (
                      <small
                        // style={{ color: "#ffeb3b" }}
                        style={{ color: "#fff" }}
                        className="animated zoomIn"
                      >
                        <i className="icon-info text-danger pr-1" />
                        {loggingErrors.notfound}
                      </small>
                    ) : null}
                  </Form>
                  <br />
                  <p className="mt-2">
                    <a
                      target="_blank"
                      href="site/userlogin"
                      className="color-white forgot pull-right"
                    >
                      <i className="fa fa-user" /> Patient Portal
                    </a>

                    <Link
                      to="/hospital-auth"
                      onClick={this.redirectHospAuth}
                      className="color-white pr-3 forgot pull-right"
                    >
                      <i className="icon-logout pr-1" />
                      Change Hospital Code
                    </Link>
                  </p>
                  <p>
                    <Link to={"/site/forgotpassword"} className="forgot">
                      <i className="fa fa-key" /> Forgot Password?
                    </Link>
                  </p>
                  <p className="mb-2 color-white text-center">
                    Epsotech Copyright &copy; 2019. All rights reserved
                    <br />
                    Help and Support : info@epsotechsolutions.com
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cookies: ownProps.cookies,
    hospital: state.hospitals.hospital,
    submittedLoging: state.user.submittedLoging,
    loggingErrors: state.user.loggingErrors
  };
};

const mapDispatchToProps = {
  logginUser,
  handleLoginStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

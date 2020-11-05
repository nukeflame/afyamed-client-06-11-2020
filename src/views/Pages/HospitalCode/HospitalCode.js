import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Col,
  Container,
  Input,
  Row,
  Form,
  FormGroup,
  Label,
  FormFeedback,
} from "reactstrap";
import bgImg from "../../../assets/11.jpg";
import spinnerLoader from "../../../assets/loader/spinner.svg";
import { findHospital } from "../../../redux/actions/hospitalActions";

export class HospitalCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospital_code: "",
      checkHospCode: false,
      visible: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFocus = (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "hospital_code") {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          hospcode: false,
        },
      }));
    }
  };

  handleHospCode = (e) => {
    e.preventDefault();
    const { hospital_code } = this.state;
    const data = { hospital_code };
    this.props.findHospital(data);
  };

  handleSaveCode = (e) => {
    // const { cookies } = this.props;
    const { value } = e.target;
    this.setState({ checkHospCode: !value });

    // const { checkHospCode } = this.state;
    // cookies.set("hcode", checkHospCode, { path: "/" });
    console.log(value);

    // if (value) {
    //   this.setState({ checkHospCode: true });
    //   // cookies.set("remCode", JSON.stringify(r), { path: "/" });
    //   console.log(checkHospCode);
    // } else {
    //   this.setState({ checkHospCode: false });
    //   // cookies.remove("remCode", { path: "/" });
    // }
  };

  componentDidMount() {
    // set title
    document.title = "AfyaMed :: Hospital Code";

    const client = localStorage.getItem("client");
    if (client) {
      this.props.history.push("/auth/login");
    }
  }

  render() {
    const { checkHospCode } = this.state;
    const { findingHospital, hospErrors } = this.props;

    return (
      <div className="top-content" style={{ background: `url('${bgImg}')` }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="5" sm="5" className="form-box">
              <div className="loginbg" style={{ background: "#39f" }}>
                <div className="form-top">
                  <div className="form-top-left" style={{ paddingTop: "37px" }}>
                    {/* <img src={logoTop} className="logowidth" /> */}
                    <h3
                      className="color-white"
                      style={{
                        color: "#FFFFFF",
                        background: "transparent",
                        textShadow: "4px 3px 0px #7A7A7A",
                        fontSize: "27px",
                      }}
                    >
                      AfyaMed HIMS
                    </h3>
                  </div>
                  <div className="form-top-right">
                    <i className="fa fa-lock" />
                  </div>
                </div>
                <div className="form-bottom">
                  <h3 className="font-white">Enter hospital code</h3>
                  <Form onSubmit={(e) => this.handleHospCode(e)}>
                    <FormGroup className="mb-3">
                      <Label className="sr-only" htmlFor="form-username">
                        Hospital Code
                      </Label>
                      <Input
                        name="hospital_code"
                        id="hospital_code"
                        className="form-username"
                        style={{ color: "#000" }}
                        autoComplete="off"
                        onChange={(e) => this.handleChange(e)}
                        onFocus={this.handleFocus}
                        invalid={hospErrors.hospCode.length > 0 ? true : false}
                      />
                      <FormFeedback
                        style={{ color: "#8b0000" }}
                        className="animated fadeIn"
                      >
                        {hospErrors.hospCode}
                      </FormFeedback>
                    </FormGroup>
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="save-code"
                        value={checkHospCode}
                        checked={checkHospCode}
                        onChange={(e) => this.handleSaveCode(e)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="save-code"
                      >
                        Remember Code
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn loginsubmit-btn"
                      disabled={findingHospital ? true : false}
                    >
                      {findingHospital ? (
                        <img src={spinnerLoader} alt="" />
                      ) : (
                        <span>
                          Authenticate <i className="fa fa-key pl-2" />
                        </span>
                      )}
                    </button>
                  </Form>
                  <br />
                  <p className="mt-3 mb-0 text-center">
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
    findingHospital: state.hospitals.findingHospital,
    hospErrors: state.hospitals.hospErrors,
  };
};

const mapDispatchToProps = {
  findHospital,
};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalCode);

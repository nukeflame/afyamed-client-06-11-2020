import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row
} from "reactstrap";

class SummaryReport extends Component {
  render() {
    return (
      <div>
        <Card className="box header">
          <CardHeader className="box-header">
            <Row>
              <Col sm="12">
                <ul className="header-left">
                  <li>
                    <button
                      type="button"
                      className="btn-box"
                      onClick={this.summaryModal}
                    >
                      <span>Close</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn-box"
                      type="button"
                      onClick={this.downloadPdf}
                    >
                      <span>
                        <i className="fa fa-download"></i> Download
                      </span>
                    </button>
                  </li>
                </ul>
              </Col>
            </Row>
          </CardHeader>
        </Card>
        <div
          className="modal-fluid"
          style={{ marginBottom: "15px", position: "relative" }}
        >
          <div className="summary-report">
            <div title="header">
              <p
                align="center"
                style={{ marginBottom: "0in", lineHeight: "100%" }}
              >
                <font size="3" style={{ fontSize: "12pt" }}>
                  <b>PCC Pediatric Test Associates</b>
                </font>
              </p>
              <p
                align="center"
                style={{ marginBottom: "0in", lineHeight: "100%" }}
              >
                <font size="2" style={{ fontSize: "11pt" }}>
                  20 Winnocks Falls Way, Suite 7
                </font>
              </p>
              <p
                align="center"
                style={{ marginBottom: "0in", lineHeight: "100%" }}
              >
                <font size="2" style={{ fontSize: "11pt" }}>
                  Winnocks, VT 05404
                </font>
              </p>
              <p
                align="center"
                style={{ marginBottom: "0.2in", lineHeight: "100%" }}
              >
                <font size="2" style={{ fontSize: "11pt" }}>
                  +254700412127
                </font>
              </p>
            </div>
            <p align="left" style={{ marginBottom: "5px", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <b>Kennedy Mwanzi Peters</b>
                <span style={{ fontWeight: "normal", float: "right" }}>
                  PCC#. 3306
                </span>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                DOB: 04/05/1997
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Sex: Male
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <br />
            </p>

            <p align="left" style={{ marginBottom: "5px", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "11pt" }}>
                <b>
                  <font size="2" style={{ fontSize: "10pt" }}>
                    Scheduled Visits:
                  </font>
                </b>
                <span>
                  <b>
                    <font size="2" style={{ fontSize: "10pt", float: "right" }}>
                      Date of Last Physical:
                    </font>
                  </b>
                </span>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "11pt" }}>
                <font size="2" style={{ fontSize: "10pt" }}>
                  None
                </font>
                <span style={{ float: "right" }}>
                  <font size="2" style={{ fontSize: "10pt" }}>
                    04/05/13
                  </font>
                </span>
              </font>
            </p>
            <hr style={{ marginBottom: "0.1in", borderWidth: "2px" }} />
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <font size="3" style={{ fontSize: "11pt" }}>
                <b>Visit Summary for 05/12/19</b>
              </font>
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <br />
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Beverly Crusher Md
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                PCC Pediatrics Main Offfice
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Nkrimah Road – Mombasa
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <br />
            </p>
            <p align="left" style={{ marginBottom: "3px", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <u>
                  <b>Chief Complaint</b>
                </u>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Sore throat
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <br />
            </p>
            <p align="left" style={{ marginBottom: "5px", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <u>
                  <b>Vitals</b>
                </u>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Temprature - 102F Sp0<sup>2 </sup>- 12 Weight – 100g Height –
                122cm Pulse Rate – 2hg Blood Pressure - 122
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <br />
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <br />
            </p>
            <p align="left" style={{ marginBottom: "5px", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <u>
                  <b>Labs</b>
                </u>
              </font>
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <font size="2" style={{ fontSize: "10pt" }}>
                  <span style={{ textDecoration: "none" }}>
                    <span style={{ fontWeight: "normal" }}>Rapid strep</span>
                  </span>
                  <span style={{ fontWeight: "normal", float: "right" }}>
                    Status: Completed
                  </span>
                </font>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                marginLeft: "0.2in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Facility: PCC Pediatric Test Associate (Doctor’s Office)
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "5px",
                fontWeight: "normal",
                lineHeight: "100%",
                marginBottom: "0in",
                textDecoration: "none"
              }}
            ></p>
            <table
              width="740px"
              cellPadding="4"
              cellSpacing="0"
              style={{
                margin: "0in 0.2in",
                pageBreakBefore: "auto",
                pageBreakAfter: "auto",
                pageBreakInside: "auto"
              }}
            >
              <thead>
                <tr valign="top">
                  <td
                    width="240.7"
                    style={{
                      borderTop: "1px",
                      solid: "#000000",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "5px 2px",
                      verticalAlign: "bottom",
                      marginBottom: "5px"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span style={{ textDecoration: "none" }}>Test</span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "1px",
                      solid: "#000000",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "5px 2px",
                      verticalAlign: "bottom"
                    }}
                    sdnum="1033;0;@"
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span style={{ textDecoration: "none" }}>Result</span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "1px",
                      solid: "#000000",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "5px 2px",
                      verticalAlign: "bottom"
                    }}
                    sdnum="1033;0;@"
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span style={{ textDecoration: "none" }}>
                          Unit of measuring
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "1px",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "5px 2px",
                      verticalAlign: "bottom"
                    }}
                    sdnum="1033;0;@"
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span style={{ textDecoration: "none" }}>
                          Refference Range
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "1px",
                      solid: "#000000",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "5px 2px",
                      verticalAlign: "bottom"
                    }}
                    sdnum="1033;0;@"
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span style={{ textDecoration: "none" }}>
                          Interprataion
                        </span>
                      </font>
                    </p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr valign="top" className="summary-tr">
                  <td
                    width="240.7"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                    sdnum="1033;0;@"
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Streptococcus pyogens Ag in throat by Immunoassay
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Positive ejfjfjf
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <br />
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Negative
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Abnormal
                        </span>
                      </font>
                    </p>
                  </td>
                </tr>
                <tr valign="top" className="summary-tr">
                  <td
                    width="240.7"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                    sdnum="1033;0;@"
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Streptococcus pyogens Ag in throat by Immunoassay
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Positive ejfjfjf
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <br />
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Negative
                        </span>
                      </font>
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      border: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <font size="2" style={{ fontSize: "10pt" }}>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "#000"
                          }}
                        >
                          Abnormal
                        </span>
                      </font>
                    </p>
                  </td>
                </tr>

                <tr valign="top" className="summary-tr">
                  <td
                    width="73.6"
                    style={{
                      borderTop: "none",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                    sdnum="1033;0;@"
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      <br />
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "none",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <br />
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "none",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <br />
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "none",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <br />
                    </p>
                  </td>
                  <td
                    width="73.6"
                    style={{
                      borderTop: "none",
                      borderBottom: "1px solid #000000",
                      borderLeft: "none",
                      borderRight: "none",
                      padding: "0in",
                      paddingTop: "inherit"
                    }}
                  >
                    <p
                      align="left"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none"
                      }}
                    >
                      <br />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              align="left"
              style={{
                marginLeft: "0.2in",
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <br />
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <font size="2" style={{ fontSize: "10pt" }}>
                  <span style={{ textDecoration: "none" }}>
                    <span style={{ fontWeight: "normal" }}>Throat Culture</span>
                  </span>
                  <span style={{ fontWeight: "normal", float: "right" }}>
                    Status: Orderd
                  </span>
                </font>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                marginLeft: "0.2in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Result:
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                marginLeft: "0.2in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Facility: PCC Pediatric Test Associate (Doctor’s Office)
              </font>
            </p>

            <p
              align="left"
              style={{
                marginLeft: "0.2in",
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <br />
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            ></p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <br />
            </p>
            <p align="left" style={{ marginBottom: "3px", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <u>
                  <b>Plan</b>
                </u>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Medication
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                marginLeft: "0.2in",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Amox 10 days
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <br />
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontWeight: "normal",
                lineHeight: "100%"
              }}
            >
              <br />
            </p>
            <hr style={{ marginBottom: "0.1in", borderWidth: "2px" }} />
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "11pt" }}>
                <b>Other Health Information as of 05/0515</b>
              </font>
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <br />
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontstyle: "normal",
                lineHeight: "100%"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                <u>
                  <b>Active Problems</b>
                </u>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Asthma
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Closity
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontstyle: "normal",
                lineHeight: "100%"
              }}
            >
              <br />
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <font size="2" style={{ fontSize: "10pt" }}>
                <b>
                  <span style={{ fontStyle: "normal" }}>
                    <u>Active Allergies</u>
                  </span>
                </b>
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Asthma
              </font>
            </p>
            <p
              align="left"
              style={{
                marginBottom: "0in",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "100%",
                textDecoration: "none"
              }}
            >
              <font size="2" style={{ fontSize: "10pt" }}>
                Closity
              </font>
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <br />
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <br />
            </p>
            <p align="left" style={{ marginBottom: "0in", lineHeight: "100%" }}>
              <br />
            </p>

            <div title="footer">
              <p
                className="sdfootnote"
                style={{
                  padding: "5px",
                  backgroundColor: "var(--success)"
                }}
              >
                <font color="#ffffff">
                  PCC Pediatric: 05/05/2016 11:56:07
                  <span style={{ float: "right" }}>
                    AfyaMedV1 : By Epsotech Solutions
                  </span>
                </font>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SummaryReport;

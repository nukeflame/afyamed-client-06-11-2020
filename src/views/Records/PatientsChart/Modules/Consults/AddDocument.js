import React, { Component } from "react";
import { Card, CardHeader, Col, Row, CardBody, Button } from "reactstrap";
import ReactTable from "react-table";
import { connect } from "react-redux";
import {
  addDocument,
  findDocument,
  destroyDocument,
} from "../../../../../redux/actions/docActions";
import { IMAGE_URL } from "../../../../../config/urls/env";
import Noty from "noty";

class AddDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
      files: [],
    };
  }

  refDocFiles = (input) => {
    this.docFilesRef = input;
  };

  addFile = () => {
    this.docFilesRef.click();
  };

  handleAddFile = () => {
    const { currentPatient } = this.props;
    let uploadedFiles = this.docFilesRef.files;
    let files = [];
    for (var i = 0; i < uploadedFiles.length; i++) {
      files.push(uploadedFiles[i]);
    }
    this.setState({ files });
    //upload
    let formData = new FormData();
    for (var f = 0; f < files.length; f++) {
      let file = files[f];
      formData.append("files[]", file);
    }

    formData.append("patientId", currentPatient.id);
    this.props.addDocument(formData);
  };

  handleDelDocument = (e) => {
    e.preventDefault();
    const { selectedRows } = this.state;
    const _this = this;
    let fileIds = [];
    for (let i = 0; i < selectedRows.length; i++) {
      fileIds.push(selectedRows[i].id);
    }
    const v = new Noty({
      text:
        "You are about to delete this file . Are you sure you want to continue?",
      layout: "topCenter",
      type: "error",
      theme: "metroui",
      buttons: [
        Noty.button("Ok", "btn btn-info btn-sm btn-square mr-2 ", () => {
          _this.setState({
            selectedRows: [],
          });
          //destroy document
          _this.props.destroyDocument(fileIds);
          new Noty({
            text: `(${fileIds.length}) ${
              fileIds.length > 0 ? "files" : "file"
            }  deleted successfully!`,
            layout: "topRight",
            type: "success",
            timeout: 3000,
            theme: "metroui",
            function: () => {
              fileIds = [];
              _this.setState({ selectedRows: [] });
            },
          }).show();
          v.close();
        }),
        Noty.button(
          "Cancel",
          "btn btn-outline-secondary btn-sm btn-square",
          () => {
            _this.setState({
              selectedRows: [],
            });
            v.close();
          }
        ),
      ],
    }).show();
  };

  componentDidMount() {
    const { currentPatient } = this.props;
    this.props.findDocument(currentPatient.id);
  }

  render() {
    const { selectedRows } = this.state;
    const { findDocuments } = this.props;
    const columns = [
      {
        Header: "File Name",
        accessor: "fileName",
        minWidth: 140,
      },
      {
        Header: "File Type",
        accessor: "fileType",
      },
      {
        Header: "File size",
        accessor: "fileSize",
      },
      {
        Header: "",
        accessor: "actions",
        minWidth: 30,
        Cell: () => (
          <Button
            color="link"
            size="sm"
            className="p-0"
            // onClick={e => this.handleSelectedVisit(e, props.original)}
          >
            <span className="">
              <i className="fa fa-download"></i>
            </span>
          </Button>
        ),
      },
    ];

    return (
      <div className="animated fadeIn">
        <Card className="box header" style={{ marginBottom: "10px" }}>
          <CardHeader className="box-header bg1">
            <Row>
              <Col sm="12">
                <ul className="header-left">
                  <li>
                    <button
                      className="btn-box"
                      type="button"
                      onClick={this.addFile}
                    >
                      <i className="fa fa-plus c-primary" />
                      <span className="mini-title">Add Image or File</span>
                    </button>
                    <input
                      type="file"
                      ref={(input) => this.refDocFiles(input)}
                      className="hidden"
                      multiple
                      onChange={(e) => this.handleAddFile(e)}
                    />
                  </li>
                  <li>
                    <button className="btn-box" type="button">
                      <span>Capture Image</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn-box"
                      disabled={selectedRows.length > 0 ? false : true}
                      onClick={(e) => this.handleDelDocument(e)}
                    >
                      <span>Detach</span>
                    </button>
                  </li>
                </ul>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="p-0 mb-0">
            <Row>
              <Col sm="6">
                <ReactTable
                  data={findDocuments}
                  columns={columns}
                  // loading={findConsLoading}
                  className=" -highlight -striped text-left"
                  showPageSizeOptions={false}
                  defaultPageSize={18}
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

                          this.setState({ selectedRows });
                        },

                        onDoubleClick: (e) => {
                          e.preventDefault();
                          let noteReview = {};
                          noteReview = this.state.selectedRows[0];
                          this.setState({ noteReview });
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
              </Col>
              <Col sm="6" style={{ background: "#0e0e0e" }}>
                <div className="document-wrapper">
                  {selectedRows.length > 0 ? (
                    parseInt(selectedRows[0].width) >
                    parseInt(selectedRows[0].height) ? (
                      <div className="document-box-v animated fadedIn">
                        <div className="document-view-v">
                          <img
                            src={IMAGE_URL + selectedRows[0].data}
                            alt=""
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    ) : parseInt(selectedRows[0].height) >
                      parseInt(selectedRows[0].width) ? (
                      <div className="document-box-h animated fadedIn">
                        <div className="document-view-h">
                          <img
                            src={IMAGE_URL + selectedRows[0].data}
                            alt=""
                            style={{ height: "100%" }}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    <p className="empty-view">No file selected</p>
                  )}
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  documents: state.documents.documents,
  findDocuments: state.documents.findDocuments,
  currentPatient: state.patients.currentPatient,
});

const mapDispatchToProps = {
  addDocument,
  findDocument,
  destroyDocument,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDocument);

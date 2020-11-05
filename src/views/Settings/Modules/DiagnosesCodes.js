import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { connect } from "react-redux";
import ReactTable from "react-table";
// import csvParser from "csv-parse";
// import fs from "fs";

class DiagnosesCodes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRows: [],
      showSearchBar: false,
      importMd: false,
    };
  }

  componentDidMount() {}

  importModal = () => {
    const { importMd } = this.state;
    this.setState({
      importMd: !importMd,
    });
  };

  importDiesesCodes = () => {
    // var csv2sql = require("csv2sql");
    // csv2sql
    //   .transform("DOGS", fs.createReadStream("./codes.csv"))
    //   .on("data", function(sql) {
    //     console.log(sql); //INSERT INTO DOGS ...
    //   })
    //   .on("end", function(rows) {
    //     console.log(rows); // 5 - Num of rows handled, including header
    //   })
    //   .on("error", function(error) {
    //     console.error(error); //Handle error
    //   });
  };

  render() {
    const { importMd, selectedRows, showSearchBar } = this.state;

    const data = [];
    const columns = [
      {
        Header: "Disease Name",
        accessor: "username",
      },
      {
        Header: "Disease Code",
        accessor: "uniqId",
      },
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
                      <button className="btn-box" type="button">
                        <i className="fa fa-plus c-primary" />
                        <span className="mini-title">Add Diagnosis Code</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-box"
                        type="button"
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
                        disabled={
                          selectedRows && selectedRows.length ? false : true
                        }
                      >
                        <span>Delete</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn-box"
                        onClick={this.importDiesesCodes}
                      >
                        <span>
                          <i className="fa fa-import"></i> Import CSV
                        </span>
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
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <ReactTable
                className="-highlight -striped text-left"
                loading={false}
                loadingText={<div className="sk-spinner sk-spinner-pulse" />}
                data={data}
                columns={columns}
                defaultPageSize={17}
                showPageSizeOptions={false}
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
                          selectedRows,
                        });
                      },

                      onDoubleClick: (e) => {
                        this.editUser();
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

          {/* Import Modal */}
          <Modal
            isOpen={importMd}
            toggle={this.importModal}
            backdrop="static"
            className={"modal-xl " + this.props.className}
          >
            <ModalHeader className="m-0">
              <span className="text-muted f-s-14">
                <i className="icon-user-follow" /> Contact Editor - Kennedy
                Peters
              </span>
              <span>
                <Button
                  color="link"
                  className="modal-close-x"
                  onClick={this.importModal}
                >
                  <i className="fa fa-times text-muted" />
                </Button>
              </span>
            </ModalHeader>
            <ModalBody>
              <div className="modal-fluid "></div>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cookies: ownProps.cookies,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosesCodes);

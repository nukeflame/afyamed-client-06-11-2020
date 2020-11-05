import React, { Component } from "react";
import {
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Card,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import { connect } from "react-redux";
import { setCurrentPatient } from "../../redux/actions/patientActions";
import ReactTable from "react-table";
import classNames from "classnames";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      results: [],
      selected: null,
      selectedRows: [],
      displayCloseBtn: true,
    };
  }

  updateSearch = (e) => {
    const { value } = e.target;
    const { search } = this.state;
    const { patients } = this.props;

    this.setState(
      {
        search: value.substr(0, 60),
      },
      () => {
        if (search && search.length > 0) {
          this.setState({
            results: patients,
          });
        }
      }
    );
  };

  updateKeyDownSearch = (e) => {
    const { value } = e.target;
    if (value.length) {
      this.setState({ displayCloseBtn: false });
    } else {
      this.setState({ results: [], displayCloseBtn: true });
    }
  };

  handleSearchClear = (e) => {
    e.preventDefault();
    this.setState({ search: "" });
  };

  handleOk = (e) => {
    e.preventDefault();
  };

  render() {
    const { searchMod, toggleSearch } = this.props;
    const { search, results, displayCloseBtn } = this.state;

    const patientCol = [
      {
        Header: "Patient",
        accessor: "fullname",
        headerClassName: "text-left",
        className: "text-left bold f-s-14",
        minWidth: 150,
      },
      {
        Header: "Age",
        accessor: "age",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 50,
      },
      {
        Header: "ID No.",
        accessor: "idNo",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 70,
      },
      {
        Header: "Address",
        accessor: "address",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 150,
      },
      {
        Header: "Patient No.",
        accessor: "patientNo",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 70,
      },
      {
        Header: "Entry Date",
        accessor: "entryDate",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 60,
      },
      // {
      //   Header: "Medic",
      //   accessor: "medic",
      //   headerClassName: "text-left",
      //   className: "text-left"
      // }
    ];

    const filteredList = results.filter((i) => {
      const searchOption = this.state.search.toLowerCase();
      return i.surname.toLowerCase().includes(searchOption.toLowerCase());

      // return i.surname.toLowerCase().indexOf(searchOption) !== -1;
    });

    return (
      <Modal
        isOpen={searchMod}
        toggle={toggleSearch}
        backdrop="static"
        className={"modal-xl " + this.props.className}
      >
        <ModalHeader>
          <span className="modal-title f-s-14">
            <i className="fa fa-search" /> Search Patient
          </span>
          <span>
            <Button
              color="link"
              className="modal-close-x"
              type="button"
              onClick={(e) => toggleSearch(e)}
            >
              <i className="fa fa-times text-white" />
            </Button>
          </span>
        </ModalHeader>
        <ModalBody className="bg1">
          <Row>
            <Col sm="6">
              <FormGroup>
                <div className="d-flex-align">
                  <Input
                    bsSize="sm"
                    className="form-control-xs f-s-13"
                    placeholder="Type your search here"
                    name="search"
                    value={search}
                    onChange={(e) => this.updateSearch(e)}
                    onKeyDown={(e) => this.updateKeyDownSearch(e)}
                    autoComplete="off"
                    autoFocus="on"
                  />

                  <Button
                    size="sm"
                    type="button"
                    color="primary"
                    outline
                    className={
                      "btn-square ml-2 animated fadeIn" +
                      classNames({ hidden: displayCloseBtn })
                    }
                    style={{ height: "28px" }}
                    onClick={this.handleSearchClear}
                  >
                    <i className="fa fa-close"></i>
                  </Button>
                </div>
              </FormGroup>
            </Col>
          </Row>
          <div className="mt-3">
            <Row>
              <Col sm="12">
                <Card className="box">
                  <ReactTable
                    className="-striped"
                    data={filteredList}
                    columns={patientCol}
                    showPagination={false}
                    showPaginationBottom={false}
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
                            this.props.setCurrentPatient(rowInfo.original);
                            this.props.toggleSearch();
                            this.props.history.push("/records/patientChart");
                          },

                          onBlur: (e) => {
                            e.preventDefault();
                            console.log("blur");

                            // this.props.history.push("/records/patientChart");

                            // this.setState({ noteReview });
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
                </Card>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Row>
            <Col sm="12">
              <div>
                <Button
                  color="info"
                  className="btn-square mr-1 w-95p"
                  onClick={this.handleOk}
                >
                  Ok
                </Button>
                <Button
                  color="secondary"
                  className="btn-square w-95p"
                  onClick={(e) => toggleSearch(e)}
                >
                  Cancel
                </Button>
              </div>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  patients: state.patients.data,
});

const mapDispatchToProps = {
  setCurrentPatient,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

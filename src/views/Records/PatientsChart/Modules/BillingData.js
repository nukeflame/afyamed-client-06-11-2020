import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  TabContent,
  TabPane,
} from "reactstrap";
import classNames from "classnames";
import ReactTable from "react-table";
import { connect } from "react-redux";

class BillingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topActiveTab: "1",
    };
  }

  toggleTopNav = (tab) => {
    const { topActiveTab } = this.state;

    if (topActiveTab !== tab) {
      this.setState({
        topActiveTab: tab,
      });
    }
  };

  linkToTrans = (e) => {
    e.preventDefault();
    this.props.history.push("/billing/patient");
  };

  render() {
    const { topActiveTab } = this.state;
    const data = [
      {
        date: "23-07-1998",
        item: "Consultation",
        qty: "300",
      },
    ];
    const columns = [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Item",
        accessor: "item",
      },
      {
        Header: "Qty",
        accessor: "qty",
      },
      {
        Header: "Bill Qty",
        accessor: "billQty",
      },
      {
        Header: "Deliv. Qty",
        accessor: "delivQty",
      },
      {
        Header: "Stock",
        accessor: "stock",
      },
      {
        Header: "Cost",
        accessor: "cost",
      },
      {
        Header: "Incl. Taxes",
        accessor: "inclTaxes",
      },
    ];

    return (
      <div className="animated fadeIn consultation-wrapper">
        <Row>
          <Col sm="3">
            <div className="d-flex-col">
              <div className="d-flex-align">
                <h5 className="mb-0">
                  <span className="f-s-12">Ksh</span> 0.00
                </h5>
                <span className="f-s-13 pl-2 text-muted">Balance</span>
              </div>
              <div className="d-flex-align mt-3">
                <h5 className="mb-0">
                  <span className="f-s-12">Ksh</span> 5,000,000,000
                </h5>
                <span className="f-s-13 pl-2 text-muted">Debit</span>
              </div>
              <div className="d-flex-align">
                <h5 className="mb-0">
                  <span className="f-s-12">Ksh</span> 5,000,000,000
                </h5>
                <span className="f-s-13 pl-2 text-muted">Credit</span>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <Button color="link" size="sm" onClick={this.linkToTrans}>
              <i className="icon-plus" /> Add Transaction
            </Button>
            <Button color="link" size="sm">
              <i className="icon-share-alt" /> Summary Report
            </Button>
            <div>
              <Button color="link" size="sm">
                <i className="fa fa-arrow-right" /> More...
              </Button>
            </div>
          </Col>
          <Col sm="3">
            <Button color="link" size="sm">
              Edit Billing Notes
            </Button>
          </Col>
        </Row>
        <div className="mt-4">
          <Row>
            <Col sm="12">
              <div className="navitem-header">
                <Nav tabs className="header-pils">
                  <NavItem>
                    <NavLink
                      className={
                        "pl-0 " +
                        classNames({
                          active: topActiveTab === "1",
                        })
                      }
                      onClick={() => {
                        this.toggleTopNav("1");
                      }}
                    >
                      Billable Items
                    </NavLink>
                  </NavItem>
                  <NavItem />
                  <NavItem>
                    <NavLink
                      className={classNames({
                        active: topActiveTab === "2",
                      })}
                      onClick={() => {
                        this.toggleTopNav("2");
                      }}
                    >
                      Transactions
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames({
                        active: topActiveTab === "3",
                      })}
                      onClick={() => {
                        this.toggleTopNav("3");
                      }}
                    >
                      Prepaid
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames({
                        active: topActiveTab === "4",
                      })}
                      onClick={() => {
                        this.toggleTopNav("4");
                      }}
                    >
                      Balance Sheet
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>
          <div className="body-pills pt-2">
            <TabContent activeTab={topActiveTab} className="content-pills">
              <TabPane tabId="1" className="animated fadeIn pl-0">
                <Row>
                  <Col sm="12">
                    <Card className="box">
                      <CardHeader className="box-header">
                        <div>
                          <ul className="header-left">
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Build Invoice
                                </span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Build Receipt
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <Row>
                        <Col sm="12">
                          <ReactTable
                            className="-highlight text-left"
                            data={data}
                            columns={columns}
                            // getTrProps={(state, rowInfo) =>
                            //   this.handleRowClick(state, rowInfo)
                            // }
                          />
                        </Col>
                      </Row>
                      {/* <CardFooter className="p-5 bg-warn">
                        <span>
                          Check the lines you want to bill. The Quantity and
                          Cost fields are editable
                        </span>
                        <span className="float-right">
                          <a href="/" color="link">
                            Hide
                          </a>
                        </span>
                      </CardFooter> */}
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2" className="animated fadeIn">
                <Row>
                  <Col sm="12">
                    <Card className="box">
                      <CardHeader className="box-header">
                        <div>
                          <ul className="header-left">
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-plus c-primary pr-1" />
                                <span className="mini-title">
                                  Add Consultation
                                </span>
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-search  pr-1" />
                                <span>Search</span>
                              </button>
                            </li>
                          </ul>
                          <ul className="header-right">
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-print  pr-1" />
                              </button>
                            </li>
                            <li>
                              <button className="btn-box">
                                <i className="fa fa-settings" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </CardHeader>
                      <div className="container mt-2 mb-2">
                        <div className="row">
                          <div className="col-md-12">
                            <ul className="timeline">d</ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3" className="animated fadeIn">
                2
              </TabPane>
              <TabPane tabId="4" className="animated fadeIn">
                3{" "}
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BillingData);

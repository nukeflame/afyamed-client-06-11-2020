import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane,
  FormGroup,
  Input,
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import ReactTable from "react-table";

class StockItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      itemMod: false,
      showSearchBar: false
    };
  }

  toggleActiveTab = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  handleSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar
    });
  };

  toggleItemModal = () => {
    const { itemMod } = this.state;

    this.setState({
      itemMod: !itemMod
    });
  };

  render() {
    const { activeTab, showSearchBar, itemMod } = this.state;

    const data = [
      {
        name: "Consultation",
        code: "24363",
        totalStock: "710",
        measureUnit: "Item",
        salePrice: "12,000",
        itemTax: "20"
      }
    ];
    const columns = [
      {
        Header: "Name",
        accessor: "name",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 200
      },
      {
        Header: "Code",
        accessor: "code",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 60
      },
      {
        Header: "Total Stock",
        accessor: "totalStock",
        minWidth: 70,
        className: "text-right"
      },
      {
        Header: "MU",
        accessor: "measureUnit",
        headerClassName: "text-left",
        className: "text-left",
        minWidth: 70
      },
      {
        Header: "Sale Price",
        accessor: "salePrice",
        minWidth: 70,
        headerClassName: "text-right",
        className: "text-right"
      },
      {
        Header: "Item Tax",
        headerClassName: "text-right",
        className: "text-right",
        accessor: "itemTax",
        minWidth: 60
      }
    ];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="2">
            <ListGroup id="list-tab" role="tablist" className="mini-side">
              <div className="mini-side-group">
                <h5 className="h-title">Items</h5>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(0)}
                  action
                  active={activeTab === 0}
                >
                  <div className="pl-3">All</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(1)}
                  action
                  active={activeTab === 1}
                >
                  <div className="pl-3">Treatments</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(2)}
                  action
                  active={activeTab === 2}
                >
                  <div className="pl-3">Drugs</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(3)}
                  action
                  active={activeTab === 3}
                >
                  <div className="pl-3">Surgery Related</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(4)}
                  action
                  active={activeTab === 4}
                >
                  <div className="pl-3">Laboratory</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(5)}
                  action
                  active={activeTab === 5}
                >
                  <div className="pl-3">Imaging</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(6)}
                  action
                  active={activeTab === 6}
                >
                  <div className="pl-3">Inpatient Accomodation</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(7)}
                  action
                  active={activeTab === 7}
                >
                  <div className="pl-3">Materials</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(6)}
                  action
                  active={activeTab === 6}
                >
                  <div className="pl-3 ">Without Medical Category</div>
                </ListGroupItem>
              </div>
              <div className="mini-side-group">
                <h5 className="h-title">Settings</h5>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(8)}
                  action
                  active={activeTab === 8}
                >
                  <div className="pl-3">Measurement Units</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(9)}
                  action
                  active={activeTab === 9}
                >
                  <div className="pl-3">Item Categories</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(10)}
                  action
                  active={activeTab === 10}
                >
                  <div className="pl-3">Inventory Removals</div>
                </ListGroupItem>
              </div>
              <div className="mini-side-group">
                <h5 className="h-title">Prices &amp; Stocks</h5>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(11)}
                  action
                  active={activeTab === 11}
                >
                  <div className="pl-3">Item Prices & Stocks</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(12)}
                  action
                  active={activeTab === 12}
                >
                  <div className="pl-3">Location Item List</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(13)}
                  action
                  active={activeTab === 13}
                >
                  <div className="pl-3">Secondary Price Lists</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(14)}
                  action
                  active={activeTab === 14}
                >
                  <div className="pl-3">Minimum Stocks</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(15)}
                  action
                  active={activeTab === 15}
                >
                  <div className="pl-3">Reconcile Stocks</div>
                </ListGroupItem>
              </div>
              <div className="mini-side-group">
                <h5 className="h-title">Reports</h5>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(15)}
                  action
                  active={activeTab === 15}
                >
                  <div className="pl-3">Item Stocks</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(15)}
                  action
                  active={activeTab === 15}
                >
                  <div className="pl-3">Low Stocks</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(15)}
                  action
                  active={activeTab === 15}
                >
                  <div className="pl-3">Expire Items</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(15)}
                  action
                  active={activeTab === 15}
                >
                  <div className="pl-3">Location Prices</div>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => this.toggleActiveTab(15)}
                  action
                  active={activeTab === 15}
                >
                  <div className="pl-3">Suggested Sale Prices</div>
                </ListGroupItem>
              </div>
            </ListGroup>
          </Col>
          <Col sm="10">
            <TabContent className="tab-box" activeTab={activeTab}>
              <TabPane tabId={0} className="animated fadeIn">
                <Row>
                  <Col sm="12">
                    <Card className="box">
                      <CardHeader className="box-header">
                        <Row>
                          <Col sm="10">
                            <ul className="header-left">
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.toggleItemModal}
                                >
                                  <i className="fa fa-plus c-primary pr-1" />
                                  <span className="mini-title">Add Item</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <span>Edit</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <span>Delete</span>
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn-box"
                                  onClick={this.handleSearchBar}
                                >
                                  <i className="fa fa-search  pr-1" />
                                  <span>Search</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-database  pr-1" />
                                  <span>Import Items</span>
                                </button>
                              </li>
                              <li>
                                <button className="btn-box">
                                  <i className="fa fa-barcode  pr-1" />
                                  <span>Print BarCode</span>
                                </button>
                              </li>
                            </ul>
                          </Col>
                          <Col sm="2">
                            <ul className="header-right">
                              <li>
                                <button className="btn-box">
                                  <i className="icon-settings" />
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
                                  <Label className="-body-label">
                                    Search for:
                                  </Label>
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
                                  <Button
                                    size="sm"
                                    className="btn-default btn-square"
                                  >
                                    Clear
                                  </Button>
                                </Col>
                              </FormGroup>
                              <div></div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <ReactTable
                          data={data}
                          columns={columns}
                          className="-highlight"
                          defaultPageSize={24}
                          pageSizeOptions={[24, 30, 40, 50]}
                        />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

            {/* Item modal */}
            <Modal
              isOpen={itemMod}
              toggle={this.toggleItemModal}
              backdrop="static"
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader>
                <span className="modal-title f-s-14">
                  <i className="fas fa-home pr-1" />
                  Item Editor
                </span>
                <span>
                  <Button
                    color="link"
                    className="modal-close-x"
                    type="button"
                    onClick={this.toggleItemModal}
                  >
                    <i className="fa fa-times text-white" />
                  </Button>
                </span>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="10">
                    <FormGroup row className="mt-3">
                      <Col sm="3">
                        <Label>Name: </Label>
                      </Col>
                      <Col sm="9">
                        <Input className="form-control-xs" />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3">
                        <Label>Description: </Label>
                      </Col>
                      <Col sm="9">
                        <Input
                          type="textarea"
                          style={{ minHeight: "78px" }}
                          className="form-control-xs"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3">
                        <Label>Status: </Label>
                      </Col>
                      <Col sm="9">
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Active
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3">
                        <Label>Min Profit % </Label>
                      </Col>
                      <Col sm="4">
                        <Input className="form-control-xs" />
                      </Col>
                      <span>%</span>
                    </FormGroup>
                    <FormGroup row className="mt-2">
                      <Col sm="3"></Col>
                      <Col sm="9">
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Billing Location
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Pharmacy
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Lab Location
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            name="sex"
                            value="Male"
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="male"
                          >
                            Is Default Imaging Location
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <div className="box-tools">
                  <Button
                    size="sm"
                    color="default"
                    className="mr-2 btn-square"
                    onClick={this.toggleItemModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    color="primary"
                    className="btn-square"
                    type="submit"
                  >
                    <i className="fa fa-save pr-1"></i> Save &amp; Close
                  </Button>
                </div>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StockItems;

import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import ReactTable from "react-table";
import classNames from "classnames";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      modal: false,
      avatar: null,
      date: new Date(),
      activeContacts: "1"
    };
  }

  toggle = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  uploadPhoto = e => {
    e.preventDefault();
    this.refAvatar.click();
  };

  handlePhoto = e => {
    let reader,
      file = e.target.files[0];

    if (file.length === 0) {
      return;
    }

    reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.setState({
        avatar: e.target.result
      });
    };
  };

  onChange = date => {
    console.log(date);
    this.setState({ date });
  };
  render() {
    const { activeContacts } = this.state;
    const data = [
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      },
      {
        displayName: "Carwyn Fachtna",
        address: "123 - Chaani, Changamwe, Mombasa",
        phone: "0700412127",
        mobilePhone: "+254700412127",
        email: "1kenpeters1@gmail.com"
      }
    ];

    const columns = [
      {
        Header: "Display Name",
        accessor: "displayName"
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "Phone",
        accessor: "phone"
      },
      {
        Header: "Mobile Phone",
        accessor: "mobilePhone"
      },
      {
        Header: "Email",
        accessor: "email"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <div className="navitem-header">
              <Nav tabs className="header-pils">
                <NavItem>
                  <NavLink
                    className={classNames({
                      active: activeContacts === "1"
                    })}
                  >
                    Tasks
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>

        <div className="body-pills">
          <TabContent
            activeTab={activeContacts}
            className="animated fadeIn content-pills"
          >
            <TabPane tabId="1" className="animated fadeIn">
              <Row>
                <Col sm="12">
                  <Card className="box">
                    <CardHeader className="box-header">
                      <div>
                        <ul className="header-left">
                          <li>
                            <button
                              className="btn-box"
                              onClick={this.toggleModal}
                            >
                              <i className="fa fa-plus c-primary pr-1" />
                              <span className="mini-title">Add Contact</span>
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
                            <button className="btn-box">
                              <i className="fa fa-search  pr-1" />
                              <span>Search</span>
                            </button>
                          </li>
                        </ul>
                        <ul className="header-right">
                          <li>Count: 3</li>
                          <li>
                            <select className="form-control header-control p-t-3">
                              <option>All</option>
                              <option>Inpatients</option>
                              <option>Outpatients</option>
                            </select>
                          </li>
                          <li>
                            <select className="form-control header-control p-t-3">
                              <option>All</option>
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </CardHeader>
                    <div>
                      <ReactTable
                        className="-highlight"
                        data={data}
                        columns={columns}
                        defaultPageSize={15}
                        pageSizeOptions={[15, 20, 25, 30, 40, 50, 100]}
                        getTdProps={(state, rowInfo, column, instance) => {
                          return {
                            onClick: e => {
                              console.log(rowInfo.row);
                            }
                          };
                        }}
                      />
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Tasks;

import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Progress,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AppSwitch } from "@coreui/react";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultAside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1"
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <i className="icon-list" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <i className="icon-user" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              <i className="icon-speech" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              <i className="icon-settings" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={"div"}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Today
              </ListGroupItem>
              <ListGroupItem
                action
                tag="a"
                href="#"
                className="list-group-item-accent-warning list-group-item-divider"
              >
                <div className="avatar float-right">
                  <img
                    className="img-avatar"
                    src="assets/img/avatars/7.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  Meeting with <strong>Lucas</strong>{" "}
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp; 1 - 3pm
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin" /> Palo Alto, CA
                </small>
              </ListGroupItem>
              <ListGroupItem
                action
                tag="a"
                href="#"
                className="list-group-item-accent-info list-group-item-divider"
              >
                <div className="avatar float-right">
                  <img
                    className="img-avatar"
                    src="assets/img/avatars/4.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  Skype with <strong>Megan</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp; 4 - 5pm
                </small>
                <small className="text-muted">
                  <i className="icon-social-skype" /> On-line
                </small>
              </ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Tomorrow
              </ListGroupItem>
              <ListGroupItem
                action
                tag="a"
                href="#"
                className="list-group-item-accent-danger list-group-item-divider"
              >
                <div>
                  New UI Project - <strong>deadline</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp; 10 - 11pm
                </small>
                <small className="text-muted">
                  <i className="icon-home" />
                  &nbsp; creativeLabs HQ
                </small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/2.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/3.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/4.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/5.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/6.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                action
                tag="a"
                href="#"
                className="list-group-item-accent-success list-group-item-divider"
              >
                <div>
                  <strong>#10 Startups.Garden</strong> Meetup
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp; 1 - 3pm
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin" />
                  &nbsp; Palo Alto, CA
                </small>
              </ListGroupItem>
              <ListGroupItem
                action
                tag="a"
                href="#"
                className="list-group-item-accent-primary list-group-item-divider"
              >
                <div>
                  <strong>Team meeting</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp; 4 - 6pm
                </small>
                <small className="text-muted">
                  <i className="icon-home" />
                  &nbsp; creativeLabs HQ
                </small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/2.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/3.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/4.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/5.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/6.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/7.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/8.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="content-full" id="profile_tab">
          <div className="display-table">
											<div className="table-row">
												<div className="table-body">
													<div className="table-content">
														<div className="chat-profile-img">
															<div className="edit-profile-img">
																<img src={"http://localhost:3000/assets/img/avatars/03.jpg"} alt=""/>
																<span className="change-img">Change Image</span>
															</div>
															<h3 className="user-name m-t-10 mb-0">John Doe</h3>
															<small className="text-muted">Web Designer</small>
															<a href="/df" className="btn btn-primary edit-btn"><i className="fa fa-pencil"></i></a>
														</div>
														<div className="chat-profile-info">
															<ul className="user-det-list">
																<li>
																	<span>Username:</span>
																	<span className="float-right text-muted">johndoe</span>
																</li>
																<li>
																	<span>DOB:</span>
																	<span className="float-right text-muted">24 July</span>
																</li>
																<li>
																	<span>Email:</span>
																	<span className="float-right text-muted">johndoe@example.com</span>
																</li>
																<li>
																	<span>Phone:</span>
																	<span className="float-right text-muted">9876543210</span>
																</li>
															</ul>
														</div>
														<div className="transfer-files hidden">
															<ul className="nav nav-tabs nav-tabs-solid nav-justified mb-0">
																<li className="nav-item"><a className="nav-link active" href="https://dreamguys.co.in/smarthr/maroon/chat.html#all_files" data-toggle="tab">All Files</a></li>
																<li className="nav-item"><a className="nav-link" href="https://dreamguys.co.in/smarthr/maroon/chat.html#my_files" data-toggle="tab">My Files</a></li>
															</ul>
															<div className="tab-content">
																<div className="tab-pane show active" id="all_files">
																	<ul className="files-list">
																		<li>
																			<div className="files-cont">
																				<div className="file-type">
																					<span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
																				</div>
																				<div className="files-info">
																					<span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
																					<span className="file-author"><a href="https://dreamguys.co.in/smarthr/maroon/chat.html#">Loren Gatlin</a></span> <span className="file-date">May 31st at 6:53 PM</span>
																				</div>
																				<ul className="files-action">
																					<li className="dropdown dropdown-action">
																						<a href="https://dreamguys.co.in/smarthr/maroon/chat.html" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
																						<div className="dropdown-menu">
																							<a className="dropdown-item" href="/rd">Download</a>
																							<a className="dropdown-item" href="https://dreamguys.co.in/smarthr/maroon/chat.html#" data-toggle="modal" data-target="#share_files">Share</a>
																						</div>
																					</li>
																				</ul>
																			</div>
																		</li>
																	</ul>
																</div>
																<div className="tab-pane" id="my_files">
																	<ul className="files-list">
																		<li>
																			<div className="files-cont">
																				<div className="file-type">
																					<span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
																				</div>
																				<div className="files-info">
																					<span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
																					<span className="file-author"><a href="https://dreamguys.co.in/smarthr/maroon/chat.html#">John Doe</a></span> <span className="file-date">May 31st at 6:53 PM</span>
																				</div>
																				<ul className="files-action">
																					<li className="dropdown dropdown-action">
																						<a href="https://dreamguys.co.in/smarthr/maroon/chat.html" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
																						<div className="dropdown-menu">
																							<a className="dropdown-item" href="/rd">Download</a>
																							<a className="dropdown-item" href="https://dreamguys.co.in/smarthr/maroon/chat.html#" data-toggle="modal" data-target="#share_files">Share</a>
																						</div>
																					</li>
																				</ul>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
          </TabPane>
          <TabPane tabId="4" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Option 1</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 2</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 3</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                  disabled
                />
                <div>
                  <small className="text-muted">Option disabled.</small>
                </div>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 4</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
            </div>

            <hr />
            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>Memory Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 2 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;

import React, { Component } from "react";
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap";
import $ from "jquery";

class Chatsection extends Component {
  render() {
    return <div className="animated fadeIn">
       <Col lg="3" className="message-view chat-profile-view chat-sidebar hidden">
            <div className="chat-window video-window">
              <div className="fixed-header">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#calls_tab"
                      data-toggle="tab"
                    >
                      Calls
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#profile_tab"
                      data-toggle="tab"
                    >
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content chat-contents">
									<div className="content-full tab-pane" id="calls_tab">
										<div className="chat-wrap-inner">
											<div className="chat-box">
												<div className="chats">
													<div className="chat chat-left">
														<div className="chat-avatar">
															<a href="https://dreamguys.co.in/smarthr/maroon/profile.html" className="avatar">
																<img alt="" src={"http://localhost:3000/assets/img/avatars/03.jpg"}/>
															</a>
														</div>
														<div className="chat-body">
															<div className="chat-bubble">
																<div className="chat-content">
																	<span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
																	<div className="call-details">
																		<i className="material-icons">phone_missed</i>
																		<div className="call-info">
																			<div className="call-user-details">
																				<span className="call-description">Jeffrey Warden missed the call</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="chat chat-left">
														<div className="chat-avatar">
															<a href="https://dreamguys.co.in/smarthr/maroon/profile.html" className="avatar">
																<img alt="" src={"http://localhost:3000/assets/img/avatars/03.jpg"}/>
															</a>
														</div>
														<div className="chat-body">
															<div className="chat-bubble">
																<div className="chat-content">
																	<span className="task-chat-user">John Doe</span> <span className="chat-time">8:35 am</span>
																	<div className="call-details">
																		<i className="material-icons">call_end</i>
																		<div className="call-info">
																			<div className="call-user-details"><span className="call-description">This call has ended</span></div>
																			<div className="call-timing">Duration: <strong>5 min 57 sec</strong></div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="chat-line">
														<span className="chat-date">January 29th, 2019</span>
													</div>
													<div className="chat chat-left">
														<div className="chat-avatar">
															<a href="https://dreamguys.co.in/smarthr/maroon/profile.html" className="avatar">
																<img alt="" src="./Chat - HRMS admin template_files/avatar-05.jpg"/>
															</a>
														</div>
														<div className="chat-body">
															<div className="chat-bubble">
																<div className="chat-content">
																	<span className="task-chat-user">Richard Miles</span> <span className="chat-time">8:35 am</span>
																	<div className="call-details">
																		<i className="material-icons">phone_missed</i>
																		<div className="call-info">
																			<div className="call-user-details">
																				<span className="call-description">You missed the call</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="chat chat-left">
														<div className="chat-avatar">
															<a href="https://dreamguys.co.in/smarthr/maroon/profile.html" className="avatar">
																<img alt="" src={"http://localhost:3000/assets/img/avatars/03.jpg"}/>
															</a>
														</div>
														<div className="chat-body">
															<div className="chat-bubble">
																<div className="chat-content">
																	<span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
																	<div className="call-details">
																		<i className="material-icons">ring_volume</i>
																		<div className="call-info">
																			<div className="call-user-details">
																				<a href="https://dreamguys.co.in/smarthr/maroon/chat.html#" className="call-description call-description--linked" data-qa="call_attachment_link">Calling John Smith ...</a>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="content-full tab-pane show active" id="profile_tab">
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
															<a href="javascript:void(0);" className="btn btn-primary edit-btn"><i className="fa fa-pencil"></i></a>
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
														<div className="transfer-files">
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
																							<a className="dropdown-item" href="javascript:void(0)">Download</a>
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
																							<a className="dropdown-item" href="javascript:void(0)">Download</a>
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
									</div>
								</div>
            </div>
          </Col>
        
                      
    </div>;
  }
}

export default Chatsection;

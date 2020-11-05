import React, { Component } from "react";
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap";
import $ from "jquery";

class Chatsection extends Component {
  render() {
    return <div className="animated fadeIn">
       <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Hello. What can I do for you?</p>
                                <span className="chat-time">8:30 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* line */}
                        <div className="chat-line">
                          <span className="chat-date">October 8th, 2018</span>
                        </div>
                        {/* line */}
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a
                              href="https://dreamguys.co.in/smarthr/maroon/profile.html"
                              className="avatar"
                            >
                              <img
                                alt=""
                                src={
                                  "http://localhost:3000/assets/img/avatars/1.jpg"
                                }
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>I'm just looking around.</p>
                                <p>
                                  Will you tell me something about yourself?{" "}
                                </p>
                                <span className="chat-time">8:35 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Are you there? That time!</p>
                                <span className="chat-time">8:40 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Where?</p>
                                <span className="chat-time">8:35 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>
                                  OK, my name is Limingqiang. I like singing,
                                  playing basketballand so on.
                                </p>
                                <span className="chat-time">8:42 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 3 */}
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a
                              href="https://dreamguys.co.in/smarthr/maroon/profile.html"
                              className="avatar"
                            >
                              <img
                                alt=""
                                src={
                                  "http://localhost:3000/assets/img/avatars/1.jpg"
                                }
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>You wait for notice.</p>
                                <span className="chat-time">8:30 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Consectetuorem ipsum dolor sit?</p>
                                <span className="chat-time">8:50 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>OK?</p>
                                <span className="chat-time">8:55 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content img-content">
                                <div className="chat-img-group clearfix">
                                  <p>Uploaded 3 Images</p>
                                  <a className="chat-img-attach" href="#">
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src="http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        placeholder.jpg
                                      </div>
                                      <div className="chat-file-desc">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src="http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src="http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        placeholder.jpg
                                      </div>
                                      <div className="chat-file-desc">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="edit-msg">
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="del-msg">
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 4 */}
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>OK!</p>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 5 */}
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a
                              href="https://dreamguys.co.in/smarthr/maroon/profile.html"
                              className="avatar"
                            >
                              <img
                                alt=""
                                src={
                                  "http://localhost:3000/assets/img/avatars/1.jpg"
                                }
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Uploaded 3 files</p>
                                <ul className="attach-list">
                                  <li>
                                    <i className="fa fa-file" />{" "}
                                    <a href="https://dreamguys.co.in/smarthr/maroon/chat.html#">
                                      example.avi
                                    </a>
                                  </li>
                                  <li>
                                    <i className="fa fa-file" />{" "}
                                    <a href="https://dreamguys.co.in/smarthr/maroon/chat.html#">
                                      activity.psd
                                    </a>
                                  </li>
                                  <li>
                                    <i className="fa fa-file" />{" "}
                                    <a href="https://dreamguys.co.in/smarthr/maroon/chat.html#">
                                      example.psd
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Consectetuorem ipsum dolor sit?</p>
                                <span className="chat-time">8:50 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>OK?</p>
                                <span className="chat-time">8:55 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                    </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                    </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 6 */}
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content img-content">
                                <div className="chat-img-group clearfix">
                                  <p>Uploaded 6 Images</p>
                                  <a
                                    className="chat-img-attach"
                                    href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                  >
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src={
                                        "http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                      }
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        placeholder.jpg
                                      </div>
                                      <div className="chat-file-desc">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    className="chat-img-attach"
                                    href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                  >
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src={
                                        "http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                      }
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    className="chat-img-attach"
                                    href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                  >
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src={
                                        "http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                      }
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        placeholder.jpg
                                      </div>
                                      <div className="chat-file-desc">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    className="chat-img-attach"
                                    href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                  >
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src={
                                        "http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                      }
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        placeholder.jpg
                                      </div>
                                      <div className="chat-file-desc">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    className="chat-img-attach"
                                    href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                  >
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src={
                                        "http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                      }
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        placeholder.jpg
                                      </div>
                                      <div className="chat-file-desc">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    className="chat-img-attach"
                                    href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                  >
                                    <img
                                      width="182"
                                      height="137"
                                      alt=""
                                      src={
                                        "http://localhost:3000/assets/img/avatars/placeholder.jpg"
                                      }
                                    />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">
                                        placeholder.jpg
                                      </div>
                                      <div className="chat-file-desc">
                                        842 KB
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 7 */}
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a
                              href="https://dreamguys.co.in/smarthr/maroon/profile.html"
                              className="avatar"
                            >
                              <img
                                alt=""
                                src={
                                  "http://localhost:3000/assets/img/avatars/1.jpg"
                                }
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <ul className="attach-list">
                                  <li className="pdf-file">
                                    <i className="fa fa-file-pdf-o" />{" "}
                                    <a href="https://dreamguys.co.in/smarthr/maroon/chat.html#">
                                      Document_2016.pdf
                                    </a>
                                  </li>
                                </ul>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 8 */}
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <ul className="attach-list">
                                  <li className="pdf-file">
                                    <i className="fa fa-file-pdf-o" />{" "}
                                    <a href="https://dreamguys.co.in/smarthr/maroon/chat.html#">
                                      Document_2016.pdf
                                    </a>
                                  </li>
                                </ul>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="edit-msg"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dreamguys.co.in/smarthr/maroon/chat.html#"
                                      className="del-msg"
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 9 */}
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a
                              href="https://dreamguys.co.in/smarthr/maroon/profile.html"
                              className="avatar"
                            >
                              <img
                                alt=""
                                src={
                                  "http://localhost:3000/assets/img/avatars/1.jpg"
                                }
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Typing ...</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      
    </div>;
  }
}

export default Chatsection;

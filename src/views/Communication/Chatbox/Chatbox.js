import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import $ from "jquery";
import cpClose from "../../../assets/img/attach/close.svg";
import cpAttach from "../../../assets/img/attach/attach.svg";
import cpRecord from "../../../assets/img/attach/record.svg";
import cpDblcheck from "../../../assets/img/attach/msg-dblcheck-light.svg";

class Chatbox extends Component {
  componentWillMount() {
    this.initItems();
  }

  // componentWillUnmount() {
  //   this.destroyItems();
  // }

  initItems = () => {
    // $(".sidebar").addClass("bgs");
    // $(".aside-menu").addClass("aside-w");
    // $("body").addClass("aside-menu-lg-show");
    $(".breadcrumb, .app-footer").addClass("hidden");
  };

  // destroyItems = () => {
  //   $(".sidebar").removeClass("bgs");
  //   $(".aside-menu").removeClass("aside-w");
  //   $("body").removeClass("aside-menu-lg-show");
  //   $(".breadcrumb, .app-footer").removeClass("hidden");
  // };

  render() {
    return (
      <div className="animated fadeIn page-wrap">
        <Row className="chat-main-row">
          <Col sm="9" className="message-view task-view">
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="user-details mr-auto">
                    <div className="float-left user-img">
                      <a
                        className="avatar"
                        href="/profile.html"
                        title="Mike Litorus"
                      >
                        <img
                          src={"http://localhost:3000/assets/img/avatars/1.jpg"}
                          alt=""
                          className="rounded-circle"
                        />
                        <span className="status online" />
                      </a>
                    </div>
                    <div className="user-info float-left">
                      <a href="/profile.html" title="Mike Litorus">
                        <span className="pr-1">Mike Litorus</span>
                        <i className="typing-text">Typing...</i>
                      </a>
                      <span className="last-seen">
                        Last seen today at 7:50 AM
                      </span>
                    </div>
                  </div>
                  <div className="search-box">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                      />
                      <span className="input-group-append">
                        <button type="button" className="btn">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </div>
                  <ul className="nav custom-menu">
                    <li className="nav-item">
                      <a
                        className="nav-link task-chat profile-rightbar float-right"
                        id="task_chat"
                        href="/chat.html#task_window"
                      >
                        <i className="fa fa-user" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/voice-call.html" className="nav-link">
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/video-call.html" className="nav-link">
                        <i className="fa fa-video-camera" />
                      </a>
                    </li>
                    <li className="nav-item dropdown dropdown-action">
                      <a
                        aria-expanded="false"
                        data-toggle="dropdown"
                        className="nav-link dropdown-toggle"
                        href="/chat.html"
                      >
                        <i className="fa fa-cog" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="/" className="dropdown-item">
                          Delete Conversations
                        </a>
                        <a href="/" className="dropdown-item">
                          Settings
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-contents">
                <div className="chat-content-wrap">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="chats">
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Hello. What can I do for you?</p>
                                <span className="chat-time">
                                  8:30 am
                                  <span className="pl-1">
                                    <img src={cpDblcheck} alt="" />
                                  </span>
                                </span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li>
                                    <a
                                      href="/chat.html#"
                                      className="share-msg"
                                      title="Share"
                                    >
                                      <i className="fa fa-share-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/chat.html#" className="edit-msg">
                                      <i className="fa fa-pencil" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/chat.html#" className="del-msg">
                                      <i className="fa fa-trash-o" />
                                    </a>
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
              <div className="chat-footer" tabIndex={-1}>
                <div className="copyable-area">
                  <div className="cp1">
                    <div className="cp1-left">
                      <div tabIndex={-1} className="cp1-close">
                        <button className="cp-btn-close">
                          <span data-icon="x" className="">
                            <img src={cpClose} height="26" width="26" alt="" />
                          </span>
                        </button>
                      </div>
                      <div tabIndex={-1} className="cp1-smiley">
                        <button className="cp-btn-close">
                          <span data-icon="smiley" className="">
                            <img src={cpAttach} height="26" width="26" alt="" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div tabIndex={-1} className="cp2">
                    <div className="cp2-msg-bar" tabIndex={-1}>
                      <div
                        className="cp2-msg-inner"
                        style={{ visibility: "visible" }}
                      >
                        Type a message
                      </div>
                      <div
                        className="selectable-text"
                        contentEditable={true}
                        spellCheck={true}
                      />
                    </div>
                  </div>
                  <div className="cp3">
                    <div className="cp3-left">
                      <span>
                        <button className="cp-btn-record">
                          <span data-icon="ptt" className="">
                            <img src={cpRecord} height="26" width="26" alt="" />
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className="message-bar">
                  <div className="message-inner">
                    <a
                      className="link attach-icon"
                      href="#"
                      data-toggle="modal"
                      data-target="#drag_files"
                    >
                      <img src={attachment} alt="" />
                    </a>
                    <div className="message-area">
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          placeholder="Type message..."
                        />
                        <span className="input-group-append">
                          <button className="btn btn-custom" type="button">
                            <i className="fa fa-send" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Col>
          <Col sm="3">
            <aside className="right-sidebar">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a href="/" className="active nav-link">
                    <i className="icon-list"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="icon-user"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="icon-speech"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="icon-settings"></i>
                  </a>
                </li>
              </ul>
            </aside>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chatbox;

import React, { Component } from "react";
import imageUrl from "../../../config/urls/imageUrl";
import defAvatar from "../../../assets/avatar/defAvatar.gif";

class NotificationList extends Component {
  getNotfType = (type) => {
    if (type === "App\\Notifications\\PatientNotification") {
      return "Patient Queued";
    }

    return null;
  };

  getNotfMessage = (notification) => {
    const data = notification.data;
    if (notification.type === "App\\Notifications\\PatientNotification") {
      const queue = data.queue;
      return (
        <small>
          '<b>{queue.patientName}</b>' has been queued to your room by medic: '
          <b>{queue.queuedBy.username}</b>' from <b>{queue.fromRoom.depName}</b>
        </small>
      );
    }
    return null;
  };

  getNotfAvatar = (notification) => {
    const data = notification.data;
    if (notification.type === "App\\Notifications\\PatientNotification") {
      const queue = data.queue;
      if (queue.patient.avatar !== null) {
        return (
          <img
            alt=""
            src={imageUrl + queue.patient.avatar}
            width="40"
            heigh="40"
          />
        );
      } else {
        return <img alt="" src={defAvatar} width="40" heigh="40" />;
      }
    }
    return null;
  };

  render() {
    const { notification } = this.props;

    return (
      <li className="notification-message">
        {/* eslint-disable-next-line */}
        <a href="#">
          <div className="media">
            <span className="avatar">{this.getNotfAvatar(notification)}</span>
            <div className="media-body">
              <small className="noti-title">
                <strong>{this.getNotfType(notification.type)}</strong>
              </small>
              <br />
              <span className="noti-details">
                {this.getNotfMessage(notification)}
              </span>
              <br />
              <span className="noti-time">
                <span className="notification-time">4 mins ago</span>
              </span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

export default NotificationList;

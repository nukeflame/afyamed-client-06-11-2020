/**
|--------------------------------------------------
| *
| Server index file
| version 1.0.0
| (Laravel Echo and Socket.IO)
|--------------------------------------------------
*/

import { isLoggedIn } from "../config/auth";
import Echo from "laravel-echo";
import { SOCKET_SERVER } from "../config/urls/env";
import { getToken } from '../config/auth'

window.io = require("socket.io-client");

export default () => {
  // Have this in case you stop running your laravel echo server
  if (typeof io !== "undefined") {
    if (isLoggedIn()) {
      const options = {
        broadcaster: "socket.io",
        host: SOCKET_SERVER,
        auth: {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            Accept: "application/json"
          }
        },
        encrypted: true
      };

      window.Echo = new Echo(options);
    }
  }
};

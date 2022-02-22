import io from "socket.io-client";

// Deduced from events triggered by socket.io client
const CLIENT_CONNECTION_STATUS_MAP = {
  CONNECTING: "connecting",
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
};

class WebSocketClient {
  constructor(options = {}) {
    this.socketURL = "http://localhost:8080/";
    this.tokenAPI = null;
    this.socketTokenKey = null;
    this.socketURLKey = null;
    this.socketOptions = null;
    this.apiTokenKey = null;

    this.token = null;
    this.socket = null;
    this.commandBuffer = [];

    this.instantiated = false;
    this.disconnected = null; // This is `true` only when `disconnect` method is invoked explicitly
    this.connectionStatus = null;
    this.enableDebug = options.enableDebug || false;

    this.apiHeaders = null;

    this.connectToSocket = () => {
      this.socket = io.connect(this.socketURL, this.getSocketOptions());
      this.bindEventListeners();
      this.executeBufferedCommands();
    };

    this.reconnectToSocket = () => {
      this.socket.disconnect();
      this.socket.io.opts.query = `${this.socketTokenKey}=${this.token}`;
      this.socket.connect();
    };

    this.getSocketOptions = () => {
      return Object.assign({}, this.socketOptions || {}, {
        query: `${this.socketTokenKey}=${this.token}`,
      });
    };

    this.executeBufferedCommands = () => {
      while (this.commandBuffer.length) {
        let command = this.commandBuffer.shift();
        this[command.method](...command.arguments);
      }
    };

    this.bindEventListeners = () => {
      this.socket.on("connect", () => {
        this.log("connect");
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.CONNECTED;
      });

      this.socket.on("connect_error", (error) => {
        this.log("connect_error", error);
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.DISCONNECTED;
      });

      this.socket.on("reconnect", () => {
        this.log("reconnect");
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.CONNECTED;
      });

      this.socket.on("reconnecting", (number) => {
        this.log("reconnecting", number);
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.CONNECTING;
      });

      this.socket.on("reconnect_attempt", (number) => {
        this.log("reconnect_attempt", number);
      });

      this.socket.on("reconnect_error", (data) => {
        this.log("reconnect_error", data);
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.DISCONNECTED;
      });

      this.socket.on("reconnect_failed", () => {
        this.log("reconnect_failed");
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.DISCONNECTED;
      });

      this.socket.on("disconnect", () => {
        this.log("disconnect");
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.DISCONNECTED;
      });

      this.socket.on("error", (error) => {
        this.log("error", error);
        this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.DISCONNECTED;
        if (error.type == "UnauthorizedError") {
          this.connectToSocket();
        } else {
          this.reconnectToSocket();
        }
      });
    };

    this.log = (...args) => {
      if (this.enableDebug) console.log(...args);
    };
  }

  connect(options) {
    const {
      tokenAPI,
      apiHeaders,
      // socketURL = null,
      socketURLKey = null,
      socketTokenKey = "token",
      socketOptions = {},
      apiTokenKey = "token",
    } = options;

    if (!this.instantiated) {
      this.instantiated = true;
      this.tokenAPI = tokenAPI;
      this.apiHeaders = apiHeaders;
      // this.socketURL = socketURL;
      this.socketURLKey = socketURLKey;
      this.socketTokenKey = socketTokenKey;
      this.socketOptions = socketOptions;
      this.apiTokenKey = apiTokenKey;
      this.connectionStatus = CLIENT_CONNECTION_STATUS_MAP.CONNECTING;
      this.connectToSocket();
    }

    if (this.disconnected) this.connectToSocket();

    return this;
  }

  disconnect() {
    this.disconnected = true;
    if (this.socket) {
      this.socket.disconnect();
    }

    return this;
  }

  getConnectionStatus() {
    return this.connectionStatus || CLIENT_CONNECTION_STATUS_MAP.DISCONNECTED;
  }

  getSocketInstance() {
    return this.socket || null;
  }
}

/**
 * Public api methods
 * These would get stored in `commandBuffer` if there is no socket instance
 * and would be executed whenever socket gets instantiated.
 */
["send", "emit", "on", "off", "once"].forEach((method) => {
  WebSocketClient.prototype[method] = function () {
    if (this.socket) {
      this.socket[method](...arguments);
    } else {
      this.commandBuffer.push({ method, arguments });
    }

    return this;
  };
});

export default WebSocketClient;

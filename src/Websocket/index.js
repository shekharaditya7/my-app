import WebSocket from "./websocket";

const instances = {};

export default function getInstance(id = "default", options = {}) {
  if (!instances.hasOwnProperty(id)) instances[id] = new WebSocket(options);

  return instances[id];
}

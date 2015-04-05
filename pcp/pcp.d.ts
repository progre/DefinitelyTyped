// Type definitions for pcp
// Project: https://github.com/progre/pcp
// Definitions by: progre <http://www.prgrssv.net>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "pcp" {
    import events = require("events");
    import http = require("http");

    function createServer();
    interface Server extends events.EventEmitter {
        on(event: "connection", listener: (socket: PCPSocket) => void): events.EventEmitter;
        on(event: "request", listener: (req: http.IncomingMessage, res: http.ServerResponse, socket: PCPSocket) => void): events.EventEmitter;
        on(event: "listening", listener: () => void): events.EventEmitter;
        on(event: string, listener: Function): events.EventEmitter;
    }

    interface PCPSocket {
    }
}

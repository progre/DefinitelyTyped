// Type definitions for pcp
// Project: https://github.com/progre/pcp
// Definitions by: progre <http://www.prgrssv.net>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module "pcp" {
    import events = require("events");
    import http = require("http");

    function createServer(): Server;
    function connectPCP(port: number, host?: string): Promise<PCPSocket>;
    function requestHTTP(options: any): Promise<{ statusCode: number; socket: PCPSocket; }>;

    interface Server extends events.EventEmitter {
        on(event: "connection", listener: (socket: PCPSocket) => void): events.EventEmitter;
        on(event: "request", listener: (req: http.IncomingMessage, res: http.ServerResponse, socket: PCPSocket) => void): events.EventEmitter;
        on(event: "listening", listener: () => void): events.EventEmitter;
        on(event: string, listener: Function): events.EventEmitter;
        listen(port: number, backlog?: number): Promise<{}>;
        listen(port: number, hostname: string, backlog: number): Promise<{}>;
        close(): void;
    }

    interface PCPSocket {
        hello(agentName: string, port: number): void;
        olleh(): void;
        quit(): void;
        end(): void;
    }
}
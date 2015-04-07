/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../power-assert/power-assert.d.ts" />
/// <reference path="./pcp.d.ts" />
import assert = require('power-assert');
import pcp = require('pcp');
import path = require('path');

describe('pcp',() => {
    it('create server',() => {
        var id = '00000000000000000000000000000001';

        var server = pcp.createServer();
        server.listen(7244);
        server.on('request',(req, res, socket) => {
            var url = req.url.split('?')[0].split('/');
            if (url[1] !== 'channel') {
                res.writeHead(404);
                res.end();
                return;
            }
            if (url.length < 1 || url[2].length !== 32) {
                res.writeHead(404);
                res.end();
                return;
            }
            if (url[2] !== id) {
                res.writeHead(404);
                res.end();
                return;
            }
            res.writeHead(200);
            res.end();
            socket.end();
            socket.olleh();
        });

        return pcp.requestHTTP({
            hostname: '127.0.0.1',
            port: 7244,
            path: '/channel/' + '00000000000000000000000000000000'
        })
            .then(res => {
            assert(res.statusCode === 404);
            res.socket.end();
            return pcp.requestHTTP({
                hostname: '127.0.0.1',
                port: 7244,
                path: '/channel/' + id
            });
        }).then(res => {
            assert(res.statusCode === 200);
            res.socket.end();
            server.close();
        });
    });
});

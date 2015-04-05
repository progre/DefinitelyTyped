/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../power-assert/power-assert.d.ts" />
/// <reference path="./pcp.d.ts" />
import assert = require('power-assert');
import pcp = require('pcp');

describe('pcp',() => {
    it('exists',() => {
        assert(pcp != null);
    });
});

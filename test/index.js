'use strict'
let express = require('express');
let app = express();
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
let session = require('../lib/session');

describe('Session Module', () => {
    it('Should be an object', () => {
        session.should.be.an('Object');
    });
    describe('"initialize"', () => {
        it('should export a function', () => {
            session.initialize.should.be.a('function');
        });
        it('session.initialize() should produce a TypeError', () => {
            session.initialize.should.throw(TypeError);
        });
    });
})
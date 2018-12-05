var assert = require('assert');
const request = require('supertest');
const app = require('./app');

describe('Test read api', function(){
    it('testing the read api', function(done){
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.body.length, 0);
                done(); 
            });
    });
})
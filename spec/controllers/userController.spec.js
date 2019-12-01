const request = require('supertest');
const Connection = require('../../api/helpers/test_db_connection');
const app = require('../../app');

describe("userController", function() {
  beforeAll(async done => {
    await Connection.connect();
    done();
  });
  afterAll(async done => {
    await Connection.disconnect();
    done();
  });

  describe("GET /users", function () {
    it("should return Status 200", async (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(response => {
          const body = response.body;
          expect(body).toEqual({ data: [
              { type: 'users', attributes:
                {
                  firstName: 'Bob',
                  lastName: 'Tan',
                  employeeId: 'bob_tan'
                }
              }
            ]});
        })
        .end((error) => (error) ? done.fail(error) : done());
    });
  });
});

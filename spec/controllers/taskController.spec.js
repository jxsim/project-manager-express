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

  describe("GET /tasks", function () {
    it("should return Status 200", async (done) => {
      request(app)
        .get('/tasks')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(response => {
          const body = response.body;
          expect(body).toEqual({ data: [
            {
              type: 'tasks',
              attributes: {
                taskDescription: 'task1',
                priority: 1,
                startDate: '2019-01-01T00:00:00.000Z',
                endDate: '2019-11-11T00:00:00.000Z',
                status: '',
                isParent: false
              }
            },
            {
              type: 'tasks',
              attributes: {
                taskDescription: 'task2',
                priority: 2,
                startDate: '2019-01-01T00:00:00.000Z',
                endDate: '2019-11-11T00:00:00.000Z',
                status: '',
                isParent: false
              }
            }
            ]});
        })
        .end((error) => (error) ? done.fail(error) : done());
    });
  });
});

const request = require('supertest');
const Connection = require('../../api/helpers/test_db_connection');
const app = require('../../app');

describe("projectController", function() {
  beforeAll(async done => {
    await Connection.connect();
    done();
  });
  afterAll(async done => {
    await Connection.disconnect();
    done();
  });

  describe("GET /projects", function () {
    it("should return Status 200", async (done) => {
      request(app)
        .get('/projects')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(response => {
          const body = response.body;
          expect(body).toEqual({ data: [
              { type: 'projects', id: '1', attributes:
                  {
                    projectDescription: 'Project1',
                    priority: 1,
                    startDate: '2019-01-01',
                    endDate: '2019-01-01',
                    isCompleted: false,
                    taskCount: 0,
                    manager: { id: '1', firstName: 'Bob', lastName: 'Tan', employeeId: 'bob_tan', isDeleted: false }
                  }
              },
              { type: 'projects', id: '2', attributes:
                  {
                    projectDescription: 'Project2',
                    priority: 2,
                    startDate: '2019-01-01',
                    endDate: '2019-01-01',
                    isCompleted: true,
                    taskCount: 0,
                    manager: { id: '2', firstName: 'Charles', lastName: 'Tan', employeeId: 'charles_tan', isDeleted: true }
                  }
              },
            ]});
        })
        .end((error) => (error) ? done.fail(error) : done());
    });
  });
});

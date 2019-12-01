const { ObjectID: ObjectId } = require('mongodb');

module.exports = [
  { _id: '1', projectDescription: 'Project1', priority: 1, startDate: '2019-01-01', endDate: '2019-01-01', isCompleted: false, manager: '1' },
  { _id: '2', projectDescription: 'Project2', priority: 2, startDate: '2019-01-01', endDate: '2019-01-01', isCompleted: true, manager: '2' },
];

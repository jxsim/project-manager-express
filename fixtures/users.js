const { ObjectID: ObjectId } = require('mongodb');

module.exports = [
  { _id: '1', firstName: 'Bob', lastName: 'Tan', employeeId: 'bob_tan', isDeleted: false },
  { _id: '2', firstName: 'Charles', lastName: 'Tan', employeeId: 'charles_tan', isDeleted: true },
];

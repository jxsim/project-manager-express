const mongoose = require('mongoose');
const HOST = 'localhost:27017';
const DB = 'project_manager_test';
const DB_URL = process.env.DATABASE_URL || `mongodb://${HOST}/${DB}`;

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(DB_URL, {useNewUrlParser: true});
    } catch (err) {
      console.error('Database connection error');
    }
  },
  disconnect: async() => {
    await mongoose.disconnect();
  }
};

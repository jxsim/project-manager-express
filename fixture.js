const Fixtures = require('node-mongodb-fixtures');
const uri = 'mongodb://localhost:27017/project_manager_test';
const options = null;

const fixtures = new Fixtures({
  dir: './fixtures',
  filter: '.*',
});

fixtures
  .connect(uri)
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .catch(e => console.error(e))
  .finally(() => fixtures.disconnect());

const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const type = 'tasks';
const attributes = ['projectDescription', 'priority', 'startDate', 'endDate', 'isCompleted', 'taskCount', 'manager'];

module.exports = new JSONAPISerializer(type, { keyForAttribute: function(attribute) {
    if (['id', '_id'].includes(attribute.toLowerCase())) {
      return 'id';
    } else {
      return attribute;
    }
  }, attributes
});

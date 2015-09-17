
/**
 * Add descriptions to schemas fields.
 * @param {Object} schema The schema.
 * @param {Object} descriptions Object with same fields as schema.
 * @return {Object} Schema with field descriptions added.
 */
exports.addDescriptions = function addDescriptions(schema, descriptions) {
  for (var field in schema) {
    if (descriptions[field]) {
      schema[field].desc = descriptions[field];
    }
  }
  return schema;
};

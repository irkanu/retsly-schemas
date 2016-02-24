
/**
 * Add descriptions to schemas fields.
 * @param {Object} schema The schema.
 * @param {Object} descriptions Object with same fields as schema.
 * @param {Object} ddMap the data-dictionary field mapping
 * @return {Object} Schema with field descriptions added.
 */
exports.addDescriptions = function addDescriptions(schema, descriptions, ddMap) {
  for (var field in schema) {
    if (descriptions[field]) {
      schema[field].desc = descriptions[field];
    }
    if (ddMap && ddMap[field]) {
      schema[field].ddMap = ddMap[field];
    }
  }
  return schema;
};

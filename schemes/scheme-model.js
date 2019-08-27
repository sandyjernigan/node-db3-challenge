const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

// find():
  // Calling find returns a promise that resolves to an array of all schemes in the database.
function find() {
  return db('schemes');
}

// findById(id):
  // Expects a scheme id as its only parameter.
  // Resolve to a single scheme object.
  // On an invalid id, resolves to null.
function findById(id) {
  return db('schemes').where({ id }).first();
}

// findSteps(id):
  // Expects a scheme id.
  // Resolves to an array of all correctly ordered steps for the given scheme
  // This array should include the scheme_name not the scheme_id.
function findSteps(id) {
  return db("steps")
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .orderBy('steps.step_number')
    .where({ 'schemes.id': id });
}

// add(scheme):
  // Expects a scheme object.
  // Inserts scheme into the database.
  // Resolves to the newly inserted scheme, including id.
function add(scheme) {
  return db('schemes').insert(scheme)
  .then(ids => {
    return findById(ids[0]);
  });
}

// update(changes, id):
// Expects a changes object and an id.
// Updates the scheme with the given id.
// Resolves to the newly updated scheme object.
function update(changes, id) {}


// remove(id):
// Removes the scheme object with the provided id.
// Resolves to the removed scheme
// Resolves to null on an invalid id.
// (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)
function remove(id) {}
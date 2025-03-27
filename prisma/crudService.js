const prisma = require('./prisma-client');

/**
 * Create a new record in any model.
 * @param {string} model - The Prisma model name (e.g., 'user', 'post').
 * @param {object} data - The data to insert.
 * @returns {Promise<object>} The created record.
 * @example
 * create('user', { name: 'John Doe', email: 'john@example.com' })
 *   .then(user => console.log(user))
 *   .catch(err => console.error(err));
 */
const create = async (model, data) => {
  return await prisma[model].create({ data });
};

/**
 * Retrieve all records from any model.
 * @param {string} model - The Prisma model name.
 * @returns {Promise<Array>} The list of records.
 * @example
 * getAll('user')
 *   .then(users => console.log(users))
 *   .catch(err => console.error(err));
 */
const getAll = async (model) => {
  return await prisma[model].findMany();
};

/**
 * Retrieve a single record by ID.
 * @param {string} model - The Prisma model name.
 * @param {number} id - The record ID.
 * @returns {Promise<object|null>} The found record or null if not found.
 * @example
 * getById('user', 1)
 *   .then(user => console.log(user))
 *   .catch(err => console.error(err));
 */
const getById = async (model, id) => {
  return await prisma[model].findUnique({ where: { id: Number(id) } });
};

/**
 * Update a record by ID.
 * @param {string} model - The Prisma model name.
 * @param {number} id - The record ID.
 * @param {object} data - The updated data.
 * @returns {Promise<object>} The updated record.
 * @example
 * update('user', 1, { name: 'Jane Doe' })
 *   .then(user => console.log(user))
 *   .catch(err => console.error(err));
 */
const update = async (model, id, data) => {
  return await prisma[model].update({ where: { id: Number(id) }, data });
};

/**
 * Delete a record by ID.
 * @param {string} model - The Prisma model name.
 * @param {number} id - The record ID.
 * @returns {Promise<object>} The deleted record.
 * @example
 * remove('user', 1)
 *   .then(user => console.log('Deleted:', user))
 *   .catch(err => console.error(err));
 */
const remove = async (model, id) => {
  return await prisma[model].delete({ where: { id: Number(id) } });
};

// Export all CRUD functions
module.exports = { create, getAll, getById, update, remove };

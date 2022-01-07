const authorModel = require('../models/author');

const getAll = async () => {
  const result = await authorModel.getAll();
  return result;
};

module.exports = { getAll };

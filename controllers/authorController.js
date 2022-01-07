const authorService = require('../Services/authorService');

const getAllAuthors = async (_req, res) => {
  const authors = await authorService.getAll();
  return res.status(200).json(authors);
};

module.exports = { getAllAuthors };

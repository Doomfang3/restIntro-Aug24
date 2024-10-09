const Book = require('../models/Book.model')
const router = require('express').Router()

// ALl the routes in there are gonna start with /books
router.get('/', async (req, res) => {
  try {
    const allBooks = await Book.find()
    res.json(allBooks)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const oneBook = await Book.findById(id)
    res.json(oneBook)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create(req.body)
    res.status(201).json(newBook)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true })
    res.status(202).json(updatedBook)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await Book.findByIdAndDelete(id)
    res.status(204).json()
  } catch (error) {
    next(error)
  }
})

module.exports = router

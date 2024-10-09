const router = require('express').Router()

// ALl the routes in there are gonna start with /api

const booksRoutes = require('./books.routes')
router.use('/books', booksRoutes)

module.exports = router

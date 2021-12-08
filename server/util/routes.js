const Router = require('express')
const anecdotes = require('@controllers/anecdotesController')

const router = Router()

router.get('/health', (req, res) => {
  res.send('ok')
})

router.get('/anecdotes', anecdotes.getAll)
router.post('/anecdotes', anecdotes.create)
router.delete('/anecdotes/:id', anecdotes.destroy)
router.put('/anecdotes/:id', anecdotes.update)

module.exports = router

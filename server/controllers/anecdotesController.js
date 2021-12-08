const { ApplicationError } = require('@util/customErrors')

/**
 * Simple example for backend
 */
let anecdotes = [
  {
    content: 'If it hurts, do it more often',
    id: 47145,
    votes: 9,
  },
  {
    content: 'Adding manpower to a late software project makes it later!',
    id: 21149,
    votes: 3,
  },
  {
    content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    id: 69581,
    votes: 0,
  },
  {
    content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    id: 36975,
    votes: 3,
  },
  {
    content: 'Premature optimization is the root of all evil.',
    id: 25170,
    votes: 0,
  },
  {
    content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    id: 98312,
    votes: 1,
  },
]

const getAll = async (req, res) => {
  res.send(anecdotes)
}

const create = async (req, res) => {
  const { body } = req
  if (!body) throw new ApplicationError('Body is required', 400)

  anecdotes.push(body)

  res.send(body)
}

const destroy = async (req, res) => {
  anecdotes = anecdotes.filter((a) => Number(a.id) !== Number(req.params.id))
  res.sendStatus(200)
}

const update = async (req, res) => {
  const anecdoteToUpdate = anecdotes.find((a) => Number(a.id) === Number(req.params.id))
  if (!anecdoteToUpdate) res.sendStatus(404)

  const { body } = req
  if (!body.id) throw new ApplicationError('ID is required', 400)
  if (!body.content) throw new ApplicationError('Content is required', 400)
  if (!body.votes) throw new ApplicationError('Votes is required', 400)

  anecdotes = anecdotes.map((a) => (
    Number(a.id) === Number(req.params.id)
      ? body
      : a
  ))

  const updatedAnecdote = anecdotes.find((a) => Number(a.id) === Number(req.params.id))

  res.send(updatedAnecdote)
}

module.exports = {
  getAll,
  create,
  destroy,
  update,
}

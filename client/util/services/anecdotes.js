import axios from 'axios'

const basePath = '/api/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (content) => (
  {
    content,
    id: getId(),
    votes: 0,
  }
)

const getAll = async () => {
  const response = await axios.get(basePath)
  return response.data
}

const createNew = async (text) => {
  const object = asObject(text)
  const response = await axios.post(basePath, object)
  return response.data
}

const update = async (id, newObj) => {
  const res = await axios.put(`${basePath}/${id}`, newObj)
  return res.data
}

export default { getAll, createNew, update }

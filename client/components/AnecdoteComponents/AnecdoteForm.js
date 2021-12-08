import React from 'react'
import { connect } from 'react-redux'

import { createAnecdote } from '../../AnecdoteReducers/anecdoteReducer'
import { setNotification } from '../../AnecdoteReducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const { createAnecdote, setNotification } = props

    const text = event.target.text.value
    event.target.text.value = ''

    createAnecdote(text)
    setNotification(`Added anecdote '${text}'`, 5)
  }

  return (
    <div>
      <h3 style={{ marginBottom: 0 }}>
        Create New
      </h3>
      <form onSubmit={addAnecdote}>
        <div><input name="text" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(null, { createAnecdote, setNotification })(AnecdoteForm)
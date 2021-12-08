import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../../AnecdoteReducers/anecdoteReducer'
import { setNotification } from '../../AnecdoteReducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(setNotification(`Voted '${anecdote.content}'`, 5))
  }

  return (
    anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      .map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div style={{ marginBottom: 5 }}>
            {`has ${anecdote.votes}`}
            <button type="button" onClick={() => vote(anecdote)}>
              vote
            </button>
          </div>
        </div>
      ))
  )
}

export default AnecdoteList

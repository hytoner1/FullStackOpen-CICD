import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Notification from '../AnecdoteComponents/Notification'
import Filter from '../AnecdoteComponents/Filter'
import AnecdoteList from '../AnecdoteComponents/AnecdoteList'
import AnecdoteForm from '../AnecdoteComponents/AnecdoteForm'

import { initializeAnecdotes } from '../../AnecdoteReducers/anecdoteReducer'

const FrontPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  })

  return (
    <>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </>
  )
}

export default FrontPage

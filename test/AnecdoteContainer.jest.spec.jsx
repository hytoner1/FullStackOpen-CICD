import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { AnecdoteContainer } from '../client/components/AnecdoteComponents/AnecdoteList'

const anecdotes = [
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
]

describe('<AnecdoteContainer />', () => {
  it('should render items', () => {
    const mockVote = jest.fn()

    const component = render(
      <AnecdoteContainer anecdotes={anecdotes} filter="" vote={mockVote} />
    )

    expect(component.container).toHaveTextContent(
      anecdotes[0].content
    )

    expect(component.container).toHaveTextContent(
      anecdotes[1].content
    )
  })
})

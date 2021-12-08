import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../../AnecdoteReducers/filterReducer'

const Filter = (props) => {
  const { setFilter } = props
  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  const style = {
    marginBottom: 20,
  }

  return (
    <div style={style}>
      <h4 style={{ marginBottom: 0 }}>
        filter
      </h4>
      <input onChange={handleChange} />
    </div>
  )
}

const ConnectedFilter = connect(null, { setFilter })(Filter)
export default ConnectedFilter

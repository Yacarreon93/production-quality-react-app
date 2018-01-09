import React from 'react'
import { PropTypes } from 'prop-types'

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox"
        onChange={() => props.handleToggle(props.id)}
        checked={props.isComplete}/> {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

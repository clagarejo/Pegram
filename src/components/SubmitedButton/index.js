import React from 'react'
import { Button } from './styles'

import PropTypes from 'prop-types'

export const SubmitedButton = ({ children, disabled, onClick }) => {
  return <Button onClick={onClick} disabled={disabled}>{children}</Button>
}

SubmitedButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

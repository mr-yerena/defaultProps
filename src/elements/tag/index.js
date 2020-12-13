// Import React
import React from 'react'

// Import Libraries
import { Tag as RbxTag } from 'rbx'
import PropTypes from 'prop-types'

const Tag = (props) => {
  const { children, className } = props

  return (
    <RbxTag className={className}>
      {
        children
      }
    </RbxTag>
  )
}

Tag.defaultProps = {
  className: ``,
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Tag

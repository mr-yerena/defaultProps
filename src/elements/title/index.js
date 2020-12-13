// Import React
import React from 'react'

// Import Libraries
import { Title as RbxTitle } from 'rbx'
import PropTypes from 'prop-types'

const Title = (props) => {
  const {
    children,
    subTitle,
    className,
    type,
  } = props

  return (
    <RbxTitle
      as={type}
      className={`${className}`}
    >
      {
        children
      }
    </RbxTitle>
  )
}

const titleDefaultTypes = [
  `h1`,
  `h2`,
  `h3`,
  `h4`,
]

Title.defaultProps = {
  subTitle: null,
  className: ``,
  type: `h2`,
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(titleDefaultTypes),
}

export default Title

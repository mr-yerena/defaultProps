// Import React
import React from 'react'

// Import Modifiers
import IsExternalLink from 'modifiers/functions/isExternalLink'

// Import Libraries
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

const Link = (props) => {
  const { className, children, to } = props

  return (
    <>
      {
        IsExternalLink(to) ? (
          <a
            href={to}
            target={`blank`}
            rel={`noopener`}
            className={`call-to-action ${className}`}
          >
            {
              children
            }
          </a>
        ) : (
          <GatsbyLink
            to={to}
            className={`call-to-action ${className}`}
          >
            {
              children
            }
          </GatsbyLink>
        )
      }
    </>
  )
}

Link.defaultProps = {
  className: ``,
  children: null,
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
}

export default Link

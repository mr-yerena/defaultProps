// Import React
import React from 'react'

// Import Libraries
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = (props) => {
  const {
    title,
  } = props

  return (
    <Helmet>
      <title>
        {
          title
        }
      </title>
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO

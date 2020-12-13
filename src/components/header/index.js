// Import React
import React from 'react'

// Import Libraries
import {} from 'rbx'
import PropTypes from 'prop-types'

const Header = (props) => {
  const {
    logo,
    links,
    socialMedia,
    searchBar,
  } = props
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
  socialMedia: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
  searchBar: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
}

export default Header

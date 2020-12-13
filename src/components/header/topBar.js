// Import React
import React from 'react'

// Import Libraries
import { Generic, Container, Column } from 'rbx'
import PropTypes from 'prop-types'

const TopBar = (props) => {
  const {
    socialMedia,
    searchBar,
  } = props

  return (
    <Generic>
      <Container>
        <Column.Group>
          <Column></Column>

          <Column></Column>
        </Column.Group>
      </Container>
    </Generic>
  )
}

TopBar.propTypes = {
  socialMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBar: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default TopBar

// Import React
import React from 'react'

// Import Elements
import Link from 'elements/link'
import Icon from 'elements/icon'

// Import Libraries
import { Generic } from 'rbx'
import PropTypes from 'prop-types'

const LinksGroup = (props) => {
  const {
    icons,
    links
  } = props

  return (
    <Generic as={`ul`} className={`links-group`}>
      {
        links.map((item, index) => {
          return (
            <Generic as={`li`}>
              <Link to={item.to}>
                {
                  icons ? <Icon name={item.name} /> : item.text
                }
              </Link>
            </Generic>
          )
        })
      }
    </Generic>
  )
}

LinksGroups.defaultProps = {
  icons: false,
}

LinksGroup.propTypes = {
  icons: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LinksGroup

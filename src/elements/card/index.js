// Import React
import React from 'react'

// Import Elements
import Title from 'elements/title'
import Tag from 'elements/tag'

// Import Libraries
import { Card as RbxCard, Content } from 'rbx'
import PropTypes from 'prop-types'

const Card = (props) => {
  const {
    image,
    tag,
    title,
    description,
    className,
  } = props

  return (
    <RbxCard className={`${className}`}>
      {
        image && (
          <RbxCard.Image></RbxCard.Image>
        )
      }

      <RbxCard.Content>
        {
          title && (
            <Title
              type={`h4`}
              className={`text-center`}
            >
              {
                title
              }
            </Title>
          )
        }

        {
          tag && <Tag>{ tag }</Tag>
        }

        <Content>
          {
            description
          }
        </Content>
      </RbxCard.Content>
    </RbxCard>
  )
}

Card.defaultProps = {
  image: null,
  tag: null,
  title: null,
  description: null,
  className: ``,
}

Card.propTypes = {
  image: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
}

export default Card

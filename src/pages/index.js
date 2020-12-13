// Import React
import React from 'react'

// Import Components
import Layout from 'components/layout'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'
import Tag from 'elements/tag'
import Card from 'elements/card'

import loadable from '@loadable/component'

// Import Libraries
import { Container, Column } from 'rbx'

const Index = () => {
  /*const MyTitle = loadable(() => import(`./../elements/title`))
  const MyCard = loadable(() => import(`./../elements/card`))*/

  return (
    <Layout>
      <Section>
        <Container>
          <Column.Group>
            <Column>
              <Title
                type={`h3`}
              >
                Title type h3
              </Title>

              <Tag>
                Fashion
              </Tag>
            </Column>

            <Column>
              <Title
                type={`h4`}
              >
                Title type h4
              </Title>
              {/*<MyTitle
                type={`h4`}
              >
                Title type h4
              </MyTitle>*/}
            </Column>
          </Column.Group>

          <Column.Group>
            <Column size={4}>
              {/*<MyCard
                title={`This is the card title`}
                description={`Hello there!`}
                tag={`TAG`}
              />*/}
              <Card
                title={`This is the card title`}
                description={`Hello there!`}
                tag={`TAG`}
              />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </Layout>
  )
}

export default Index

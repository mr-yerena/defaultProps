// Import React
import React from 'react'

// Import Components
import Footer from 'components/footer'
import SEO from 'components/seo'

// Import Libraries
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

const Layout = (props) => {
  const {
    children,
  } = props

  //const SEOcomponent = loadable(() => import(`./../seo`))

  const MiddleComponent = loadable(() => import(`../seo`))

  return (
    <>
      <MiddleComponent
        title={`Edgar Title`}
      />
      {
        children
      }
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

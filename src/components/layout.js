import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Menu from './menu'

import './normalize.css'

const StyledContainner = styled.div`
  height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledContainner>
      <Menu />
      {children}
    </StyledContainner>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

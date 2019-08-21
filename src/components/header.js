import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const StyledContainner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledContainner>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </StyledContainner>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `yuniors87`,
}

export default Header

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1ac0c6;
`
const StyledMenuItem = styled.li`
  list-style-type: none;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 10px 30px;
  &:hover {
    color: #e74645;
  }
`

const Menu = () => {
  return (
    <StyledMenu>
      <StyledMenuItem>
        <AniLink cover direction="right" duration={1} bg="#1ac0c6" to="/">
          Home
        </AniLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <AniLink cover direction="right" duration={1} bg="#1ac0c6" to="/page-2">
          Second
        </AniLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <AniLink cover direction="right" duration={1} bg="#1ac0c6" to="/page-3">
          Third
        </AniLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <AniLink cover direction="right" duration={1} bg="#1ac0c6" to="/page-4">
          Fourth
        </AniLink>
      </StyledMenuItem>
    </StyledMenu>
  )
}

export default Menu

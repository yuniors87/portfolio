import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 6rem;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.secondColor};
  border-bottom: 1px solid ${props => props.theme.secondColor};
`
const StyledLogo = styled.div`
  font-size: ${props => props.theme.fontSizeXL};
`
const StyledMenuList = styled.ul`
  font-size: ${props => props.theme.fontSizeLarge};
  display: flex;
`
const StyledMenuItem = styled.li`
  list-style-type: none;
  margin: 0 1rem;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.secondColor};
  text-decoration: none;
`

const Header = () => (
  <StyledHeader>
    <StyledLogo>alberto mariscal</StyledLogo>
    <div>
      <StyledMenuList>
        <StyledMenuItem>
          <StyledLink to="/">menu01</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/">menu02</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/">menu03</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/">menu04</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/">menu05</StyledLink>
        </StyledMenuItem>
      </StyledMenuList>
    </div>
  </StyledHeader>
)

export default Header

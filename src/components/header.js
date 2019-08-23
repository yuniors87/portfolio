import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(props => <Link {...props} />)`
  // color: white;
  text-decoration: none;
`
const StyledNav = styled.nav`
  height: 10vh;
  background: #5b78c7;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`
const StyledHamburger = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 2;
  }
`
const StyledLine = styled.div`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 3px;
    background: white;
    margin: 5px;
  }
`
const StyledLinks = styled.ul`
  display: flex;
  list-style: none;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;
  margin-left: auto;
  & li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    background: #5b78c7;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    background: ${props =>
      props.opened
        ? `circle(1100px at 90% -10%)`
        : `circle(100px at 90% -10%)`};
    -webkit-clip-path: ${props =>
      props.opened
        ? `circle(1100px at 90% -10%)`
        : `circle(100px at 90% -10%)`};
    transition: all .4s ease-in;
  }
`

class Header extends React.Component {
  // <StyledHeader>
  //   <StyledContainner>
  //     <h1 style={{ margin: 0 }}>
  //       <StyledLink to="/">{siteTitle}</StyledLink>
  //     </h1>
  //   </StyledContainner>
  // </StyledHeader>
  constructor(props) {
    super(props)
    this.state = {
      menuOpened: false,
    }
  }
  handleClick = () => {
    const actualState = this.state.menuOpened
    this.setState({ menuOpened: !actualState })
  }

  render() {
    return (
      <StyledNav>
        <StyledHamburger onClick={this.handleClick}>
          <StyledLine />
          <StyledLine />
          <StyledLine />
        </StyledHamburger>
        <StyledLinks opened={this.state.menuOpened}>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">Projects</StyledLink>
          </li>
        </StyledLinks>
      </StyledNav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `yuniors87`,
}

export default Header

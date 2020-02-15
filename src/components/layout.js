import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './header'

// #114668
// #E44D3F
// #FFC350
// https://www.banzaiskate.com/

const theme = {
  baseColor: '#E44D3F',
  secondColor: '#114668',
  fontSizeMediun: '1rem',
  fontSizeSmall: '0.8rem',
  fontSizeLarge: '1.5rem',
  fontSizeXL: '3rem',
}
const StyledBody = styled.div`
  background: ${props => props.theme.baseColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${props => props.theme.secondColor};
`
const StyledContainner = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 6rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledBody>
      <Header />
      <StyledContainner>{children}</StyledContainner>
    </StyledBody>
  </ThemeProvider>
)

export default Layout

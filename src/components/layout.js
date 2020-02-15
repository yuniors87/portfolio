import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './header'
import './reset.css'

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
  font-family: 'Didact Gothic', sans-serif;
  height: 100vh;
  width: 100%;
  background: ${props => props.theme.baseColor};
  color: ${props => props.theme.secondColor};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6rem 1fr;
`
const StyledContainner = styled.div`
  margin: 0 10rem;
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

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import './reset.css'

// #114668
// #E44D3F
// #FFC350
// https://www.banzaiskate.com/

const theme = {
  baseColor: '#eff6ff',
  secondColor: '#fbfcff',
  thirdColor: '#114668',
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
  color: ${props => props.theme.thirdColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledContainner = styled.div`
  width: 700px;
  height: 80vh;
  background: ${props => props.theme.secondColor};
  box-shadow: rgba(0, 0, 0, 0.125) 0 5px 15px;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledBody>
      <StyledContainner>{children}</StyledContainner>
    </StyledBody>
  </ThemeProvider>
)

export default Layout

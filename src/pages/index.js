import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledHead = styled.div`
  height: 100px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${props => props.theme.thirdColor};
  margin: 20px 50px;
`
const StyledName = styled.h1`
  font-size: 3rem;
`
const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  font-size: 1rem;
`

const IndexPage = () => (
  <Layout>
    <StyledHead>
      <StyledName>alberto mariscal</StyledName>
    </StyledHead>
    <StyledContent>todo en construcción...</StyledContent>
  </Layout>
)

export default IndexPage

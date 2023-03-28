import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import React from 'react'
import Content from './components/Content'
import { Sidebar } from './components/Sidebar'
import { Container } from '@mui/system'
import Rightbar from './components/Rightbar'
import { Grid } from '@mui/material'

function App() {

  return (
    <Container maxWidth="1000">
      <Nav></Nav>
      <Grid item xs={12} >
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Sidebar/>
        </Grid>
        <Grid item md={6}>
          <Content />
        </Grid>
        <Grid item md={3}>
          <Rightbar/>
        </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

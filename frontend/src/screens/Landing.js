import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import image from '../images/landing.jpg'

const Landing = () => {
  return (
    <div>
      <Container maxWidth="false">
        <Typography component="div" style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden'
        }} />
      </Container>
    </div>
  )
}

export default Landing



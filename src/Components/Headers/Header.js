import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
function Header() {
  return (
    <div>
        <header>
        <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <i className='fa-solid fa-users fa-flip'></i>
{''}   EMS Application       </Navbar.Brand>
        </Container>
      </Navbar>
        </header>
    </div>
  )
}

export default Header
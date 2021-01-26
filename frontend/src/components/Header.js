
import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Finex Gateway</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link to='/'>
                <Nav.Link>
                  <i className='fa fa-shopping-cart fa-lg'></i>Home
                </Nav.Link>
              </Link>
              <Link to='/coin'>
                <Nav.Link>
                  <i className='fa fa-shopping-cart fa-lg'></i>coin
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

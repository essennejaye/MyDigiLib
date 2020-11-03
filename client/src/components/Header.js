import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

const Styles = styled.div`
  .navbar {
    background-color: black;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: orange;
    }
  }
  .navbar-toggler-icon {
    background-color: white;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <>
      <Styles>
        <Navbar expand='lg'>
          <Navbar.Brand as={Link} to='/'><h2>My DigiLib</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={StyledLink} to='/'>Home
                  </Nav.Link>

                  <Nav.Link as={StyledLink} to={`/books/${localStorage.getItem('user_id')}`}>List My Books
                  </Nav.Link>
                  <Nav.Link as={StyledLink} to='/addbook'>Add a Book
                  </Nav.Link>
                  <Nav.Link as={StyledLink} to='/' onClick={logout}>Logout
                  </Nav.Link>
                </>
              ) : (
                  <>
                    <Nav.Link as={StyledLink} to='/login'>Login
                    </Nav.Link>
                    <Nav.Link as={StyledLink} to='/signup'>Signup
                    </Nav.Link>
                  </>
                )}
            </Nav >
          </Navbar.Collapse >
        </Navbar >
      </Styles >
    </>
  );
};

export default Header;

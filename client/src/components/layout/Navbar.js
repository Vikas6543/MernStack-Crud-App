import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li style={{ color: 'white' }}>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <button className='logout-btn'>Logout</button>
        </a>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar'>
      <h3>
        <Link to='/'>
          <i className='fab fa-react' /> Mernstack Crud App
        </Link>
      </h3>
      <ul>{isAuthenticated && authLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Navbar;

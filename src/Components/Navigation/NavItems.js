import React from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

const NavItems = ({ className, navClass, toggleHamburger }) => (
  <div className={navClass}>
    <NavLink
      to="/"
      exact
      activeClassName="active"
    >Miranda</NavLink>
    <NavLink
      to="/"
      exact
      activeClassName="active"
      className={className}
    >Home</NavLink>
    <NavLink
      to="/about"
      activeClassName="active"
      className={className}
    >About</NavLink>
    <NavLink
      to="/menu"
      activeClassName="active"
      className={className}
    >Menu</NavLink>
    <NavLink
      to="/gallery"
      activeClassName="active"
      className={className}
    >Gallery</NavLink>
    <NavLink
      to="/reservation"
      activeClassName="active"

      className={className}
    >Reservations</NavLink>
    <NavLink
      to="/location"
      activeClassName="active"
      className={className}
    >Location</NavLink>
    <span
      className="navigation__btn"
      onClick={toggleHamburger}
    >x</span>
  </div>
)
NavItems.propTypes = {

}

export default NavItems

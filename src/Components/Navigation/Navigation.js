import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../Theme/MediaQueries';
import { NavLink } from 'react-router-dom';
import NavItems from './NavItems';

const NavigationWrapper = styled.div`
.wrapper { 
  display: flex;
  align-items:center; 
}

  nav { 
    position: relative ;
    z-index: 9999;
    background: var(--transparentBlack);
    box-shadow: 0 1px 3px rgba(0,0,0,0.11);
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    color: red;
    
  .active{ 
    color: var(--gold);
  }


 a { 
  padding: 40px 0;
  margin-left: 37px;

  color: #fff;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    line-height: 6px;
    border-bottom: 3px solid transparent;
    text-shadow: 0px 0px 1px transparent;
    
    @media ${device.laptopS}{
      font-size:1.1rem;
      margin-left: 22px;
    }
    
  &:hover { 
    color: var(--gold)!important;
  }
/* logo */
  &:first-child { 
    margin-right: auto;
    margin-left: 0px;
    font-size: 3rem;
    color: var(--gold);
    font-family: 'Oswald', sans-serif;
    font-weight:300;
    @media ${device.tablet}{
      display: block;
     }
    } 
  }
}

.tablet {
  display: none;
}

.tablet__navigation{display:none}
.nav__wrapper{display:none}
.navigation__btn{display:none}

/* tablet */
@media ${device.tablet}{
  .desktop__navigation {display: none}
  .tablet__navigation {
    display: flex;
    flex-direction: center;
    align-items:center;

    .nav__right {
      margin-right: 20px
    }
    .nav__left{
     margin-left: 20px
    }
  }
.navigation__btn {
  color: white;
  font-size:4rem;
  cursor:pointer;
  display: block;

  i {
    font-size: 3rem;
  }
 }

 .nav__wrapper {
   position: absolute;
    background: rgba(40, 40, 40, 0.9);
    width: 90%;
    /* top: 100%; */
    left: 5%;
    margin: 0 auto;
    height: auto;
  a {
    width: 100%;
    display: block;
     padding: 15px 6px 15px 5px;
     border-bottom: 1px solid;
     background-color: transparent;
     text-shadow: 0px 0px 1px transparent;   
     font-size: 1.4rem;
     line-height: 18px;
    padding-bottom: 14px;
    color: #818181;
    font-weight: bold;
    &:hover {
      color: #c0a756;
    }
  }
 }

 .close{display:none}
 .open{display:block}
}
`

class Navigation extends Component {
  state = {
    isOpen: false
  }

  toggleHamburger = () => {
    this.setState((state, props) => {
      return {
        isOpen: !state.isOpen
      }
    })
  }

  render() {
    const { isOpen } = this.state
    let toggle = isOpen ? 'open' : 'close';
    return (

      <NavigationWrapper>
        <nav
          className="desktop__navigation"
        >
          <NavItems
            className="nav__item"
            navClass="wrapper desktop"
            toggleHamburger={this.toggleHamburger}
          />
        </nav>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        <nav
          className="tablet__navigation"
        >
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="nav__left"
          >Miranda</NavLink>
          <span
            className="navigation__btn nav__right"
            onClick={this.toggleHamburger}
          >
            {!isOpen
              ? <i className="fas fa-bars"></i>
              : <i className="fas fa-times"></i>
            }
          </span>
        </nav>
        <div
          className={`${toggle} nav__wrapper`}
        >
          <NavLink
            to="/"
            exact
            activeClassName="active"
          >Home</NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
          >About</NavLink>
          <NavLink
            to="/menu"
            activeClassName="active"
          >Menu</NavLink>
          <NavLink
            to="/gallery"
            activeClassName="active"
          >Gallery</NavLink>
          <NavLink
            to="/reservation"
            activeClassName="active"
          >Reservations</NavLink>
          <NavLink
            to="/location"
            activeClassName="active"
          >Location</NavLink>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
      </NavigationWrapper >
    );
  }
}

export default Navigation;


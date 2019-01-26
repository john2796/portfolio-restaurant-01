import React, { Component } from 'react';
import Header from '../Header/Header';
import AboutUs from '../About/About';
import styled from 'styled-components';
import ReservationParallax from '../About/ReservationParallax';
import Menu from '../About/Menu';
import Testimonials from '../About/Testimonials';

const HomeWrapper = styled.div`
.about__page {
  display: block;
}

`
class Home extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <HomeWrapper>
          <Header />
          <span className="about__page"></span>
          <AboutUs />
          <ReservationParallax />
          <Menu />
          <Testimonials />
        </HomeWrapper>
      </React.Fragment>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';


const HeaderStyle = styled.header`
`

class Header extends Component {
  render() {
    return (
      <>
        <HeaderStyle >
          <Carousel />
        </HeaderStyle>
      </>
    );
  }
}

export default Header;
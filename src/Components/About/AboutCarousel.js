import React, { Component } from 'react';
import styled from 'styled-components';

import about01 from '../../assets/home/about01.jpg'
import about02 from '../../assets/home/about02.jpg'
import about03 from '../../assets/home/about03.jpg'



const AboutCarouselWrapper = styled.div`
   .slide {
     display: none;
    }
   .active { 
     display: block;
   }
`


const items = [
  {
    src: about01
  },
  {
    src: about02
  },
  {
    src: about03
  },
]




class AboutCarousel extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  componentDidMount = () => {
    this._isMounted = true;
    if (this._isMounted) {
      this.interval = window.setInterval(() => {
        this.next();
      }, 3500);
    }
  }

  componentWillUnmount = () => {
    this._isMounted = false;
    clearInterval(this.interval);
  }

  next = () => {
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }




  render() {
    const { activeIndex } = this.state;
    const slides = items.map((images, index) => {
      let computedClass = index === activeIndex ? "slide active" : "slide";
      return (
        <div key={index} className={computedClass}>
          <img src={images.src} alt="..." />
        </div>
      )
    })
    return (
      <AboutCarouselWrapper>
        {slides}
      </AboutCarouselWrapper>
    );
  }
}

export default AboutCarousel;
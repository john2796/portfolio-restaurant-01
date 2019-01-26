import React, { Component } from "react";
import styled from "styled-components";

import about04 from "../../assets/home/about04.jpg";
import about05 from "../../assets/home/about05.jpg";
import about06 from "../../assets/home/about06.jpg";
import { device } from "../../Theme/MediaQueries";

const KitchenCarouselWrapper = styled.div`
  width: 89%;
  .slide {
    display: none;
  }
  .active {
    display: block;
  }
  img {
    max-width: 100%;
    margin: 0 auto;
  }

  .button__flex_parent {
    min-width: 300px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background-position: center;
    background-size: cover;
  }

  .kitchen__left_btn,
  .kitchen__right_btn {
    color: var(--white);
    margin: 10px;
    border-radius: 50%;
    width: 49px;
    height: 49px;
    cursor: pointer;
    /* margin-left: 15px; */
    opacity: 0.7;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: opacity 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: rgba(255, 255, 255, 0.01);
    color: rgba(255, 255, 255, 0.01);
    color: gray;
    border-radius: 50%;
    outline: none;

    &:hover {
      opacity: 1;
    }
    &:active {
      transform: translateY(4px);
    }
  }

  .kitchen__left_btn i,
  .kitchen__right_btn i {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel__indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    @media ${device.tablet} {
      margin-bottom: 40px;
    }

    li {
      &:nth-of-type(n + 2) {
        margin-left: 9px;
      }
    }
  }

  .carousel__indicator {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: transparent;
    margin: 1px 4px;
    border: 2px solid #c8c7c6;
    transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);

    &:hover {
      opacity: 0.5;
    }

    &--active {
      &,
      &:hover {
        background: #c8c7c6;
        border-color: #c8c7c6;
      }
    }
  }
`;
// Images
const items = [
  {
    src: about04,
    indicator: 0
  },
  {
    src: about05,
    indicator: 0
  },
  {
    src: about06,
    indicator: 0
  }
];

class KitchenCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  next = () => {
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToSlide(newIndex) {
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((images, index) => {
      let computedClass = index === activeIndex ? "slide active" : "slide";
      return (
        <div key={index} className={computedClass}>
          {/* <img src={images.src} alt="..." /> */}
          <div
            className="button__flex_parent"
            style={{
              backgroundImage: `url(${images.src})`
            }}
          >
            <button className="kitchen__left_btn" onClick={this.previous}>
              <i className="fas fa-caret-left" />
            </button>
            <button className="kitchen__right_btn" onClick={this.next}>
              <i className="fas fa-caret-right" />
            </button>
          </div>

          {/* Indicators */}
          <ul className="carousel__indicators">
            {items.map((slide, index) => (
              <li
                key={index}
                className={
                  index === activeIndex
                    ? "carousel__indicator carousel__indicator--active"
                    : "carousel__indicator"
                }
                onClick={e => this.goToSlide(index)}
              />
            ))}
          </ul>
        </div>
      );
    });
    return <KitchenCarouselWrapper>{slides}</KitchenCarouselWrapper>;
  }
}

export default KitchenCarousel;

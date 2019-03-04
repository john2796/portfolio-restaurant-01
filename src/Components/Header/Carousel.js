import React, { Component } from "react";
import styled from "styled-components";
import logoIntro from "../../assets/home/logo_intro.png";
import sideSeparator from "../../assets/home/side-separator.png";
import { device } from "../../Theme/MediaQueries";

//slider images
import image01 from "../../assets/homecarousel/home1.jpg";
import image02 from "../../assets/homecarousel/hom2.jpg";
import image03 from "../../assets/homecarousel/hom3.jpg";

const HeaderMainStyle = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Oswald:200&subset=cyrillic");
  width: 100%;
  height: 100vh;
  margin-top: -90px;

  background: gray;
  .carousel__content {
    font-size: 5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
    .carousel__fine_dinning {
      margin-top: 200px;
      max-width: 250px;
      max-height: 200px;
      width: 250px;
      height: 200px;
    }
    .carousel__arrow {
      max-width: 100%;
      width: 100px;
      height: auto;
      margin: 5px 0;
    }

    h2 {
      font-family: "Oswald", sans-serif;
      font-size: 6.5rem;
      text-align: center;
      color: #ffffff;
      font-weight: 200;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin: 70px 0 30px 0;
      @media ${device.laptopS} {
        font-size: 3.5rem;
      }
    }

    p {
      font-size: 2rem;
      color: var(--white);
      text-align: center;
      font-weight: 400;
      font-style: italic;
      font-family: "Libre Baskerville", serif;
      width: 100%;
      margin-bottom: 120px;
      margin-top: 30px;

      @media ${device.laptopS} {
        font-size: 1.6rem;
      }
    }

    .carousel__go-down {
      padding: 11.5px 15.5px;
      border-radius: 50%;
      border: 2px solid #fff;
      .fa-angle-down {
        color: #ffff;
        font-size: 2rem;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: scroll;
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(-18px);
          }
          100% {
            opacity: 1;
            transform: translateY(14px);
          }
        }
      }
    }
  }
  /* the buttons and the fine dinning image is wrap here  */
  .carousel__controls_wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media ${device.laptopS} {
      justify-content: center;
    }
    .carousel__left_btn,
    .carousel__right_btn {
      /* align-self: auto | flex-start | flex-end | center | baseline | stretch; */
      align-self: flex-end;
      width: 79px;
      height: 79px;
      cursor: pointer;
      /* margin-left: 15px; */
      opacity: 0.3;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: opacity 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: rgba(255, 255, 255, 0.01);
      color: rgba(255, 255, 255, 0.01);
      font-size: 4rem;
      color: gray;
      border-radius: 50%;
      outline: none;

      @media ${device.laptopS} {
        display: none;
      }

      &:hover {
        opacity: 1;
      }
      &:active {
        transform: translateY(4px);
      }
    }
    .carousel__left_btn {
      margin-left: 15px;
      z-index: 9999;
    }
    .carousel__right_btn {
      margin-right: 15px;
    }
  }

  .slide {
    display: none;
    height: 100%;
  }
  .active {
    display: block;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const items = [
  {
    src: image01,
    caption: "The Soul Food & Bistro"
  },
  {
    src: image02,
    caption: "Welcome to Restaurant"
  },
  {
    src: image03,
    caption: "Elixir Exclusively Food"
  }
];

class Carousel extends Component {
  // PREVENT MEMORY LEAKAGE by unmounting interval
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    if (this._isMounted) {
      this.interval = window.setInterval(() => {
        this.next();
        console.log("next", this.next.length);
      }, 4000);
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
    clearInterval(this.interval);
  };

  //carouse control
  next = () => {
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };
  //carouse control
  previous = () => {
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  render() {
    const { activeIndex } = this.state;
    // first param deconstruct item of object second is the length
    const slides = items.map(({ src, caption }, index) => {
      // check if the index is equal to currentIndex if it is add className
      let computedClass = index === activeIndex ? "slide active" : "slide";
      return (
        <section
          className={computedClass}
          key={index}
          style={computedClass ? { backgroundImage: `url(${src})` } : null}
        >
          <div className="carousel__content">
            <div className="carousel__controls_wrapper">
              {/* left carousel button */}
              <button className="carousel__left_btn" onClick={this.previous}>
                <i className="fas fa-caret-left" />
              </button>
              {/* big image within jumbotron */}
              <img
                className="carousel__fine_dinning"
                src={logoIntro}
                alt="fine dinning"
              />
              <button className="carousel__right_btn" onClick={this.next}>
                <i className="fas fa-caret-right" />
              </button>
            </div>
            {/* big title  */}
            <h2 className="carousel__caption">{caption}</h2>
            {/* gold arrow  */}
            <img className="carousel__arrow" src={sideSeparator} alt="arrow" />
            <p>The Chef creates divine combinations</p>
            {/* still need to work on animation of going down arrow */}
            <a className="carousel__go-down" href="#about">
              <i className="fas fa-angle-down" />
            </a>
          </div>
          {/* carousel content wrapper */}
        </section>
      );
    });
    return (
      <HeaderMainStyle>
        {/* render items here images */}
        {slides}
      </HeaderMainStyle>
    );
  }
}

export default Carousel;

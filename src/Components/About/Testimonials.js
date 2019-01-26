import React, { Component } from 'react';
import styled from 'styled-components';

import testimonialsLogo from '../../assets/home/testimonials_logo.png';
import parallax02 from '../../assets/parallax/parallax02.jpg';

const TestimonialsWrapper = styled.div`

.testimonials { 
    background-image: url(${parallax02});
    min-height: 450px;
    background-position: 50% 50% !important;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

.testimonials__logo {
  display: flex;
  padding: 20px 0;
  margin: 0 auto;
}
.testimonials__flex {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .testimonial__title { 
    text-align: left;
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    font-size: 3rem;
    color: var(--goldBtn);
    text-transform: uppercase;
  }
  .testimonial__single__quote {
    color: var(--goldBtn);
    font-weight: 700;
    font-size: 7.2rem;
    font-family: Bitter;
    text-transform: uppercase;
  }
}

.slide  {
  display: none;
}
.active { 
display: block;
min-height: 200px;
overflow: hidden;
}

.message { 
  font-family: "Cabin", sans-serif;
    text-align: left;
    font-weight: 400;
    color: #e2e9ed;
    font-size: 2.5rem;
    line-height: 1.8em;
    margin-top: 30px;
    margin-bottom: 30px;
}

.name { 
  font-family: "Cabin", sans-serif;
    font-style: italic;
    font-size: 2rem;
    color: #bfa760;
    font-weight: 700;
    display: block;
    margin: 20px 0;
}

.carousel__indicators { 
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.carousel__indicator {
  border-radius: 100px;
  cursor: pointer;
    border: 2px solid #C1A667;
    width: 12px;
    height: 12px;
    background: transparent;
    margin: 0px 2px;
    margin-top: 15px;
}
.carousel__indicator--active {
  background: #C1A667;
}

`
const testimonials = [
  {
    message: 'Applicake chocolate cake wafer toffee pie souffle wafer. Tart marshmallow wafer macaron cheescake jelly. Gingerbread cookie souffle sweet roll sweet roll jelly-o.',
    name: "- Alexander Smith"
  },
  {
    message: `"Awesome to work with. Incredibly organized, easy to communicate with, responsive with next iterations, and beautiful work. It's great to work with someone so open-minded and responsive. Thank you!"`,
    name: "- John Berthier"
  },
  {
    message: `"Your designs were exactly what josef had always imagined - clear, clean, continous, with focus on stylistic elements. It was a major help for us. Thank you so much for your work on this project."`,
    name: "- Carolyn Meyer"
  }
]


class Testimonials extends Component {
  state = {
    activeIndex: 0
  }

  goToSlide = (newIndex) => {
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    let testimonial = testimonials.map((item, index) => {
      let computedClass = activeIndex === index ? "slide active" : "slide";
      return (
        <div className={computedClass} key={index}>
          <span className="message">{item.message}</span>
          <span className="name">{item.name}</span>
        </div>
      )
    })
    return (
      <TestimonialsWrapper>
        <div className="testimonials">
          <div className="wrapper">
            <img src={testimonialsLogo} alt="testimonials" className="testimonials__logo" />
            <div className="testimonials__flex">
              <h2 className="testimonial__title">testimonials</h2>
              <span className="testimonial__single__quote">”</span>
            </div>
            {
              testimonial
            }
            {/* Indicators */}
            <ul className="carousel__indicators">
              {testimonials.map((slide, index) =>
                <li key={index} className={
                  index === activeIndex
                    ? "carousel__indicator carousel__indicator--active"
                    : "carousel__indicator"
                }
                  onClick={(e) => this.goToSlide(index)}
                ></li>
              )}
            </ul>
          </div>
        </div>

      </TestimonialsWrapper>

    );
  }
}

export default Testimonials;
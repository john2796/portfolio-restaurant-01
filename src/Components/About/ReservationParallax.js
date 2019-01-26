import React from 'react';
import styled from 'styled-components';

import parallax01 from '../../assets/parallax/parallax01.jpg';
import columnDivider from '../../assets/home/column_divider.png';
import timetable01 from '../../assets/home/timetable-decorator.png'
import timetable02 from '../../assets/home/timetable-decorator2.png'

const ReservationParallaxWrapper = styled.div`
.parallax {
  /* The image used */
  background-image: url(${parallax01});
  
  /* Set a specific height */
  min-height: 528px;
  
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: 50% 50% !important;
  background-position-x: 50% !important;
  background-position-y: 50% !important;
  background-repeat: no-repeat;
  background-size: cover;
  
  padding-top: 30px;
  padding-bottom: 40px;
}
.parallax__content { 
  color: var(--white);              
}

.parallax__title { 
  color: var(--white);
  font-family: 'Oswald', sans-serif;
    font-size: 3.9rem;
    font-weight: 700;
    padding-top: 4px;
    line-height: 110px;
    vertical-align: center;
    

    &::before {
    content: url(${timetable01});
    width: 200px;
    height: 110px;
    vertical-align: -40%;
  
    }
    &::after {
    content: url(${timetable02});
    width: 200px;
    height: 110px;
    vertical-align: -40%;
  
    }
}

.parallax__subtitle { 
  font-family: "Yellowtail", serif;
    font-size: 2.4rem;
    color: var(--gold);
    text-align: center;
    margin-bottom: 15px;
    margin-top: -105px;
 }

.parallax__flex { 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  
    .parallax__item {
      align-self: flex-start;
      margin-top: 20px;
      h4 { 
      font-size: 4.3rem;
      line-height: 48px;
      color: #B29859;
      font-family: "Yellowtail", serif;
      margin: 20px 0 14px 0;
    }
  }


  .parallax__hours { 
    font-family: "Oswald", sans-serif;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    display: flex;
    justify-content: center;
  }
}

.parallax__number { 
  margin-top: 40px;
    font-family: "Oswald", sans-serif;
    color: var(--white);
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
}


`





const ReservationParallax = (props) => {
  return (
    <ReservationParallaxWrapper>
      <div className="parallax">
        <div className="parallax__content">
          <h2 className="parallax__title">Opening Hours</h2>
          <div className="parallax__subtitle">Call for Reservations</div>


          <div className="parallax__flex">
            <div className="parallax__item parallax__item01">
              <h4>Sunday to <br /> Tuesday</h4>
              <span className="parallax__hours">09:00</span> <br />
              <span className="parallax__hours">24:00</span>
            </div>

            <div className="parallax__item parallax__divider">
              <img src={columnDivider} alt="divider" />
            </div>

            <div className="parallax__item parallax__item02">
              <h4>Friday and <br /> Saturday</h4>
              <span className="parallax__hours">08:00</span> <br />
              <span className="parallax__hours">03:00</span>
            </div>
          </div>

          <div className="parallax__number">reservation number 0254-5135485</div>

        </div>
      </div>

    </ReservationParallaxWrapper>
  );
}

export default ReservationParallax;
import React, { Component } from 'react';
import styled from 'styled-components';
import MainSubTitle from '../MainSubTitle';

import logo from '../../assets/reservation/reservation.png';
import ornament from '../../assets/reservation/ornament.png'
import Form from './Form';
import Button from '../Button'



const ReservationWrapper = styled.div`
.reservation__title {
  color: var(--black);
  margin-top: -40px;
}
p {
  text-align: center;
  font-style: italic;
  color: #6D6D6D;
  line-height: 1.4;
  
  margin-bottom: 60px;
}

.welcome {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

}
.welcome__title {
  text-transform: uppercase;
    color: var(--black);
    text-align: center;
    font-family: "Oswald",sans-serif;
    font-size: 4.8rem;
    font-weight: 400;
    margin: 15px 0px 15px 0px;
    
}
.welcome__subtitle {
  font-family: "Yellowtail";
    font-size: 2.4rem;
    color: #141313;
    font-weight: 400;
    line-height: 0.5;
    text-align: center;
    z-index: 9999;
    display: flex;
    align-items: center;
}
.above{ 
      margin: 0 20px;
    }
    .welcome__hr {
      border-color: #C4C0C1;
      width: 100px;
    }
    .open__hours {
      width: 130px;
      border-color: gray;
    }

.welcome__hours {
  font-family: "Cabin", sans-serif;
    font-weight: 500;
    color: #7d7a7a;
    font-size: 1.8rem;
    text-align: center;
    margin: 20px 0px;
    font-style:normal;
}

.welcome__num {
  font-weight: 300;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #444342;
    text-align: center;
    font-family: "Oswald",sans-serif;
    font-size: 4.8rem;
    font-weight: 100;
    margin: 15px 0px 15px 0px;
}

.reservation__btn {
  margin-bottom: 1px;
}

.ornament {
  margin: 50px auto;
  display: flex;
}
`

class Reservation extends Component {
  state = {}
  render() {
    return (
      <ReservationWrapper>
        <MainSubTitle className="reservation__title">reservations</MainSubTitle>
        <p>
          Booking a table has never been so easy with free & instant online <br /> restaurant reservations, booking now!!</p>
        <div className="welcome">
          <img src={logo} alt="logo" />

          <h4 className="welcome__subtitle">
            <hr className="welcome__hr" />
            <span className="above">Welcome to elixir</span>
            <hr className="welcome__hr" />
          </h4>
          <h2 className="welcome__title">Make a reservation</h2>

          <h4 className="welcome__subtitle">
            <hr className="welcome__hr open__hours" />
            <span className="above">open hours</span>
            <hr className="welcome__hr open__hours" />
          </h4>
          <p className="welcome__hours">
            Sunday to Tuesday <span>09:00 - 24:00</span>
            Friday and Sunday <span>08:00 - 03: 00</span>
          </p>
          <h2 className="welcome__num">+1-506-890-0179</h2>
        </div>
        <Form />
        <Button
          className="reservation__btn"
        >
          make reservation
        </Button>
        <img
          src={ornament}
          alt="design"
          className="ornament"
        />

      </ReservationWrapper>
    );
  }
}

export default Reservation;

import React, { Component } from 'react';
import styled from 'styled-components';
import Steak from '../Foods/Steak';
import Drinks from '../Foods/Drinks';
import Desserts from '../Foods/Desserts';

import mainMenu01 from '../../assets/home/mainMenu01.png';
import mainMenu02 from '../../assets/home/mainMenu02.png';
import mainMenu03 from '../../assets/home/mainMenu03.png';
import ornament from '../../assets/home/ornament.png';
import { device } from '../../Theme/MediaQueries';

const MainMenuWrapper = styled.div`

.menu__logo { 
    padding: 50px 0;
    margin: 0 auto;
    display: flex;
  }

  .menu__flex { 
    display: flex; 
    justify-content: space-between;
  @media ${device.tablet}{
    flex-direction: column;
  }


    .menu__title { 
      h3 { 
     text-transform: uppercase;   
      color: var(--darkGold);
      font-family: "Oswald", sans-serif;
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 33px;
      }
    }
  }


  .menu__item .items {
    width: 300px;
    /* border: 1px solid red; */
    @media ${device.tablet}{
     width: 100%;
  }
    margin-bottom: -40px;
      .menu__caption { 
      text-transform: uppercase;
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-size: 2rem;
      color: #0c0901;
      margin-bottom: 10px;
      text-align: left;
    
    }
    .menu__item__flex {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: -11px;
    

    .menu__ingredients { 
      font-size: 1.3rem;
      text-transform: none;
      font-weight: 400;
      color: #484745;
    }

    .menu__price { 
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 14px;
      color: #bfa760;
    }
   }
  }

  .main__menu__content {
    h2{
      display: block;
    margin: 0 auto;
    font-family: "Oswald", sans-serif;
    font-size: 5.2rem;
    font-weight: 300;
    text-align: center;
    color: #887025;
    text-transform: uppercase;
    margin-top: 100px;
    
    }
    p{
    color: #bfa760;
    margin: 0 auto;
    font-family: "Yellowtail";
    font-size: 2.6rem;
    text-align: center;
    margin-top: 15px;
    font-style: italic;
    font-weight: 300;
    letter-spacing:2px;
    }
    img {
    display: block;
    margin: 0 auto;
    margin-bottom: 3rem;
    }
  }

  .main__menu__ornament {
    margin: 50px 0;
    img{
      display: flex;
      margin: 0 auto;
    }
  }


`

class MainMenu extends Component {
  state = {}
  render() {
    return (
      <MainMenuWrapper>
        {/* Steaks */}
        <div className="wrapper">
          <div className="main__menu__content">
            <h2>Steaks</h2>
            <p>Exclusive and delicious beef</p>
            <img src={mainMenu03} alt="..." />
          </div>

          <div className="menu__flex">
            <div className="menu__item menu__title">
              <Steak />
            </div>
            <div className="menu__item menu__title">
              <Steak />
            </div>
            <div className="menu__item menu__title">
              <Steak />
            </div>
          </div>
        </div>

        {/* Salads */}
        <div className="wrapper">
          <div className="main__menu__content">
            <h2>Salads</h2>
            <p>Exclusive and delicious beef</p>
            <img src={mainMenu02} alt="..." />
          </div>

          <div className="menu__flex">
            <div className="menu__item menu__title">
              <Drinks />
            </div>
            <div className="menu__item menu__title">
              <Drinks />
            </div>
            <div className="menu__item menu__title">
              <Drinks />
            </div>
          </div>
        </div>




        {/* Desserts */}
        <div className="wrapper">
          <div className="main__menu__content">
            <h2>Desserts</h2>
            <p>Exclusive and delicious beef</p>
            <img src={mainMenu01} alt="..." />
          </div>

          <div className="menu__flex">
            <div className="menu__item menu__title">
              <Desserts />
            </div>
            <div className="menu__item menu__title">
              <Desserts />
            </div>
            <div className="menu__item menu__title">
              <Desserts />
            </div>
          </div>
        </div>

        <div className="main__menu__ornament">
          <img src={ornament} alt="ornament" />
        </div>
      </MainMenuWrapper>
    );
  }
}

export default MainMenu;
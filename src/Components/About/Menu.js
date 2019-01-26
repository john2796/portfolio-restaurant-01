import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../Theme/MediaQueries'

import menuLogo from '../../assets/home/menu_logo.png';
import Steak from '../Foods/Steak';
import Drinks from '../Foods/Drinks';
import Desserts from '../Foods/Desserts';
import Button from '../Button';



const MenuWrapper = styled.div`
  .menu__logo { 
    padding: 50px 0;
    margin: 0 auto;
    display: flex;
  }

  .menu__flex { 
    display: flex; 
    justify-content: space-between;
    @media ${device.laptop}{
        flex-direction: column;
      }


    .menu__title { 
      h3 { 
     text-transform: uppercase;   
      color: var(--darkGold);
      font-family: "Oswald", sans-serif;
      font-size: 2.4rem;
      font-weight: 400;
      margin-bottom: 33px;
      }
    }
  }


  .menu__item .items {
    width: 260px;
    @media ${device.laptop}{
         width:100%;
        }
  
    /* border: 1px solid red; */
    margin-bottom: -40px;
      .menu__caption { 
      text-transform: uppercase;
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      color: #0c0901;
      margin-bottom: 10px;
      text-align: left;
      @media ${device.laptop}{
          font-size: 1.6rem;
        }
    }
    .menu__item__flex {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: -14px;
      @media ${device.laptop}{
         width:100%;
        }
    

    .menu__ingredients { 
      font-size: 1.3rem;
      text-transform: none;
      font-weight: 400;
      color: #484745;
      @media ${device.laptop}{
         font-size: 1.6rem;
        }
    }

    .menu__price { 
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 1.4rem;
      color: #bfa760;
      @media ${device.laptop}{
        font-size: 1.8rem;
     }
    }
   }
  }



`
class Menu extends Component {
  state = {}
  render() {
    return (
      <MenuWrapper>
        <div className="wrapper">
          <img src={menuLogo} alt="menu" className="menu__logo" />
          <div className="menu__flex">
            <div className="menu__item menu__title">
              <h3>prime steaks</h3>
              <Steak />
            </div>
            <div className="menu__item menu__title">
              <h3>drinks & wines</h3>
              <Drinks />
            </div>
            <div className="menu__item menu__title">
              <h3>desserts</h3>
              <Desserts />
            </div>
          </div>
          <Button>view complete menu</Button>
        </div>
      </MenuWrapper>

    );
  }
}

export default Menu;
import React from 'react';
import styled from 'styled-components';

const SteakWrapper = styled.div`

.menu__flex { 
    display: flex; 
    justify-content: space-between;

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
    margin-bottom: -40px;
      .menu__caption { 
      text-transform: uppercase;
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #0c0901;
      margin-bottom: 10px;
      text-align: left;
    }
    .menu__item__flex {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: -14px;
    

    .menu__ingredients { 
      font-size: 13px;
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


`


const primesteak = [
  {
    caption: 'FILET',
    ingredients: "7 oz. Center Cut10 oz. Double cut",
    price: "$14.49"
  },
  {
    caption: 'BOINE IN FILET',
    ingredients: "10 oz Greg Norman Ranch, Australia",
    price: "$20.50"
  },
  {
    caption: 'NEW YORK STRIP',
    ingredients: "9 oz. Center Cut12 oz. Double cut oz",
    price: "$9.99"
  },
  {
    caption: 'PORTERHOUSE',
    ingredients: "7 oz. Center Cut10 oz. Double cut",
    price: "$7.99"
  },
  {
    caption: 'DELMONICO',
    ingredients: "10 oz Greg Norman Ranch, Australia",
    price: "$17.99"
  },
]

const Steak = () => (
  primesteak.map(({ caption, ingredients, price }, index) => (

    <SteakWrapper key={index}>
      <div className="items">
        <h3 className="menu__caption">
          {caption}
        </h3>
        <div className="menu__item__flex">
          <div className="menu__ingredients"><span>{ingredients}</span></div>
          <p className="menu__price">{price}</p>
        </div>
      </div>
    </SteakWrapper >
  ))
)

export default Steak;
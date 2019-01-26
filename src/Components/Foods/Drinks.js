import React from 'react';



const drinkMenu = [
  {
    caption: 'RAIMAT ABADIA',
    ingredients: "Complex, Dark Cherry, Spice, bodied",
    price: "$8.50"
  },
  {
    caption: 'EDEN CHARDONNAY',
    ingredients: "Elegant, Lemon, Vanilla, bodied",
    price: "$15.50"
  },
  {
    caption: 'MAILLY BRUT RESERVA',
    ingredients: "Dry, Toast, Citrus, Medium-bodied",
    price: "$17.50"
  },
  {
    caption: 'LEON V DE ARMENIA',
    ingredients: "Crisp, Citrus, Full-bodied",
    price: "$12.50"
  },
  {
    caption: 'CABERENET SAUVIGNON',
    ingredients: "Intense, Cherry, Chocolate, Full-bodied",
    price: "$30.50"
  },
]

const Drinks = () => (
  drinkMenu.map(({ caption, ingredients, price }, index) => (
    <div className="items" key={index}>
      <h3 className="menu__caption">
        {caption}
      </h3>
      <div className="menu__item__flex">
        <div className="menu__ingredients">{ingredients}</div>
        <p className="menu__price">{price}</p>
      </div>
    </div>
  ))
)

export default Drinks;
import React, { useContext } from 'react';
import { PizzaContext } from '../store/PizzaContext';
import Button from './Button';
const PizzaList = () => {
  let { pizzas } = useContext(PizzaContext);

  let jsxPizzaList = pizzas.map(pizza => (
    <div className='pizza-container' key={pizza.title}>
      <img src={pizza.imgUrl} alt={pizza.title} />
      <p>{pizza.title}</p>
      <p>{pizza.description}</p>
      <Button />
    </div>
  ))

  return(
    <>
    {jsxPizzaList}
    </>
  )
}

export default PizzaList;
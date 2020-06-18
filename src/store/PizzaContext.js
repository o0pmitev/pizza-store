import React, {createContext, useState} from 'react';

export const PizzaContext = createContext();

const PizzaProvider = (props) => {
  const [pizzas, setPizzas] = useState([
    {title: 'Magic Shrooms', description: 'Pizza with tomatoes and mushrooms', imgUrl: 'https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg'},
    {title: 'Salami Salami', description: 'Pizza with salami and salami', imgUrl: 'https://cdn.pixabay.com/photo/2016/03/05/21/46/american-1239081_960_720.jpg'},
    {title: 'Olive Oil', description: 'Pizza with olives', imgUrl: 'https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000599_960_720.jpg'},
    {title: 'Cheezer', description: 'Pizza with 4 cheese', imgUrl: 'https://cdn.pixabay.com/photo/2015/09/09/20/13/pizza-933032_960_720.jpg'}
  ])

  let shareData = {
    pizzas
  }

  return(
    <PizzaContext.Provider value={shareData}>
      {props.children}
    </PizzaContext.Provider>
  )
}


export default PizzaProvider
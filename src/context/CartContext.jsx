import React, { createContext, useState} from 'react';

export const CartContext = createContext();


export default function UseCartContext({ children }){

  const [cartList, setCart] = useState([]); // {nombre: nombre, precio:precio,itemQ: qty} 

  function guardarItem(newItem) {
    const index = cartList.findIndex( item => newItem.item.id=== item.item.id) // si no lo encuentra me devuelve -1, si lo encuentra me duelve la posicion 
    
    if (index===-1) { // si no encuentra nada, lo agrega al cartList
      setCart([...cartList, newItem]) // [...cartList, newItem] para ir agregando nuevos objetos en el cartList y se vayan acumulando
    } else {
      const newQty = cartList[index].itemQ + newItem.itemQ
      const oldList = cartList.filter(old=> old.item.id !== newItem.item.id)
      setCart([...oldList, {item: newItem.item , itemQ: newQty}])
    }
    
    
  }   


  return (
    <CartContext.Provider value={{
        cartList,
        guardarItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


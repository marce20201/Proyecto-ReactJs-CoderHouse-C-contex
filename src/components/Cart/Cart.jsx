import React, { useContext } from 'react';
import {CartContext} from './../../context/CartContext'
function Cart() {
    const {cartList, guardarItem}= useContext(CartContext)
    console.log(guardarItem)
    return (
        <>
        <h2>Carrito de compras</h2>
        <ul>
        {cartList.map(item =>
            <li key = {item.item.id}>
                <p>Producto:{item.item.nombre}</p>
                <p>Precio: ${item.item.precio}</p>
                <p>Cantidad :{item.itemQ} productos totales</p>
                <p>-------------------------</p>
            </li>
            )}
        </ul>
            
            
        </>
        
    )
}

export default Cart

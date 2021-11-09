import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import {Link} from 'react-router-dom'

export default function CartWidget() {
    return (
        <Link to="/cart">
            <div className="icono-carrito" >
                <FontAwesomeIcon icon={faShoppingCart} size='2x'/>
            </div>
        </Link>
        
    )
}

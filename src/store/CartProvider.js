import CartContext from "./cart-context"

import React, {useState } from "react"

const CartProvider = (props) => {


    const [items, setItems] = useState([])
    const addItemToCartHandler = (dumMeal) => {
        
        setItems((prev) => {

            let exiItemInd = prev.findIndex((item) => {
                return item.id == dumMeal.id
            })
            
            if (exiItemInd == -1) {

                return [...prev, dumMeal]

            }
            else {
                let intQty=parseInt(prev[exiItemInd].qty)

                prev[exiItemInd].qty=intQty+Number(dumMeal.qty)

                return [...prev]
            }
        })

    }


    const removeItemFromCartHandler = (dumMeal) => {

        setItems((prev) => {

            let exiItemInd = prev.findIndex((item) => {
                return item.id == dumMeal.id
            })
            
            if (exiItemInd == -1) {

                return

            }
            else {
                let intQty=parseInt(prev[exiItemInd].qty)

                prev[exiItemInd].qty=intQty-Number(dumMeal.qty)

                return [...prev]
            }
        })

     }

    const cartContext = {
        items: items,
        totalQty: items.length,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}
        >{props.children}</CartContext.Provider>
    )
}

export default CartProvider
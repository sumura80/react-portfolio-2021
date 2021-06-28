import React from 'react'
import ShoppingListContexProvider from './ShoppingListContext';
import ShoppingForm from './ShoppingForm'
import ShoppingList from './ShoppingList'
import ShoppingHeader from './ShoppingHeader'



const Shopping = () => {
  return (
    <ShoppingListContexProvider>
        <div className="cookingWrap">
        <ShoppingHeader />
        <ShoppingForm />
        <ShoppingList />      
      </div>
    </ShoppingListContexProvider>
  )
}

export default Shopping

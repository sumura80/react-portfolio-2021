import React,{useContext} from 'react'
import ShoppingItem from './ShoppingItem'
import { ShoppingListContext } from './ShoppingListContext'


const ShoppingList = () => {
  const {tasks}= useContext(ShoppingListContext)
  return (
    <div className="ingredientWrap">
      <div className="row">
        <div className="col-md-8 offset-md-2 ingredientContent mt-4">
          <h4 className="mt-4">材料</h4>
          {tasks.length ? (
            <ul className="list">
            {tasks.map(task=>{
              return(
              <ShoppingItem task={task} key={task.id}/>
              
              )
            })}
          </ul>
          ): (<div className="pb-4">登録している材料はありません</div>)}
       </div>
    </div>
  </div>
  )
}

export default ShoppingList

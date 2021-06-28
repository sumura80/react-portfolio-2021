import React,{useContext,useState, useEffect} from 'react'
import { ShoppingListContext } from './ShoppingListContext'

const ShoppingForm = () => {
  const {addTask, clearList,editItem, editTask} = useContext(ShoppingListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(title){
      if(editItem === null){
        addTask(title)
        setTitle('') 
      }else{
        editTask(title,editItem.id)
      }
    }
  }

  useEffect(()=>{
    if(editItem !== null){
      setTitle(editItem.title)
      console.log(editItem )
    }else{
      setTitle('')
    }
  },[editItem]) 
  return (
    <div className="row">
    <div className="form-inline col-md-8 offset-md-2">
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <input type="text" name="title" className="form-control mr-2 shoppingInput" value={title} onChange={(e)=>setTitle(e.target.value) }/>
          <button type="submit" className="btn btn-primary mr-2">
            {editItem ? '材料変更'　: '材料追加'}
        　 </button>
        </div>
      </form>
        <div className="form-group">
        <button onClick={clearList}  className="btn btn-secondary">すべて削除</button>
        </div>
    </div>
    </div>
  )
}

export default ShoppingForm

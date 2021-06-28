import React ,{createContext, useState}from 'react'

export const ShoppingListContext = createContext()

const ShoppingListContexProvider = (props) => {
  const [tasks, setTasks] = useState([
    {title: "じゃがいも", id:1},
    {title: "ニンジン", id:2}
  ])
  //編集するアイテムを設定
  const [editItem, setEditItem]= useState(null)
  //taskを追加する
  const addTask =(title)=>{
    setTasks([...tasks, {title, id: new Date().getTime().toString()}])
  }
  //taskを削除する
  const removeTask = (id)=>{
    setTasks(tasks.filter(task=> task.id !== id))
  }
  // listごと削除
  const clearList = () => {
    setTasks([])
  }

  //編集用のidを特定
  const findItem = (id)=>{
    const item = tasks.find(task=> task.id === id)
    setEditItem(item)
  }

  //idを下に編集
  const editTask =(title,id)=>{
    const newTasks = tasks.map(task=> task.id === id? {title,id}: task)
    setTasks(newTasks)
    setEditItem(null)
  }
 
  return (
    <ShoppingListContext.Provider value={{tasks,addTask,removeTask,clearList,findItem, editItem, editTask}}>
      {props.children}
      
    </ShoppingListContext.Provider>
    
  )
}
export default ShoppingListContexProvider


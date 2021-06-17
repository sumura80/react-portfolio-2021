import React,{useState} from 'react'
import {JavaScriptItems} from './JavaScriptItems'
import JsCategories from './JsCategories'
import JsMenu from './JsMenu'

const JavaScriptWrap = () => {
  const [jsItems, setJsItems] = useState(JavaScriptItems)  
  const [jsCategories, setJsCategories] = useState([])  

  const filterItems = (category)=>{
    if(category === 'all'){
      setJsItems(JavaScriptItems)
      return;
    }
    const newJsItems = JavaScriptItems.filter((item)=> item.category === category)
    setJsItems(newJsItems)
  };
  return (
    <main>
      <section className="jsSection mt-4">
        
      <h2>①JavaScript人気教材</h2>
      <JsCategories filterJsItems={filterItems}/>
      <JsMenu jsItemsProps={jsItems}/>
      </section>
      <hr />
    </main>　
  )
}

//  const items  =[
//   {
//     id: 1,
//     title:'JSの基礎',
//     category: 'React.js',
//     price:2200,
//     img: './images/jsItem-1.jpeg',
//     body: `this is a first react js test`
//   },
//   {
//     id: 2,
//     title:'Vue.js を学ぼう',
//     category: 'React.js',
//     price:2200,
//     img: './images/jsItem-1.jpeg',
//     body: `this is a first react js test`
//   },
//  ]
  


export default JavaScriptWrap

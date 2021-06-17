import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {JavaScriptItems} from './JavaScriptItems'

const JsItem = () => {
  console.log()
  const [title, setTitle] = useState('JavaScript教材')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [img, setImg] = useState('')
  const [body, setBody] = useState('')
  const {id}  = useParams();
  useEffect(()=>{
    const newBook = JavaScriptItems.find((book)=> book.id === parseInt(id))
    setTitle(newBook.title)
    setCategory(newBook.category)
    setPrice(newBook.price)
    setImg(newBook.img)
    setBody(newBook.body)
   
  },[])
  return (
    <div className="container">
      <h3 className="mt-4">JavaScript関連教材詳細</h3>
      <div className="detailBox">
        
        <div className="title lead font-weight-bold">{title}</div>
        <div className="">カテゴリー：{category}</div>
        <div className="row jsintro">
          <div className="col-sm-3 imageWrap mt-4">
            <img src={img} alt={title} className="jsbookSize img-fluid"/>
            <p>¥{price.toLocaleString()} </p>
          </div>

          <div className="col-sm-8 offset-sm-1 pl-4 ">
            <div className="jsitemBody mt-4">
            {body}
            </div>
          </div>

        </div>
      </div>



      <Link to="/" className="btn btn-warning mt-4">Topへ戻る</Link>
    </div>
  )
}

export default JsItem

import React,{useState} from 'react'
import { DessertMenu } from './DessertMenu'
import { RiArrowLeftCircleLine,RiArrowRightCircleLine } from 'react-icons/ri';
const Dessert = () => {
  const [index, setIndex] = useState(0);
  const {name, brandname, image, body} = DessertMenu[index];
  const checkNumber = (number) =>{
    if(number > DessertMenu.length -1 ){
      return 0
    }
    if(number < 0 ){
      return DessertMenu.length -1
    }
    return number;
  }

  const prevDessert =() =>{
    setIndex((index)=>{
       let newIndex = index + 1
       return checkNumber(newIndex);
    })
  }
  const nextDessert = ()=>{
    setIndex((index)=>{
      let newIndex = index - 1
      return checkNumber(newIndex);
    })
  }

  const randomDessert = ()=>{
    let randomNumber = Math.floor(Math.random() * DessertMenu.length); 
    if(randomNumber === index ){
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
    console.log(randomNumber)
  }

  return (
    <div className="dessertWrap">
      <h2>③今夜のデザートは何にしますか？<span><img src="../images/dessert_06.png" alt="purin" className="dessert-top"/></span></h2>
        <div className="img-container">
        <h3 className="alert alert-success" style={{width:'70%', marginLeft:'10%'}}>{name}</h3>
          <img src={image} alt={name} className="img-fluid" style={{Width:'400px', height:'300px'}}/>
          <div className="brandInfo">製造先:{brandname}</div>
          <div className="dessertBody">{body}</div>

          <div className="row justify-content-center">
            <div className="col-sm-8 mt-4">
            <button className="arrow-btn btn btn-secondary" onClick={prevDessert}><span style={{fontSize: '1.8em'}}> <RiArrowLeftCircleLine  /></span></button>
          <button className="arrow-btn btn btn-secondary" onClick={nextDessert}><span style={{fontSize: '1.8em'}}> <RiArrowRightCircleLine/></span></button><br />
          <button className="random-btn mt-4 btn btn-info" onClick={randomDessert}>ランダムで決める</button> 
              
            </div>
          </div>



          
         
        </div>
    </div>
    
  )
}

export default Dessert

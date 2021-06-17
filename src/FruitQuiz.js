import React from 'react'
import { useState } from 'react'
const buttonsLeftData = [
  {id:1 ,word:'ト'},
  {id:2 ,word:'ミ'},
  {id:3 ,word:'メ'},
  {id:4 ,word:'ポ'},
]

const buttonsMiddleData = [
  {id:1 ,word:'マ'},
  {id:2 ,word:'シ'},
  {id:3 ,word:'ロ'},
  {id:4 ,word:'ウ'},
]

const buttonsRightData = [
  {id:1 ,word:'キ'},
  {id:2 ,word:'パ'},
  {id:3 ,word:'モ'},
  {id:4 ,word:'ン'},
]

const FruitQuiz = () => {
  const [buttonsLeft, setButtonsLeft] = useState(buttonsLeftData)
  const [buttonsMiddle, setButtonsMiddle] = useState(buttonsMiddleData)
  const [buttonsRight, setButtonsRight] = useState(buttonsRightData)
  const removeItem = (id)=>{
    let newButtons = buttonsLeft.filter((button)=> button.id !== id);
    setButtonsLeft(newButtons)
    console.log(newButtons)
  }

  const removeMiddleItem = (id)=>{
    let newButtons = buttonsMiddle.filter((button)=> button.id !== id);
    setButtonsMiddle(newButtons)
    console.log(newButtons)
  }

  const removeRightItem = (id)=>{
    let newButtons = buttonsRight.filter((button)=> button.id !== id);
    setButtonsRight(newButtons)
    console.log(newButtons)
  }
  
  return ( 
    <React.Fragment>
      <h3>⑤果物の名前になるように不要な文字を消してください</h3>
      <div className="quizWrap">
          <div className="quizName"> 1.夕張で有名な果物 <img src=".././images/melon.png" alt="quiz image" className="melonQuiz"/></div>
        <div className="quizBoxes mx-auto d-flex">
          <div className="buttonsLeft quizBox">
            {buttonsLeft.map((leftbuttons)=>{
              const { id, word }  = leftbuttons;
              return (
                <div className="buttonsData" key={id}>
                  <h4>{word} <button  className="btn btn-outline-danger btn-lg" onClick={()=>removeItem(id)}>x</button></h4>
                </div> 
              )
            })}
          </div>


             <div className="buttonsLeft quizBox">
              {buttonsMiddle.map((middlebuttons)=>{
                const { id, word }  = middlebuttons;
                return (
                  <div className="buttonsData" key={id}>
                    <h4>{word} <button  className="btn btn-outline-danger btn-lg" onClick={()=>removeMiddleItem(id)}>x</button></h4>
                  </div> 
                )
              })}
            </div>

            <div className="buttonsRight quizBox">
              {buttonsRight.map((rightbuttons)=>{
                const { id, word }  = rightbuttons;
                return (
                  <div className="buttonsData" key={id}>
                    <h4>{word} <button className="btn btn-outline-danger btn-lg" onClick={()=>removeRightItem(id)}>x</button></h4>
                  </div> 
                )
              })}
            </div>



               

        </div> {/* quizBox d-flex*/}
             
      </div> {/* quizWrap */}
      <hr />
    </React.Fragment>
    
  )
}

export default FruitQuiz

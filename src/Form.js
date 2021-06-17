import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [people, setPeople] = useState([])
  const [show, setShow] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name && email && occupation){
      let newPerson = {id: new Date().getTime().toString(), name, email, occupation}
      setPeople((people)=>{
        return [...people, newPerson]
      })
      setShow(true)
      setName('')
      setEmail('')
      setOccupation('')

    }
  }

  const handleDelete = () =>{
    setPeople([])
    setShow(false)
  }

  return (
    <div className="formWrap">
      <h2>⑥あなたの情報を登録してください</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="label offset-md-1 col-sm-2 col-form-label font-weight-bold">お名前:</div>
          <div className="col-sm-8">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="label offset-md-1 col-sm-2 col-form-label font-weight-bold">Email:</div>
          <div className="col-sm-8">
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="label offset-md-1 col-sm-2 col-form-label  font-weight-bold">職業</div>
          <div className="col-sm-8">
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="form-control"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-4">
        <div className="offset-md-3 col-sm-8">
        <button className="btn btn-primary btn-lg btn-block">登録する</button>
          
          </div>
        </div>

        
      </form>

      <div className="row mt-4">
        <div className="offset-md-3 col-sm-8">
         { show &&  
        <div className="alert alert-success">
          {people.map((person)=>{
            const {id, name, email, occupation} = person
            return(
              <div className="personData" key={id}>
                <div className="d-flex justify-content-between">
                  <div>{occupation}の{name}様、ご登録ありがとうざいました。</div>
                  <div><button className="close btn" onClick={handleDelete}><AiOutlineCloseCircle /></button></div>
                </div>
                <p>{email}に詳細データをお送りいたします。</p>
                
              </div>
            )
          })}
        </div>
        }


          </div>
        </div>
    
    </div>
  );
};

export default Form;

import React from "react";
import ModalBox from "./ModalBox";
import { useState } from "react";
import { FaRegHandPointDown } from 'react-icons/fa';

const Modal = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
        <hr />

      <div className="modalWrap">

        <FaRegHandPointDown style={{fontSize: '3em', color:'#C5049B'}}/><span style={{fontSize:'1.2em'}}>④ぜひ名言を確認してみてください</span>
        <button className="btn btn-outline-info modalBtn d-block mx-auto btn-block btn-lg"
        onClick={()=> setShow(true)}>今日の名言を確認する</button>
        <ModalBox show={show} setShow={setShow}/>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Modal;

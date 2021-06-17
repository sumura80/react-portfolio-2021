import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from './Nav';
import JavaScriptWrap from './JavaScriptWrap';
import JsCategories from './JsCategories'
import MyappIntroAccordion from './MyappIntroAccordion'
import Dessert from './Dessert'
import FruitQuiz from './FruitQuiz';
import Modal from './Modal';
import Form from './Form'
import About from './About'
import Shop from './Shop'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

const Home = () => {
  return (
    <div>
           <div className="container">
       <JavaScriptWrap /> 
       <MyappIntroAccordion /> 
       <Dessert /> 
       <Modal /> 
       <FruitQuiz /> 
       <Form />

     

      </div> 
       {/* End of container */}
      
    </div>
  )
}

export default Home

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
import Home from './Home'
import ErrorPage from './ErrorPage';
import JsItem from './JsItem'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
function App() {
  return (
   
    <div className="App">
       <Router>
          <Nav />
         <Switch>
           <Route path="/" exact component={Home}/>
           {/* <Route path="/shop"  component={Shop}/>
           <Route path="/shop-item/:id" children={<ShopItem />} /> */}
           <Route path="/js-item/:id" children={<JsItem />} />
           <Route path="/about" component={About}/>
           <Route path="*" component={ErrorPage}/>
           </Switch>
      </Router>
 
     
    </div>
  
  );
}



export default App;

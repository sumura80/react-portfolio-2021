import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
   
    <div className="navWrap">
      <nav>
    
     <Link to='/' style={{ textDecoration: 'none', color:'#FFF' }}> <h4>React.jsポートフォリオ</h4></Link>
     <ul className="nav-links">
       
       {/* <Link to="/shop" style={{ textDecoration: 'none' }}>
          <li>Shop</li>
       </Link> */}

     

       <Link to="/about" style={{ textDecoration: 'none' }}>
         <li>About</li>
       </Link>

       
     </ul>
     </nav>
    </div> 
    //  End of navWrap
  )
}

export default Nav

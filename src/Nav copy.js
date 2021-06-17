import React from 'react'
import Button from 'react-bootstrap/Button';

const Nav = () => {
  return (
    <div className="navWrap">
      <nav　className="navbar navbar-expand-lg navbar-dark bg-info">
      <a　className="navbar-brand ml-4" href="#"><span style={{fontWeight: 'bold'}}> React.js ポートフォリオ</span></a>
      <button　className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span　className="navbar-toggler-icon"></span>
      </button>

      <div　className="collapse navbar-collapse" id="navbarSupportedContent">
 
        {/* ↓右寄りのリンク↓ */}
        <div　className="form-inline my-2 my-lg-0 ml-auto mr-4">
        <ul　className="navbar-nav">
          <li　className="nav-item">
            <a　className="nav-link active" style={{fontWeight:'bold',fontSize:'1.3em'}} href="#">Home <span　className="sr-only">(current)</span></a>
          </li>
          <li　className="nav-item ml-3">
            <a　className="nav-link active" style={{fontWeight:'bold', fontSize:'1.3em'}} href="#">About</a>
          </li>
        </ul>
        
        </div>　
        {/* ./　右リンクグループ */}
      </div>
          {/* 左右リンクグループ */}
    </nav>
      
    </div> 
    //  End of navWrap
  )
}

export default Nav

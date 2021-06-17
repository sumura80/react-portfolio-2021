import React from "react";
import { Link } from 'react-router-dom'
const JsMenu = (props) => {
  return (
    <div className="js-section">
      <div className="lead my-2">JavaScriptに関する人気の教材です。</div>

        <div className="row row-eq-height jsBox ">

        
      {props.jsItemsProps.map((jsitem) => {
        const { id, title, img, price, body } = jsitem;
        
        return (
          <article className="menu-item col-sm-4" key={id}>
              <div className="jsitem">
               
                <div className="cardBox mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="card-title">
                      <div>{title}</div>
                    </div>
                    <p className="card-text">
                    <img src={img} alt={title} style={{ width: "100px" }} />
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted"> <h4 style={{ fontSize: "1em" }}>{price.toLocaleString()}円</h4></small> */}
                    </p>
                  <Link to={`js-item/${id}`} className="btn btn-success"> 詳細を見る </Link>
                  </div>
                </div>
              </div>
                </div>

         
              <div className="endfloat"></div>
          </article>
        );
      })}

        </div>
    </div>
  );
};

export default JsMenu;

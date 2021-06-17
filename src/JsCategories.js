import React from 'react'

const JsCategories = ({filterJsItems}) => {
  return (
    <div className="filter-btn-wrap">
      <button className="filter-btn btn btn-outline-info mr-3" onClick={()=>filterJsItems('all')}>全て表示</button>
        <button className="filter-btn btn btn-outline-info mr-3" onClick={()=>filterJsItems('Vue.js')}>Vue.js</button>
      <button className="filter-btn btn btn-outline-info mr-3" onClick={()=>filterJsItems('React.js')}>React.js</button>
      
      <button className="filter-btn btn btn-outline-info mr-3" onClick={()=>filterJsItems('Angular')}>Angular</button>
        
      
      
    </div>
  )
}

export default JsCategories

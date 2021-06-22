import React,{useState} from 'react'

const MyappIntroAccordion = () => {
  const[showLA, setShowLA] = useState(false)
  const[showWorholizer, setShowWorholizer] = useState(false)
  const[showMed, setShowMed] = useState(false)
  const[showChildcare, setShowChildcare] = useState(false)
  return (
    <React.Fragment>
      <div className="myAppWrap">
      <h2>②これまで実運用しているアプリの紹介</h2>
      <section className="appIntroWrap mt-4">
        <div className="lifeabroad mb-4">
          <div className="appName d-flex justify-content-between">
          <div className="eachAppName">Life Abroad <span><img src="../images/lifeabroad.png" alt="lifeabroad" style={{width:"40px"}} /></span></div> 
            
             <button className="btn btn-outline-primary" onClick={()=>setShowLA(!showLA)}>
               {showLA ? '閉じる' :'詳細を見る'}
               </button></div>
              { showLA && <p className="appIntroduction">
              Life Abroad (ライフアブロード) 日本の文化や習慣などを英語で説明 <br />
              技術：HTML + Bootstrap <br />
              <a href="https://lifeabroad.jp/">https://lifeabroad.jp/</a>
              </p> }
        </div>
        <hr />
        <div className="Worholizer mb-4">
        <div className="appName d-flex justify-content-between">
        <div className="eachAppName">Worholizer
        <span><img src="../images/worholizer.png" alt="worholizer" style={{width:"40px",paddingLeft:'15px'}} /></span>
        </div> 
          <button className="btn btn-outline-warning" onClick={()=>setShowWorholizer(!showWorholizer)}>
          {showWorholizer ? '閉じる' :'詳細を見る'}
            </button></div>
        {showWorholizer && <p className="appIntroduction">
        Worholizer (ワーホライザー)：ワーキングホリデーに関する情報共有サイト<br />
        技術：Laravel + S3 + Heroku<br />
        <a href="https://worholizer.com/">https://worholizer.com/</a>
        
          </p>}
        </div>
        <hr />

        <div className="MedPlus mb-4">
        <div className="appName d-flex justify-content-between">
          <div className="eachAppName">
            MedPlus
            <span><img src="../images/medplus.png" alt="medplus" style={{width:"40px",paddingLeft:'15px'}} /></span>
            </div> 
          <button className="btn btn-outline-success" onClick={()=>setShowMed(!showMed)}>
          {showMed ? '閉じる' :'詳細を見る'}
          </button>
        
        </div>
        { showMed && <p className="appIntroduction">
        Medplus（メドプラス）　日本の第2,3医薬品を英語で説明紹介<br />
        技術：Ruby on Rails + S3 + Heroku <br />
        <a href="https://medplus.jp/">https://medplus.jp/</a>
       

          
          </p>}
        </div>
        <hr />
        <div className="Childcare">
        <div className="appName d-flex justify-content-between">
          <div className="eachAppName">
          Childcare 
          <span><img src="../images/childcare.png" alt="childcare" style={{width:"50px",paddingLeft:'15px'}} /></span>
          </div>
          <button className="btn btn-outline-danger" onClick={()=>setShowChildcare(!showChildcare)}>
          {showChildcare ? '閉じる' :'詳細を見る'}
            </button></div>
        { showChildcare && <p className="appIntroduction">
        Childcare JAPAN (チャイルドケアジャパン) 日本の子供教育に関する情報を英語で発信 <br />
        技術：Laravel + S3 + Heroku <br />
        <a href="https://childcarejapan.jp/">https://childcarejapan.jp/</a>
          </p>}
          
        </div>
 
      </section>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default MyappIntroAccordion

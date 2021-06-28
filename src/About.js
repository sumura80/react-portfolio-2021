import React from 'react'



const About = () => {
  return (
    <div className="aboutMeWrap">
    <img src={'../images/react_js_portfolio_top.png'} alt="portfolio"  className="aboutmeImg img-fluid"/>
      <div　className="container">
        <div className="row aboutMeContainer">
          <div className="col-sm-3 mb-4">
          <img src={'../images/susumu_aboutme.png'} alt="..." class="img-thumbnail" />
          </div>
          <div className="col-sm-9">
            <h3>初めまして、村岡です！</h3>
            <p className="lead">
            1980年　東京生まれ。昔から外国語に興味があり、大学で英語を専攻し、卒業後すぐに1年カナダに語学留学。<br /><br />
            現在は、ウェアプリを作成したり、動画編集をしています。<br />
            今回のポートフォリオでは、最近勉強している「React.js」を使って形になるものを作ってみました。

            </p>
          </div>
        </div>


        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_1.png'} alt="button search" class="img-thumbnail" />
          </div>
          <div className="col-sm-8">
            <div className="lead mb-4">①ボタンでのデータ絞り込み</div>
            <p>こちらは画像や教材のデータをローカルに保存し、それをフィルターで取得・表示しています。</p>
            <p>「詳細をみる」ボタンを押下すると、LinkやuseParamsを使用し詳細を表示できるようにしております。</p>
            <p>難しかった点は、カテゴリーごとにデータを表示する所。これをfilterを使い実装しました。reactRouterでurlを指定(Route path="/xxx/:id" children )</p>
            
          </div>
        </div>
        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_2.png'} alt="show accordion" class="img-thumbnail" />
          </div>
          <div className="col-sm-8 mb-4">
            <div className="lead mb-4">②自分が運用しているアプリ紹介</div>
            <p>「詳細をみる」ボタンを押下すると、説明欄が開くようになっています。アコーディオンを意識しておりますが、Toggleの考えを利用し関数でtrue/falseを操作し、表示するようにしています。</p>
            <p>「&&」でIFの条件式を表現し、trueの場合には表示しております。
            </p>
            <p>Childcareは今後も力を入れていきたい外国人用のサービス。</p>
          </div>
        </div>
        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_3.png'} alt="random sweets" class="img-thumbnail" />
          </div>
          <div className="col-sm-8">
            <div className="lead mb-4">③関数で数を増やし表示する内容を変更</div>
            <p>初期値を０にしておき、ボタンを押下し1を追加し次のデータを表示</p>
            
            <p>「ランダムで決める」ボタンは、「Math.floor(Math.random() * DessertMenu.length)」を使用。</p>
            <p>同じデータが連続して表示されないように、同じなら1を追加している。</p>
          </div>
        </div>
        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_4.png'} alt="modal img" class="img-thumbnail" />
          </div>
          <div className="col-sm-8">
            <div className="lead mb-4">④モーダル機能を実装</div>
            <p>モーダルの中身のデータは、6つくらい格言をローカルに保存している。</p>
            <p>こちらは、「Math.floor(Math.random() * proverbs.length)」のように記述し、毎回格言の内容が変わるようにしている。</p>
            <p>画面の切り替えが早すぎるので、スピードを少し遅くするのが今後の課題。</p>
          </div>
        </div>

        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_5.png'} alt="fruit quiz" class="img-thumbnail" />
          </div>
          <div className="col-sm-8">
            <div className="lead mb-4">⑤データの削除で横並びで文字を作る</div>
            <p>「x」で単語を削除できるようになっている。</p>
            <p>結果的には、横並びで「メロン」となったら正解！</p>
            <p>クリックでその単語のidを取得し関数にして、filterをかけて、削除されていない単語だけを画面に残す。</p>
          </div>
        </div>
        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_6.png'} alt="form img" class="img-thumbnail" />
          </div>
          <div className="col-sm-8">
            <div className="lead mb-4">⑥Formの送信と登録情報の表示</div>
            <p>「input」から入力したデータを「onChange,(e.target.value)」を使い、登録情報として保存。入力した情報をスプレッド構文で追加。「 [...people]」</p>
            <p>登録すると、登録内容がボタンの下に表示され、[x]マークで削除可能。こちらは、falseを使用。</p>
          </div>
        </div>

        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_7.png'} alt="job search" class="img-thumbnail" />
          </div>
          <div className="col-sm-8">
            <div className="lead mb-4">⑦Indexにより表示を変える検索</div>
            <p>「Jobsdata」からでたを取得し、「descriptions.map((task, index) 」で該当する求人情報を表示</p>
            <p>(company, title, salary, descriptions, category, jobimg  = jobs[value])で表示する内容を変数化</p>
            <p>(index === value && 'jobBtnActive')クラスにアクティブがわかるように、ボタンに色を追加。</p>
          </div>
        </div>

        <div className="row aboutMeContainer">
          <div className="col-sm-4 mb-4">
          <img src={'../images/work_8.png'} alt="job search" class="img-thumbnail" />
          </div>
          <div className="col-sm-8">
            <div className="lead mb-4">⑧CRUD機能を含めた投稿</div>
            <p>編集は、「id」を取得し、該当するものの内容を変更する。</p>
            <p>Contextを用いて、子要素でデータの受け渡しを実装。</p>
            <p>新規登録は、「材料追加」、編集は「編集」とボタン名を動的に変更。</p>
          </div>
        </div>



        <div className="row aboutMeContainer">
          <div className="col-sm-12">
            <div className="interestedLanguage font-weight-bold">興味のあるツール</div>
            <p className="interestedLanguageList">
            HTML5, CSS, Linux, Bootstrap4, jQuery, Vue.js, Ruby, Laravel, Django, Premiere pro, After Effects, Photoshop, Illustrator, Adobe XD, React.js, Docker, TailWindCSS, WordPress
            </p>
            <div className="interestedForeignLanguage font-weight-bold">興味のある外国語</div>
            <p className="interestedForeignLanguageList">
            英語、フランス語、韓国語、スペイン語、中国語
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

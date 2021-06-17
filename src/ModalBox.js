import React,{useState} from 'react'


const ModalBox = ({show,setShow}) => {
  let randomStartingNumber = Math.floor(Math.random() * proverbs.length)
  const [index, setIndex] = useState(randomStartingNumber)
  const {text, creater} = proverbs[index]
  const [proverb, setProver] = useState(proverbs)
  const randomProverb = () =>{
    let randomNumber = Math.floor(Math.random() * proverbs.length)
    if(randomNumber === index){
      randomNumber = index + 1;
    }
    console.log(randomNumber)
    setIndex(randomNumber)
  }
  if(show){
    return (
      <React.Fragment>
        <div id="overlay">
          <div id="modal-content">
            <div className="lead">
                <p>【今日の格言】</p>
                <p>{text}</p>
                <p className="text-secondary">By {creater}</p>
              </div>
            <div>
              <button className="btn btn-danger" onClick={()=> {setShow(false); randomProverb();}}>閉じる</button>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }else {
    // showがfalseの場合には、nullを返す
    return null;
  }
}


export const proverbs = [
  {
    id: 1,
    text:'一人ひとりに天の使命があり、その天命を楽しんで生きることが、処世上の第一要件である。',
    creater:'渋沢栄一',
  },
  {
    id: 2,
    text:'人生とは自転車のようなものだ。倒れないようにするには走らなければならない。',
    creater:'アインシュタイン',
  },
  {
    id: 3,
    text:'明日死ぬかのように生きよ。永遠に生きるかのように学べ。',
    creater:'ガンジー',
  },
  {
    id: 4,
    text:'竹にはフシがある。そのフシがあるからこそ、竹は雪にも負けない強さを持つのだ。',
    creater:'本田宗一郎',
  },
  {
    id: 5,
    text:'悲しみが来るときは、単騎ではやってこない。かならず軍団で押し寄せる。',
    creater:'シェイクスピア',
  },
  {
    id: 6,
    text:'すべてを知りつくしたなんて決して思わないことよ。',
    creater:'ユードラ・ウェルティ',
  },
]

export default ModalBox

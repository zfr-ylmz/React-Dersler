// import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import { useState } from 'react'; 


let arr = [
{
  id:1,
  title:"Dağ 1",
  par: "Açıklama 1 "
},
   {  id:2,
    title:"Dağ 2",
    par: "Açıklama 2"
  },
   {  id:3,
    title:"Dağ 3",
    par: "Açıklama 3"
  },
]


//useState Kullanımı
 
const App = () =>  {
 const [lesson, setlesson]= useState(1);
 return (
  <div> 
<h1>Başlık</h1>
<h2>{lesson}</h2>
<button
onClick={()=>{
  setlesson(lesson+1);
}}>Arttırma</button>
<button
onClick={()=>{
  setlesson(lesson-1);
}}>Azaltma</button>

<p>Başlangıç</p>
  <div className="Cards"> 
  {arr.map(({id,par, title},i) =>(
    <Card key = {`index ${i}`} par={par} title={title} lesson={lesson} />
      )  )}
  </div>
  </div> 
  );
   };
export default App;

import"./Card.css";



const Card = ( { title,par, lesson } ) => <div className="Card">
<h6>{title}</h6>
<p>{par}</p>
{/* {lesson > 20 ?  <div>İleri düzey </div> : <div>Temel</div> } */} 
{/* 20 yi geçmezse hiç bir şey yazdırmaz  */}
 {lesson > 20 && <div>İleri düzey </div>   }
<button>DEvamınıoku</button>
</div>

export default Card;

import React from 'react';
import { Jumbotron} from 'reactstrap';
import '../style/Home.css';

function Home() {
  return (
    <div style= {{margin:"0",maxHeight:"100%" ,backgroundColor:"#1c2529",width: "100%"}} className ="HomePage">
      <Jumbotron style={{maxWidth:"100%"}}>
        
          <img style={{borderBottomStyle:"outset",margin:"0 0 -5 0",maxWidth:"100%", maxHeight:"100%"}}className="display-3" src="https://i.imgur.com/hkVYvd3.jpg"></img>
          
       
      </Jumbotron>
    {/* <img style={{background:"https://i.imgur.com/zDBO5ot.jpg",margin:"5% 25%",border:"solid #e6dcca ",maxWidth:"600px", width: "100%", maxHeight:"auto"}} className="home-img" src="https://i.imgur.com/cRCyN5v.png"  alt="BandMates logo"></img>  */}
      <h1 className="about" style={{ textShadow:"-1px 1px 2px #000" ,margin:"-5% 35% 0 35%",fontFamily:"sans-serif",color: "#fdd05a", fontSize:"10vw"}}>
        ABOUT
      </h1>
      <p style={{textShadow:"-5px 1px 2px #000",fontFamily:"sans-serif",color: "#fdd05a", textAlign:"center", fontSize:"25px", margin:"5% 15% 10% 15%"}}>How far away take root and flourish preserve and cherish that pale blue dot finite but unbounded are creatures of the cosmos realm of the galaxies. Sea of Tranquility with pretty stories for which there's little good evidence with pretty stories for which there's little good evidence globular star cluster stirred by starlight concept of the number one? Paroxysm of global death hearts of the stars at the edge of forever hearts of the stars inconspicuous motes of rock and gas with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
    </div>
  )
}

export default Home;
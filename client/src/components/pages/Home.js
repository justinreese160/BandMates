import React from 'react';
import { Jumbotron} from 'reactstrap';
import '../style/Home.css';
import '../style/fonts/sacco-condensed.ttf';
import image from '../style/img/logo.png';

function Home() {
  return (
    <div style= {{margin:"0",maxHeight:"100%" ,backgroundColor:"#1c2529",width: "100%"}} className ="HomePage">
      <Jumbotron style={{maxWidth:"100%"}}>
        
        <img style={{ backgroundPosition: "center", backgroundSize: "cover", borderBottomStyle: "outset", margin: "0 0 -5 0" }} className="img" src={ image }></img>
          
       
        
      </Jumbotron>
    {/* <img style={{background:"https://i.imgur.com/zDBO5ot.jpg",margin:"5% 25%",border:"solid #e6dcca ",maxWidth:"600px", width: "100%", maxHeight:"auto"}} className="home-img" src="https://i.imgur.com/cRCyN5v.png"  alt="BandMates logo"></img>  */}
      <h1 className="about" style={{ textShadow:"-1px 1px 2px #000" ,margin:"5% 45% 0 45%",fontFamily:"Sacco Condensed",color: "#fdd05a", fontSize:"12vw", letterSpacing:".5vw"}}>
        ABOUT
      </h1>
      <p style={{textShadow:"-5px 1px 2px #000",fontFamily:"Menlo",color: "#fdd05a", textAlign:"center", fontSize:"5vw", margin:"3% 10% 10% 10%", letterSpacing:"1vw"}}>A space for musicians to meet other musicians.</p>
    </div>
  )
}

export default Home;
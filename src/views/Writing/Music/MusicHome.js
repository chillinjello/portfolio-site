import React from "react";
import backgroundPic from "./background.jpg";

const MusicHome = (props) => {
    const musicPath = "/music/"

    return (
        <div style={{margin: "0px", color: "white", paddingTop: "150px", height: "100vh", backgroundImage: `url(${backgroundPic})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="c" style={{backgroundColor: "rgba(0,0,0,.7)", maxWidth:"50em"}}>
                <div style={{textAlign: "center"}}>
                    <p>Some writings on music.</p>
                </div>
                <hr style={{borderWidth: "0.05px", borderColor: "white", marginTop:"15px"}}/>
                <div className="row">
                    <div className="2 col"/>
                    <div className="3 col">
                        <h5 style={{textAlign: "center"}}>Articles:</h5>
                        <h6><a href={musicPath + "Top50MusicSpring2022"}>50 Musical Pillars - Spring 2022</a></h6>
                    </div>
                    <div className="2 col"/>
                </div>
                <hr style={{borderWidth: "0.05px", borderColor: "white", marginTop:"15px"}}/>
                <div style={{textAlign: "center", color: "#ff9955"}}>joelwdavidson@gmail.com</div>
            </div>
        </div>
    );
}

export default MusicHome;
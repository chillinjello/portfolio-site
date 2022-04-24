import React from "react";
import "./HomePage.css";
import profilePic from "../images/child-picture.jpg";
import backgroundPic from "../images/background.jpg";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div style={{margin: "0px", color: "white", paddingTop: "150px", height: "100vh", backgroundImage: `url(${backgroundPic})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}>
                <div className="c" style={{backgroundColor: "rgba(0,0,0,.6)", maxWidth:"50em"}}>
                    <div style={{textAlign: "center"}}>
                        <div className="row">
                            <h1>Joel Davidson</h1>
                        </div>
                        <div className="row">
                            <img src={profilePic} width="200px"/>
                        </div>
                        <p>A site by and about Joel Davidson</p>
                    </div>
                    <hr style={{borderWidth: "0.05px", borderColor: "white", marginTop:"15px"}}/>
                    <div className="row">
                        <div className="2 col"/>
                        <div className="3 col">
                            <h5 style={{textAlign: "center"}}>Table of Contents:</h5>
                            <div>
                                <h5>Portfolio</h5>
                                <h6><a href="my-games">Games I've Created</a></h6>
                            </div>
                            <div>
                                <h5>Writing</h5>
                                <h6><a href="music">Music</a></h6>
                                <h6><a href="books">Books</a></h6>
                                <h6><a href="games">Games</a></h6>
                            </div>
                        </div>
                        <div className="2 col">

                        </div>
                    </div>
                    <hr style={{borderWidth: "0.05px", borderColor: "white", marginTop:"15px"}}/>
                    <div style={{textAlign: "center"}}><a href="joelwdavidson@gmail.com">joelwdavidson@gmail.com</a></div>
              </div>
            </div>
        )
    }
}
export default HomePage;
import React from "react";
import "./HomePage.css";
import profilePic from "../images/child-picture.jpg";
import backgroundPic from "../images/background.jpg";
import { Link, NavLink } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div style={{margin: "0px", color: "white", paddingTop: "150px", height: "calc(100vh - 150px)", backgroundImage: `url(${backgroundPic})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}>
                <div className="c" style={{backgroundColor: "rgba(0,0,0,.7)", maxWidth:"50em", Top:"150px"}}>
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
                                <h6><NavLink as={Link} to="/my-games">Games I've Created</NavLink></h6>
                            </div>
                            <div>
                                <h5>Writing</h5>
                                <h6><NavLink as={Link} to="/music">Music</NavLink></h6>
                                <h6><NavLink as={Link} to="/books">Books</NavLink></h6>
                                <h6><NavLink as={Link} to="/games">Games</NavLink></h6>
                            </div>
                        </div>
                        <div className="2 col">

                        </div>
                    </div>
                    <hr style={{borderWidth: "0.05px", borderColor: "white", marginTop:"15px"}}/>
                    <div style={{textAlign: "center", color: "#ff9955"}}>joelwdavidson@gmail.com</div>
              </div>
            </div>
        )
    }
}
export default HomePage;
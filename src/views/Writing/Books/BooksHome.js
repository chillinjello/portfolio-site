import React from "react";
import backgroundPic from "./background.jpg";
import { Link, NavLink } from "react-router-dom";

const GamesHome = (props) => {
    const booksPath = "/books/"

    // Creates urls with "/books/[author]-[title]"" format
    // spaces are removed for "-"'s
    const createLink = (author, title, date) => {
        const modifiedAuthor = author.replaceAll(" ", "-").toLowerCase();
        const modifiedTitle = title.replaceAll(" ", "-").toLowerCase();
        if (date == undefined) {
            return <li><NavLink as={Link} to={booksPath + modifiedAuthor + "-" + modifiedTitle}>{title}</NavLink></li>
        } else {
            return <li><NavLink as={Link} to={booksPath + modifiedAuthor + "-" + modifiedTitle}>{title} ({date})</NavLink></li>
        }
    }

    const authorsAndBooks = () => {
        return (
            <div>
                <h5 style={{textAlign: "center"}}>Articles:</h5>
                <p>Pedro Calderon de la Barca</p>
                <ul>
                    {createLink("Calderon","Life Is A Dream", "1636")}
                </ul>
                <p>Don Dilillo</p>
                <ul>
                    {createLink("Dilillo","White Noise", "1985")}
                </ul>
                <p>Herodotus</p>
                <ul>
                    {createLink("Herodotus","Histories", "430BC")}
                </ul>
                <p>Homer</p>
                <ul>
                    {createLink("Homer", "Iliad", "7XXBC")}
                </ul>
                <p>Tao Lin</p>
                <ul>
                    {createLink("Lin","Taipei", "2013")}
                </ul>
                <p>Gabriel Garcia Marquez</p>
                <ul>
                    {createLink("Marquez","100 Years Of Solitude", "1967")}
                    {createLink("Marquez","Love in the Time of Cholera", "1985")}
                </ul>
                <p>Cormac McCarthy</p>
                <ul>
                    {createLink("McCarthy","Blood Meridian", "1985")}
                </ul>
                <p>Philip Roth</p>
                <ul>
                    {createLink("Roth","American Pastoral", "1997")}
                </ul>
                <p>Thomas Pynchon</p>
                <ul>
                    {createLink("Pynchon","The Crying Of Lot 49", "1966")}
                    {createLink("Pynchon","Mason & Dixon", "1997")}
                </ul>
                <p>John Williams</p>
                <ul>
                    {createLink("Williams","Stoner", "1965")}
                </ul>
            </div>
        );
    }

    return (
        <div style={{margin: "0px", color: "white", paddingTop: "150px", height: "100vh", backgroundImage: `url(${backgroundPic})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="c" style={{backgroundColor: "rgba(0,0,0,.7)", maxWidth:"50em"}}>
                <div style={{textAlign: "center"}}>
                    <p>Some writings on books.</p>
                </div>
                <hr style={{borderWidth: "0.05px", borderColor: "white", marginTop:"15px"}}/>
                <div className="row">
                    <div className="2 col"/>
                    <div className="3 col">
                        {authorsAndBooks()}
                    </div>
                    <div className="2 col"/>
                </div>
                <hr style={{borderWidth: "0.05px", borderColor: "white", marginTop:"15px"}}/>
                <div style={{textAlign: "center", color: "#ff9955"}}>joelwdavidson@gmail.com</div>
            </div>
        </div>
    );
}

export default GamesHome;
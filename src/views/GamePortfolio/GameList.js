import React from "react";
import { Link } from "react-router-dom";
import "./GameList.css";
import profilePic from "../../images/child-picture.jpg";
import backgroundPic from "../../images/game-background.jpg";
// Game pictures
import orangeGuyGame from "../../images/game-images/orange-guy-game.gif";
import fpsDemo from "../../images/game-images/fps-demo.gif";
import merryMelee from "../../images/game-images/merry-melee.png";
import moleGame2 from "../../images/game-images/mole-game-2.png";
import trickOrTreatTactics from "../../images/game-images/trick-or-treat-tactics.png";
import robberRups from "../../images/game-images/robber-rups.png";
import testYourSkills from "../../images/game-images/test-your-skills.png";
import westernRPG from "../../images/game-images/western-rpg.png";
import moleGame from "../../images/game-images/mole-game.jpg";
import aVisitToFriends from "../../images/game-images/AVisitToFriends.jpg";

class EntryWrapper extends React.Component {
    render = () => {
        return (
            <div>
                <div className="row">
                    <div className="4 col">
                        <br/>
                        <img src={this.props.gameImage} width="200" align={"top"} alt="error loading pic"/>
                    </div>
                    <div className="8 col" style={{paddingTop:"0px", marginTop:"0px"}}>
                        <br/>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div style={{margin: "0px", color: "white", paddingTop: "150px", backgroundImage: `url(${backgroundPic})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}>
                <div className="c" style={{backgroundColor: "rgba(0,0,0,.7)", maxWidth:"50em"}}>
                    <div className="row">
                        {/* <div className="3 col">
                            <br/>
                            <img src={profilePic} width="200"/>
                        </div> */}
                        <div className="7 col">
                            <br/>
                            <h4>Joel Davidson's Games</h4>
                            <p>On this page I've got some of the game projects I've made over the year. Most aren't made to be played by anyone beyond friends and family, but they're all online and free.</p>
                            <p style={{color: "#ff9955"}}>email: joelwdavidson@gmail.com</p>
                        </div>
                    </div>
                    <EntryWrapper gameImage={aVisitToFriends}>
                        <h5><a href="https://store.steampowered.com/app/1766550/A_Visit_to_Friends/">A Visit to Friends</a></h5>
                        <p>A Visit to Friends is a collection of four dioramas, each with their own themes, characters and puzzles to solve. Catch chickens, put in a day's work, and explore your own subconscious through heterodox methods. All this and more is in store when you take A Visit to Friends.</p>
                        <i>windows, mac, linux</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={moleGame}>
                        <h5><a href="https://store.steampowered.com/app/1158410/Mole_Game/">Mole Game</a></h5>
                        <p>A grid based puzzle game about being a mole and all that comes with that.</p>
                        <i>windows</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={merryMelee}>
                        <h5><a href="https://flyingjello.itch.io/merry-melee">Merry Melee</a></h5>
                        <p>A rouge like where you fend off holiday hordes with various holiday iconography.</p>
                        <i>windows, mac</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={moleGame2}>
                        <h5><a href="https://flyingjello.itch.io/mole-game-2">Mole Game 2</a></h5>
                        <p>The visual novel which journies further into psyche of the protagonist from Mole Game 1, the Mole.</p>
                        <i>windows, mac</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={trickOrTreatTactics}>
                        <h5><a href="https://flyingjello.itch.io/trick-tactics">Trick or Treat Tactics</a></h5>
                        <p>A grid based puzzle game about being a mole and all that comes with that.</p>
                        <i>windows, mac</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={orangeGuyGame}>
                        <h5><a href="#">Untitled Game</a></h5>
                        <p>A metroidvania where you trek through dream landscapes and search for puzzle pieces. Not publicly available.</p>
                        <i>N/A</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={fpsDemo}>
                        <h5><a href="#">Untitled Game</a></h5>
                        <p>A first person shooter about speedrunning through a map in search for keys to the end of the level. Not publicly available.</p>
                        <i>N/A</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={robberRups}>
                        <h5><a href="https://flyingjello.itch.io/robber-rups">Robber Rups</a></h5>
                        <p>At tactical puzzle game where you play as a robber distracting dogs with firecrackers.</p>
                        <i>web</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={testYourSkills}>
                        <h5><a href="https://flyingjello.itch.io/test-your-skills">Test Your Skills</a></h5>
                        <p>A satirical skill test game. Run through four different highly sophisticated skill games to test luck, endurance, aim, and speed.</p>
                        <i>windows, mac</i>
                    </EntryWrapper>
                    <EntryWrapper gameImage={westernRPG}>
                        <h5><a href="https://flyingjello.itch.io/western-rpg">Western RPG</a></h5>
                        <p>A pastoral 2D walking simulator journey through a country home.</p>
                        <i>web</i>
                    </EntryWrapper>
                </div>
            </div>
        )
    }
}
export default HomePage;
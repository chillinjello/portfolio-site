import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import "./HeaderRouter.css"
import MyGames from "./../GamePortfolio/GameList";
import BooksHome from "./../Writing/Books/BooksHome.js";
import GamesHome from "./../Writing/Games/GamesHome.js";
import MusicHome from "./../Writing/Music/MusicHome.js";
import TestDoc from '../Writing/Games/GamesPages/TestDoc';
import Top50AlbumsSpring2022 from '../Writing/Music/MusicPages/Top50_Spring2022';
import PedroCalderon_LifeIsADream from '../Writing/Books/BookPages/Authors/Pedro Calderon/LifeIsADream';
import DonDilillo_WhiteNoise from '../Writing/Books/BookPages/Authors/Don Delillo/WhiteNoise';
import TaoLin_Taipei from '../Writing/Books/BookPages/Authors/Tao Lin/Taipei';
import Marquez_100YearsOfSolitude from '../Writing/Books/BookPages/Authors/Gabriel Garcia Marquez/100YearsOfSolitude';
import CormacMcCarthy_BloodMeridian from '../Writing/Books/BookPages/Authors/Cormac McCarthy/BloodMeridian';
import PhilipRoth_AmericanPastoral from '../Writing/Books/BookPages/Authors/Philip Roth/AmericanPastoral';
import Herodotus_Histories from '../Writing/Books/BookPages/Authors/Herodotus/Histories';
import Pynchon_CryingOfLot49 from '../Writing/Books/BookPages/Authors/Thomas Pynchon/CryingOfLot49';
import Pynchon_MasonAndDixon from '../Writing/Books/BookPages/Authors/Thomas Pynchon/MasonAndDixon';
const HeaderRouter = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <div class="header sticky" id="myHeader" style={{textAlign: "center"}}>
                <row>
                    <div className="6 col"/>
                    <div className="1 col">
                        <div className="home-button">
                            <a href="/">Home</a>
                        </div>
                    </div>
                    <div className="1 col">
                        <div className="back-button">
                            <a onClick={() => {
                                navigate(-1);
                                return false;
                            }}
                                style={{color: "#ff9955"}}>
                                Back
                            </a>
                        </div>
                    </div>
                    <div className="6 col"/>
               </row>
           </div>
            <Routes>
                {/* My games */}
                <Route path="/my-games" exact element={<MyGames />}></Route>

                {/* Music writing pages */}
                <Route path="/music" exact element={<MusicHome />}></Route>
                <Route path="/music/top50MusicSpring2022" exact element={<Top50AlbumsSpring2022/>}/>

                {/* Book writing pages */}
                <Route path="/books" exact element={<BooksHome />}></Route>
                <Route path="/books/calderon-life-is-a-dream" exact element={<PedroCalderon_LifeIsADream />}></Route>
                <Route path="/books/dilillo-white-noise" exact element={<DonDilillo_WhiteNoise />}></Route>
                <Route path="/books/lin-taipei" exact element={<TaoLin_Taipei />}></Route>
                <Route path="/books/marquez-100-years-of-solitude" exact element={<Marquez_100YearsOfSolitude />}></Route>
                <Route path="/books/mccarthy-blood-meridian" exact element={<CormacMcCarthy_BloodMeridian />}></Route>
                <Route path="/books/roth-american-pastoral" exact element={<PhilipRoth_AmericanPastoral />}></Route>
                <Route path="/books/herodotus-histories" exact element={<Herodotus_Histories />}></Route>
                <Route path="/books/pynchon-the-crying-of-lot-49" exact element={<Pynchon_CryingOfLot49 />}></Route>
                <Route path="/books/pynchon-mason-&-dixon" exact element={<Pynchon_MasonAndDixon />}></Route>

                {/* Game writing pages */}
                <Route path="/games" exact element={<GamesHome />}></Route>
                <Route path="/games/test" element={<TestDoc/>}></Route>
            </Routes>
        </div>
    );
}

export default HeaderRouter;
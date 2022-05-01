import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import "./HeaderRouter.css"
import MyGames from "./../GamePortfolio/GameList";
import BooksHome from "./../Writing/Books/BooksHome.js";
import GamesHome from "./../Writing/Games/GamesHome.js";
import MusicHome from "./../Writing/Music/MusicHome.js";
import TestDoc from '../Writing/Games/GamesPages/TestDoc';

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

                {/* Book writing pages */}
                <Route path="/books" exact element={<BooksHome />}></Route>

                {/* Game writing pages */}
                <Route path="/games" exact element={<GamesHome />}></Route>
                <Route path="/games/test" element={<TestDoc/>}></Route>
            </Routes>
        </div>
    );
}

export default HeaderRouter;
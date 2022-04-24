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
                        <div style={{ background: "#555", padding: "10px 10px 10px 10px", borderRadius: "0 0 15px 15px"}}>
                            <a href="/">Home</a>
                        </div>
                    </div>
                    <div className="1 col">
                        <div style={{ background: "#555", padding: "10px 10px 10px 10px", borderRadius: "0 0 15px 15px"}}>
                            <a onClick={() => navigate(-1)}>Back</a>
                        </div>
                    </div>
                    <div className="6 col"/>
               </row>
           </div>
            <Routes>
                <Route path="/my-games" element={<MyGames />}></Route>

                <Route path="/music" element={<MusicHome />}></Route>

                <Route path="/books" element={<BooksHome />}></Route>

                <Route path="/games" element={<GamesHome />}></Route>
                <Route path="/games/test" element={<TestDoc/>}/>
            </Routes>
        </div>
    );
}

export default HeaderRouter;
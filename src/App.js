import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './index.css';
import HomePage from "./views/HomePage";
import HeaderRouter from './views/components/HeaderRouter';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />}/>
        <Route path="/*" element={<HeaderRouter/>}/>
        {/* <Route path="/games-test" element={<HeaderRouter/>}/> */}
      </Routes>
    </HashRouter>
  );
}
export default App;
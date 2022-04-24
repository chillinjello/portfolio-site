import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./views/HomePage";
import HeaderRouter from './views/components/HeaderRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />}/>
        <Route path="/*" exact={true} element={<HeaderRouter/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
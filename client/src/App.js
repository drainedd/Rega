import './App.css';
import logo from './logo.svg'
import chatImg from './chatbot.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Zakaz from './Zakaz.js';
import FindAuto from './Poisk.js';
import SellAuto from './sell.js';
import Entering from './Entering.tsx';


export default function App() {
  return (
    <Router>
  
      <section>
        <div className="logo-box">
        <h2 class="logo">
        <a href="MainPage.html">
        <img src={logo} alt="" width='200px' height='145px'/>
        </a>
        </h2>
        </div>
        <nav>
          <ul>
            <li className="menuButton">
              <Link  to="/" style={{color:'black', textDecoration:'none'}} >Главная</Link>
            </li>
            <li className="menuButton">
              <Link to="/find_auto" style={{color:'black', textDecoration:'none'}}>Найти авто</Link>
            </li>
            <li className="menuButton">
              <Link to="/sell" style={{color:'black', textDecoration:'none'}}>Продать авто</Link>
            </li>
            <li className="menuButton">
              <Link to="/zakaz" style={{color:'black', textDecoration:'none'}}>Заказать подбор</Link>
            </li>
            <li className="menuButton">
              <Link to="/Entering" style={{color:'black', textDecoration:'none'}}> Вход | регистрация</Link>
            </li>
          </ul>
        </nav>
        <div className='chatBot'>
            <a href='https://t.me/CheckAuto116_Bot' target="blank">
            <img src={chatImg} alt="" width='45px' height='45px'/>
            </a>
        </div>
        <h1>CheckAuto</h1>
        <h2>Мы подберем для вас оптимальное предложение на рынке <br></br>с гарантией технической и юридической чистоты</h2>
        </section>
        
        <Switch>
        <Route path="/sell">
            <SellAuto />
          </Route>
          <Route path="/find_auto">
            <FindAuto />
          </Route>
          <Route path="/zakaz">
            <Zakaz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Entering">
            <Entering />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <div> 
  </div>;
  
}








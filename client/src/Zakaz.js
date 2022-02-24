import './podbor.css';

export default function Zakaz() {
    return <div>
      <form className="Zakaz" action="">
    <h1>Подбор автомобиля</h1>
    <h3>Отберем лучшие предложения, проверим все документы и проведем полную диагностику</h3>
        <div className="group">      
            <input type="text" required/>
            <span className="bar"></span>
            <label>Телефон</label>
        </div>
        <div className="group">      
            <input type="text" required/>
            <span className="bar"></span>
            <label>Марка</label>
        </div>
        <div className="group">      
            <input type="text" required/>
            <span className="bar"></span>
            <label>Модель</label>
        </div>
        <div className="group">      
            <input type="text" required/>
            <span className="bar"></span>
            <label>Бюджет</label>
        </div>
        <div className="group">      
            <input type="text" required/>
            <span className="bar"></span>
            <label>Комментарий</label>
        </div>
        <button className="btn_fourth">Оставить заявку</button>  
  </form>
   </div>;
  }
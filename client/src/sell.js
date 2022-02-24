import './sell.css';
import React, {useState } from "react";
import addNew from './readphoto.js';
const data = {
    mark: [
    {name: "Лада", model: ["x-ray", "Калина", "Веста"]},
    {name: "BMW", model: ["x3", "x4", "x5"]},
    {name: "Mercedes", model: ["W222", "W223","G63"] },
    {name: "AUDI", model: ["A1","RS6","Q1"] },
    {name: "KIA", model: ["K5", "RIO","stinger","mohave"] }
    ]
    }
export default function SellAuto() {
    const [file, setFile] = useState(null)
    const fileHandler = (e) => {
    setFile(e.target.files[0])
}
const [selectedmark, setSelectedmark] = useState();
  const [selectedmodel, setSelectedmodel] = useState();
  const availablemodel = data.mark.find((c) => c.name === selectedmark);
    return <div>
  <form className="sell" method="POST" >
    <div className="photo">
        <h2>Внешний вид</h2>
        <p>Фотографии <br/> не более 10</p>
        <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null} style={{width:'200px',height:'200px'}}/>
        <br/>
        <input type="file" onChange={fileHandler} />
    </div>
    <div className="field">
    <label>Цвет</label>
        <input placeholder="Выберите цвет" list="color_body"/>
        <datalist id="color_body">
            <option value="Белый"></option>
            <option value="Серебяный"></option>
            <option value="Серый"></option>
            <option value="Черный"></option>
            <option value="Коричневый"></option>
            <option value="Золотой"></option>
            <option value="Бежевый"></option>
            <option value="Красный"></option>
            <option value="Бордовый"></option>
            <option value="Оранжевый"></option>
            <option value="Желтый"></option>
            <option value="Зеленый"></option>
            <option value="Голубой"></option>
            <option value="Синий"></option>
            <option value="Фиолетовый"></option>
            <option value="Пурпурный"></option>
            <option value="Розовый"></option>
        </datalist>
    </div>
    <div className="tech">
        <h2>Технические характеристики</h2>
        <div className="field">
        <div>
        <label>Марка</label>
        <select
          placeholder="Mark"
          value={selectedmark}
          onChange={(e) => setSelectedmark(e.target.value)}
        >
          <option>Выберете марку</option>
          {data.mark.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>Модель</label>
        <select
          placeholder="Модель"
          value={selectedmodel}
          onChange={(e) => setSelectedmodel(e.target.value)}
        >
          <option>Выберете модель</option>
          {availablemodel?.model.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
        </div>
        <div className="field">
        <label >Год выпуска</label>
        <input placeholder="Год выпуска" type="text"></input>
        </div>
        <div className="field">
        <label>Тип кузова</label>
        <input placeholder="Выберите тип кузова" name="" list="body"/>
            <datalist id="body">
                <option value="Внедорожник"></option>
                <option value="Кабриолет"></option>
                <option value="Купе"></option>
                <option value="Лифтбек"></option>
                <option value="Минивэн"></option>
                <option value="Пикап"></option>
                <option value="Седан"></option>
                <option value="Универсал"></option>
                <option value="Фургон"></option>
                <option value="хэтчбек"></option>
            </datalist>
        </div>
        <div className="field">
        <label>Руль</label>
        <input placeholder="Расположение руля" name="" list="steering_wheel"/>
            <datalist id="steering_wheel">
                <option value="Правый"></option>
                <option value="Левый"></option>
            </datalist>
        </div>
        <div className="field">
        <label>Коробка передач</label>    
        <input placeholder="Тип КПП" name="" list="transmission"/>
            <datalist id="transmission">
                <option value="Автомат"></option>
                <option value="Механика"></option>
            </datalist>
        </div>
        <div className="field">
        <label>Тип двигателя</label>
        <input placeholder="Тип двигателя" name="" list="Engine"/>
            <datalist id="Engine">
                <option value="Бензин"></option>
                <option value="Гибрид"></option>
                <option value="Дизель"></option>
                <option value="Электро"></option>
            </datalist>
        </div>
        <div className="field">
        <label>Мощность двигателя</label>
        <input type="text" placeholder="ЛС"/>
        </div>
        <div className="field">
        <label>Тип привода</label>
        <input placeholder="Тип привода" name="" list="drive_unit"/>
            <datalist id="drive_unit">
                <option value="Задний"></option>
                <option value="Передний"></option>
                <option value="Полный"></option>
            </datalist> 
        </div>       
    </div>
    <div className="History">
        <h3>История эксплуатации и состояние</h3>
        <div className="field">
        <label>Пробег</label>
        <input type="text"></input>
        </div>
        <br />
      <div className="Description">
        <h3>Описание</h3>
        <textarea placeholder="Пожалуйста, честно опишите достоинства и недостатки своего автомобиля."
        className="desc-area" cols="30" rows="10">
        </textarea>
      </div>
    <div className="contact">
        <h2>Цена и контакты</h2>
        <div className="field">
        <label  for="n">Цена</label>
        <input type="text"></input>
        </div>
        <div className="field">
        <label  for="n">Телефон</label>
        <input placeholder="+7(xxx)-xxx-xx-xx" type="text"></input>
        </div>
        </div>   
            <div className="field">
            <label  for="n">Город продажи</label>
            <input placeholder="Выберите город" name="" list="city"/>
            <datalist id="city">
                <option value="Москва"></option>
                <option value="Санкт-Петербург"></option>
                <option value="Новосибирск"></option>
                <option value="Екатеринбург"></option>
                <option value="Казань"></option>
            </datalist>
        </div>
    </div>
    <button className="btn_fourth" type="submit">Разместить объявление</button>
  </form>
  </div>
  }
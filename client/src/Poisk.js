import './find.css';
import React, { useState } from 'react';
import Card from './CardFind';


const data = {
    mark: [
    {name: "Лада", model: ["X-ray", "Калина", "Веста"]},
    {name: "BMW", model: ["X3", "X4", "X5"]},
    {name: "Subaru", model: ["Forester", "Outback","WRX"] },
    {name: "AUDI", model: ["A1","RS6","Q1"] },
    {name: "HONDA", model: ["CR-V", "Accord","Civic"] }
    ]
    };
export default function FindAuto() {
  const [items, setItems] = React.useState([])
  React.useEffect(()=>{
    fetch('https://61fd5863f62e220017ce449d.mockapi.io/items')
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      setItems(json);
    })
  },[]);
  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  const [selectedmark, setSelectedmark] = useState();
  const [selectedmodel, setSelectedmodel] = useState();
  const availablemodel = data.mark.find((c) => c.name === selectedmark);
    return <div>
  <form className="find" action="signup.php" method="POST">
      <div className="main1">
      <div className="FirstCol">
      <div>
        <select
          placeholder="Mark"
          value={selectedmark}
          onChange={(e) => setSelectedmark(e.target.value), onChangeSearchInput}>
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
          <div className="Years">
          <input type="text" placeholder="Год..."/>
          </div>
      <div>
          <div className="Years">
              <input type="text" placeholder="Пробег, от"/>
          -
              <input type="text" placeholder="До     км"/>
          </div>
          </div>
      </div>
      <div  className="MiddleCol">
      <div>
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
          <div>
          <input placeholder="Коробка: любая" name="" list="transmission"/>
              <datalist id="transmission">
                  <option value="Автомат"></option>
                  <option value="Механика"></option>
              </datalist>
          </div>
          <div>
          <input placeholder="Двигатель: любой" name="" list="Engine"/>
              <datalist id="Engine">
                  <option value="Бензин"></option>
                  <option value="Гибрид"></option>
                  <option value="Дизель"></option>
                  <option value="Электро"></option>
              </datalist>
          </div>
      <div className="Power">
          <input type="text" placeholder="Мощность, от"/>
      -
          <input type="text" placeholder="До     ЛС"/>
      </div>
      </div>
          <div className="LastCol">
          <div className="Price">
          <input type="text" placeholder="Цена, от"/>
          -
          <input type="text" placeholder="До     руб"/>
          </div>  
      <div>
          <input placeholder="Привод: любой" name="" list="drive_unit"/>
              <datalist id="drive_unit">
                  <option value="Задний"></option>
                  <option value="Передний"></option>
                  <option value="Полный"></option>
              </datalist>
      </div> 
      </div>
      </div>
      <br/>
      <div className="buttons">
          <button type="submit" class="show">Показать</button>                
          <button type="reset" class="clear">Очистить</button>                 
      </div>
  </form>
  <div>
          {items.filter(item => item.nameMark.toLowerCase().includes(searchValue.toLowerCase())).map((obj)=>(
            <Card 
            nameMark={obj.nameMark} 
            infoAbout={obj.infoAbout}
            infoAbout2={obj.infoAbout2}
            price={obj.price} 
            imageUrl={obj.imageUrl} 
            mileage={obj.mileage}
            year={obj.year}
            telephone={obj.telephone}
            city={obj.city} />
          ))}
       </div>
       </div>;
      
  }
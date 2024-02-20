import React, { useState } from "react";

import NavBarSpeed from '../../NavBarSpeed/NavBarSpeed';
import SpeedImg from '../../../images/speed.jpg'

function SpeedTask () {

  const [isTemaVisible, setIsTemaVisible] = useState(false)
  const [isTaskVisible, setIsTtaskVisible] = useState(false)

  function handleButtonTema() {
    setIsTemaVisible(true)
  }

  function handleButtonTask() {
    setIsTtaskVisible(true)
  }

  return (
    <div>
      
      
      <div className="speed">
        <NavBarSpeed />
        <div className="speed__content">
          <h1> Скорость </h1>
          <h3> Главной величиной, которая характеризует равномерное движение, является скорость.
            Скорость определяет как быстро изменяются координаты тела, то есть как быстро движется тело.
          </h3>
          
          <div className="speed__description">
            <button className="speed__button_isvisible" onClick={handleButtonTema}>Определение</button>
            <p className={`speed__text ${isTemaVisible ? "speed__text_isvisible" : ""
              }`}>Скоростью прямолинейного равномерного движения называют быстроту перемещения тела</p>
            <img className={`speed__image ${isTemaVisible ? "speed__image_isvisible" : ""
              }`} src={SpeedImg} alt="Велик" />
          </div>
          <button className={`speed__button ${isTemaVisible ? "speed__button_isvisible" : ""
            }`} onClick={handleButtonTask}>Дальше</button>
<p className={`speed__text ${isTaskVisible ? "speed__text_isvisible" : ""
              }`}>Скорость Измеряют в различных единицах</p>
              <button className={`speed__button ${isTaskVisible ? "speed__button_isvisible" : ""
            }`} onClick={handleButtonTask}>Задача</button>
        </div>
        
      </div>
    </div>
  )
}

export default SpeedTask;
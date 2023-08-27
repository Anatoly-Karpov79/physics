import React, { useState } from "react";
import './Speed.css'
import NavBarSpeed from "../NavBarSpeed/NavBarSpeed";
import velik from '../../images/img22.png'
import card from '../../images/task1.jpg'

import { allquestions } from "../Quiz/Questions";


function Speed() {
  const [isTemaVisible, setIsTemaVisible] = useState(false)
  const [isTaskVisible, setIsTtaskVisible] = useState(false)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(true)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [nextButtonDisable, setNextButtonDisable] = useState(true)

  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const { questions } = allquestions
  const { question, choices, correctAnswer } = questions[activeQuestion]


  const onClickNext = () => {

    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,

        }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1, setNextButtonDisable: false }
    )
    setNextButtonDisable(false)
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

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
          <h1 className="speed__title"> Равномерное прямолинейное движение </h1>

          <div className="speed__description">
            <button className="speed__button_isvisible" onClick={handleButtonTema}>Определение</button>
            <p className={`speed__text ${isTemaVisible ? "speed__text_isvisible" : ""
              }`}>Если тело за равные промежутки
              времени проходит одинаковое расстояние,
              то оно движется равномерно и прямолинейно</p>
            <img className={`speed__image ${isTemaVisible ? "speed__image_isvisible" : ""
              }`} src={velik} alt="Велик" />

          </div>
          <button className={`speed__button ${isTemaVisible ? "speed__button_isvisible" : ""
            }`} onClick={handleButtonTask}>Задача</button>

          <div className={`speed__task ${isTaskVisible ? "speed__task_isvisible" : ""
            }`}>
            <img className={`speed__task ${isTaskVisible ? "speed__task_isvisible" : ""
              }`} src={card} alt="картинка" />
            <div className="quiz-container">
              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex-right">
                <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                  Проверить
                </button>
                <button onClick={onClickNext} disabled={nextButtonDisable}>
                  Дальше
                </button>
              </div>



            </div>




          </div>

        </div>
        <div className="result">
          <h3>Result</h3>
          {/* <p>
            Total Question: <span>{questions.length}</span>
          </p> */}
          {/* <p>
            Total Score:<span> {result.score}</span>
          </p> */}
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Speed;
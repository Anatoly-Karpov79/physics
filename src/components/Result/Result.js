import './Result.css'
import { useEffect, useState } from 'react';

function Result(  ) {

    const result = localStorage.getItem('result');
    const [newResult, setNewResult] = useState([])

    const checkResult = () => {
console.log('Нажали проверить')
    }
    useEffect(() => {
        checkResult()
        setNewResult(result);
        console.log(result)
    
      }, [result]);
 
    // setResult((prev) =>
    //   selectedAnswer
    //     ? {
    //       ...prev,
          
    //       correctAnswers: prev.correctAnswers + 1,

    //     }
    //     : { ...prev, wrongAnswers: prev.wrongAnswers + 1, setNextButtonDisable: false }
    // )

//localStorage.setItem('result', JSON.stringify(query));

    return (
        <div className="result">
            <h3>Result</h3>
            <p>
            Правильные ответы:<span> {result}</span>
          </p>
          <p>
            Ошибки:<span> {result}</span>
          </p>
        </div>
    )
}

export default Result;
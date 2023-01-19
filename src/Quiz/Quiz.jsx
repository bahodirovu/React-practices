import React, { useState } from "react";
import "./quiz.css";
import Result from "./Result";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function QuizGame({ step, question, onClickVariants }) {
  const progresBar = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="quiz_container">
        <div className="progress_line">
          <div
            style={{ width: `${progresBar}%` }}
            className="progress__inner"
          ></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) => (
            <li
              onClick={() => {
                onClickVariants(index);
              }}
              key={text}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const onClickVariants = (i) => {
    setStep(step + 1);
    if (i === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <>
      <div className="quiz_body">
        {step !== questions.length ? (
          <QuizGame
            step={step}
            question={question}
            onClickVariants={onClickVariants}
          />
        ) : (
          <Result correct={correct} />
        )}
      </div>
    </>
  );
}

export default Quiz;

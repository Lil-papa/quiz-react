import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './index.css'



const questions = [
  {
    title: 'What is love?',
    variants: ["baby don't hurt me", "don't hurt me", "no more"],
    correct: 0,
  },
  {
    title: 'How many limbs does an octocat have?',
    variants: ['four', 'eight', 'what is octocat?'],
    correct: 1,
  },
  {
    title: 'Why did you become a developer?',
    variants: [
      "'cause it's fun",
      'just to show off',
      'i love pain',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png" />
      <h2>You guessed {correct} out of {questions.length}</h2>
      <a href="/">
      <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round(step / questions.length * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
         <Game step={step} question={question} onClickVariant={onClickVariant} /> 
        ) : ( 
          <Result correct={correct} /> 
        )}  
    </div>
  );
}

export default App;

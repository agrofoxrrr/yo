import React from 'react';
import './App.css'

const questions = [
  {
    title: 'Какой мой любимый цвет?',
    variants: ['розовый', 'фиолетовый', 'оранжевый','зеленый',],
    correct: 0,
  },
  {
    title: 'Мой любимая сладость...',
    variants: ['батончик баунти', 'скитлс', 'темный шоколад','маршмеллоу'],
    correct: 1,
  },
  {
    title: 'Моя любимая компьютерная игра...',
    variants: [
      'геншин импакт',
      'хонкай стар реил',
      'дота 2',
      'фазмофобия',

    ],
    correct: 1,
  },
  {
    title: 'Мой любимый персонаж из Отеля Хазбин?',
    variants: [
      'Энджел Даст',
      'Аластор',
      'Адам',
      'Сэра',
      'Вокс',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        {
          correct === 0 ? 
          (<button>смирись,ты ➡ 🤡</button>):
          correct !== questions.length ?
          (<button>пытайся еще</button>):
          (<button>опять показать свое превосходство</button>)
        }
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const progress = Math.round(step / questions.length * 100); 
  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
  const [step, SetStep] = React.useState(0);
  const [correct, SetCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => 
  {
    SetStep(step + 1);
    if (question.correct === index){
      SetCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        (<Game step={step} question={question} onClickVariant={onClickVariant}/>): 
        (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;
import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "Qual o desses animes não é feito pelo trigger?",
    answerOptions: [
      { answerText: "Panty & Stocking", isCorrect: true },
      { answerText: "Inou Battle wa", isCorrect: false },
      { answerText: "Kill la Kill", isCorrect: false },
      { answerText: "Little Witch academia", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qual Desses animes vou dirigido por Hosoda Mamoru?",
    answerOptions: [
      { answerText: "Summer Wars", isCorrect: true },
      { answerText: "Jojo no Kimyou na Bouken", isCorrect: false },
      { answerText: "Death Note", isCorrect: false },
      { answerText: "Shigatsu wa kimi no Uso", isCorrect: false },
    ],
  },
  {
    questionText: "Quais desses animes não possui musicas cantadas pela LiSA?",
    answerOptions: [
      { answerText: "Naruto", isCorrect: true },
      { answerText: "SAO", isCorrect: false },
      { answerText: "Kimetsu", isCorrect: false },
      { answerText: "Fate", isCorrect: false },
    ],
  },
  {
    questionText: "Qual desses diretores já recebeu um oscar?",
    answerOptions: [
      { answerText: "Hayao Miyazaki", isCorrect: true },
      { answerText: "satoshi Kon", isCorrect: false },
      { answerText: "Hosoda Mamoru", isCorrect: false },
      { answerText: "Makoto shinkai", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
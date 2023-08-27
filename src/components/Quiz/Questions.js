export const allquestions = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'На рисунке показаны примеры различных движений. Какое из них можно отнести к прямолинейному равномерному движению?',
        choices: ['А. Спуск лыжника с горы', 'Б. Спуск на эскалаторе в метро', 'В. Старт космической ракеты', 'Г. Движение гоночной машины'],
      //  type: 'MCQs',
        correctAnswer: 'Б. Спуск на эскалаторе в метро',
        multiple:true,
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
    ],
  }
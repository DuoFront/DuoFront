const quizData = [
    {
        question: 'Qual a tag para paragráfo?',
        a: '<p>',
        b: '<paragrafo>',
        c: '<article>',
        d: '<pr>',
        correct: 'a'
    },
    {
        question: 'Qual a tag para lista ordenada?',
        a: '<ul>',
        b: '<ol>',
        c: '<dl>',
        d: '<li>',
        correct: 'b'
    },
    {
        question: 'Qual a tag para formulário?',
        a: '<formulario>',
        b: '<f>',
        c: '<form>',
        d: '<fieldiset>',
        correct: 'c'
    },
    {
        question: 'Qual a tag para tabela?',
        a: '<t>',
        b: '<td>',
        c: '<tb>',
        d: '<table>',
        correct: 'd'
    },
    {
        question: 'Qual a tag para imagens?',
        a: '<img>',
        b: '<image>',
        c: '<pic>',
        d: '<picture>',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz')
const answersEls = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const subBtn = document.getElementById('sub')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEL.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected(){
    let answer = undefined

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
         answer = answerEl.id;
        }
    })

    return answer
}

function deselectAnswers(){

    answersEls.forEach((answerEl) => {
         answerEl.checked = false
    })
}

subBtn.addEventListener('click', () => {

    const answer = getSelected()
    console.log(answer)
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            if(score<3){
                document.location.href = 'http://www.example.com'
                quiz.innerHTML = `<h2 class="quiz-container-title"> Sua pontuação foi: ${score}</h2><p class="score">Nossa sugestão é que você treine um pouco mais! Nunca desista!</p><button onclick="location.reload()" class=" quiz-container-btn btnScore">Refazer</button>`
            } else if (score>=3 && score<=4) {
                quiz.innerHTML = `<h2 class="quiz-container-title"> Sua pontuação foi: ${score}</h2><p class="score">Você foi muito bem! Continue assim!</p><button onclick="location.reload()" class=" quiz-container-btn btnScore">Refazer</button><a class=" quiz-container-btn btnScore" href="../pages/cursoCSS/aula1.html">Ir para CSS</a>`
            } else {
                quiz.innerHTML = `<h2 class="quiz-container-title"> Sua pontuação foi: ${score}</h2><p class="score">Você foi nota 10! Parabéns!!</p><img class="imgScore" src="../../img/cursoHTML/trofeu.png" alt="trofeu"><div class="btnScore-container"><button onclick="location.reload()" class=" quiz-container-btn btnScore">Refazer</button><a class=" quiz-container-btn btnScore" href="../pages/cursoCSS/aula1.html">Ir para CSS</a></div>`
            }
        }
    }

    loadQuiz()
})
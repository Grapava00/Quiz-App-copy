const startButton=document.getElementById("start-btn");
const nextButton=document.getElementById("next-btn");
const questionContainerElement=document.getElementById('question-container');

const questionElement=document.getElementById('question');
const answerButtonsElement=document.getElementById ('answer-buttons')


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click',startGame)
                                    
nextButton.addEventListener('click',()=>{
 currentQuestionIndex ++
  setNextQuestion()
})


function startGame(){
    startButton.classList.add("hide")
    shuffledQuestions=questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer=>{
    const button=document.createElement('button')
    button.innerText=answer.text
    button.classList.add('btn')
    if(answer.correct){
    button.dataset.correct=answer.correct
 }
 button.addEventListener('click',selectAnswer)
 answerButtonsElement.appendChild(button)

})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
   answerButtonsElement.removeChild
  (answerButtonsElement.firstChild)
}
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct) 
    })
    if(shuffledQuestions.length>currentQuestionIndex+1){
  nextButton.classList.remove('hide')
}else{
  startButton.innerText='Restart'
  startButton.classList.remove('hide')
}
}

function setStatusClass(element,correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
 }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions= [
    {
        question:'რომელ სამეფოებთან ბრძოლაში განადგურდა ასურეთის სახელმწიფო ძვ.წ. VII საუკუნეში? ?',
        answers : [
            {text : 'მიდიისა და ბაბილონის ', correct:true},
            {text : 'ბაბილონისა და ეგვიპტის ', correct: false},
            {text : 'ეგვიპტისა და ხეთების  ', correct: false},
            {text : ' ხეთებისა და მიდიის ', correct: false},
        ]
    },
     {
        question:'რომელ ქალაქში მდებარეობდა ყველაზე ცნობილი სამისნო ძველ საბერძნეთში ?',
        answers : [
            {text : 'დელფოსში  ', correct:true},
            {text : 'სპარტაში ', correct: false},
            {text : 'მილეთში   ', correct: false},
            {text : ' კორინთოში ', correct: false},
        ]
    },
    {
        question:'ვის ეკუთვნის ცნობა, რომ ქართლში „მეფეებს სხამენ გვარში მახლობლობისა და ასაკის მიხედვით უხუცესს“? ',
        answers : [
            {text : 'პოლიბიოსს   ', correct:false},
            {text : 'სტრაბონს ', correct: true},
            {text : 'ჰეროდოტეს  ', correct: false},
            {text : '  ქსენოფონტეს  ', correct: false},
        ]
    },
      {
        question:'ვინ იყო ფარსმან II ქველის თანამედროვე რომაელი იმპერატორი? ',
        answers : [
            {text : 'ავგუსტუსი    ', correct:false},
            {text : 'ანტონიუს პიუსი ', correct: true},
            {text : 'ვესპასიანე   ', correct: false},
            {text : ' მარკუს ავრელიუსი  ', correct: false},
        ]
    },
      {
        question:'რა იყო სასანიანთა ირანის სახელმწიფო რელიგია?  ',
        answers : [
            {text : 'ბუდიზმი ', correct:false},
            {text : 'ისლამი', correct: false},
            {text : 'ზოროასტრიზმი',correct: true},
            {text : ' მითრაიზმი  ', correct: false},
        ]
    },
    {
        question:' სხვა მიზეზებთან ერთად, რამ განაპირობა ქართლის დიდაზნაურთა ანუ ერისთავთა ნაწილის ირანის შაჰის მხარეზე გადასვლა VI საუკუნეში? ',
        answers : [
            {text : 'ერთობლივი ლაშქრობებისას მოპოვებული ალაფის განაწილების პირობამ', correct:false},
            {text : 'საგვარეულო ციხე-კოშკების აგების ნებართვამ' , correct: false},
            {text : 'რელიგიის თავისუფლად არჩევის უფლებამ ',correct: false},
            {text : 'მიწების მემკვიდრეობით გადაცემის წინადადებამ   ', correct: true},
        ]
    },
    {
        question:'რომელი მეფის მოღვაწეობაა აღწერილი თხზულებაში „ისტორიანი და აზმანი შარავანდედთანი“?  ',
        answers : [
            {text : 'ბაგრატ III-ის ', correct:false},
            {text : 'დავით აღმაშენებლის ' , correct: false},
            {text : 'თამარ მეფის  ',correct: true},
            {text : 'გიორგი V-ის ', correct: false},
        ]
    },
]
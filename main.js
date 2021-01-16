import Request from './components/Request.js';
import UI from './components/UI.js';
import Verification from './components/Verification.js'

//Array of answers and Form
let correctAnswers = [];
let totalQuestionsValue = 0;
const form = document.querySelector('#form-questions');
// Get Categories
Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))

//Get Questions
form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) { 
                UI.printQuestions(data.results)
                correctAnswers = [...Verification.getAnswers(data.results)]; 
                console.log(correctAnswers)   
                totalQuestionsValue = Verification.getTotalQuestions()
                console.log(totalQuestionsValue)
            } else {
                UI.printEmpty()
            } 
            console.log(data.results)
        })
});

//Check Results
const checkForm = document.querySelector('#check');
checkForm.addEventListener('submit', () => {
    Verification.CheckResults(correctAnswers,totalQuestionsValue)
})
class UI {
    static printCategories(categories) {
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }

    static printQuestions(questions) {
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        questions.forEach((question) => {
            container.innerHTML += `<div class="col-md-4 mt-4">
                                        <div class="card h-100">
                                            <div class="card-body">
                                               ${question.question}
                                               ${this.printAnswers(question)}
                                            </div>
                                        </div>
                                    </div>`;
        })
        container.innerHTML +=`
        <div class="container mt-5">
            <div class="row justify-content-center mb-5">
                <button class="btn btn-primary">
                Check👉🐱‍🏍
                </button>
            </div>
        </div>
        `
    }

    static printAnswers(element){
        let correctAnsw = element.correct_answer;
        let inctArrayOfAns = element.incorrect_answers;
        let arrayOfAnswers = [...inctArrayOfAns]
        arrayOfAnswers.splice(Math.floor(Math.random() * 4), 0, correctAnsw)
        let optionsInQuestion = '';

        arrayOfAnswers.forEach(answer => {
            optionsInQuestion += `
            <div class="radio mt-3">
                <label><input class="radiobtns" value="${answer}" type="radio" name="${element.question}">${answer}</label>
            </div>
            `
        })

        return optionsInQuestion;
    }

    static printEmpty(){
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        let html = `
        <div class="container mt-5">
            <div row justify-content-center>
                    <div class="card h-100">
                        <div id="this-card" class="card-body animate__animated animate__bounce animate__repeat-">
                        <h4 class="text-center">No hay suficientes preguntas, lo siento 🤷‍♀️😢</h4>
                        </div>
                    </div>
            </div>    
        </div>
        `;
        return container.innerHTML = html
    }

    static printCongrats(){
        alert("Congrats, all is good!")
    }

    static printYouAreWrong(counter, totalQuestions){
        alert(`To bad, you have ${counter} / ${totalQuestions}`)
    }
}

export default UI
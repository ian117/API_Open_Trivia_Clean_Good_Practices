import UI from "./UI.js";

class Verification {
    static getAnswers(results){
        const answers = []
        results.forEach(result => {
            answers.push(result.correct_answer)
        });
        return answers
    }

    static CheckResults(arrayDeAnswers,totalQuestions){ 
        let counter = 0;
        let inputsBtns = [...document.querySelectorAll(".radiobtns:checked")].map(element => element.value)
        
        for(let i = 0; i < arrayDeAnswers.length; i++){
            let txt = document.createElement("textarea");
            txt.innerHTML = arrayDeAnswers[i];
            let value = txt.value;
            arrayDeAnswers.splice(i, 1, value)
            txt.remove()
        }
        
        for(let i = 0; i < arrayDeAnswers.length; i++){
            if(arrayDeAnswers[i] == inputsBtns[i]){
                counter += 1
            }
        }
        
        if(counter == totalQuestions){
            UI.printCongrats()
        } else {
            UI.printYouAreWrong(counter, totalQuestions)
        }
        
    }

    static getTotalQuestions(){
        const totalValue = document.getElementById('total-questions').value
        return totalValue
    }
}

export default Verification
let questions = [
    {
        "question": "Wie heißt der höchste Berg der Welt?",
        "answer_1": "K2",
        "answer_2": "Zugspitze",
        "answer_3": "M3",
        "answer_4": "Mount Everest",
        "right_answer": "answer_4"
    },

    {
        "question": "Für was ist www die Abkürzung?",
        "answer_1": "World, Wide, Web",
        "answer_2": "What, Was, Wood",
        "answer_3": "Wet, Wet, Wet",
        "answer_4": "We Will Walk",
        "right_answer": "answer_1"
    }

];

let currentQuestion = 0;
let countRightAnswers = 0;



function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion +1 >= questions.length){   // Change Button Text at last Question to "Ergebnis anzeigen" 
        document.getElementById('next-Button').innerHTML = 'Ergebnis anzeigen';
    }

    if (currentQuestion >= questions.length){ 
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display : none';
        document.getElementById('background').style = 'display : none'
        document.getElementById('sumQuestions').innerHTML = questions.length;
        document.getElementById('rightAnswers').innerHTML = countRightAnswers;

    } else {
    let question = questions[currentQuestion];

    document.getElementById("questionText").innerHTML = question['question'];

    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
    document.getElementById("current-question").innerHTML = currentQuestion + 1;
    }
}

function answer(userAnswer) {
    let question = questions[currentQuestion];
    let rightAnswer = question['right_answer'];



    if (rightAnswer == userAnswer) {
        document.getElementById(userAnswer).parentNode.classList.add('bg-success');
        
        const canvas = document.querySelector('#confetti');
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        countRightAnswers ++;
    }
    
    else {
        document.getElementById(userAnswer).parentNode.classList.add('bg-danger');
        setTimeout(() => {
            document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
          }, "1 second");
        

    }
    document.getElementById('next-Button').disabled = false;
}

function nextQuestion(){
    document.getElementById('next-Button').disabled = true;    
    currentQuestion++;
    resetAnswerButtons()
    showQuestion();
    
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

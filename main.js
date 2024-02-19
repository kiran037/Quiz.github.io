const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'PHP',
        'd': 'C++',
        'correct': 'a'
    },

    {
        'que': 'What is the Capital of Turkey?',
        'a': 'Antalya',
        'b': 'İstanbul',
        'c': 'T',
        'd': 'İzmir',
        'correct': 'c'
    },

    {
        'que': 'What is the National Bird of India?',
        'a': 'Eagle',
        'b': 'Peacock',
        'c': 'Narendra Modi',
        'd': 'Sparrow',
        'correct': 'c'
    },

    {
        'que': 'What does CSS stands for?',
        'a': 'Hyper Text Markup',
        'b': 'Cascading Style sheet',
        'c': 'Jason Object Notation',
        'd': 'Avengers Assamble',
        'correct': 'b'
    }


]

let index = 0;
let total = questions.length
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputes = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }


    resetTo()
    const data = questions[index]
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputes[0].nextElementSibling.innerText = data.a;
    optionInputes[1].nextElementSibling.innerText = data.b;
    optionInputes[2].nextElementSibling.innerText = data.c;
    optionInputes[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputes.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const resetTo = () => {
    optionInputes.forEach(
        (input) => {
            input.checked = false 
        }
    )

}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center; color:red;">
        <h3>The Quiz has been Ended</h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}

loadQuestion();
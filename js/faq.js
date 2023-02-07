"use strict"

const questions = document.querySelectorAll(".question");

// show/hide description of question in FAQ section
questions.forEach((question, index) => {
    const button = question.querySelector('.expand-more');
    button.addEventListener("click", () => {
        question.classList.toggle("open");

        const description = question.children[1];
        if (question.classList.contains("open")) {
            //show description of question
            description.style.height = `${description.scrollHeight}px`;
        } else {
            //hide description of question
            description.style.height = '';
        }
        closeQuestion(index);
    });
});

function closeQuestion(indexOpened) {
    questions.forEach((question, index) => {
        if (index !== indexOpened) {
            //remove class 'open' of question
            question.classList.remove("open");

            //hide description of question
            const q_content = question.children[1];
            q_content.style.height = '0px';
        }
    });
}

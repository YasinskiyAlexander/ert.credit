"use strict"

window.addEventListener("scroll", () => {
    const headerWrapper = document.querySelector(".header-nav");
    headerWrapper.classList.toggle("sticky", window.scrollY > 15);

})

const hamburgers = document.querySelectorAll(".hamburger");

hamburgers.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        document.body.classList.toggle("menu-open");
    });
});

//Sign Up modal
const signup = document.querySelector('.signup');
const modalSignUp = document.querySelector('.modal-signUp');
const signUpButton = document.querySelector('.signUp-control');

signup.addEventListener('click', OpenSignUp);
signUpButton.addEventListener('click', OpenSignUp);
function OpenSignUp() {
    modalSignUp.classList.toggle("open");
    document.body.classList.toggle("hidden");
}
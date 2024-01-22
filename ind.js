const singinbtnlink =document.querySelector('.signinbtn-link');
const singupbtnlink =document.querySelector('.signupbtn-link');
const wrapper =document.querySelector('.wrapper');

singupbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});


singinbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
const form = document.querySelector('.form-container form');
const submitMessage = document.querySelector('.submit-message');
const submitMessageState = document.querySelector('.submit-message .submit-message-state');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let inputChecked = document.querySelectorAll('form input:checked').length;
    if(inputChecked > 0 ) {
        submitMessageState.innerHTML = inputChecked;
        document.querySelector('.form-container').classList.toggle('hide');
        submitMessage.classList.toggle('hide');
        setTimeout(() => {
            submitMessage.classList.add('show');
        }, 0);
    }
});
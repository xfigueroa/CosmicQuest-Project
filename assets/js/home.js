
const faqsOpen = document.getElementById('faqs-open');
const modalfaqsContaier = document.getElementById('modal-faqs-contaier');
const faqsClose = document.getElementById('faqs-close');

faqsOpen.addEventListener('click',() =>{
    modalfaqsContaier.classList.add('active')
});
faqsClose.addEventListener('click',() =>{
    modalfaqsContaier.classList.remove('active')
});






function toggleAnswer(index) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach((answer, i) => {
        if (i === index) {
            answer.classList.toggle('show');
        } else {
            answer.classList.remove('show');
        }
    });
}
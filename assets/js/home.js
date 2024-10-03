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
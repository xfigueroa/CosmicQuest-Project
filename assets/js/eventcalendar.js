function toggleAnswer(index) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach((answer, i) => {
        if (i === index) {
            answer.classList.toggle('show');
        } else {
            answer.classList.remove('show');
        }
    });
}; 


function toggleModal(index) {
    const modals = document.querySelectorAll('.modalContainer');
    modals.forEach((modalContainer, i) => {
        if (i === index) {
            modalContainer.classList.add('active');
        } else {
            modalContainer.classList.remove('active');
        }
    });
}


function closeModal(index) {
    const modals = document.querySelectorAll('.modalContainer');
    modals.forEach((modalContainer, i) => {
        if (i === index) {
            modalContainer.classList.toggle('active');
        } else {
            modalContainer.classList.remove('active');
        }
    });
}

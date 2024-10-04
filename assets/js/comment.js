// --------------------------- Open FAQs Modal ----------
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
// -------------------------- Open Form Comment Modal -----------------

document.addEventListener('DOMContentLoaded', () => {
    const leaveCommentButton = document.getElementById('leave-comment');
    const commentModal = document.getElementById('comment-modal');
    const closeModalButton = document.querySelector('.modal-close');

    // Show the modal when the "Leave a comment" button is clicked
    leaveCommentButton.addEventListener('click', () => {
        commentModal.classList.add('is-active');
    });

    // Hide the modal when the "Close" button is clicked
    closeModalButton.addEventListener('click', () => {
        commentModal.classList.remove('is-active');
    });

    // Optional: Hide the modal when clicking outside the modal content
    commentModal.addEventListener('click', (event) => {
        if (event.target === commentModal) {
            commentModal.classList.remove('is-active');
        }
    });
});

// ---------------------------- Save Form Input ----------
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentBox = document.querySelector('.comment-box');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.style.color = 'red'; 
    commentForm.appendChild(errorMessage);

   
    loadComments();

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const userName = document.querySelector('input[placeholder="Username"]').value.trim();
        const title = document.querySelector('input[placeholder="Title"]').value.trim();
        const comment = document.getElementById('comment').value.trim();

        
        errorMessage.textContent = '';

      
        if (!userName || !title || !comment) {
            errorMessage.textContent = 'All fields are required.';
            return; 
        }

        // ----------------------Create object
        const commentData = {
            userName,
            title,
            comment
        };

        // Save comment to local storage
        saveComment(commentData);

        // clean Form
        commentForm.reset();

        // Load comments again to update the display
        loadComments();
    });

    function saveComment(commentData) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentData);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function loadComments() {
        commentBox.innerHTML = ''; // Clear the comment box
        const comments = JSON.parse(localStorage.getItem('comments')) || [];

        comments.forEach(({ userName, title, comment }) => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <h4>${title}</h4>
                <div class="comment-input">
                <p>${comment}</p>
                </div>
                <h3>by: ${userName}</h3>
            `;
            commentBox.appendChild(commentDiv);
        });
    }
});
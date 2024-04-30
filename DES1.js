function submitReview() {
    var nameInput = document.getElementById('name');
    var reviewText = document.getElementById('review').value;
    
    var name = nameInput.value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (reviewText.trim() === '') {
        alert('Please enter a review.');
        return;
    }

    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();

    var reviewList = document.getElementById('review-list');

    var reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `
        <p class="review-text">${reviewText}</p>
        <p class="author">${name}</p>
        <p class="date">${formattedDate}</p>
    `;

    reviewList.prepend(reviewItem);

    // Clear input fields after submission
    nameInput.value = '';
    document.getElementById('review').value = '';
}

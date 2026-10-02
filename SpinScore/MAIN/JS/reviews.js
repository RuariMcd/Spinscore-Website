const form = document.getElementById('reviewForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.querySelector('input').value.trim();
  const rating = document.getElementById('rating').value;
  const review = form.querySelector('textarea').value.trim();

  if (name.length < 2) {
    errorMsg.textContent = 'Please enter a valid name.';
    return;
  }

  if (rating === '') {
    errorMsg.textContent = 'Please select a star rating.';
    return;
  }

  if (review.length < 10) {
    errorMsg.textContent = 'Review must be at least 10 characters.';
    return;
  }

  errorMsg.textContent = 'Review submitted successfully!';
  alert('Thank you for submitting your review!');
  form.reset();
});

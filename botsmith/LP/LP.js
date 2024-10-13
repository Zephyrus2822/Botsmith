// Toggle Dark Mode functionality
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Example event listener for the primary button (optional)
document.querySelector('.primary-button').addEventListener('click', function() {
    alert('You clicked "Start building, it\'s free!"');
});

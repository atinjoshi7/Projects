// Get all the notes wrappers
const notesWrappers = document.querySelectorAll('.notes-wrapper');

// Function to navigate to notes.html
function goToNotes(subject) {
    // Here, you can customize the URL if needed
    window.location.href = `notes.html?subject=${subject}`;
}

// Add event listeners to each notes wrapper
notesWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const subject = wrapper.getAttribute('data-subject');
        goToNotes(subject);
    });
});

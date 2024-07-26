document.getElementById('submissionForm').addEventListener('submit', function(event) {
    // Get all input fields
    const inputs = this.querySelectorAll('input[type="text"], input[type="email"]');
    
    // Loop through each input field and update the value attribute with the current value
    inputs.forEach(input => {
        input.setAttribute('value', input.value);
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
    
    // Reset previous error messages
    clearErrors();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate inputs
    let isValid = true;
    
    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name can only contain letters and spaces';
        isValid = false;
    }
    
    // Email validation
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message should be at least 10 characters long';
        isValid = false;
    }
    
    // If all validations pass
    if (isValid) {
        // In a real application, you would send the data to a server here
        // For this demo, we'll just show a success message
        document.getElementById('successMessage').textContent = 'Thank you for your message! We will get back to you soon.';
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset the form
        document.getElementById('contactForm').reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }
});

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

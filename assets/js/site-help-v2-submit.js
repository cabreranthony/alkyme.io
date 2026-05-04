/**
 * Help Center V2 - Support Request Form Handler
 * Handles form validation and submission
 */

(function() {
  'use strict';

  // Initialize form functionality
  function initSupportForm() {
    var form = document.getElementById('support-form');
    if (!form) return;

    // Form elements
    var nameInput = document.getElementById('support-name');
    var emailInput = document.getElementById('support-email');
    var categorySelect = document.getElementById('support-category');
    var subjectInput = document.getElementById('support-subject');
    var messageInput = document.getElementById('support-message');
    var submitButton = form.querySelector('button[type="submit"]');
    var successMessage = document.getElementById('support-success');
    var errorMessage = document.getElementById('support-error');

    // Validation patterns
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Form submission handler
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous messages
      hideMessages();
      clearFieldErrors();

      // Validate form
      var isValid = true;

      if (!nameInput.value.trim()) {
        showFieldError(nameInput, 'Please enter your name');
        isValid = false;
      }

      if (!emailInput.value.trim()) {
        showFieldError(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }

      if (!categorySelect.value) {
        showFieldError(categorySelect, 'Please select a topic');
        isValid = false;
      }

      if (!subjectInput.value.trim()) {
        showFieldError(subjectInput, 'Please enter a subject');
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        showFieldError(messageInput, 'Please describe your request');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        showFieldError(messageInput, 'Please provide more detail (at least 10 characters)');
        isValid = false;
      }

      if (!isValid) {
        // Focus first error
        var firstError = form.querySelector('.form-input--error');
        if (firstError) {
          firstError.focus();
        }
        return;
      }

      // Submit form
      submitForm({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        category: categorySelect.value,
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        type: 'support'
      });
    });

    // Real-time validation on blur
    nameInput.addEventListener('blur', function() {
      if (this.value.trim() && this.classList.contains('form-input--error')) {
        clearFieldError(this);
      }
    });

    emailInput.addEventListener('blur', function() {
      if (this.value.trim() && emailPattern.test(this.value.trim()) && this.classList.contains('form-input--error')) {
        clearFieldError(this);
      }
    });

    categorySelect.addEventListener('change', function() {
      if (this.value && this.classList.contains('form-input--error')) {
        clearFieldError(this);
      }
    });

    subjectInput.addEventListener('blur', function() {
      if (this.value.trim() && this.classList.contains('form-input--error')) {
        clearFieldError(this);
      }
    });

    messageInput.addEventListener('blur', function() {
      if (this.value.trim().length >= 10 && this.classList.contains('form-input--error')) {
        clearFieldError(this);
      }
    });
  }

  // Submit form data
  function submitForm(data) {
    var form = document.getElementById('support-form');
    var submitButton = form.querySelector('button[type="submit"]');
    var successMessage = document.getElementById('support-success');
    var errorMessage = document.getElementById('support-error');

    // Disable submit button
    submitButton.disabled = true;
    var originalText = submitButton.querySelector('span').textContent;
    submitButton.querySelector('span').textContent = 'Submitting...';

    // Simulate form submission (replace with actual endpoint)
    // In production, this would POST to your backend API
    setTimeout(function() {
      // Simulate success
      var success = true; // Change to false to test error state

      if (success) {
        // Show success message
        successMessage.hidden = false;
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Reset form
        form.reset();

        // Re-enable button
        submitButton.disabled = false;
        submitButton.querySelector('span').textContent = originalText;

        // Hide success message after 10 seconds
        setTimeout(function() {
          successMessage.hidden = true;
        }, 10000);
      } else {
        // Show error message
        errorMessage.hidden = false;
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Re-enable button
        submitButton.disabled = false;
        submitButton.querySelector('span').textContent = originalText;
      }
    }, 1500);

    // Production implementation example:
    /*
    fetch('/api/support', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function(result) {
      successMessage.hidden = false;
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      form.reset();
      submitButton.disabled = false;
      submitButton.querySelector('span').textContent = originalText;
    })
    .catch(function(error) {
      console.error('Error:', error);
      errorMessage.hidden = false;
      errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      submitButton.disabled = false;
      submitButton.querySelector('span').textContent = originalText;
    });
    */
  }

  // Show field error
  function showFieldError(input, message) {
    input.classList.add('form-input--error');
    input.setAttribute('aria-invalid', 'true');

    var errorDiv = input.parentElement.querySelector('.form-error');
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.hidden = false;
    }
  }

  // Clear field error
  function clearFieldError(input) {
    input.classList.remove('form-input--error');
    input.removeAttribute('aria-invalid');

    var errorDiv = input.parentElement.querySelector('.form-error');
    if (errorDiv) {
      errorDiv.textContent = '';
      errorDiv.hidden = true;
    }
  }

  // Clear all field errors
  function clearFieldErrors() {
    var errorInputs = document.querySelectorAll('.form-input--error');
    errorInputs.forEach(function(input) {
      clearFieldError(input);
    });
  }

  // Hide success/error messages
  function hideMessages() {
    var successMessage = document.getElementById('support-success');
    var errorMessage = document.getElementById('support-error');

    if (successMessage) {
      successMessage.hidden = true;
    }
    if (errorMessage) {
      errorMessage.hidden = true;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSupportForm);
  } else {
    initSupportForm();
  }

})();

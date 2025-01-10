document.addEventListener("DOMContentLoaded", function () {
  const applyForm = document.getElementById('applyForm');

  // Handle form submission
  document.getElementById('applyForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    // Gather form data
    const formData = {
      contractorName: document.getElementById('name').value,
      email: document.getElementById('email').value,
      budget: document.getElementById('budget').value,
      duration: document.getElementById('duration').value,
      proposalText: document.getElementById('message').value,
    };
  
    try {
      // Send data to the backend
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message); // Success message
        document.getElementById('applyForm').reset(); // Reset the form
      } else {
        alert(result.message); // Error message
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred. Please try again later.');
    }
  });
  

  // Form validation
  function validateForm() {
      const contractorName = document.getElementById('name').value.trim();
      const proposalText = document.getElementById('message').value.trim();
      const budget = document.getElementById('budget').value.trim();
      const duration = document.getElementById('duration').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!contractorName || !proposalText || !budget || !duration || !email) {
          return false;
      }
      return true;
  }
});

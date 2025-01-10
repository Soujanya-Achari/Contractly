// Example: Fetch user profile when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');  // Get the JWT token from localStorage
  
    if (token) {
      fetch('/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`  // Send the token as part of the request header
        }
      })
      .then(response => response.json())
      .then(data => {
        // Check if the data contains name and role
        if (data.name && data.role) {
          document.getElementById('user-name').textContent = `Welcome, ${data.name}`;
          
          // Change content based on role
          if (data.role === 'client') {
            document.querySelector('.cta-button').innerText = 'Start Project';
          } else if (data.role === 'contractor') {
            document.querySelector('.cta-button').innerText = 'Manage Projects';
          } else if (data.role === 'worker') {
            document.querySelector('.cta-button').innerText = 'View Tasks';
          }
        } else {
          console.error('User data not found in the response');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    } else {
      // If no token, redirect to login page
      window.location.href = '/login.html';
    }
  });
  
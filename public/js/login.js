document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Retrieve form inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Basic validation
  if (!email || !password || !role) {
    alert("Please fill out all fields.");
    return;
  }

  // Send a POST request to the backend for login verification
  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, role }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Server response:", data); // For debugging

      if (data.message === "Login successful!") {
        // Redirect to success.html first
        window.location.href = "success.html";

        // After a delay, redirect based on user role
        setTimeout(() => {
          if (role === "contractor") {
            window.location.href = "contractor.html";
          } else if (role === "client") {
            window.location.href = "client.html";
          } else if (role === "worker") {
            window.location.href = "worker.html";
          }
        }, 2000); // Delay of 2 seconds
      } else {
        // Show error message if login fails
        alert(data.message || "Invalid credentials. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again later.");
    });
});

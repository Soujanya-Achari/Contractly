document.addEventListener("DOMContentLoaded", async function() {
  try {
    const response = await fetch("/api/projects");
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    console.log("Fetched projects:", data);

    // Render the projects
    renderProject(data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    alert("Error occurred while fetching projects.");
  }
});

function renderProject(projects) {
  const projectContainer = document.getElementById('projectsContainer');
  if (projects.length === 0) {
    projectContainer.innerHTML = '<p>No projects found.</p>';
    return;
  }

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-card');

    // Format the deadline as MM/DD/YYYY
    const deadline = new Date(project.deadline);
    const formattedDeadline = deadline.toLocaleDateString();

    projectElement.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p>Category: ${project.category}</p>
      <p>Deadline: ${formattedDeadline}</p>
      <p>Budget: $${project.budget}</p>
      <div class="actions">
        <button class="apply-button" onclick="applyToProject('${project._id}')">Apply</button>
      </div>
    `;

    projectContainer.appendChild(projectElement);
  });
}

// Function to handle the Apply button click

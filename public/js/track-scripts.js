window.onload = async function() {
  try {
    // Initially, load all projects
    const projects = await fetchProjects();
    renderProjects(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

// Fetch all projects or projects based on a search term
async function fetchProjects(searchQuery = '') {
  try {
    const response = await fetch(`/api/projects?search=${searchQuery}`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Render the projects dynamically on the page
function renderProjects(projects) {
  const projectsContainer = document.getElementById('projects-list');
  
  if (!projects || projects.length === 0) {
    projectsContainer.innerHTML = '<p>No projects found.</p>';
    return;
  }

  projectsContainer.innerHTML = projects.map(project => `
    <div class="project-card" onclick="viewProjectDetails('${project._id}')">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p>Category: ${project.category}</p>
      <p>Budget: ${project.budget}</p>
      <p>Deadline: ${project.deadline}</p>
      <p>Status: ${project.status}</p>
    </div>
  `).join('');
}

// Function to search projects
async function searchProjects() {
  const searchQuery = document.getElementById('search-input').value.trim();
  try {
    const projects = await fetchProjects(searchQuery);
    renderProjects(projects);
  } catch (error) {
    console.error('Error searching projects:', error);
  }
}

// Function to view detailed project info in a popup
function viewProjectDetails(projectId) {
  // Fetch the project details from the server
  fetch(`/api/projects/${projectId}`)
    .then(response => response.json())
    .then(project => {
      const projectDetails = document.getElementById('project-details');
      projectDetails.innerHTML = `
        <h3>${project.title}</h3>
        <p><strong>Category:</strong> ${project.category}</p>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Budget:</strong> ${project.budget}</p>
        <p><strong>Deadline:</strong> ${project.deadline}</p>
        <p><strong>Status:</strong> ${project.status}</p>
      `;
      // Show the popup
      document.getElementById('project-popup').style.display = 'flex';
    })
    .catch(error => console.error('Error fetching project details:', error));
}

// Function to close the popup
function closePopup() {
  document.getElementById('project-popup').style.display = 'none';
}

// Function to go back to the previous page
function goBack() {
  window.history.back();
}

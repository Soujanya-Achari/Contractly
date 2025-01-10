function openEditModal() {
    document.getElementById('edit-section').style.display = 'flex';
}

function closeEditModal() {
    document.getElementById('edit-section').style.display = 'none';
}

function saveProfile() {
    const username = document.getElementById('usernameInput').value;
    const bio = document.getElementById('bioInput').value;

    if (username) document.getElementById('username').textContent = username;
    if (bio) document.getElementById('bio').textContent = bio;

    closeEditModal();
}

function uploadProfilePicture() {
    document.getElementById('fileInput').click();
}

function updateProfilePicture() {
    const file = document.getElementById('fileInput').files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById('profileImage').src = e.target.result;
    };

    if (file) reader.readAsDataURL(file);
}
function goBack() {
    window.history.back();
}

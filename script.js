document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
    this.reset(); // Clear the form
});

// Dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Modal functionality
function openModal(project) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");

    if (project === 'project1') {
        modalTitle.innerText = "Project Title 1";
        modalDescription.innerText = "Detailed description of Project 1: A responsive design for a client’s website.";
        modalLink.href = "https://link-to-project1.com";
    } else if (project === 'project2') {
        modalTitle.innerText = "Project Title 2";
        modalDescription.innerText = "Detailed description of Project 2: A task tracking application built with React and Node.js.";
        modalLink.href = "https://link-to-project2.com";
    } else if (project === 'project3') {
        modalTitle.innerText = "Project Title 3";
        modalDescription.innerText = "Detailed description of Project 3: A portfolio website showcasing my work.";
        modalLink.href = "https://link-to-project3.com";
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Initialize AOS
AOS.init();

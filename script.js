document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.classList.toggle("btn-secondary");
    this.classList.toggle("btn-light");
    
    // Toggle icons
    const sunIcon = this.querySelector('.fa-sun');
    const moonIcon = this.querySelector('.fa-moon');
    
    if (document.body.classList.contains("dark-mode")) {
        this.innerHTML = '<i class="fas fa-moon"></i>'; // Change to moon icon
    } else {
        this.innerHTML = '<i class="fas fa-sun"></i>'; // Change to sun icon
    }
});

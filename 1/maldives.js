document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        section.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.03)";
            this.style.transition = "0.3s";
        });
        section.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    const suggestions = [
        "Best Maldives Beaches",
        "Luxury Resorts in Maldives",
        "Romantic Getaways Maldives",
        "Underwater Dining Maldives"
    ];

    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search Maldives experiences...");
    searchInput.style.padding = "10px";
    searchInput.style.width = "80%";
    searchInput.style.margin = "20px auto";
    searchInput.style.border = "2px solid #0077b6";
    searchInput.style.borderRadius = "5px";

    document.body.insertBefore(searchInput, document.body.firstChild);

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        let found = false;
        
        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(query)) {
                section.style.display = "block";
                found = true;
            } else {
                section.style.display = "none";
            }
        });
        
        if (!found) {
            alert("No matching content found!");
        }
    });
});
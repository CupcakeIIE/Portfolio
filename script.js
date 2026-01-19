// Navigation header
document.querySelectorAll("[data-link]").forEach(item => {
    item.addEventListener("click", () => {
        const id = item.getAttribute("data-link");
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
});

// Gestion des projets
const contents = document.querySelectorAll(".content");

document.querySelectorAll("[data-target]").forEach(item => {
    item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");

        contents.forEach(c => c.classList.add("hidden"));

        const target = document.getElementById(targetId);
        if (target) {
            target.classList.remove("hidden");
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

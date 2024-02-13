const listItems = document.querySelectorAll(".slider-list li");

listItems.forEach(item => {
    item.addEventListener("click", () => {
        let isActive = item.classList.contains("active");

        listItems.forEach((el) => {
            el.classList.remove("active")
        });

        if (isActive) item.classList.remove("active");
        else item.classList.add("active");
    });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("closeside");
});
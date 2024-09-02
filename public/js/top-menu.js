const menuIcon = document.getElementById('dropdown-top');
const navLinks = document.getElementById('nav-links');
const testberichteToggle = document.getElementById('testberichte');
// const testberichteSubmenu = document.getElementById('testberichte-menu');
const testberichteSubmenu = document.querySelector("#testberichte-menu")


menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }
});

testberichteToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (testberichteSubmenu.style.display === "none") {
        testberichteSubmenu.style.display = "block";
    } else {
        testberichteSubmenu.style.display = "none";
    }
});
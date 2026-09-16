loadInclude("sidebar", "includes/sidebar.html", highlightActive);

// Highlights the sidebar item matching the current route
function highlightActive() {
  document.querySelectorAll("#sidebar li").forEach(li => li.classList.remove("active"));

  let path = window.location.hash.split("/").pop() || "dashboard.html";
  path = path.toLowerCase();

  if (path === "index.html") path = "dashboard.html";

  document.querySelectorAll("#sidebar li a").forEach(a => {
    const href = a.getAttribute("href");
    if (href && href.toLowerCase() === path) {
      a.closest("li").classList.add("active");
    }
  });
}

// Closes the mobile menu
function closeMenu() {
  document.body.classList.remove("menu-open");
}

// Highlights the active item and closes the mobile menu on route changes
window.addEventListener("hashchange", () => {
  highlightActive();
  closeMenu();
});

// Closes the mobile menu when a link is clicked outside the sidebar
document.addEventListener("click", e => {
  if (!e.target.closest("#menu_btn") && !e.target.closest("aside"))
    closeMenu();
});


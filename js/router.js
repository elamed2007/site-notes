// Finds the route for a path (query string ignored, case-insensitive, falls back to home)
function matchRoute(path) {
    const clean = path.split('?')[0];
    return routes[clean] || routes[clean.toLowerCase()] || routes['/'];
}

// Loads the current page, its CSS and its page scripts
async function handleRoute() {

    if (window.location.hash)
        path = window.location.hash.slice(1) || '/';
    else path = "/"

    // Find the matching route or fall back to home
    const route = matchRoute(path);

    // A) Swap the page CSS in the <head>
    const styleTag = document.getElementById('page-style');
    styleTag.href = route.css;

    // B) Fetch and inject the page HTML
    try {
        loadInclude("app",route.html)
        loadPageScripts(route.script);
    } catch (error) {
        console.error('Error loading page:', error);
    }
}

// Loads the page scripts one by one (the HTML is already injected, so they can bind to it)
function loadPageScripts(srcs) {
    if (!srcs || srcs.length === 0) return;

    let index = 0;
    function next() {
        if (index >= srcs.length) return;
        const script = document.createElement('script');
        script.src = srcs[index++];
        script.onload = next;
        document.body.appendChild(script);
    }
    next();
}

// Navigates to a route without reloading the page
function navigate(path) {
    if (window.location.hash.slice(1) === path)
        handleRoute();
    else
        window.location.hash = path;
}

// Intercepts link clicks to registered routes (SPA navigation)
document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || !link.href) return;

    // Same-page fragment links (e.g. the login page switches) are handled by their own onclick
    if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        return;
    }

    // On file:// the pathname is the full drive path, so match by file name
    const fileName = '/' + link.pathname.split('/').pop() + link.search;
    if (matchRoute(fileName) !== routes['/'] || fileName === '/') {
        event.preventDefault();
        navigate(fileName);
    }
});

window.addEventListener('hashchange', handleRoute);
document.addEventListener('DOMContentLoaded', handleRoute);

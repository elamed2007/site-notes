// Routes map: URL path -> { html view, page css, page scripts }
// (case-insensitive lookups are handled by router.js, so only lowercase keys are kept)
const routes = {
    '/':                         { html: 'views/dashboard.html',     css: 'css/pages/dashboard.css',     script: [] },
    '/login.html':               { html: 'views/login.html',         css: 'css/pages/login.css',         script: ['js/views/login.js'] },
    '/dashboard.html':           { html: 'views/dashboard.html',     css: 'css/pages/dashboard.css',     script: [] },
    '/chats.html':               { html: 'views/chats.html',         css: 'css/pages/chats.css',         script: ['js/views/chats.js'] },
    '/document.html':            { html: 'views/document.html',      css: 'css/pages/document.css',      script: ['js/views/document.js'] },
    '/notes.html':               { html: 'views/notes.html',         css: 'css/pages/notes.css',         script: ['js/views/grades.js', 'js/views/notes.js'] },
    '/notifications.html':       { html: 'views/notifications.html', css: 'css/pages/notification.css',  script: [] },
    '/profile.html':             { html: 'views/profile.html',       css: 'css/pages/profile.css',       script: [] },
    '/reclamation.html':         { html: 'views/reclamation.html',   css: 'css/pages/reclamation.css',   script: [] }
};

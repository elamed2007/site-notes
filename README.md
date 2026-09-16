# Site OFPPT

## Live Demo
Visit Website: https://elamed2007.github.io/site-notes/

## Technologies
- HTML5
- CSS3
- JavaScript

Single-page application for OFPPT students: grades (notes), points, chat, reclamations and document requests. Pure HTML / CSS / JavaScript (no frameworks, no build step).

## Login

- Username: `stagaire`
- Password: `stagaire123`

## Structure

```
index.html            SPA shell (header, sidebar, footer, router mount)
views/                one HTML file per page (login, dashboard, notes, chats, ...)
includes/             shell fragments injected by loadInclude()
js/router.js          hash router (#/view) + global link handling
js/routes.js          route map
js/utils.js           loadInclude() only
js/views/             per-page logic (login.js, notes.js, chats.js, ...)
js/shell/             shell behavior (header, sidebar, footer)
css/global.css        shell, header, sidebar, shared form controls
css/pages/            per-page styles
img/                  static images
```

## Pages

| Route        | Page                    |
| ------------ | ----------------------- |
| #/           | redirects to login      |
| #/login      | login + forgot password |
| #/dashboard  | cards, progress, points |
| #/notes      | grades / points tables  |
| #/chats      | group chat              |
| #/reclamation| complaint form          |
| #/document   | document request form   |
| #/notification| notifications          |
| #/profile    | profile                 |

## Notes

- Pages are switched client-side; the demo data lives in `js/views/grades.js`.
- Header and sidebar are responsive: off-canvas menu on screens <= 768px, fixed rail on desktop.
- `README.md` replaced the removed `docs/change.txt` history file.

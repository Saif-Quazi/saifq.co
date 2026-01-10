# Saifq.co

Personal portfolio website showcasing projects and professional work.

## Stack

- **HTML5**, **CSS3**, **Vanilla JavaScript**
- **Netlify** - Hosting and deployment

## Project Structure

```
saifq.co/
├── public/
│   ├── assets/         # Images and project assets
│   ├── client/         # JavaScript files
│   ├── styles/         # CSS stylesheets
│   ├── index.html      # Home page
│   ├── projects.html   # Projects page
│   ├── contact.html    # Contact page
│   └── 404.html        # Error page
├── README.md           # Project README
├── service-worker.js   # PWA service worker
├── netlify.toml        # Redirect config
├── package.json        # Dependencies and scripts
└── .gitignore          # Git ignore file
```

## Development

Install dependencies:
```bash
npm install
```

Run local development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## Deployment

Automatically deployed to Netlify when changes are pushed to the main branch.

Custom redirects configured in `netlify.toml` for clean URLs.

---

Built by [Saif Quazi](https://saifq.co)
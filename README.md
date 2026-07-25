# Md. Shahidul Islam Tashin — Portfolio

A PhD-application portfolio site built with **React + Vite**, **React Router**,
**Tailwind CSS**, and **DaisyUI**, with custom light/dark themes (`scanLight`
/ `scanDark`) inspired by radiology-viewer "region of interest" annotations —
a nod to the CT-scan explainable AI research described in the site.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Edit your content

Everything text-based (name, bio, education, publications, links) lives in
one file:

```
src/data/profile.js
```

Change the values there and every page updates automatically. Pages
themselves are in `src/pages/`, shared UI in `src/components/`.

## 3. Deploy to `shahidul-tashin.github.io`

This is a **user/organization page**, so it must live in a repo named
exactly `shahidul-tashin.github.io`, and the site is served from that repo
directly (no subpath).

### Steps

1. Create a GitHub repo named `shahidul-tashin.github.io`.
2. Push this project's code to the `main` branch of that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/shahidul-tashin/shahidul-tashin.github.io.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   choose **GitHub Actions**.
4. That's it — the included workflow at
   `.github/workflows/deploy.yml` will build the site with `npm run build`
   and publish the `dist/` output automatically on every push to `main`.
5. After the first successful run (check the **Actions** tab), your site is
   live at **https://shahidul-tashin.github.io**.

### Routing note

The app uses `HashRouter` (URLs like `/#/research`) instead of `BrowserRouter`
specifically so it works out of the box on GitHub Pages without extra
`404.html` redirect tricks. If you'd rather have clean URLs
(`/research` instead of `/#/research`), swap `HashRouter` for `BrowserRouter`
in `src/App.jsx` and add a `404.html` that redirects to `index.html` (the
standard GitHub Pages SPA workaround) — ask if you'd like this set up.

## 4. Customize the theme

Colors for both themes are defined in `tailwind.config.js` under
`daisyui.themes` (`scanLight`, `scanDark`). Fonts (`Space Grotesk` for
headings, `Inter` for body, `JetBrains Mono` for labels/data) are loaded in
`src/index.css`.

## Tech stack

- [Vite](https://vitejs.dev/) + React 19
- [React Router](https://reactrouter.com/) (`HashRouter`)
- [Tailwind CSS](https://tailwindcss.com/) 3
- [DaisyUI](https://daisyui.com/) 4

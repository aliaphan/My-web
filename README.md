# Alia Phan · Portfolio

A one-page portfolio for recruiters, built with **React + TypeScript** and **Vite**, hosted on **Vercel**.
Every push to the `main` branch on GitHub deploys the live site automatically.

```
website/
├── index.html               ← page title, description, fonts
├── public/
│   ├── images/              ← photo, flowers, CFA team photo
│   └── files/               ← résumé, project PDFs, certificates
├── src/
│   ├── data/content.tsx     ← ALL the words on the site (edit this most)
│   ├── data/types.ts        ← the shape of that content
│   ├── components/          ← one file per section (Hero, About, Projects…) + its CSS
│   ├── hooks/               ← fade-in on scroll, menu underline
│   └── styles/tokens.css    ← colors and fonts
├── vercel.json              ← tells Vercel how to build the site
└── package.json             ← project scripts and libraries
```

---

## 1. One-time setup on your Mac

Node.js is already installed (through **nvm**). If a fresh Terminal says `command not found: npm`, close and reopen Terminal.

1. Open **Terminal**.
2. Go to the project folder:
   ```bash
   cd ~/Desktop/"My web"/website
   ```
3. Install the project's libraries (only needed once, or after `package.json` changes):
   ```bash
   npm install
   ```

## 2. See the site while you edit

```bash
npm run dev
```

Open <http://localhost:5173>. The page updates as soon as you save a file. Press **Ctrl + C** in Terminal to stop.

## 3. Common edits

| I want to… | Do this |
|---|---|
| Change a sentence | Open `src/data/content.tsx`, find the sentence (**⌘ + F**), edit the text between the quotes |
| Make words bold or accent-colored | In `content.tsx`, wrap them in `<strong>…</strong>` (bold) or `<em>…</em>` (italic, accent color) |
| Add a project | In `content.tsx`, copy one whole `{ kind: …, title: …, … },` block in `projects`, paste it below, and change the text. Put its PDF in `public/files/` and set `link.href` to `'/files/Your-File.pdf'` |
| Show the ASC 606 project | In `content.tsx`, search `ASC 606`, write a real result, and delete the `hidden: true,` line |
| Update my résumé | Replace `public/files/Alia-Phan-Resume.pdf` with a new PDF of the **same name** |
| Change the photo | Replace `public/images/alia-phan.jpg` with a new photo of the **same name** |
| Change colors | Edit the values at the top of `src/styles/tokens.css` |

Numbers on Experience and Projects cards (01, 02…) are added automatically.

## 4. Check before you publish

```bash
npm run build
```

If it ends with `✓ built`, the site is ready. If it shows red errors, read the file name and line number it points to. Usually the cause is a missing quote or comma in `content.tsx`.

Other checks: `npm run lint` (code style) and `npm run typecheck` (TypeScript).

## 5. Publish changes

Using **GitHub Desktop**: write a short summary (e.g. `Update résumé`), click **Commit to main**, then **Push origin**.

Using **Terminal**:

```bash
git add .
git commit -m "Update résumé"
git push
```

Vercel builds and publishes the new version in about a minute. You can watch it on your project's **Deployments** tab at <https://vercel.com>.

> ⚠️ Don't upload files by dragging them onto github.com. That flattens the folders and breaks the site (that was the cause of the old missing-CSS bug).

## Vercel settings (already done, for reference)

- **Framework**: Vite (set in `vercel.json`, so the dashboard setting doesn't matter)
- **Build command**: `npm run build` · **Output folder**: `dist`
- **Settings → Deployment Protection → Vercel Authentication**: **Disabled**, so recruiters can open the site without a Vercel login.

## Good to know

- **Everything in this repository is public**, including the PDFs in `public/files/`. Your résumé PDF includes your phone number.
- Fonts (Libre Baskerville for headings, Jost for text) load from Google Fonts.

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Đưa lên GitHub Pages (2026-09-20)

- Repo GitHub: `ductran146/portfolio-tran-minh-duc` (Public). Site ở **`https://ductran146.github.io/portfolio-tran-minh-duc/`** — nằm trong thư mục con nên `astro.config.mjs` có `base: "/portfolio-tran-minh-duc"` và MỌI đường dẫn tuyệt đối tự viết phải đi qua `withBase()`/`localePath()` (src/i18n/ui.ts). Dev server vì thế chạy ở `http://localhost:4321/portfolio-tran-minh-duc/`.
- Workflow `.github/workflows/deploy.yml` tự build (`withastro/action`, `SKIP_KEYSTATIC=1`) và phát `dist/` mỗi khi push lên `main`. Trong Settings → Pages chọn *Source: GitHub Actions*.
- `astro.config.mjs` có `site` + `base`; đổi domain riêng sau này = đặt `site` mới và `base: "/"` (rồi mọi link tự về gốc nhờ withBase).
- Không commit `node_modules/`, `dist/`, tư liệu gốc `images/ project/ logo/` (đã có trong `.gitignore`).

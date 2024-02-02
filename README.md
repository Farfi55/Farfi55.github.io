# Personal Website

This is my **personal static website**, built using [SvelteKit](https://kit.svelte.dev/), [TailwindCSS](https://tailwindcss.com/) and [mdsvex](https://mdsvex.pngwn.io), and deployed on [GitHub Pages](https://pages.github.com/).

It features:

- [Home](https://farfi55.github.io/) page with a brief introduction and a sneak peek of my projects
- [Projects](https://farfi55.github.io/projects) page with a list of my projects
- [Blog](https://farfi55.github.io/blog) page, built using markdown files with frontmatter and MDX, Complete with syntax highlighting and RSS feed support.
- [Contact](https://farfi55.github.io/contact) page with a contact form using [formspree](https://formspree.io/) and social media links

It supports light and dark mode, and is fully responsive.

## Showcase

![Landing page](/static/assets/projects/personal-website/cover.png)

## Get started

clone the repository:

```bash
git clone https://github.com/Farfi55/Farfi55.github.io.git
cd Farfi55.github.io
```

Then install the dependencies with your package manager of choice (`npm install` or `yarn`, for example).

```bash
# install dependencies
npm install

# start the development server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create an optimised version of the app:

```bash
# build the app
npm run build

# preview the app in a local server
npm run preview -- --open
```

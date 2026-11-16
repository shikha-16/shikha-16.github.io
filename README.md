# shikhabhat.github.io

My personal site: ML researcher, software engineer, singer.

Plain HTML, CSS and JavaScript. No build step, so GitHub Pages serves it as is.

```
index.html          ~/home         intro, terminal, right now
experiences.html    ~/experiences  research, jobs by company, projects, papers
off-the-clock.html  ~/off-the-clock  sing, read, travel
gallery.html        redirects to off-the-clock.html (old link)
blogs.html          ~/blogs        blog cards with filters
blog/*.html         one page per blog post
contact.html        ~/contact      friendship bracelet + links
404.html            page-not-found
assets/css/style.css   all styles (colors are variables at the top)
assets/js/main.js      all interactions + gallery and blog lists
images/gallery/        put your photos here
```

## Publish it

1. Sign in to GitHub and create a new **public** repository.
   - For the address `https://<username>.github.io`, the repository must be named exactly `<username>.github.io`.
   - Your account is `shikha-16`, so that would give you `shikha-16.github.io`. To get `shikhabhat.github.io`, the GitHub username itself must be `shikhabhat` (rename the account under Settings → Account, or use a new account).
2. On the new repo page, click **uploading an existing file**, drag in everything inside this folder (including the `assets` and `images` folders), and click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. Wait a minute or two, then open `https://<username>.github.io`.

## Add gallery photos

1. Put images in `images/gallery/` (JPG or PNG, around 800px wide is plenty).
2. In `assets/js/main.js`, find `GALLERY` at the top and set `img` for each one, for example:
   ```js
   { title: 'Singing at Google', caption: 'Bengaluru', img: 'images/gallery/google-stage.jpg' },
   ```
   You can add or remove items too.

## Edit content

- Bio, research, jobs, projects, papers: edit the text directly in the `.html` files.
- Blog post text: edit the post's file in `blog/` (for example `blog/music.html`).
- Blog cards (title, blurb, cover color): edit `BLOGS` at the top of `assets/js/main.js`.
- New post: copy any file in `blog/`, change the text, and add an entry to `BLOGS`.
- Colors: change the `--c1` to `--c6`, `--accent` and `--hl` values under `.site[data-look="color"]` (`--paper` and `--grid` are the light blue notebook background) near the top of `assets/css/style.css`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

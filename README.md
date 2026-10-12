# CV Portfolio

A static portfolio site that holds all your CV versions. No build step, so it deploys on Vercel as is.

## 1. Add your content
- Open `data.js` and replace the sample text with your own details.
- Each item in `cvs` is one CV version. Add as many as you need.
- Put your PDF files in the `cvs/` folder and match the names in `data.js`.

## 2. Preview locally (optional)
Open `index.html` in your browser, or run `npx serve` in this folder.

## 3. Deploy on Vercel

**Option A: through GitHub (recommended)**
1. Create a new GitHub repository and upload everything in this folder.
2. Go to https://vercel.com/new and import the repository.
3. Set Framework Preset to **Other**. Leave Build Command empty and Output Directory empty.
4. Click **Deploy**. Every future push to GitHub redeploys automatically.

**Option B: Vercel CLI**
```
npm i -g vercel
vercel        # follow the prompts, accept the defaults
vercel --prod
```

## Share one specific CV
Each CV has its own link, for example `https://your-site.vercel.app/#technical`.
The part after `#` is the `id` of that CV in `data.js`.

# 🚀 Deployment Guide

This project is optimized for deployment on **Vercel**, the creators of Next.js.

## ⚠️ Important Pre-requisite

The documentation content relies on assets extracted from the Design System source files. 
Since the source files (e.g., `stitch_design_system_inove_ai_v1 2`) reside locally on your machine and **NOT** in the git repository headers, you **CANNOT** run the extraction script during the build process on Vercel.

**You must generate the data locally and commit it.**

1.  **Run Extraction Locally:**
    ```bash
    npx tsx scripts/extract-all.ts
    ```
2.  **Verify Data:**
    Ensure `data/components.json`, `data/tokens.json`, `public/html/`, and `public/screenshots/` are populated.
3.  **Commit Generated Files:**
    Make sure your `.gitignore` **DOES NOT** exclude `data/*.json` or `public/screenshots`.
    ```bash
    git add data public
    git commit -m "chore: update design system assets"
    git push
    ```

## 🌍 Deploying to Vercel

1.  **Create a Vercel Account** at [vercel.com](https://vercel.com).
2.  **Install Vercel CLI** (Optional) or use the Dashboard.
    ```bash
    npm i -g vercel
    ```
3.  **Deploy via Command Line:**
    ```bash
    vercel
    ```
    Follow the prompts. Use default settings.

4.  **Deploy via Dashboard:**
    - Connect your Git repository (GitHub/GitLab/Bitbucket).
    - Import the `stitch-design-system-docs` project.
    - **Framework Preset:** Next.js
    - **Build Command:** `next build` (default)
    - **Output Directory:** `.next` (default)
    - Click **Deploy**.

## ⚙️ Environment Variables

No environment variables are strictly required for the public pages. 
However, if you add authentication or private data later, configure them in **Project Settings > Environment Variables**.

## 🔄 Updates

When the Design System source changes:
1.  Pull the new DS version locally.
2.  Run `npx tsx scripts/extract-all.ts`.
3.  Commit and Push.
4.  Vercel will auto-deploy the new docs.

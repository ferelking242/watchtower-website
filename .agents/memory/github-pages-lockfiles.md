---
name: GitHub Pages lockfiles
description: Publishing a Replit-generated npm lockfile to GitHub Actions.
---

When a site is pushed from Replit to GitHub Actions, make sure package-lock.json resolves packages through the public npm registry rather than a Replit-internal package firewall hostname.

**Why:** GitHub-hosted runners cannot resolve Replit-only registry URLs, so `npm ci` can stall or fail during the Pages build even when the local build passes.

**How to apply:** Before pushing, search the lockfile for `replit.local` or `package-firewall`; regenerate with the public npm registry or replace only those resolved URLs, then verify the Pages workflow reaches both build and deploy success.
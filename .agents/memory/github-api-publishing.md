---
name: GitHub API publishing
description: Durable fallback for publishing this site's commits when Git HTTPS rejects an otherwise valid GitHub PAT.
---

GitHub API authentication can succeed while the same PAT is rejected by Git HTTPS push for this repository. The reliable fallback is Git Data API publishing: create blobs for changed files, create a tree from the current branch tree, create a commit with the current remote commit as parent, then PATCH the branch ref without force.

**Why:** The repository's Git HTTPS endpoint rejected the configured PAT even though `GET /user` accepted it; the Git Data API successfully updated `main`.

**How to apply:** Preserve the remote parent when constructing the tree and ref update, avoid force-pushing, and never print or include the PAT in command output.

**Caveat (2026-10):** the default `GITHUB_TOKEN` in this environment is a read-only integration token (`ghu_…`, empty `x-oauth-scopes`, `POST /git/blobs` and `PUT /contents/…` both return `Resource not accessible by integration`). It can read the repo and see `permissions.push: true`, but it cannot write. Publishing requires a real user PAT with `repo` scope to be registered as a secret (e.g. `PAT`) so it is injected into the shell environment. `git push` over HTTPS is also rejected for this repo with that token. Without a write PAT, publish nothing and report the blocker rather than pretending the site was updated.
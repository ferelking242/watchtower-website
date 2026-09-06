---
name: GitHub API publishing
description: Durable fallback for publishing this site's commits when Git HTTPS rejects an otherwise valid GitHub PAT.
---

GitHub API authentication can succeed while the same PAT is rejected by Git HTTPS push for this repository. The reliable fallback is Git Data API publishing: create blobs for changed files, create a tree from the current branch tree, create a commit with the current remote commit as parent, then PATCH the branch ref without force.

**Why:** The repository's Git HTTPS endpoint rejected the configured PAT even though `GET /user` accepted it; the Git Data API successfully updated `main`.

**How to apply:** Preserve the remote parent when constructing the tree and ref update, avoid force-pushing, and never print or include the PAT in command output.
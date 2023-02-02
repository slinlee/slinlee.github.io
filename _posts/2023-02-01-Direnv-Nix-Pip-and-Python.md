---
layout: post
title: "Direnv Nix Pip and Python"
date: 2023-02-01
---

There are too many ways to manage installing Python dev environments, Python versions, and required packages.

Right now, since I'm on NixOS, I'm trying nix for direnv that installs `pip`. Then I use pip to install the requirements with:

```
  pip install -r requirements.txt --user
```

The `--user` makes it so it doesn't conflict with the nix store installed files which are read-only.

It's nice to have the proper env set up when entering a directory for project.

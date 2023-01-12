---
layout: post
title: "Blog Script"
date: "2023-1-11"
---

I like doing things from the command line and editing text in Helix Text Editor.

Helix Text Editor doesn't have 'vimwiki' functionality yet, so I made a small bash script that opens a markdown file with today's date, like `~/notes/2023-1-11.md`

If it exists already, it just opens the one that's there, which is great. From there, I can use Helix's file search or text search to skip around older entries. The markdown LSP support and syntax highlighting is built right in. I'm still waiting for softwrap though. lol.

After using this system for a few months, I thought it might be nice to have something similar to add blog posts.

Now to start a post, all I have to do is type `blog some-title` and it will start a markdown file pre-filled with a basic post template.

Here's the content of the script:

```bash
#!/bin/bash

TODAY=$(date +%F)
BLOG_PATH=~/blogposts/

if [ $# -eq 0 ]
  then
    FILE_NAME=$BLOG_PATH$TODAY.md
else
    FILE_NAME=$BLOG_PATH$TODAY-$1.md
fi

# Open the file if it exists already
if [ -f $FILE_NAME ]
  then
    echo "Opening existing blog post"

else
  # Create a new file from the template
  cp ${BLOG_PATH}template.md $FILE_NAME
  # Set the title
  sed -i "s/title: \"\"/title: \"$1\"/" $FILE_NAME
  # Set the date
  sed -i "s/date:/date: $TODAY/" $FILE_NAME
fi

(cd $BLOG_PATH && hx $FILE_NAME)
```

Updated: 12 Jan 2023 - The script fills in the metadata when creating a new post.

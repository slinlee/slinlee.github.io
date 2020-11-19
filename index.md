---
layout: default
title: Home
---

{% assign post = site.posts.first %}

<article class="post">
  <h1 class="post-title">{{ post.title }}</h1>
  <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date_to_string }}</time>
  {{ post.content }}
</article>

{% include allposts.html %}

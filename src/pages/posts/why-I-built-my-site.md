---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: 16 Jul 2022
title: Why I built my site, with Astro and Tailwind
description: A detailed description of why I built my site and why I chose Astro and Tailwind as its core technologies.
img: assets/images/blog/maksym-tymchyk-dJAJGO-6rXQ-unsplash.jpg
imgAlt: Picture of trees by Maksym Tymchyk
---

# {frontmatter.title}

All the code (and posts I write) are available on [GitHub](https://github.com/JasperDeLanghe/personal-site) for anyone to see.

## Backstory

I had just read *Show Your Work!* by Austin Kleon and was encouraged to enlarge my web presence.
So first I set out to "fix" my twitter profile, and by fix I mean I changed my handle and profile picture. I didn't actually post all that much, so no embarassing tweets to revisit.

With Twitter being more of a quick fire-and-forget type of medium, I also wanted something more lasting for larger bodies of text. And, seeing that I did not have a place to showcase my work as a developer aside from GitHub. A personal site would pose itself the perfect solution.

I also made a YouTube channel after the surge of inspiration by Austin Kleon's book, but that is a story for a different time.

## Choosing the stack

I saw the site as completely static, so that was one of the key features to keep in mind when choosing the technologies. I was already comfortable with Gatsby so that was definitely an option. But! I saw some tweets about a rather new static site generator called [Astro](https://astro.build/), so I set up a little sample project and found that it was really simple to use. Also, connecting to Netlify was a breeze.

Another thing I had to think about was using a CMS or not, but since I'm quite comfortable writing markdown I decided against it. This way I can just create a new file locally, push it to the GitHub repo and watch my post go live without any other hassle.

As for styling it was pretty straightforward that I didn't want to write hundreds of lines of CSS. So I brought in Tailwind, which plays really nice with Astro. Copy a couple of classes from some UI kit website, put them in constants and pass them to my elements. Easy.

## Design

I'm not really much of a designer, can you tell? For the design I looked at a lot of other personal websites and took ideas and inspiration from some of them.

## Time spent

It took me about 10-12 hours over the span of 4 days to build the entire site, write my 2 initial posts, wait for a bug in Astro to be fixed and push to production.
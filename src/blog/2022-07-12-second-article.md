---
title: Starting with Custom Properties in CSS
author: Hasmat Ali
image: /images/custom-properties.jpg
imageAlt: custom properties
description: Have you ever been in a situation where you have to repeat the css tags all over your style sheet in multiple places?
---

Have you ever been in a situation where you have to repeat the css tags all over your style sheet in multiple places? For example, you want to change the color of text and you have to copy and paste that color code all over your css file. The solution for this is by using custom properties. By declaring custom properties you can simply change one line of code and it applies that change all over your stylesheet. It helps DRY up your css that is Don't Repeat Yourself. It makes code easier to maintain.

<strong>How we use custom properties?</strong>

Custom properties are set using custom property notation. For e.g, --clr-primary: green; and are accessed using the var() function. For e.g, color: var(--clr-primary);

Custom property must begin with double hyphen(--) and it is written inside a ruleset, like so;

<img src="/images/code-first.png" alt="code image" class="article-code-image" />

In the above example, the scope of that custom property is limited within that selector only. To make it global, the best practice to define custom properties is by using :root pseudo class. But you can set it directly in your body or html selector also.

<img src="/images/code-second.png" alt="code image" class="article-code-image" />

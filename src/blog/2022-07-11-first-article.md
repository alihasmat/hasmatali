---
title: Getting started with Web Accessibility
author: Hasmat Ali
tags: featured
date: 2022-07-11
image: /images/accessibility.jpg
imageAlt: web accessibility
description: Accessibility in web development is really an important concept but it seems really to be a big topic and becomes ..
---

Accessibility in web development is really an important concept but it seems really to be a big topic and becomes little bit harder to get into when you are first into it. Just think about people who are visually impaired like color blindness, screen readers and people who uses keyboards only.

In terms of statistics, the World Health Organization estimates that "285 million people are estimated to be visually impaired worldwide: 39 million are blind and 246 million have low vision."

<strong>Best practices to solve this problem are listed down below:</strong>

<ul class="article-list" role="list">
    <li>Always use semantic HTML because it is designed for screen readers.</li>
    <li>Add alternative text in alt tags while using images.</li>
    <li>Use subtitles and closed captions in your videos and while using podcast, transcripts are important.</li>
    <li>Don’t make your text too much dense. Appropriate padding around button is highly encouraged. Make it bigger enough.</li>
    <li>Auto play videos and websites with loud music must be turned off.</li>
    <li>Animations can be really harmful to some people. So avoid using animations because it causes nausea and headache.</li>
</ul>

<strong>What if you didn’t use semantic html?</strong>

This problem can be solved using ARIA labels. ARIA stands for Accessible Reach Internet Application. It is basically a set of rules which can make non semantic elements to semantic elements. For example, you might have used div for your buttons. So in that case you can use aria-label. To understand this more, click the link below below.

Resource: <a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">Aria Label</a>

<strong>What if you have used a lot of animations in your website?</strong>

This problem can be solved using prefers-reduced-motion. The user of your website has full control to avoid animation in your website. How this works is, every operating system have reduced motion option in your display settings. If it is checked, you can simply add prefers-reduced-motion in your media query as below.

@media (prefers-reduced-motion: reduce) {
.wordArtRotation,
.ranbowWave,
.textFadeIn {
animation: none;
}
}
Resource: <a href="https://www.tatianamac.com/" target="_blank">Prefers-Reduced-Motion</a>

Other resources which will help you understand in detail about the accessibility of the website are:

<a href="https://happiful.com/what-is-the-spoon-theory/" target="_blank">Spoon Theory</a> |
<a href="https://www.a11yproject.com" target="_blank">A11y Project</a>
